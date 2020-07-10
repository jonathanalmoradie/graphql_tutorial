import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'redux';
import { getAuthors, addBook } from '../queries/queries'

class AddBook extends Component {

  state = {
    name: '',
    genre: '',
    authorId: ''
  }

  listAuthors = () => {
    let data = this.props.getAuthors

    if (data.loading) {
      return(<option disabled>Loading Authors...</option>)
    } else {
      return data.authors.map(author => {
      return (<option key={ author.id } value={ author.id }>{ author.name }</option>)
      })
    }
  }

  submitForm = e => {
    e.preventDefault()
    this.props.addBook({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      }
    })
  }
  
  render() {
    return (
      <form id='add-book' onSubmit={ this.submitForm }>

        <div className='field'>
          <label>Book name:</label>
          <input type='text' onChange={(e) => this.setState({ name: e.target.value })} />
        </div>

        <div className='field'>
          <label>Genre:</label>
          <input type='text' onChange={(e) => this.setState({ genre: e.target.value })} />
        </div>

        <div className='field'>
          <label>Author:</label>
          <select onChange={(e) => this.setState({ authorId: e.target.value })} >
            <option>Select Author</option>
            { this.listAuthors() }
          </select>
        </div>

        <button>+</button>

      </form>
    );
  }
}

export default compose(
  graphql(getAuthors, { name: 'getAuthors' }),
  graphql(addBook, { name: 'addBook' })
)(AddBook);