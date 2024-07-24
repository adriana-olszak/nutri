import gql from 'graphql-tag'

export default gql`
  type TokenBlacklist {
    id: String!
    token: String!
    expiresAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`
