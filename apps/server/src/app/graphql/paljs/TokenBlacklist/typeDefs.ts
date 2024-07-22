import gql from 'graphql-tag'

export default gql`
  type TokenBlacklist {
    id: String!
    token: String!
    expiresAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    findUniqueTokenBlacklist(
      where: TokenBlacklistWhereUniqueInput!
    ): TokenBlacklist
    findFirstTokenBlacklist(
      where: TokenBlacklistWhereInput
      orderBy: [TokenBlacklistOrderByWithRelationInput]
      cursor: TokenBlacklistWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TokenBlacklistScalarFieldEnum]
    ): TokenBlacklist
    findManyTokenBlacklist(
      where: TokenBlacklistWhereInput
      orderBy: [TokenBlacklistOrderByWithRelationInput]
      cursor: TokenBlacklistWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TokenBlacklistScalarFieldEnum]
    ): [TokenBlacklist!]!
    findManyTokenBlacklistCount(
      where: TokenBlacklistWhereInput
      orderBy: [TokenBlacklistOrderByWithRelationInput]
      cursor: TokenBlacklistWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TokenBlacklistScalarFieldEnum]
    ): Int!
    aggregateTokenBlacklist(
      where: TokenBlacklistWhereInput
      orderBy: [TokenBlacklistOrderByWithRelationInput]
      cursor: TokenBlacklistWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateTokenBlacklist
  }

  type Mutation {
    createOneTokenBlacklist(data: TokenBlacklistCreateInput!): TokenBlacklist!
    updateOneTokenBlacklist(
      data: TokenBlacklistUpdateInput!
      where: TokenBlacklistWhereUniqueInput!
    ): TokenBlacklist!
    deleteOneTokenBlacklist(
      where: TokenBlacklistWhereUniqueInput!
    ): TokenBlacklist
    upsertOneTokenBlacklist(
      where: TokenBlacklistWhereUniqueInput!
      create: TokenBlacklistCreateInput!
      update: TokenBlacklistUpdateInput!
    ): TokenBlacklist
    deleteManyTokenBlacklist(where: TokenBlacklistWhereInput): BatchPayload
    updateManyTokenBlacklist(
      data: TokenBlacklistUpdateManyMutationInput!
      where: TokenBlacklistWhereInput
    ): BatchPayload
  }
`
