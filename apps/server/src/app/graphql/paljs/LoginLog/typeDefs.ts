import gql from 'graphql-tag'

export default gql`
  type LoginLog {
    id: String!
    userId: String
    success: Boolean!
    ipAddress: String
    userAgent: String
    createdAt: DateTime!
    updatedAt: DateTime!
    user(where: UserWhereInput): User
  }
`
