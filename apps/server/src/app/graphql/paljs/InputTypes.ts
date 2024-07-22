import gql from 'graphql-tag'

export default gql`
  scalar DateTime
  type BatchPayload {
    count: Int!
  }

  enum TransactionIsolationLevel {
    ReadUncommitted
    ReadCommitted
    RepeatableRead
    Serializable
  }

  enum UserScalarFieldEnum {
    id
    email
    password
    roles
    googleId
    googleProfile
    createdAt
    updatedAt
  }

  enum RefreshTokenScalarFieldEnum {
    id
    token
    userId
    familyId
    expiresAt
    used
    createdAt
    updatedAt
  }

  enum SessionScalarFieldEnum {
    id
    userId
    deviceInfo
    ipAddress
    lastActiveAt
    createdAt
    updatedAt
  }

  enum LoginLogScalarFieldEnum {
    id
    userId
    success
    ipAddress
    userAgent
    createdAt
    updatedAt
  }

  enum PasswordResetTokenScalarFieldEnum {
    id
    token
    userId
    expiresAt
    createdAt
    updatedAt
  }

  enum TokenBlacklistScalarFieldEnum {
    id
    token
    expiresAt
    createdAt
    updatedAt
  }

  enum SortOrder {
    asc
    desc
  }

  enum NullableJsonNullValueInput {
    DbNull
    JsonNull
  }

  enum QueryMode {
    default
    insensitive
  }

  enum JsonNullValueFilter {
    DbNull
    JsonNull
    AnyNull
  }

  enum NullsOrder {
    first
    last
  }

  enum Roles {
    USER
    SUPERADMIN
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    id: StringFilter
    email: StringFilter
    password: StringNullableFilter
    roles: EnumRolesNullableListFilter
    googleId: StringNullableFilter
    googleProfile: JsonNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    refreshTokens: RefreshTokenListRelationFilter
    sessions: SessionListRelationFilter
    loginLogs: LoginLogListRelationFilter
    passwordResetTokens: PasswordResetTokenListRelationFilter
  }

  input UserOrderByWithRelationInput {
    id: SortOrder
    email: SortOrder
    password: SortOrderInput
    roles: SortOrder
    googleId: SortOrderInput
    googleProfile: SortOrderInput
    createdAt: SortOrder
    updatedAt: SortOrder
    refreshTokens: RefreshTokenOrderByRelationAggregateInput
    sessions: SessionOrderByRelationAggregateInput
    loginLogs: LoginLogOrderByRelationAggregateInput
    passwordResetTokens: PasswordResetTokenOrderByRelationAggregateInput
  }

  input UserWhereUniqueInput {
    id: String
    email: String
    googleId: String
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    password: StringNullableFilter
    roles: EnumRolesNullableListFilter
    googleProfile: JsonNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    refreshTokens: RefreshTokenListRelationFilter
    sessions: SessionListRelationFilter
    loginLogs: LoginLogListRelationFilter
    passwordResetTokens: PasswordResetTokenListRelationFilter
  }

  input UserOrderByWithAggregationInput {
    id: SortOrder
    email: SortOrder
    password: SortOrderInput
    roles: SortOrder
    googleId: SortOrderInput
    googleProfile: SortOrderInput
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: UserCountOrderByAggregateInput
    _max: UserMaxOrderByAggregateInput
    _min: UserMinOrderByAggregateInput
  }

  input UserScalarWhereWithAggregatesInput {
    AND: [UserScalarWhereWithAggregatesInput!]
    OR: [UserScalarWhereWithAggregatesInput!]
    NOT: [UserScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    email: StringWithAggregatesFilter
    password: StringNullableWithAggregatesFilter
    roles: EnumRolesNullableListFilter
    googleId: StringNullableWithAggregatesFilter
    googleProfile: JsonNullableWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input RefreshTokenWhereInput {
    AND: [RefreshTokenWhereInput!]
    OR: [RefreshTokenWhereInput!]
    NOT: [RefreshTokenWhereInput!]
    id: StringFilter
    token: StringFilter
    userId: StringFilter
    familyId: StringFilter
    expiresAt: DateTimeFilter
    used: BoolFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    user: UserRelationFilter
  }

  input RefreshTokenOrderByWithRelationInput {
    id: SortOrder
    token: SortOrder
    userId: SortOrder
    familyId: SortOrder
    expiresAt: SortOrder
    used: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    user: UserOrderByWithRelationInput
  }

  input RefreshTokenWhereUniqueInput {
    id: String
    token: String
    AND: [RefreshTokenWhereInput!]
    OR: [RefreshTokenWhereInput!]
    NOT: [RefreshTokenWhereInput!]
    userId: StringFilter
    familyId: StringFilter
    expiresAt: DateTimeFilter
    used: BoolFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    user: UserRelationFilter
  }

  input RefreshTokenOrderByWithAggregationInput {
    id: SortOrder
    token: SortOrder
    userId: SortOrder
    familyId: SortOrder
    expiresAt: SortOrder
    used: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: RefreshTokenCountOrderByAggregateInput
    _max: RefreshTokenMaxOrderByAggregateInput
    _min: RefreshTokenMinOrderByAggregateInput
  }

  input RefreshTokenScalarWhereWithAggregatesInput {
    AND: [RefreshTokenScalarWhereWithAggregatesInput!]
    OR: [RefreshTokenScalarWhereWithAggregatesInput!]
    NOT: [RefreshTokenScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    token: StringWithAggregatesFilter
    userId: StringWithAggregatesFilter
    familyId: StringWithAggregatesFilter
    expiresAt: DateTimeWithAggregatesFilter
    used: BoolWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input SessionWhereInput {
    AND: [SessionWhereInput!]
    OR: [SessionWhereInput!]
    NOT: [SessionWhereInput!]
    id: StringFilter
    userId: StringFilter
    deviceInfo: StringNullableFilter
    ipAddress: StringNullableFilter
    lastActiveAt: DateTimeFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    user: UserRelationFilter
  }

  input SessionOrderByWithRelationInput {
    id: SortOrder
    userId: SortOrder
    deviceInfo: SortOrderInput
    ipAddress: SortOrderInput
    lastActiveAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    user: UserOrderByWithRelationInput
  }

  input SessionWhereUniqueInput {
    id: String
    AND: [SessionWhereInput!]
    OR: [SessionWhereInput!]
    NOT: [SessionWhereInput!]
    userId: StringFilter
    deviceInfo: StringNullableFilter
    ipAddress: StringNullableFilter
    lastActiveAt: DateTimeFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    user: UserRelationFilter
  }

  input SessionOrderByWithAggregationInput {
    id: SortOrder
    userId: SortOrder
    deviceInfo: SortOrderInput
    ipAddress: SortOrderInput
    lastActiveAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: SessionCountOrderByAggregateInput
    _max: SessionMaxOrderByAggregateInput
    _min: SessionMinOrderByAggregateInput
  }

  input SessionScalarWhereWithAggregatesInput {
    AND: [SessionScalarWhereWithAggregatesInput!]
    OR: [SessionScalarWhereWithAggregatesInput!]
    NOT: [SessionScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    userId: StringWithAggregatesFilter
    deviceInfo: StringNullableWithAggregatesFilter
    ipAddress: StringNullableWithAggregatesFilter
    lastActiveAt: DateTimeWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input LoginLogWhereInput {
    AND: [LoginLogWhereInput!]
    OR: [LoginLogWhereInput!]
    NOT: [LoginLogWhereInput!]
    id: StringFilter
    userId: StringNullableFilter
    success: BoolFilter
    ipAddress: StringNullableFilter
    userAgent: StringNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    user: UserNullableRelationFilter
  }

  input LoginLogOrderByWithRelationInput {
    id: SortOrder
    userId: SortOrderInput
    success: SortOrder
    ipAddress: SortOrderInput
    userAgent: SortOrderInput
    createdAt: SortOrder
    updatedAt: SortOrder
    user: UserOrderByWithRelationInput
  }

  input LoginLogWhereUniqueInput {
    id: String
    AND: [LoginLogWhereInput!]
    OR: [LoginLogWhereInput!]
    NOT: [LoginLogWhereInput!]
    userId: StringNullableFilter
    success: BoolFilter
    ipAddress: StringNullableFilter
    userAgent: StringNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    user: UserNullableRelationFilter
  }

  input LoginLogOrderByWithAggregationInput {
    id: SortOrder
    userId: SortOrderInput
    success: SortOrder
    ipAddress: SortOrderInput
    userAgent: SortOrderInput
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: LoginLogCountOrderByAggregateInput
    _max: LoginLogMaxOrderByAggregateInput
    _min: LoginLogMinOrderByAggregateInput
  }

  input LoginLogScalarWhereWithAggregatesInput {
    AND: [LoginLogScalarWhereWithAggregatesInput!]
    OR: [LoginLogScalarWhereWithAggregatesInput!]
    NOT: [LoginLogScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    userId: StringNullableWithAggregatesFilter
    success: BoolWithAggregatesFilter
    ipAddress: StringNullableWithAggregatesFilter
    userAgent: StringNullableWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input PasswordResetTokenWhereInput {
    AND: [PasswordResetTokenWhereInput!]
    OR: [PasswordResetTokenWhereInput!]
    NOT: [PasswordResetTokenWhereInput!]
    id: StringFilter
    token: StringFilter
    userId: StringFilter
    expiresAt: DateTimeFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    user: UserRelationFilter
  }

  input PasswordResetTokenOrderByWithRelationInput {
    id: SortOrder
    token: SortOrder
    userId: SortOrder
    expiresAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    user: UserOrderByWithRelationInput
  }

  input PasswordResetTokenWhereUniqueInput {
    id: String
    token: String
    AND: [PasswordResetTokenWhereInput!]
    OR: [PasswordResetTokenWhereInput!]
    NOT: [PasswordResetTokenWhereInput!]
    userId: StringFilter
    expiresAt: DateTimeFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    user: UserRelationFilter
  }

  input PasswordResetTokenOrderByWithAggregationInput {
    id: SortOrder
    token: SortOrder
    userId: SortOrder
    expiresAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: PasswordResetTokenCountOrderByAggregateInput
    _max: PasswordResetTokenMaxOrderByAggregateInput
    _min: PasswordResetTokenMinOrderByAggregateInput
  }

  input PasswordResetTokenScalarWhereWithAggregatesInput {
    AND: [PasswordResetTokenScalarWhereWithAggregatesInput!]
    OR: [PasswordResetTokenScalarWhereWithAggregatesInput!]
    NOT: [PasswordResetTokenScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    token: StringWithAggregatesFilter
    userId: StringWithAggregatesFilter
    expiresAt: DateTimeWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input TokenBlacklistWhereInput {
    AND: [TokenBlacklistWhereInput!]
    OR: [TokenBlacklistWhereInput!]
    NOT: [TokenBlacklistWhereInput!]
    id: StringFilter
    token: StringFilter
    expiresAt: DateTimeFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
  }

  input TokenBlacklistOrderByWithRelationInput {
    id: SortOrder
    token: SortOrder
    expiresAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input TokenBlacklistWhereUniqueInput {
    id: String
    token: String
    AND: [TokenBlacklistWhereInput!]
    OR: [TokenBlacklistWhereInput!]
    NOT: [TokenBlacklistWhereInput!]
    expiresAt: DateTimeFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
  }

  input TokenBlacklistOrderByWithAggregationInput {
    id: SortOrder
    token: SortOrder
    expiresAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: TokenBlacklistCountOrderByAggregateInput
    _max: TokenBlacklistMaxOrderByAggregateInput
    _min: TokenBlacklistMinOrderByAggregateInput
  }

  input TokenBlacklistScalarWhereWithAggregatesInput {
    AND: [TokenBlacklistScalarWhereWithAggregatesInput!]
    OR: [TokenBlacklistScalarWhereWithAggregatesInput!]
    NOT: [TokenBlacklistScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    token: StringWithAggregatesFilter
    expiresAt: DateTimeWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input UserCreateInput {
    id: String
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenCreateNestedManyWithoutUserInput
    sessions: SessionCreateNestedManyWithoutUserInput
    loginLogs: LoginLogCreateNestedManyWithoutUserInput
    passwordResetTokens: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  input UserUncheckedCreateInput {
    id: String
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    sessions: SessionUncheckedCreateNestedManyWithoutUserInput
    loginLogs: LoginLogUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  input UserUpdateInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUpdateManyWithoutUserNestedInput
    sessions: SessionUpdateManyWithoutUserNestedInput
    loginLogs: LoginLogUpdateManyWithoutUserNestedInput
    passwordResetTokens: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  input UserUncheckedUpdateInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions: SessionUncheckedUpdateManyWithoutUserNestedInput
    loginLogs: LoginLogUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  input UserCreateManyInput {
    id: String
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
  }

  input UserUpdateManyMutationInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
  }

  input UserUncheckedUpdateManyInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
  }

  input RefreshTokenCreateInput {
    id: String
    token: String!
    familyId: String!
    expiresAt: DateTime!
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    user: UserCreateNestedOneWithoutRefreshTokensInput!
  }

  input RefreshTokenUncheckedCreateInput {
    id: String
    token: String!
    userId: String!
    familyId: String!
    expiresAt: DateTime!
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input RefreshTokenUpdateInput {
    id: String
    token: String
    familyId: String
    expiresAt: DateTime
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    user: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  input RefreshTokenUncheckedUpdateInput {
    id: String
    token: String
    userId: String
    familyId: String
    expiresAt: DateTime
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input RefreshTokenCreateManyInput {
    id: String
    token: String!
    userId: String!
    familyId: String!
    expiresAt: DateTime!
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input RefreshTokenUpdateManyMutationInput {
    id: String
    token: String
    familyId: String
    expiresAt: DateTime
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input RefreshTokenUncheckedUpdateManyInput {
    id: String
    token: String
    userId: String
    familyId: String
    expiresAt: DateTime
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SessionCreateInput {
    id: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
    user: UserCreateNestedOneWithoutSessionsInput!
  }

  input SessionUncheckedCreateInput {
    id: String
    userId: String!
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SessionUpdateInput {
    id: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
    user: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  input SessionUncheckedUpdateInput {
    id: String
    userId: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SessionCreateManyInput {
    id: String
    userId: String!
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SessionUpdateManyMutationInput {
    id: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SessionUncheckedUpdateManyInput {
    id: String
    userId: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input LoginLogCreateInput {
    id: String
    success: Boolean!
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
    user: UserCreateNestedOneWithoutLoginLogsInput
  }

  input LoginLogUncheckedCreateInput {
    id: String
    userId: String
    success: Boolean!
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input LoginLogUpdateInput {
    id: String
    success: Boolean
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
    user: UserUpdateOneWithoutLoginLogsNestedInput
  }

  input LoginLogUncheckedUpdateInput {
    id: String
    userId: String
    success: Boolean
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input LoginLogCreateManyInput {
    id: String
    userId: String
    success: Boolean!
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input LoginLogUpdateManyMutationInput {
    id: String
    success: Boolean
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input LoginLogUncheckedUpdateManyInput {
    id: String
    userId: String
    success: Boolean
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PasswordResetTokenCreateInput {
    id: String
    token: String!
    expiresAt: DateTime!
    createdAt: DateTime
    updatedAt: DateTime
    user: UserCreateNestedOneWithoutPasswordResetTokensInput!
  }

  input PasswordResetTokenUncheckedCreateInput {
    id: String
    token: String!
    userId: String!
    expiresAt: DateTime!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PasswordResetTokenUpdateInput {
    id: String
    token: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
    user: UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput
  }

  input PasswordResetTokenUncheckedUpdateInput {
    id: String
    token: String
    userId: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PasswordResetTokenCreateManyInput {
    id: String
    token: String!
    userId: String!
    expiresAt: DateTime!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PasswordResetTokenUpdateManyMutationInput {
    id: String
    token: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PasswordResetTokenUncheckedUpdateManyInput {
    id: String
    token: String
    userId: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input TokenBlacklistCreateInput {
    id: String
    token: String!
    expiresAt: DateTime!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input TokenBlacklistUncheckedCreateInput {
    id: String
    token: String!
    expiresAt: DateTime!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input TokenBlacklistUpdateInput {
    id: String
    token: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input TokenBlacklistUncheckedUpdateInput {
    id: String
    token: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input TokenBlacklistCreateManyInput {
    id: String
    token: String!
    expiresAt: DateTime!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input TokenBlacklistUpdateManyMutationInput {
    id: String
    token: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input TokenBlacklistUncheckedUpdateManyInput {
    id: String
    token: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringFilter
  }

  input StringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableFilter
  }

  input EnumRolesNullableListFilter {
    equals: [Roles!]
    has: Roles
    hasEvery: [Roles!]
    hasSome: [Roles!]
    isEmpty: Boolean
  }

  input JsonNullableFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
  }

  input DateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input RefreshTokenListRelationFilter {
    every: RefreshTokenWhereInput
    some: RefreshTokenWhereInput
    none: RefreshTokenWhereInput
  }

  input SessionListRelationFilter {
    every: SessionWhereInput
    some: SessionWhereInput
    none: SessionWhereInput
  }

  input LoginLogListRelationFilter {
    every: LoginLogWhereInput
    some: LoginLogWhereInput
    none: LoginLogWhereInput
  }

  input PasswordResetTokenListRelationFilter {
    every: PasswordResetTokenWhereInput
    some: PasswordResetTokenWhereInput
    none: PasswordResetTokenWhereInput
  }

  input SortOrderInput {
    sort: SortOrder!
    nulls: NullsOrder
  }

  input RefreshTokenOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input SessionOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input LoginLogOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input PasswordResetTokenOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input UserCountOrderByAggregateInput {
    id: SortOrder
    email: SortOrder
    password: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    email: SortOrder
    password: SortOrder
    googleId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    email: SortOrder
    password: SortOrder
    googleId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input StringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input StringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input JsonNullableWithAggregatesFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
    _count: NestedIntNullableFilter
    _min: NestedJsonNullableFilter
    _max: NestedJsonNullableFilter
  }

  input DateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input BoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input UserRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
  }

  input RefreshTokenCountOrderByAggregateInput {
    id: SortOrder
    token: SortOrder
    userId: SortOrder
    familyId: SortOrder
    expiresAt: SortOrder
    used: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input RefreshTokenMaxOrderByAggregateInput {
    id: SortOrder
    token: SortOrder
    userId: SortOrder
    familyId: SortOrder
    expiresAt: SortOrder
    used: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input RefreshTokenMinOrderByAggregateInput {
    id: SortOrder
    token: SortOrder
    userId: SortOrder
    familyId: SortOrder
    expiresAt: SortOrder
    used: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input BoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input SessionCountOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    deviceInfo: SortOrder
    ipAddress: SortOrder
    lastActiveAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input SessionMaxOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    deviceInfo: SortOrder
    ipAddress: SortOrder
    lastActiveAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input SessionMinOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    deviceInfo: SortOrder
    ipAddress: SortOrder
    lastActiveAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input UserNullableRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
  }

  input LoginLogCountOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    success: SortOrder
    ipAddress: SortOrder
    userAgent: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input LoginLogMaxOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    success: SortOrder
    ipAddress: SortOrder
    userAgent: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input LoginLogMinOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    success: SortOrder
    ipAddress: SortOrder
    userAgent: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input PasswordResetTokenCountOrderByAggregateInput {
    id: SortOrder
    token: SortOrder
    userId: SortOrder
    expiresAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input PasswordResetTokenMaxOrderByAggregateInput {
    id: SortOrder
    token: SortOrder
    userId: SortOrder
    expiresAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input PasswordResetTokenMinOrderByAggregateInput {
    id: SortOrder
    token: SortOrder
    userId: SortOrder
    expiresAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input TokenBlacklistCountOrderByAggregateInput {
    id: SortOrder
    token: SortOrder
    expiresAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input TokenBlacklistMaxOrderByAggregateInput {
    id: SortOrder
    token: SortOrder
    expiresAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input TokenBlacklistMinOrderByAggregateInput {
    id: SortOrder
    token: SortOrder
    expiresAt: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input UserCreaterolesInput {
    set: [Roles!]!
  }

  input RefreshTokenCreateNestedManyWithoutUserInput {
    create: [RefreshTokenCreateWithoutUserInput!]
    connectOrCreate: [RefreshTokenCreateOrConnectWithoutUserInput!]
    createMany: RefreshTokenCreateManyUserInputEnvelope
    connect: [RefreshTokenWhereUniqueInput!]
  }

  input SessionCreateNestedManyWithoutUserInput {
    create: [SessionCreateWithoutUserInput!]
    connectOrCreate: [SessionCreateOrConnectWithoutUserInput!]
    createMany: SessionCreateManyUserInputEnvelope
    connect: [SessionWhereUniqueInput!]
  }

  input LoginLogCreateNestedManyWithoutUserInput {
    create: [LoginLogCreateWithoutUserInput!]
    connectOrCreate: [LoginLogCreateOrConnectWithoutUserInput!]
    createMany: LoginLogCreateManyUserInputEnvelope
    connect: [LoginLogWhereUniqueInput!]
  }

  input PasswordResetTokenCreateNestedManyWithoutUserInput {
    create: [PasswordResetTokenCreateWithoutUserInput!]
    connectOrCreate: [PasswordResetTokenCreateOrConnectWithoutUserInput!]
    createMany: PasswordResetTokenCreateManyUserInputEnvelope
    connect: [PasswordResetTokenWhereUniqueInput!]
  }

  input RefreshTokenUncheckedCreateNestedManyWithoutUserInput {
    create: [RefreshTokenCreateWithoutUserInput!]
    connectOrCreate: [RefreshTokenCreateOrConnectWithoutUserInput!]
    createMany: RefreshTokenCreateManyUserInputEnvelope
    connect: [RefreshTokenWhereUniqueInput!]
  }

  input SessionUncheckedCreateNestedManyWithoutUserInput {
    create: [SessionCreateWithoutUserInput!]
    connectOrCreate: [SessionCreateOrConnectWithoutUserInput!]
    createMany: SessionCreateManyUserInputEnvelope
    connect: [SessionWhereUniqueInput!]
  }

  input LoginLogUncheckedCreateNestedManyWithoutUserInput {
    create: [LoginLogCreateWithoutUserInput!]
    connectOrCreate: [LoginLogCreateOrConnectWithoutUserInput!]
    createMany: LoginLogCreateManyUserInputEnvelope
    connect: [LoginLogWhereUniqueInput!]
  }

  input PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput {
    create: [PasswordResetTokenCreateWithoutUserInput!]
    connectOrCreate: [PasswordResetTokenCreateOrConnectWithoutUserInput!]
    createMany: PasswordResetTokenCreateManyUserInputEnvelope
    connect: [PasswordResetTokenWhereUniqueInput!]
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input NullableStringFieldUpdateOperationsInput {
    set: String
  }

  input UserUpdaterolesInput {
    set: [Roles!]
    push: [Roles!]
  }

  input DateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input RefreshTokenUpdateManyWithoutUserNestedInput {
    create: [RefreshTokenCreateWithoutUserInput!]
    connectOrCreate: [RefreshTokenCreateOrConnectWithoutUserInput!]
    upsert: [RefreshTokenUpsertWithWhereUniqueWithoutUserInput!]
    createMany: RefreshTokenCreateManyUserInputEnvelope
    set: [RefreshTokenWhereUniqueInput!]
    disconnect: [RefreshTokenWhereUniqueInput!]
    delete: [RefreshTokenWhereUniqueInput!]
    connect: [RefreshTokenWhereUniqueInput!]
    update: [RefreshTokenUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [RefreshTokenUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [RefreshTokenScalarWhereInput!]
  }

  input SessionUpdateManyWithoutUserNestedInput {
    create: [SessionCreateWithoutUserInput!]
    connectOrCreate: [SessionCreateOrConnectWithoutUserInput!]
    upsert: [SessionUpsertWithWhereUniqueWithoutUserInput!]
    createMany: SessionCreateManyUserInputEnvelope
    set: [SessionWhereUniqueInput!]
    disconnect: [SessionWhereUniqueInput!]
    delete: [SessionWhereUniqueInput!]
    connect: [SessionWhereUniqueInput!]
    update: [SessionUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [SessionUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [SessionScalarWhereInput!]
  }

  input LoginLogUpdateManyWithoutUserNestedInput {
    create: [LoginLogCreateWithoutUserInput!]
    connectOrCreate: [LoginLogCreateOrConnectWithoutUserInput!]
    upsert: [LoginLogUpsertWithWhereUniqueWithoutUserInput!]
    createMany: LoginLogCreateManyUserInputEnvelope
    set: [LoginLogWhereUniqueInput!]
    disconnect: [LoginLogWhereUniqueInput!]
    delete: [LoginLogWhereUniqueInput!]
    connect: [LoginLogWhereUniqueInput!]
    update: [LoginLogUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [LoginLogUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [LoginLogScalarWhereInput!]
  }

  input PasswordResetTokenUpdateManyWithoutUserNestedInput {
    create: [PasswordResetTokenCreateWithoutUserInput!]
    connectOrCreate: [PasswordResetTokenCreateOrConnectWithoutUserInput!]
    upsert: [PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput!]
    createMany: PasswordResetTokenCreateManyUserInputEnvelope
    set: [PasswordResetTokenWhereUniqueInput!]
    disconnect: [PasswordResetTokenWhereUniqueInput!]
    delete: [PasswordResetTokenWhereUniqueInput!]
    connect: [PasswordResetTokenWhereUniqueInput!]
    update: [PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [PasswordResetTokenUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [PasswordResetTokenScalarWhereInput!]
  }

  input RefreshTokenUncheckedUpdateManyWithoutUserNestedInput {
    create: [RefreshTokenCreateWithoutUserInput!]
    connectOrCreate: [RefreshTokenCreateOrConnectWithoutUserInput!]
    upsert: [RefreshTokenUpsertWithWhereUniqueWithoutUserInput!]
    createMany: RefreshTokenCreateManyUserInputEnvelope
    set: [RefreshTokenWhereUniqueInput!]
    disconnect: [RefreshTokenWhereUniqueInput!]
    delete: [RefreshTokenWhereUniqueInput!]
    connect: [RefreshTokenWhereUniqueInput!]
    update: [RefreshTokenUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [RefreshTokenUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [RefreshTokenScalarWhereInput!]
  }

  input SessionUncheckedUpdateManyWithoutUserNestedInput {
    create: [SessionCreateWithoutUserInput!]
    connectOrCreate: [SessionCreateOrConnectWithoutUserInput!]
    upsert: [SessionUpsertWithWhereUniqueWithoutUserInput!]
    createMany: SessionCreateManyUserInputEnvelope
    set: [SessionWhereUniqueInput!]
    disconnect: [SessionWhereUniqueInput!]
    delete: [SessionWhereUniqueInput!]
    connect: [SessionWhereUniqueInput!]
    update: [SessionUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [SessionUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [SessionScalarWhereInput!]
  }

  input LoginLogUncheckedUpdateManyWithoutUserNestedInput {
    create: [LoginLogCreateWithoutUserInput!]
    connectOrCreate: [LoginLogCreateOrConnectWithoutUserInput!]
    upsert: [LoginLogUpsertWithWhereUniqueWithoutUserInput!]
    createMany: LoginLogCreateManyUserInputEnvelope
    set: [LoginLogWhereUniqueInput!]
    disconnect: [LoginLogWhereUniqueInput!]
    delete: [LoginLogWhereUniqueInput!]
    connect: [LoginLogWhereUniqueInput!]
    update: [LoginLogUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [LoginLogUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [LoginLogScalarWhereInput!]
  }

  input PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput {
    create: [PasswordResetTokenCreateWithoutUserInput!]
    connectOrCreate: [PasswordResetTokenCreateOrConnectWithoutUserInput!]
    upsert: [PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput!]
    createMany: PasswordResetTokenCreateManyUserInputEnvelope
    set: [PasswordResetTokenWhereUniqueInput!]
    disconnect: [PasswordResetTokenWhereUniqueInput!]
    delete: [PasswordResetTokenWhereUniqueInput!]
    connect: [PasswordResetTokenWhereUniqueInput!]
    update: [PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [PasswordResetTokenUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [PasswordResetTokenScalarWhereInput!]
  }

  input UserCreateNestedOneWithoutRefreshTokensInput {
    create: UserCreateWithoutRefreshTokensInput
    connectOrCreate: UserCreateOrConnectWithoutRefreshTokensInput
    connect: UserWhereUniqueInput
  }

  input BoolFieldUpdateOperationsInput {
    set: Boolean
  }

  input UserUpdateOneRequiredWithoutRefreshTokensNestedInput {
    create: UserCreateWithoutRefreshTokensInput
    connectOrCreate: UserCreateOrConnectWithoutRefreshTokensInput
    upsert: UserUpsertWithoutRefreshTokensInput
    connect: UserWhereUniqueInput
    update: UserUpdateToOneWithWhereWithoutRefreshTokensInput
  }

  input UserCreateNestedOneWithoutSessionsInput {
    create: UserCreateWithoutSessionsInput
    connectOrCreate: UserCreateOrConnectWithoutSessionsInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateOneRequiredWithoutSessionsNestedInput {
    create: UserCreateWithoutSessionsInput
    connectOrCreate: UserCreateOrConnectWithoutSessionsInput
    upsert: UserUpsertWithoutSessionsInput
    connect: UserWhereUniqueInput
    update: UserUpdateToOneWithWhereWithoutSessionsInput
  }

  input UserCreateNestedOneWithoutLoginLogsInput {
    create: UserCreateWithoutLoginLogsInput
    connectOrCreate: UserCreateOrConnectWithoutLoginLogsInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateOneWithoutLoginLogsNestedInput {
    create: UserCreateWithoutLoginLogsInput
    connectOrCreate: UserCreateOrConnectWithoutLoginLogsInput
    upsert: UserUpsertWithoutLoginLogsInput
    disconnect: UserWhereInput
    delete: UserWhereInput
    connect: UserWhereUniqueInput
    update: UserUpdateToOneWithWhereWithoutLoginLogsInput
  }

  input UserCreateNestedOneWithoutPasswordResetTokensInput {
    create: UserCreateWithoutPasswordResetTokensInput
    connectOrCreate: UserCreateOrConnectWithoutPasswordResetTokensInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput {
    create: UserCreateWithoutPasswordResetTokensInput
    connectOrCreate: UserCreateOrConnectWithoutPasswordResetTokensInput
    upsert: UserUpsertWithoutPasswordResetTokensInput
    connect: UserWhereUniqueInput
    update: UserUpdateToOneWithWhereWithoutPasswordResetTokensInput
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedStringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input NestedDateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input NestedStringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedStringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input NestedIntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input NestedJsonNullableFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
  }

  input NestedDateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input NestedBoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input NestedBoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input RefreshTokenCreateWithoutUserInput {
    id: String
    token: String!
    familyId: String!
    expiresAt: DateTime!
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input RefreshTokenUncheckedCreateWithoutUserInput {
    id: String
    token: String!
    familyId: String!
    expiresAt: DateTime!
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input RefreshTokenCreateOrConnectWithoutUserInput {
    where: RefreshTokenWhereUniqueInput!
    create: RefreshTokenCreateWithoutUserInput!
  }

  input RefreshTokenCreateManyUserInputEnvelope {
    data: [RefreshTokenCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input SessionCreateWithoutUserInput {
    id: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SessionUncheckedCreateWithoutUserInput {
    id: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SessionCreateOrConnectWithoutUserInput {
    where: SessionWhereUniqueInput!
    create: SessionCreateWithoutUserInput!
  }

  input SessionCreateManyUserInputEnvelope {
    data: [SessionCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input LoginLogCreateWithoutUserInput {
    id: String
    success: Boolean!
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input LoginLogUncheckedCreateWithoutUserInput {
    id: String
    success: Boolean!
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input LoginLogCreateOrConnectWithoutUserInput {
    where: LoginLogWhereUniqueInput!
    create: LoginLogCreateWithoutUserInput!
  }

  input LoginLogCreateManyUserInputEnvelope {
    data: [LoginLogCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input PasswordResetTokenCreateWithoutUserInput {
    id: String
    token: String!
    expiresAt: DateTime!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PasswordResetTokenUncheckedCreateWithoutUserInput {
    id: String
    token: String!
    expiresAt: DateTime!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PasswordResetTokenCreateOrConnectWithoutUserInput {
    where: PasswordResetTokenWhereUniqueInput!
    create: PasswordResetTokenCreateWithoutUserInput!
  }

  input PasswordResetTokenCreateManyUserInputEnvelope {
    data: [PasswordResetTokenCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input RefreshTokenUpsertWithWhereUniqueWithoutUserInput {
    where: RefreshTokenWhereUniqueInput!
    update: RefreshTokenUpdateWithoutUserInput!
    create: RefreshTokenCreateWithoutUserInput!
  }

  input RefreshTokenUpdateWithWhereUniqueWithoutUserInput {
    where: RefreshTokenWhereUniqueInput!
    data: RefreshTokenUpdateWithoutUserInput!
  }

  input RefreshTokenUpdateManyWithWhereWithoutUserInput {
    where: RefreshTokenScalarWhereInput!
    data: RefreshTokenUpdateManyMutationInput!
  }

  input RefreshTokenScalarWhereInput {
    AND: [RefreshTokenScalarWhereInput!]
    OR: [RefreshTokenScalarWhereInput!]
    NOT: [RefreshTokenScalarWhereInput!]
    id: StringFilter
    token: StringFilter
    userId: StringFilter
    familyId: StringFilter
    expiresAt: DateTimeFilter
    used: BoolFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
  }

  input SessionUpsertWithWhereUniqueWithoutUserInput {
    where: SessionWhereUniqueInput!
    update: SessionUpdateWithoutUserInput!
    create: SessionCreateWithoutUserInput!
  }

  input SessionUpdateWithWhereUniqueWithoutUserInput {
    where: SessionWhereUniqueInput!
    data: SessionUpdateWithoutUserInput!
  }

  input SessionUpdateManyWithWhereWithoutUserInput {
    where: SessionScalarWhereInput!
    data: SessionUpdateManyMutationInput!
  }

  input SessionScalarWhereInput {
    AND: [SessionScalarWhereInput!]
    OR: [SessionScalarWhereInput!]
    NOT: [SessionScalarWhereInput!]
    id: StringFilter
    userId: StringFilter
    deviceInfo: StringNullableFilter
    ipAddress: StringNullableFilter
    lastActiveAt: DateTimeFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
  }

  input LoginLogUpsertWithWhereUniqueWithoutUserInput {
    where: LoginLogWhereUniqueInput!
    update: LoginLogUpdateWithoutUserInput!
    create: LoginLogCreateWithoutUserInput!
  }

  input LoginLogUpdateWithWhereUniqueWithoutUserInput {
    where: LoginLogWhereUniqueInput!
    data: LoginLogUpdateWithoutUserInput!
  }

  input LoginLogUpdateManyWithWhereWithoutUserInput {
    where: LoginLogScalarWhereInput!
    data: LoginLogUpdateManyMutationInput!
  }

  input LoginLogScalarWhereInput {
    AND: [LoginLogScalarWhereInput!]
    OR: [LoginLogScalarWhereInput!]
    NOT: [LoginLogScalarWhereInput!]
    id: StringFilter
    userId: StringNullableFilter
    success: BoolFilter
    ipAddress: StringNullableFilter
    userAgent: StringNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
  }

  input PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput {
    where: PasswordResetTokenWhereUniqueInput!
    update: PasswordResetTokenUpdateWithoutUserInput!
    create: PasswordResetTokenCreateWithoutUserInput!
  }

  input PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput {
    where: PasswordResetTokenWhereUniqueInput!
    data: PasswordResetTokenUpdateWithoutUserInput!
  }

  input PasswordResetTokenUpdateManyWithWhereWithoutUserInput {
    where: PasswordResetTokenScalarWhereInput!
    data: PasswordResetTokenUpdateManyMutationInput!
  }

  input PasswordResetTokenScalarWhereInput {
    AND: [PasswordResetTokenScalarWhereInput!]
    OR: [PasswordResetTokenScalarWhereInput!]
    NOT: [PasswordResetTokenScalarWhereInput!]
    id: StringFilter
    token: StringFilter
    userId: StringFilter
    expiresAt: DateTimeFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
  }

  input UserCreateWithoutRefreshTokensInput {
    id: String
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    sessions: SessionCreateNestedManyWithoutUserInput
    loginLogs: LoginLogCreateNestedManyWithoutUserInput
    passwordResetTokens: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  input UserUncheckedCreateWithoutRefreshTokensInput {
    id: String
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    sessions: SessionUncheckedCreateNestedManyWithoutUserInput
    loginLogs: LoginLogUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  input UserCreateOrConnectWithoutRefreshTokensInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutRefreshTokensInput!
  }

  input UserUpsertWithoutRefreshTokensInput {
    update: UserUpdateWithoutRefreshTokensInput!
    create: UserCreateWithoutRefreshTokensInput!
    where: UserWhereInput
  }

  input UserUpdateToOneWithWhereWithoutRefreshTokensInput {
    where: UserWhereInput
    data: UserUpdateWithoutRefreshTokensInput!
  }

  input UserUpdateWithoutRefreshTokensInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    sessions: SessionUpdateManyWithoutUserNestedInput
    loginLogs: LoginLogUpdateManyWithoutUserNestedInput
    passwordResetTokens: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  input UserUncheckedUpdateWithoutRefreshTokensInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    sessions: SessionUncheckedUpdateManyWithoutUserNestedInput
    loginLogs: LoginLogUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  input UserCreateWithoutSessionsInput {
    id: String
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenCreateNestedManyWithoutUserInput
    loginLogs: LoginLogCreateNestedManyWithoutUserInput
    passwordResetTokens: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  input UserUncheckedCreateWithoutSessionsInput {
    id: String
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    loginLogs: LoginLogUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  input UserCreateOrConnectWithoutSessionsInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutSessionsInput!
  }

  input UserUpsertWithoutSessionsInput {
    update: UserUpdateWithoutSessionsInput!
    create: UserCreateWithoutSessionsInput!
    where: UserWhereInput
  }

  input UserUpdateToOneWithWhereWithoutSessionsInput {
    where: UserWhereInput
    data: UserUpdateWithoutSessionsInput!
  }

  input UserUpdateWithoutSessionsInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUpdateManyWithoutUserNestedInput
    loginLogs: LoginLogUpdateManyWithoutUserNestedInput
    passwordResetTokens: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  input UserUncheckedUpdateWithoutSessionsInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    loginLogs: LoginLogUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  input UserCreateWithoutLoginLogsInput {
    id: String
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenCreateNestedManyWithoutUserInput
    sessions: SessionCreateNestedManyWithoutUserInput
    passwordResetTokens: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  input UserUncheckedCreateWithoutLoginLogsInput {
    id: String
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    sessions: SessionUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  input UserCreateOrConnectWithoutLoginLogsInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutLoginLogsInput!
  }

  input UserUpsertWithoutLoginLogsInput {
    update: UserUpdateWithoutLoginLogsInput!
    create: UserCreateWithoutLoginLogsInput!
    where: UserWhereInput
  }

  input UserUpdateToOneWithWhereWithoutLoginLogsInput {
    where: UserWhereInput
    data: UserUpdateWithoutLoginLogsInput!
  }

  input UserUpdateWithoutLoginLogsInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUpdateManyWithoutUserNestedInput
    sessions: SessionUpdateManyWithoutUserNestedInput
    passwordResetTokens: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  input UserUncheckedUpdateWithoutLoginLogsInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions: SessionUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  input UserCreateWithoutPasswordResetTokensInput {
    id: String
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenCreateNestedManyWithoutUserInput
    sessions: SessionCreateNestedManyWithoutUserInput
    loginLogs: LoginLogCreateNestedManyWithoutUserInput
  }

  input UserUncheckedCreateWithoutPasswordResetTokensInput {
    id: String
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    sessions: SessionUncheckedCreateNestedManyWithoutUserInput
    loginLogs: LoginLogUncheckedCreateNestedManyWithoutUserInput
  }

  input UserCreateOrConnectWithoutPasswordResetTokensInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutPasswordResetTokensInput!
  }

  input UserUpsertWithoutPasswordResetTokensInput {
    update: UserUpdateWithoutPasswordResetTokensInput!
    create: UserCreateWithoutPasswordResetTokensInput!
    where: UserWhereInput
  }

  input UserUpdateToOneWithWhereWithoutPasswordResetTokensInput {
    where: UserWhereInput
    data: UserUpdateWithoutPasswordResetTokensInput!
  }

  input UserUpdateWithoutPasswordResetTokensInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUpdateManyWithoutUserNestedInput
    sessions: SessionUpdateManyWithoutUserNestedInput
    loginLogs: LoginLogUpdateManyWithoutUserNestedInput
  }

  input UserUncheckedUpdateWithoutPasswordResetTokensInput {
    id: String
    email: String
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime
    updatedAt: DateTime
    refreshTokens: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions: SessionUncheckedUpdateManyWithoutUserNestedInput
    loginLogs: LoginLogUncheckedUpdateManyWithoutUserNestedInput
  }

  input RefreshTokenCreateManyUserInput {
    id: String
    token: String!
    familyId: String!
    expiresAt: DateTime!
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SessionCreateManyUserInput {
    id: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input LoginLogCreateManyUserInput {
    id: String
    success: Boolean!
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PasswordResetTokenCreateManyUserInput {
    id: String
    token: String!
    expiresAt: DateTime!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input RefreshTokenUpdateWithoutUserInput {
    id: String
    token: String
    familyId: String
    expiresAt: DateTime
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input RefreshTokenUncheckedUpdateWithoutUserInput {
    id: String
    token: String
    familyId: String
    expiresAt: DateTime
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input RefreshTokenUncheckedUpdateManyWithoutUserInput {
    id: String
    token: String
    familyId: String
    expiresAt: DateTime
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SessionUpdateWithoutUserInput {
    id: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SessionUncheckedUpdateWithoutUserInput {
    id: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input SessionUncheckedUpdateManyWithoutUserInput {
    id: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input LoginLogUpdateWithoutUserInput {
    id: String
    success: Boolean
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input LoginLogUncheckedUpdateWithoutUserInput {
    id: String
    success: Boolean
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input LoginLogUncheckedUpdateManyWithoutUserInput {
    id: String
    success: Boolean
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PasswordResetTokenUpdateWithoutUserInput {
    id: String
    token: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PasswordResetTokenUncheckedUpdateWithoutUserInput {
    id: String
    token: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PasswordResetTokenUncheckedUpdateManyWithoutUserInput {
    id: String
    token: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  type AggregateUser {
    _count: UserCountAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type UserGroupByOutputType {
    id: String!
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime!
    updatedAt: DateTime!
    _count: UserCountAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregateRefreshToken {
    _count: RefreshTokenCountAggregateOutputType
    _min: RefreshTokenMinAggregateOutputType
    _max: RefreshTokenMaxAggregateOutputType
  }

  type RefreshTokenGroupByOutputType {
    id: String!
    token: String!
    userId: String!
    familyId: String!
    expiresAt: DateTime!
    used: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    _count: RefreshTokenCountAggregateOutputType
    _min: RefreshTokenMinAggregateOutputType
    _max: RefreshTokenMaxAggregateOutputType
  }

  type AggregateSession {
    _count: SessionCountAggregateOutputType
    _min: SessionMinAggregateOutputType
    _max: SessionMaxAggregateOutputType
  }

  type SessionGroupByOutputType {
    id: String!
    userId: String!
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    _count: SessionCountAggregateOutputType
    _min: SessionMinAggregateOutputType
    _max: SessionMaxAggregateOutputType
  }

  type AggregateLoginLog {
    _count: LoginLogCountAggregateOutputType
    _min: LoginLogMinAggregateOutputType
    _max: LoginLogMaxAggregateOutputType
  }

  type LoginLogGroupByOutputType {
    id: String!
    userId: String
    success: Boolean!
    ipAddress: String
    userAgent: String
    createdAt: DateTime!
    updatedAt: DateTime!
    _count: LoginLogCountAggregateOutputType
    _min: LoginLogMinAggregateOutputType
    _max: LoginLogMaxAggregateOutputType
  }

  type AggregatePasswordResetToken {
    _count: PasswordResetTokenCountAggregateOutputType
    _min: PasswordResetTokenMinAggregateOutputType
    _max: PasswordResetTokenMaxAggregateOutputType
  }

  type PasswordResetTokenGroupByOutputType {
    id: String!
    token: String!
    userId: String!
    expiresAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    _count: PasswordResetTokenCountAggregateOutputType
    _min: PasswordResetTokenMinAggregateOutputType
    _max: PasswordResetTokenMaxAggregateOutputType
  }

  type AggregateTokenBlacklist {
    _count: TokenBlacklistCountAggregateOutputType
    _min: TokenBlacklistMinAggregateOutputType
    _max: TokenBlacklistMaxAggregateOutputType
  }

  type TokenBlacklistGroupByOutputType {
    id: String!
    token: String!
    expiresAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    _count: TokenBlacklistCountAggregateOutputType
    _min: TokenBlacklistMinAggregateOutputType
    _max: TokenBlacklistMaxAggregateOutputType
  }

  type UserCountOutputType {
    refreshTokens: Int!
    sessions: Int!
    loginLogs: Int!
    passwordResetTokens: Int!
  }

  type UserCountAggregateOutputType {
    id: Int!
    email: Int!
    password: Int!
    roles: Int!
    googleId: Int!
    googleProfile: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type UserMinAggregateOutputType {
    id: String
    email: String
    password: String
    googleId: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type UserMaxAggregateOutputType {
    id: String
    email: String
    password: String
    googleId: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type RefreshTokenCountAggregateOutputType {
    id: Int!
    token: Int!
    userId: Int!
    familyId: Int!
    expiresAt: Int!
    used: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type RefreshTokenMinAggregateOutputType {
    id: String
    token: String
    userId: String
    familyId: String
    expiresAt: DateTime
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  type RefreshTokenMaxAggregateOutputType {
    id: String
    token: String
    userId: String
    familyId: String
    expiresAt: DateTime
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  type SessionCountAggregateOutputType {
    id: Int!
    userId: Int!
    deviceInfo: Int!
    ipAddress: Int!
    lastActiveAt: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type SessionMinAggregateOutputType {
    id: String
    userId: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  type SessionMaxAggregateOutputType {
    id: String
    userId: String
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  type LoginLogCountAggregateOutputType {
    id: Int!
    userId: Int!
    success: Int!
    ipAddress: Int!
    userAgent: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type LoginLogMinAggregateOutputType {
    id: String
    userId: String
    success: Boolean
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type LoginLogMaxAggregateOutputType {
    id: String
    userId: String
    success: Boolean
    ipAddress: String
    userAgent: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type PasswordResetTokenCountAggregateOutputType {
    id: Int!
    token: Int!
    userId: Int!
    expiresAt: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type PasswordResetTokenMinAggregateOutputType {
    id: String
    token: String
    userId: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  type PasswordResetTokenMaxAggregateOutputType {
    id: String
    token: String
    userId: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  type TokenBlacklistCountAggregateOutputType {
    id: Int!
    token: Int!
    expiresAt: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type TokenBlacklistMinAggregateOutputType {
    id: String
    token: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  type TokenBlacklistMaxAggregateOutputType {
    id: String
    token: String
    expiresAt: DateTime
    createdAt: DateTime
    updatedAt: DateTime
  }

  type CreateManyUserAndReturnOutputType {
    id: String!
    email: String!
    password: String
    roles: [Roles!]
    googleId: String
    googleProfile: Json
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type CreateManyRefreshTokenAndReturnOutputType {
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

  type CreateManySessionAndReturnOutputType {
    id: String!
    userId: String!
    deviceInfo: String
    ipAddress: String
    lastActiveAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
  }

  type CreateManyLoginLogAndReturnOutputType {
    id: String!
    userId: String
    success: Boolean!
    ipAddress: String
    userAgent: String
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User
  }

  type CreateManyPasswordResetTokenAndReturnOutputType {
    id: String!
    token: String!
    userId: String!
    expiresAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
  }

  type CreateManyTokenBlacklistAndReturnOutputType {
    id: String!
    token: String!
    expiresAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`
