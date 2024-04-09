import React, { Component } from 'react'

export default class NewsItem extends Component {


  render() {
    let {title,description, imageUrl, newsUrl, author, date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: '18rem'}}>
        <img src={!imageUrl?"https://cdn.mos.cms.futurecdn.net/Hz7EPiWi9k9ZVbjWdyHMeQ-1200-80.jpg":imageUrl} className="card-img-top" alt="..."/>
        {/* steps to write  */}
        {/* imageUrl ?? Https://cdn.mos…. */}
        {/* imageUrl ? imgUrl : https:://cdn */}
        
        {/* batches in card */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
        <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>

        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {date}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}
