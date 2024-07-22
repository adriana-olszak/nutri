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

  type Query {
    findUniqueRefreshToken(where: RefreshTokenWhereUniqueInput!): RefreshToken
    findFirstRefreshToken(
      where: RefreshTokenWhereInput
      orderBy: [RefreshTokenOrderByWithRelationInput]
      cursor: RefreshTokenWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RefreshTokenScalarFieldEnum]
    ): RefreshToken
    findManyRefreshToken(
      where: RefreshTokenWhereInput
      orderBy: [RefreshTokenOrderByWithRelationInput]
      cursor: RefreshTokenWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RefreshTokenScalarFieldEnum]
    ): [RefreshToken!]!
    findManyRefreshTokenCount(
      where: RefreshTokenWhereInput
      orderBy: [RefreshTokenOrderByWithRelationInput]
      cursor: RefreshTokenWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RefreshTokenScalarFieldEnum]
    ): Int!
    aggregateRefreshToken(
      where: RefreshTokenWhereInput
      orderBy: [RefreshTokenOrderByWithRelationInput]
      cursor: RefreshTokenWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateRefreshToken
  }

  type Mutation {
    createOneRefreshToken(data: RefreshTokenCreateInput!): RefreshToken!
    updateOneRefreshToken(
      data: RefreshTokenUpdateInput!
      where: RefreshTokenWhereUniqueInput!
    ): RefreshToken!
    deleteOneRefreshToken(where: RefreshTokenWhereUniqueInput!): RefreshToken
    upsertOneRefreshToken(
      where: RefreshTokenWhereUniqueInput!
      create: RefreshTokenCreateInput!
      update: RefreshTokenUpdateInput!
    ): RefreshToken
    deleteManyRefreshToken(where: RefreshTokenWhereInput): BatchPayload
    updateManyRefreshToken(
      data: RefreshTokenUpdateManyMutationInput!
      where: RefreshTokenWhereInput
    ): BatchPayload
  }
`
