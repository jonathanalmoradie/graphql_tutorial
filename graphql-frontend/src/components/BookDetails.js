import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookDetail } from '../queries/queries';

class BookDetails extends Component {

  displayBookDetails = () => {
    const { book } = this.props.data

    if (book) {
      return(
        <div>
          <h2>{ book.name }</h2>
          <p><b>Author: </b>{ book.author.name }</p>
          <p><b>Genre: </b>{ book.genre }</p>
          <p>All books by this author:</p>
          <ul className='otherBooks'>
            {
              book.author.books.map(item => {
                return <li className='author-books' key={item.id}>{ item.name }</li>
              })
            }
          </ul>
        </div>
      )
    }
    return(
      <div>No book selected...</div>
    )
  }

  render() {
    return (
      <div id='book-details'>
        { this.displayBookDetails() }
      </div>
    );
  }
}

export default graphql(getBookDetail, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);
