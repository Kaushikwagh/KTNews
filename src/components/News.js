import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
  static defaultProps = {
    name: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired
  }

  CapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      searchTerm: '' 
    };
    document.title = `${this.CapitalizeFirstLetter(this.props.category)} - News`;
  }
  
  async componentDidMount() {
    await this.fetchNews();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.category !== this.props.category || 
      prevProps.country !== this.props.country ||
      prevState.searchTerm !== this.state.searchTerm 
    ) {
      await this.fetchNews();
    }
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    
   // search sortcut 
    if (this.state.searchTerm !== '') {
      url = `https://newsapi.org/v2/everything?q=${this.state.searchTerm}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    }

    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles || [], 
      loading: false,
      totalResults: parsedData.totalResults
    });
  }

  HandlePrevClick = async () => {
    if (this.state.page > 1) {
      this.setState({ loading: true });
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      const data = await fetch(url);
      const parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles || [],
        loading: false
      });
    }
  }

  HandleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState({ loading: true });
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      const data = await fetch(url);
      const parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles || [],
        loading: false
      });
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>News - Top {this.CapitalizeFirstLetter(this.props.category)} Headlines</h2>

        {/* search ka input  */}
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search for news..." 
            value={this.state.searchTerm} 
            onChange={this.handleSearch} 
          />
          <button className="btn btn-outline-secondary" type="button" onClick={this.fetchNews}>Search</button>
        </div>

        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title ? article.title : ""}
                description={article.description ? article.description.slice(0, 88) : ""}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
                source={article.source.name}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.HandleNextClick}> Next &rarr;</button>
        </div>
      </div>
    );
  }
}