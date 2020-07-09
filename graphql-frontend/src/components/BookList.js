import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooks = gql`
  {
    books {
      name
      id
    }
  }
`

class BookList extends Component {
  
  listBooks = () => {
    let data = this.props.data

    if (data.loading) {
      return(<div>Loading books...</div>)
    } else {
      return data.books.map(book => {
        return(
          <li key={ book.id }>{ book.name }</li>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <ul id='book-list'>
          { this.listBooks() }
        </ul>
      </div>
    );
  }
}

export default graphql(getBooks)(BookList);
