import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="jumbotron">
              <h1 className="display-4">Welcome to KtNews!</h1>
              <p className="lead">Stay informed with the latest news across various categories.</p>
              <hr className="my-4" />
              <p>Choose a category below to explore:</p>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <Link to="/business" className="btn btn-primary btn-lg btn-block">Business</Link>
                </div>
                <div className="col-md-6 mb-4">
                  <Link to="/entertainment" className="btn btn-primary btn-lg btn-block">Entertainment</Link>
                </div>
                <div className="col-md-6 mb-4">
                  <Link to="/general" className="btn btn-primary btn-lg btn-block">General</Link>
                </div>
                <div className="col-md-6 mb-4">
                  <Link to="/health" className="btn btn-primary btn-lg btn-block">Health</Link>
                </div>
                <div className="col-md-6 mb-4">
                  <Link to="/science" className="btn btn-primary btn-lg btn-block">Science</Link>
                </div>
                <div className="col-md-6 mb-4">
                  <Link to="/sports" className="btn btn-primary btn-lg btn-block">Sports</Link>
                </div>
                <div className="col-md-6 mb-4">
                  <Link to="/technology" className="btn btn-primary btn-lg btn-block">Technology</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}