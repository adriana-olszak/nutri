import gql from 'graphql-tag'

export default gql`
  type User {
    id: String!
    email: String!
    password: String
    roles: [Roles!]!
    googleId: String
    googleProfile: Json
    createdAt: DateTime!
    updatedAt: DateTime!
    refreshTokens(
      where: RefreshTokenWhereInput
      orderBy: [RefreshTokenOrderByWithRelationInput]
      cursor: RefreshTokenWhereUniqueInput
      take: Int
      skip: Int
      distinct: [RefreshTokenScalarFieldEnum]
    ): [RefreshToken!]!
    sessions(
      where: SessionWhereInput
      orderBy: [SessionOrderByWithRelationInput]
      cursor: SessionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [SessionScalarFieldEnum]
    ): [Session!]!
    loginLogs(
      where: LoginLogWhereInput
      orderBy: [LoginLogOrderByWithRelationInput]
      cursor: LoginLogWhereUniqueInput
      take: Int
      skip: Int
      distinct: [LoginLogScalarFieldEnum]
    ): [LoginLog!]!
    passwordResetTokens(
      where: PasswordResetTokenWhereInput
      orderBy: [PasswordResetTokenOrderByWithRelationInput]
      cursor: PasswordResetTokenWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PasswordResetTokenScalarFieldEnum]
    ): [PasswordResetToken!]!
    _count: UserCountOutputType!
  }

  type Query {
    findUniqueUser(where: UserWhereUniqueInput!): User
    findFirstUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    findManyUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): [User!]!
    findManyUserCount(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): Int!
    aggregateUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUser
  }

  type Mutation {
    createOneUser(data: UserCreateInput!): User!
    updateOneUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User!
    deleteOneUser(where: UserWhereUniqueInput!): User
    upsertOneUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User
    deleteManyUser(where: UserWhereInput): BatchPayload
    updateManyUser(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload
  }
`
