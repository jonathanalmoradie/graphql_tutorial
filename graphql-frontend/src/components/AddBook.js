import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthors } from '../queries/queries'

class AddBook extends Component {

  listAuthors = () => {
    let data = this.props.data

    if (data.loading) {
      return(<option disabled>Loading Authors...</option>)
    } else {
      return data.authors.map(author => {
      return (<option key={ author.id } value={ author.id }>{ author.name }</option>)
      })
    }
  }
  
  render() {
    return (
      <form id='add-book'>

        <div className='field'>
          <label>Book name:</label>
          <input type='text' />
        </div>

        <div className='field'>
          <label>Genre:</label>
          <input type='text' />
        </div>

        <div className='field'>
          <label>Author:</label>
          <select>
            <option>Select Author</option>
            { this.listAuthors() }
          </select>
        </div>

        <button>+</button>

      </form>
    );
  }
}

export default graphql(getAuthors)(AddBook);