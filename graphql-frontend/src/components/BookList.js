import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooks } from '../queries/queries'

//components
import BookDetails from './BookDetails';

class BookList extends Component {
  state = {
    selected: null
  }
  
  listBooks = () => {
    let data = this.props.data

    if (data.loading) {
      return(<div>Loading books...</div>)
    } else {
      return data.books.map(book => {
        return(
          <li key={ book.id } onClick={e => { this.setState({ selected: book.id }) }}>{ book.name }</li>
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
        <BookDetails bookId={ this.state.selected }/>
      </div>
    );
  }
}

export default graphql(getBooks)(BookList);
