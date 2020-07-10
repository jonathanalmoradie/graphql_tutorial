import { gql } from 'apollo-boost';

const getAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`

const getBooks = gql`
  {
    books {
      name
      id
    }
  }
`

// mutation
//  mutation($name: String!, $genre: String!, $authorId: ID!) {
//  addBook(name: $name, genre: $genre, authorId: $authorId) {
// $word: String! --> query variables (! denotes required)
const addBook = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`

const getBookDetail = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`

export { getAuthors, getBooks, addBook, getBookDetail };