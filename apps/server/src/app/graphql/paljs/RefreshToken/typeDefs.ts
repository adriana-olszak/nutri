import gql from 'graphql-tag'

export default gql`
  type RefreshToken {
    id: String!
    token: String!
    userId: String!
    familyId: String!
    expiresAt: DateTime!
    used: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
  }
`
