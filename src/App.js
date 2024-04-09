import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import All from './components/All'; // Import the All component
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress: 0
  };

  componentDidMount() {
    this.increaseProgress();
  }

  componentWillUnmount() {
    clearTimeout(this.progressTimer);
  }

  increaseProgress = () => {
    const interval = 10;
    const targetProgress = 100;
    const step = 1;
    let currentProgress = 0;

    this.progressTimer = setInterval(() => {
      currentProgress += step;
      if (currentProgress >= targetProgress) {
        clearInterval(this.progressTimer);
      }
      this.setState({ progress: currentProgress });
    }, interval);
  };

  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar color='#f11946' height={3} progress={this.state.progress} />
          <Switch>
            {/* default page open i can use redirect to  */}
            <Redirect exact from="/" to="/all" />
            {/* ---------------------------------------- */}
            <Route path='/all'>
              <All /> {/* Render the All component */}
            </Route>
            <Route path='/business'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='business' />
            </Route>
            <Route path='/entertainment'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='entertainment' />
            </Route>
            <Route path='/general'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='general' />
            </Route>
            <Route path='/health'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='health' />
            </Route>
            <Route path='/science'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='science' />
            </Route>
            <Route path='/sports'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='sports' />
            </Route>
            <Route path='/technology'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='technology' />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
