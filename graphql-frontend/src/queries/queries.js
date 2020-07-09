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

export { getAuthors, getBooks };