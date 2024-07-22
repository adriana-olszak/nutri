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

  type Query {
    findUniquePasswordResetToken(
      where: PasswordResetTokenWhereUniqueInput!
    ): PasswordResetToken
    findFirstPasswordResetToken(
      where: PasswordResetTokenWhereInput
      orderBy: [PasswordResetTokenOrderByWithRelationInput]
      cursor: PasswordResetTokenWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PasswordResetTokenScalarFieldEnum]
    ): PasswordResetToken
    findManyPasswordResetToken(
      where: PasswordResetTokenWhereInput
      orderBy: [PasswordResetTokenOrderByWithRelationInput]
      cursor: PasswordResetTokenWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PasswordResetTokenScalarFieldEnum]
    ): [PasswordResetToken!]!
    findManyPasswordResetTokenCount(
      where: PasswordResetTokenWhereInput
      orderBy: [PasswordResetTokenOrderByWithRelationInput]
      cursor: PasswordResetTokenWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PasswordResetTokenScalarFieldEnum]
    ): Int!
    aggregatePasswordResetToken(
      where: PasswordResetTokenWhereInput
      orderBy: [PasswordResetTokenOrderByWithRelationInput]
      cursor: PasswordResetTokenWhereUniqueInput
      take: Int
      skip: Int
    ): AggregatePasswordResetToken
  }

  type Mutation {
    createOnePasswordResetToken(
      data: PasswordResetTokenCreateInput!
    ): PasswordResetToken!
    updateOnePasswordResetToken(
      data: PasswordResetTokenUpdateInput!
      where: PasswordResetTokenWhereUniqueInput!
    ): PasswordResetToken!
    deleteOnePasswordResetToken(
      where: PasswordResetTokenWhereUniqueInput!
    ): PasswordResetToken
    upsertOnePasswordResetToken(
      where: PasswordResetTokenWhereUniqueInput!
      create: PasswordResetTokenCreateInput!
      update: PasswordResetTokenUpdateInput!
    ): PasswordResetToken
    deleteManyPasswordResetToken(
      where: PasswordResetTokenWhereInput
    ): BatchPayload
    updateManyPasswordResetToken(
      data: PasswordResetTokenUpdateManyMutationInput!
      where: PasswordResetTokenWhereInput
    ): BatchPayload
  }
`
