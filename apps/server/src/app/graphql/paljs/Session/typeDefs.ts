import gql from 'graphql-tag'

export default gql`
  type Session {
    id: String!
    userId: String!
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
  }
`
