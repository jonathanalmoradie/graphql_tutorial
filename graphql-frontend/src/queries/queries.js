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

const addBook = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`

export { getAuthors, getBooks, addBook };