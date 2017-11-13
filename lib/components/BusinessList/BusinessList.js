import React from 'react';

import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'BusinessList' },
      this.props.businesses.map(business => React.createElement(Business, { business: business, key: business.id }))
    );
  }
};
export default BusinessList;