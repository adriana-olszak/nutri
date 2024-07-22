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

  type Query {
    findUniqueSession(where: SessionWhereUniqueInput!): Session
    findFirstSession(
      where: SessionWhereInput
      orderBy: [SessionOrderByWithRelationInput]
      cursor: SessionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [SessionScalarFieldEnum]
    ): Session
    findManySession(
      where: SessionWhereInput
      orderBy: [SessionOrderByWithRelationInput]
      cursor: SessionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [SessionScalarFieldEnum]
    ): [Session!]!
    findManySessionCount(
      where: SessionWhereInput
      orderBy: [SessionOrderByWithRelationInput]
      cursor: SessionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [SessionScalarFieldEnum]
    ): Int!
    aggregateSession(
      where: SessionWhereInput
      orderBy: [SessionOrderByWithRelationInput]
      cursor: SessionWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateSession
  }

  type Mutation {
    createOneSession(data: SessionCreateInput!): Session!
    updateOneSession(
      data: SessionUpdateInput!
      where: SessionWhereUniqueInput!
    ): Session!
    deleteOneSession(where: SessionWhereUniqueInput!): Session
    upsertOneSession(
      where: SessionWhereUniqueInput!
      create: SessionCreateInput!
      update: SessionUpdateInput!
    ): Session
    deleteManySession(where: SessionWhereInput): BatchPayload
    updateManySession(
      data: SessionUpdateManyMutationInput!
      where: SessionWhereInput
    ): BatchPayload
  }
`
