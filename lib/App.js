import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Yelp from './util/Yelp.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      businesses: []

    };
    this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {

      this.setState({ businesses: businesses });
    });
  }

  render() {
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement(
        'h1',
        null,
        'ravenous'
      ),
      React.createElement(SearchBar, { searchYelp: this.searchYelp }),
      React.createElement(BusinessList, { businesses: businesses })
    );
  }
}

export default App;