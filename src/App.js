import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import All from './components/All'; 
import LoadingBar from 'react-top-loading-bar';



export default class App extends Component {
  state = {
    progress: 0,
    country: 'in', // default mera 'in' 
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

  // Country ka function 
  handleCountryChange = (country) => {
    this.setState({ country });
  };

  pageSize = 9;

  // Api key ko hide ke steps 
  // apiKey = process.env.REACT_APP_NEWS_API;
  apiKey = "51818d35daed4d1e823badfdba2ebd50";

  render() {
    return (
      <div>
        <Router>
          <NavBar onChangeCountry={this.handleCountryChange} />
          <LoadingBar color='#f11946' height={3} progress={this.state.progress} />
          <Switch>
            {/* default page open i can use redirect to  */}
            {/* best way of exact path  */}
            <Redirect exact from="/" to="/all" />
            {/* ---------------------------------------- */}
            <Route path='/all'>
              <All /> 
            </Route>
            <Route path='/business'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country={this.state.country} category='business' />
            </Route>
            <Route path='/entertainment'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country={this.state.country} category='entertainment' />
            </Route>
            <Route path='/general'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country={this.state.country} category='general' />
            </Route>
            <Route path='/health'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country={this.state.country} category='health' />
            </Route>
            <Route path='/science'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country={this.state.country} category='science' />
            </Route>
            <Route path='/sports'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country={this.state.country} category='sports' />
            </Route>
            <Route path='/technology'>
              <News pageSize={this.pageSize} apiKey={this.apiKey} country={this.state.country} category='technology' />
            </Route>
          </Switch> 
        </Router>
      </div>
    );
  }
}