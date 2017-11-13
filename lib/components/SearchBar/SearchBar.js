import React from 'react';

import './SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'

};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '', location: '', sortBy: 'best_match' };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption) {

    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(event) {

    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {

    this.setState({ location: event.target.value });
    event.preventDefault();
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  }

  renderSortByOptions() {

    return Object.keys(sortByOptions).map(sortByOption => {

      let sortByOptionValue = sortByOptions[sortByOption];
      return React.createElement(
        'li',
        { className: this.getSortByClass(sortByOptionValue), onClick: this.handleSortByChange.bind(this, sortByOptionValue), key: sortByOptionValue },
        ' ',
        sortByOption,
        ' '
      );
    });
  }
  render() {
    return React.createElement(
      'div',
      { className: 'SearchBar' },
      React.createElement(
        'div',
        { className: 'SearchBar-sort-options' },
        React.createElement(
          'ul',
          null,
          this.renderSortByOptions()
        )
      ),
      React.createElement(
        'div',
        { className: 'SearchBar-fields' },
        React.createElement('input', { placeholder: 'Search Businesses', onChange: this.handleTermChange }),
        React.createElement('input', { placeholder: 'Where?', onChange: this.handleLocationChange })
      ),
      React.createElement(
        'div',
        { className: 'SearchBar-submit', onClick: this.handleSearch },
        React.createElement(
          'a',
          null,
          'Lets Go'
        )
      )
    );
  }
};

export default SearchBar;