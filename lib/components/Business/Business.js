import React from 'react';

import './Business.css';

class Business extends React.Component {
  render() {

    return React.createElement(
      'div',
      { className: 'Business' },
      React.createElement(
        'div',
        { className: 'image-container' },
        React.createElement('img', { src: this.props.business.imageSrc, alt: '' })
      ),
      React.createElement(
        'h2',
        null,
        this.props.business.name
      ),
      React.createElement(
        'div',
        { className: 'Business-information' },
        React.createElement(
          'div',
          { className: 'Business-address' },
          React.createElement(
            'p',
            null,
            this.props.business.address
          ),
          React.createElement(
            'p',
            null,
            this.props.business.city
          ),
          React.createElement(
            'p',
            null,
            this.props.business.state,
            ' ',
            this.props.business.zipCode
          )
        ),
        React.createElement(
          'div',
          { className: 'Business-reviews' },
          React.createElement(
            'h3',
            null,
            this.props.business.category
          ),
          React.createElement(
            'h3',
            { className: 'rating' },
            this.props.business.rating
          ),
          React.createElement(
            'p',
            null,
            this.props.business.reviewCount,
            ' reviews'
          )
        )
      )
    );
  }

};
export default Business;