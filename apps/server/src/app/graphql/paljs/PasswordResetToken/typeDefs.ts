import gql from 'graphql-tag'

export default gql`
  type PasswordResetToken {
    id: String!
    token: String!
    userId: String!
    expiresAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
  }
`
