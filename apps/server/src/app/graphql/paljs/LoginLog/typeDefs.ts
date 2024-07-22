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

  type Query {
    findUniqueLoginLog(where: LoginLogWhereUniqueInput!): LoginLog
    findFirstLoginLog(
      where: LoginLogWhereInput
      orderBy: [LoginLogOrderByWithRelationInput]
      cursor: LoginLogWhereUniqueInput
      take: Int
      skip: Int
      distinct: [LoginLogScalarFieldEnum]
    ): LoginLog
    findManyLoginLog(
      where: LoginLogWhereInput
      orderBy: [LoginLogOrderByWithRelationInput]
      cursor: LoginLogWhereUniqueInput
      take: Int
      skip: Int
      distinct: [LoginLogScalarFieldEnum]
    ): [LoginLog!]!
    findManyLoginLogCount(
      where: LoginLogWhereInput
      orderBy: [LoginLogOrderByWithRelationInput]
      cursor: LoginLogWhereUniqueInput
      take: Int
      skip: Int
      distinct: [LoginLogScalarFieldEnum]
    ): Int!
    aggregateLoginLog(
      where: LoginLogWhereInput
      orderBy: [LoginLogOrderByWithRelationInput]
      cursor: LoginLogWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateLoginLog
  }

  type Mutation {
    createOneLoginLog(data: LoginLogCreateInput!): LoginLog!
    updateOneLoginLog(
      data: LoginLogUpdateInput!
      where: LoginLogWhereUniqueInput!
    ): LoginLog!
    deleteOneLoginLog(where: LoginLogWhereUniqueInput!): LoginLog
    upsertOneLoginLog(
      where: LoginLogWhereUniqueInput!
      create: LoginLogCreateInput!
      update: LoginLogUpdateInput!
    ): LoginLog
    deleteManyLoginLog(where: LoginLogWhereInput): BatchPayload
    updateManyLoginLog(
      data: LoginLogUpdateManyMutationInput!
      where: LoginLogWhereInput
    ): BatchPayload
  }
`
