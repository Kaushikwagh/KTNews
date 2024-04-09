// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'


// export default class News extends Component {
//   static defaultProps = {
//     name: 'in',
//     pageSize: 8,
//     category: 'general',
//   }

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   }

//   // function for capital first letter
//   CapitalizeFirstLetter = (string)=>{
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   constructor(props) {
//     super(props);
//     console.log("Hello, I am constructor news");
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0 // Initialize totalResults in the state
//     };
//     document.title = `${this.CapitalizeFirstLetter(this.props.category)} - News`;
//  // adding category in titile
//   }
  
//   // What is async and await?
//   // What is componentDidMount?
//   async componentDidMount() {
//     this.setState({ loading: true }); // Set loading to true before making API call
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`; //API key
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults });
//   }

//   // promises **
//   // Function for handling previous click
//   HandlePrevClick = async () => {
//     console.log("Previous");
//     if (this.state.page > 1) {
//       this.setState({ loading: true }); // Set loading to true before making API call
//       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`; //API key
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       console.log(parsedData);
//       this.setState({
//         page: this.state.page - 1, 
//         articles: parsedData.articles,
//         loading: false // Set loading to false after data is fetched
//       });
//     }
//   }

//   // Function for handling next click
//   HandleNextClick = async () => {
//     console.log("Next");
//     if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
//       this.setState({ loading: true }); // Set loading to true before making API call
//       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`; //API key
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       console.log(parsedData);
//       this.setState({
//         page: this.state.page + 1,
//         articles: parsedData.articles,
//         loading: false // Set loading to false after data is fetched
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="container my-3">
//         <h2 className='text-center' style={{margin: '35px 0px',marginTop:'90px' }}>News - Top {this.CapitalizeFirstLetter(this.props.category)} Headlines</h2>
//         {this.state.loading && <Spinner />} {/* Show spinner when loading is true */}
//         <div className="row">
//           {this.state.articles.map((article, index) => (
//             <div className="col-md-4" key={index}>
//               <NewsItem
//                 title={article.title ? article.title : ""}
//                 description={article.description ? article.description.slice(0, 88) : ""}
//                 imageUrl={article.urlToImage}
//                 newsUrl={article.url}
//                 author={article.author}
//                 date={article.publishedAt}
//                 source={article.source.name}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePrevClick}>&larr; Previous</button>
//           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.HandleNextClick}> Next &rarr;</button>
//         </div>
//       </div>
//     );
//   }
// }

// --------------------------------

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
      articles: [], // Initialize articles as an empty array
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.CapitalizeFirstLetter(this.props.category)} - News`;
  }
  
  async componentDidMount() {
    await this.fetchNews();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category || prevProps.country !== this.props.country) {
      await this.fetchNews();
    }
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles || [], // Ensure articles is always an array
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

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>News - Top {this.CapitalizeFirstLetter(this.props.category)} Headlines</h2>
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
