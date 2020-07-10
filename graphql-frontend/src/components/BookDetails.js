import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookDetail } from '../queries/queries';

class BookDetails extends Component {
  
  render() {
    return (
      <div id='book-details'>
        <p>Output book details here</p>
      </div>
    );
  }
}

export default graphql(getBookDetail)(BookDetails);
