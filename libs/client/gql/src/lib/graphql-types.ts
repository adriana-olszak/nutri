export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Json: { input: any; output: any; }
};

export type AccountInfo = {
  __typename?: 'AccountInfo';
  email?: Maybe<Scalars['String']['output']>;
  googleProfile?: Maybe<GoogleProfile>;
  hasPassword: Scalars['Boolean']['output'];
};

export type AggregateLoginLog = {
  __typename?: 'AggregateLoginLog';
  _count?: Maybe<LoginLogCountAggregateOutputType>;
  _max?: Maybe<LoginLogMaxAggregateOutputType>;
  _min?: Maybe<LoginLogMinAggregateOutputType>;
};

export type AggregatePasswordResetToken = {
  __typename?: 'AggregatePasswordResetToken';
  _count?: Maybe<PasswordResetTokenCountAggregateOutputType>;
  _max?: Maybe<PasswordResetTokenMaxAggregateOutputType>;
  _min?: Maybe<PasswordResetTokenMinAggregateOutputType>;
};

export type AggregateRefreshToken = {
  __typename?: 'AggregateRefreshToken';
  _count?: Maybe<RefreshTokenCountAggregateOutputType>;
  _max?: Maybe<RefreshTokenMaxAggregateOutputType>;
  _min?: Maybe<RefreshTokenMinAggregateOutputType>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregateOutputType>;
  _max?: Maybe<SessionMaxAggregateOutputType>;
  _min?: Maybe<SessionMinAggregateOutputType>;
};

export type AggregateTokenBlacklist = {
  __typename?: 'AggregateTokenBlacklist';
  _count?: Maybe<TokenBlacklistCountAggregateOutputType>;
  _max?: Maybe<TokenBlacklistMaxAggregateOutputType>;
  _min?: Maybe<TokenBlacklistMinAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
};

export type AuthLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthPasswordChangeInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type AuthPasswordResetConfirmationInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type AuthPasswordResetRequestInput = {
  email: Scalars['String']['input'];
};

export type AuthRefreshTokenInput = {
  refreshToken: Scalars['String']['input'];
};

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthSession = {
  __typename?: 'AuthSession';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  roles: Array<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int']['output'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type CreateManyLoginLogAndReturnOutputType = {
  __typename?: 'CreateManyLoginLogAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userAgent?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CreateManyPasswordResetTokenAndReturnOutputType = {
  __typename?: 'CreateManyPasswordResetTokenAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CreateManyRefreshTokenAndReturnOutputType = {
  __typename?: 'CreateManyRefreshTokenAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  familyId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  used: Scalars['Boolean']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CreateManySessionAndReturnOutputType = {
  __typename?: 'CreateManySessionAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  deviceInfo?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  lastActiveAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CreateManyTokenBlacklistAndReturnOutputType = {
  __typename?: 'CreateManyTokenBlacklistAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateManyUserAndReturnOutputType = {
  __typename?: 'CreateManyUserAndReturnOutputType';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  googleProfile?: Maybe<Scalars['Json']['output']>;
  id: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Roles>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumRolesNullableListFilter = {
  equals?: InputMaybe<Array<Roles>>;
  has?: InputMaybe<Roles>;
  hasEvery?: InputMaybe<Array<Roles>>;
  hasSome?: InputMaybe<Array<Roles>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GoogleProfile = {
  __typename?: 'GoogleProfile';
  email?: Maybe<Scalars['String']['output']>;
  family_name?: Maybe<Scalars['String']['output']>;
  given_name?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
};

export enum JsonNullValueFilter {
  AnyNull = 'AnyNull',
  DbNull = 'DbNull',
  JsonNull = 'JsonNull'
}

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['Json']['input']>;
  array_ends_with?: InputMaybe<Scalars['Json']['input']>;
  array_starts_with?: InputMaybe<Scalars['Json']['input']>;
  equals?: InputMaybe<Scalars['Json']['input']>;
  gt?: InputMaybe<Scalars['Json']['input']>;
  gte?: InputMaybe<Scalars['Json']['input']>;
  lt?: InputMaybe<Scalars['Json']['input']>;
  lte?: InputMaybe<Scalars['Json']['input']>;
  not?: InputMaybe<Scalars['Json']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedJsonNullableFilter>;
  _min?: InputMaybe<NestedJsonNullableFilter>;
  array_contains?: InputMaybe<Scalars['Json']['input']>;
  array_ends_with?: InputMaybe<Scalars['Json']['input']>;
  array_starts_with?: InputMaybe<Scalars['Json']['input']>;
  equals?: InputMaybe<Scalars['Json']['input']>;
  gt?: InputMaybe<Scalars['Json']['input']>;
  gte?: InputMaybe<Scalars['Json']['input']>;
  lt?: InputMaybe<Scalars['Json']['input']>;
  lte?: InputMaybe<Scalars['Json']['input']>;
  not?: InputMaybe<Scalars['Json']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLog = {
  __typename?: 'LoginLog';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userAgent?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};


export type LoginLogUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type LoginLogCountAggregateOutputType = {
  __typename?: 'LoginLogCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  ipAddress: Scalars['Int']['output'];
  success: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userAgent: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type LoginLogCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipAddress?: InputMaybe<SortOrder>;
  success?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userAgent?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LoginLogCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutLoginLogsInput>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogCreateManyUserInputEnvelope = {
  data: Array<LoginLogCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LoginLogCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LoginLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LoginLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<LoginLogCreateManyUserInputEnvelope>;
};

export type LoginLogCreateOrConnectWithoutUserInput = {
  create: LoginLogCreateWithoutUserInput;
  where: LoginLogWhereUniqueInput;
};

export type LoginLogCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogGroupByOutputType = {
  __typename?: 'LoginLogGroupByOutputType';
  _count?: Maybe<LoginLogCountAggregateOutputType>;
  _max?: Maybe<LoginLogMaxAggregateOutputType>;
  _min?: Maybe<LoginLogMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userAgent?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type LoginLogListRelationFilter = {
  every?: InputMaybe<LoginLogWhereInput>;
  none?: InputMaybe<LoginLogWhereInput>;
  some?: InputMaybe<LoginLogWhereInput>;
};

export type LoginLogMaxAggregateOutputType = {
  __typename?: 'LoginLogMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type LoginLogMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipAddress?: InputMaybe<SortOrder>;
  success?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userAgent?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LoginLogMinAggregateOutputType = {
  __typename?: 'LoginLogMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type LoginLogMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipAddress?: InputMaybe<SortOrder>;
  success?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userAgent?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type LoginLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LoginLogOrderByWithAggregationInput = {
  _count?: InputMaybe<LoginLogCountOrderByAggregateInput>;
  _max?: InputMaybe<LoginLogMaxOrderByAggregateInput>;
  _min?: InputMaybe<LoginLogMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipAddress?: InputMaybe<SortOrderInput>;
  success?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userAgent?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrderInput>;
};

export type LoginLogOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipAddress?: InputMaybe<SortOrderInput>;
  success?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userAgent?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrderInput>;
};

export enum LoginLogScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  IpAddress = 'ipAddress',
  Success = 'success',
  UpdatedAt = 'updatedAt',
  UserAgent = 'userAgent',
  UserId = 'userId'
}

export type LoginLogScalarWhereInput = {
  AND?: InputMaybe<Array<LoginLogScalarWhereInput>>;
  NOT?: InputMaybe<Array<LoginLogScalarWhereInput>>;
  OR?: InputMaybe<Array<LoginLogScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  success?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userAgent?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type LoginLogScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LoginLogScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LoginLogScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LoginLogScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  ipAddress?: InputMaybe<StringNullableWithAggregatesFilter>;
  success?: InputMaybe<BoolWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userAgent?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type LoginLogUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LoginLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LoginLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<LoginLogCreateManyUserInputEnvelope>;
};

export type LoginLogUncheckedCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogUncheckedUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogUncheckedUpdateManyWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LoginLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LoginLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<LoginLogCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LoginLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  set?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  update?: InputMaybe<Array<LoginLogUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<LoginLogUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<LoginLogUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LoginLogUncheckedUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutLoginLogsNestedInput>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogUpdateManyWithWhereWithoutUserInput = {
  data: LoginLogUpdateManyMutationInput;
  where: LoginLogScalarWhereInput;
};

export type LoginLogUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LoginLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LoginLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<LoginLogCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LoginLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  set?: InputMaybe<Array<LoginLogWhereUniqueInput>>;
  update?: InputMaybe<Array<LoginLogUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<LoginLogUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<LoginLogUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LoginLogUpdateWithWhereUniqueWithoutUserInput = {
  data: LoginLogUpdateWithoutUserInput;
  where: LoginLogWhereUniqueInput;
};

export type LoginLogUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type LoginLogUpsertWithWhereUniqueWithoutUserInput = {
  create: LoginLogCreateWithoutUserInput;
  update: LoginLogUpdateWithoutUserInput;
  where: LoginLogWhereUniqueInput;
};

export type LoginLogWhereInput = {
  AND?: InputMaybe<Array<LoginLogWhereInput>>;
  NOT?: InputMaybe<Array<LoginLogWhereInput>>;
  OR?: InputMaybe<Array<LoginLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  success?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userAgent?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type LoginLogWhereUniqueInput = {
  AND?: InputMaybe<Array<LoginLogWhereInput>>;
  NOT?: InputMaybe<Array<LoginLogWhereInput>>;
  OR?: InputMaybe<Array<LoginLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  success?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userAgent?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authLogin: AuthSession;
  authLogout: Scalars['Boolean']['output'];
  authPasswordChange?: Maybe<Scalars['Boolean']['output']>;
  authPasswordResetConfirmation: AuthSession;
  authPasswordResetRequest?: Maybe<Scalars['Boolean']['output']>;
  authRefreshToken: RefreshToken;
  authRegister: AuthSession;
  createManyLoginLog?: Maybe<BatchPayload>;
  createManyLoginLogAndReturn: Array<LoginLog>;
  createManyPasswordResetToken?: Maybe<BatchPayload>;
  createManyPasswordResetTokenAndReturn: Array<PasswordResetToken>;
  createManyRefreshToken?: Maybe<BatchPayload>;
  createManyRefreshTokenAndReturn: Array<RefreshToken>;
  createManySession?: Maybe<BatchPayload>;
  createManySessionAndReturn: Array<Session>;
  createManyTokenBlacklist?: Maybe<BatchPayload>;
  createManyTokenBlacklistAndReturn: Array<TokenBlacklist>;
  createManyUser?: Maybe<BatchPayload>;
  createManyUserAndReturn: Array<User>;
  createOneUser: User;
  deleteManyUser?: Maybe<BatchPayload>;
  deleteOneUser?: Maybe<User>;
  updateManyUser?: Maybe<BatchPayload>;
  updateOneUser: User;
  upsertOneUser?: Maybe<User>;
};


export type MutationAuthLoginArgs = {
  data: AuthLoginInput;
};


export type MutationAuthLogoutArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationAuthPasswordChangeArgs = {
  data: AuthPasswordChangeInput;
};


export type MutationAuthPasswordResetConfirmationArgs = {
  data: AuthPasswordResetConfirmationInput;
};


export type MutationAuthPasswordResetRequestArgs = {
  data: AuthPasswordResetRequestInput;
};


export type MutationAuthRefreshTokenArgs = {
  data?: InputMaybe<AuthRefreshTokenInput>;
};


export type MutationAuthRegisterArgs = {
  data: AuthRegisterInput;
};


export type MutationCreateManyLoginLogArgs = {
  data: Array<LoginLogCreateManyInput>;
};


export type MutationCreateManyLoginLogAndReturnArgs = {
  data: Array<LoginLogCreateManyInput>;
};


export type MutationCreateManyPasswordResetTokenArgs = {
  data: Array<PasswordResetTokenCreateManyInput>;
};


export type MutationCreateManyPasswordResetTokenAndReturnArgs = {
  data: Array<PasswordResetTokenCreateManyInput>;
};


export type MutationCreateManyRefreshTokenArgs = {
  data: Array<RefreshTokenCreateManyInput>;
};


export type MutationCreateManyRefreshTokenAndReturnArgs = {
  data: Array<RefreshTokenCreateManyInput>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
};


export type MutationCreateManySessionAndReturnArgs = {
  data: Array<SessionCreateManyInput>;
};


export type MutationCreateManyTokenBlacklistArgs = {
  data: Array<TokenBlacklistCreateManyInput>;
};


export type MutationCreateManyTokenBlacklistAndReturnArgs = {
  data: Array<TokenBlacklistCreateManyInput>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
};


export type MutationCreateManyUserAndReturnArgs = {
  data: Array<UserCreateManyInput>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedJsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['Json']['input']>;
  array_ends_with?: InputMaybe<Scalars['Json']['input']>;
  array_starts_with?: InputMaybe<Scalars['Json']['input']>;
  equals?: InputMaybe<Scalars['Json']['input']>;
  gt?: InputMaybe<Scalars['Json']['input']>;
  gte?: InputMaybe<Scalars['Json']['input']>;
  lt?: InputMaybe<Scalars['Json']['input']>;
  lte?: InputMaybe<Scalars['Json']['input']>;
  not?: InputMaybe<Scalars['Json']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullableJsonNullValueInput {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull'
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type PasswordResetToken = {
  __typename?: 'PasswordResetToken';
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type PasswordResetTokenCountAggregateOutputType = {
  __typename?: 'PasswordResetTokenCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expiresAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type PasswordResetTokenCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PasswordResetTokenCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutPasswordResetTokensInput;
};

export type PasswordResetTokenCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type PasswordResetTokenCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PasswordResetTokenCreateManyUserInputEnvelope = {
  data: Array<PasswordResetTokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PasswordResetTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PasswordResetTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<PasswordResetTokenCreateManyUserInputEnvelope>;
};

export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
  create: PasswordResetTokenCreateWithoutUserInput;
  where: PasswordResetTokenWhereUniqueInput;
};

export type PasswordResetTokenCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PasswordResetTokenGroupByOutputType = {
  __typename?: 'PasswordResetTokenGroupByOutputType';
  _count?: Maybe<PasswordResetTokenCountAggregateOutputType>;
  _max?: Maybe<PasswordResetTokenMaxAggregateOutputType>;
  _min?: Maybe<PasswordResetTokenMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type PasswordResetTokenListRelationFilter = {
  every?: InputMaybe<PasswordResetTokenWhereInput>;
  none?: InputMaybe<PasswordResetTokenWhereInput>;
  some?: InputMaybe<PasswordResetTokenWhereInput>;
};

export type PasswordResetTokenMaxAggregateOutputType = {
  __typename?: 'PasswordResetTokenMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PasswordResetTokenMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PasswordResetTokenMinAggregateOutputType = {
  __typename?: 'PasswordResetTokenMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PasswordResetTokenMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PasswordResetTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PasswordResetTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<PasswordResetTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<PasswordResetTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<PasswordResetTokenMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PasswordResetTokenOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum PasswordResetTokenScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpiresAt = 'expiresAt',
  Id = 'id',
  Token = 'token',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type PasswordResetTokenScalarWhereInput = {
  AND?: InputMaybe<Array<PasswordResetTokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<PasswordResetTokenScalarWhereInput>>;
  OR?: InputMaybe<Array<PasswordResetTokenScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PasswordResetTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PasswordResetTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PasswordResetTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PasswordResetTokenScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiresAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type PasswordResetTokenUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PasswordResetTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PasswordResetTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<PasswordResetTokenCreateManyUserInputEnvelope>;
};

export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PasswordResetTokenUncheckedUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type PasswordResetTokenUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PasswordResetTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PasswordResetTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<PasswordResetTokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PasswordResetTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  update?: InputMaybe<Array<PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PasswordResetTokenUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PasswordResetTokenUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput>;
};

export type PasswordResetTokenUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
  data: PasswordResetTokenUpdateManyMutationInput;
  where: PasswordResetTokenScalarWhereInput;
};

export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PasswordResetTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PasswordResetTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<PasswordResetTokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PasswordResetTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<PasswordResetTokenWhereUniqueInput>>;
  update?: InputMaybe<Array<PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PasswordResetTokenUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
  data: PasswordResetTokenUpdateWithoutUserInput;
  where: PasswordResetTokenWhereUniqueInput;
};

export type PasswordResetTokenUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
  create: PasswordResetTokenCreateWithoutUserInput;
  update: PasswordResetTokenUpdateWithoutUserInput;
  where: PasswordResetTokenWhereUniqueInput;
};

export type PasswordResetTokenWhereInput = {
  AND?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  NOT?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  OR?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PasswordResetTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  NOT?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  OR?: InputMaybe<Array<PasswordResetTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Query = {
  __typename?: 'Query';
  accountInfo: AccountInfo;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstUser?: Maybe<User>;
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int']['output'];
  findUniqueUser?: Maybe<User>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshToken = {
  __typename?: 'RefreshToken';
  accessToken: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  familyId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  used: Scalars['Boolean']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type RefreshTokenCountAggregateOutputType = {
  __typename?: 'RefreshTokenCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expiresAt: Scalars['Int']['output'];
  familyId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  used: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type RefreshTokenCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  familyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  used?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RefreshTokenCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  familyId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
  user: UserCreateNestedOneWithoutRefreshTokensInput;
};

export type RefreshTokenCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  familyId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['String']['input'];
};

export type RefreshTokenCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  familyId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenCreateManyUserInputEnvelope = {
  data: Array<RefreshTokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RefreshTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
};

export type RefreshTokenCreateOrConnectWithoutUserInput = {
  create: RefreshTokenCreateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  familyId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenGroupByOutputType = {
  __typename?: 'RefreshTokenGroupByOutputType';
  _count?: Maybe<RefreshTokenCountAggregateOutputType>;
  _max?: Maybe<RefreshTokenMaxAggregateOutputType>;
  _min?: Maybe<RefreshTokenMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  familyId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  used: Scalars['Boolean']['output'];
  userId: Scalars['String']['output'];
};

export type RefreshTokenListRelationFilter = {
  every?: InputMaybe<RefreshTokenWhereInput>;
  none?: InputMaybe<RefreshTokenWhereInput>;
  some?: InputMaybe<RefreshTokenWhereInput>;
};

export type RefreshTokenMaxAggregateOutputType = {
  __typename?: 'RefreshTokenMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  familyId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  used?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RefreshTokenMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  familyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  used?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RefreshTokenMinAggregateOutputType = {
  __typename?: 'RefreshTokenMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  familyId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  used?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RefreshTokenMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  familyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  used?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RefreshTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RefreshTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<RefreshTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<RefreshTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<RefreshTokenMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  familyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  used?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RefreshTokenOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  familyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  used?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum RefreshTokenScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpiresAt = 'expiresAt',
  FamilyId = 'familyId',
  Id = 'id',
  Token = 'token',
  UpdatedAt = 'updatedAt',
  Used = 'used',
  UserId = 'userId'
}

export type RefreshTokenScalarWhereInput = {
  AND?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  familyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  used?: InputMaybe<BoolFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RefreshTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RefreshTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RefreshTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RefreshTokenScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiresAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  familyId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  used?: InputMaybe<BoolWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type RefreshTokenUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  familyId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['String']['input'];
};

export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RefreshTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
};

export type RefreshTokenUncheckedCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  familyId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenUncheckedUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  familyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type RefreshTokenUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  familyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  familyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RefreshTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  update?: InputMaybe<Array<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RefreshTokenUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RefreshTokenUncheckedUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  familyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  familyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRefreshTokensNestedInput>;
};

export type RefreshTokenUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  familyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
  data: RefreshTokenUpdateManyMutationInput;
  where: RefreshTokenScalarWhereInput;
};

export type RefreshTokenUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RefreshTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  update?: InputMaybe<Array<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RefreshTokenUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
  data: RefreshTokenUpdateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  familyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
  create: RefreshTokenCreateWithoutUserInput;
  update: RefreshTokenUpdateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenWhereInput = {
  AND?: InputMaybe<Array<RefreshTokenWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  familyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  used?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RefreshTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<RefreshTokenWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  familyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  used?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum Roles {
  Superadmin = 'SUPERADMIN',
  User = 'USER'
}

export type Session = {
  __typename?: 'Session';
  createdAt: Scalars['DateTime']['output'];
  deviceInfo?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  lastActiveAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type SessionCountAggregateOutputType = {
  __typename?: 'SessionCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deviceInfo: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  ipAddress: Scalars['Int']['output'];
  lastActiveAt: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SessionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deviceInfo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipAddress?: InputMaybe<SortOrder>;
  lastActiveAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type SessionCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SessionGroupByOutputType = {
  __typename?: 'SessionGroupByOutputType';
  _count?: Maybe<SessionCountAggregateOutputType>;
  _max?: Maybe<SessionMaxAggregateOutputType>;
  _min?: Maybe<SessionMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  deviceInfo?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  lastActiveAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregateOutputType = {
  __typename?: 'SessionMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deviceInfo?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  lastActiveAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deviceInfo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipAddress?: InputMaybe<SortOrder>;
  lastActiveAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionMinAggregateOutputType = {
  __typename?: 'SessionMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deviceInfo?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  lastActiveAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deviceInfo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipAddress?: InputMaybe<SortOrder>;
  lastActiveAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithAggregationInput = {
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deviceInfo?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  ipAddress?: InputMaybe<SortOrderInput>;
  lastActiveAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deviceInfo?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  ipAddress?: InputMaybe<SortOrderInput>;
  lastActiveAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeviceInfo = 'deviceInfo',
  Id = 'id',
  IpAddress = 'ipAddress',
  LastActiveAt = 'lastActiveAt',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deviceInfo?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  lastActiveAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deviceInfo?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  ipAddress?: InputMaybe<StringNullableWithAggregatesFilter>;
  lastActiveAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type SessionUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionUncheckedCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SessionUncheckedUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SessionUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SessionUncheckedUpdateManyWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUncheckedUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SessionUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsNestedInput>;
};

export type SessionUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceInfo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  lastActiveAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deviceInfo?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  lastActiveAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deviceInfo?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  lastActiveAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TokenBlacklist = {
  __typename?: 'TokenBlacklist';
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TokenBlacklistCountAggregateOutputType = {
  __typename?: 'TokenBlacklistCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expiresAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type TokenBlacklistCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TokenBlacklistCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TokenBlacklistCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TokenBlacklistGroupByOutputType = {
  __typename?: 'TokenBlacklistGroupByOutputType';
  _count?: Maybe<TokenBlacklistCountAggregateOutputType>;
  _max?: Maybe<TokenBlacklistMaxAggregateOutputType>;
  _min?: Maybe<TokenBlacklistMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TokenBlacklistMaxAggregateOutputType = {
  __typename?: 'TokenBlacklistMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TokenBlacklistMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TokenBlacklistMinAggregateOutputType = {
  __typename?: 'TokenBlacklistMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TokenBlacklistMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TokenBlacklistOrderByWithAggregationInput = {
  _count?: InputMaybe<TokenBlacklistCountOrderByAggregateInput>;
  _max?: InputMaybe<TokenBlacklistMaxOrderByAggregateInput>;
  _min?: InputMaybe<TokenBlacklistMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TokenBlacklistOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum TokenBlacklistScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpiresAt = 'expiresAt',
  Id = 'id',
  Token = 'token',
  UpdatedAt = 'updatedAt'
}

export type TokenBlacklistScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TokenBlacklistScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TokenBlacklistScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TokenBlacklistScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiresAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TokenBlacklistUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TokenBlacklistUncheckedUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TokenBlacklistUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TokenBlacklistUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TokenBlacklistUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TokenBlacklistWhereInput = {
  AND?: InputMaybe<Array<TokenBlacklistWhereInput>>;
  NOT?: InputMaybe<Array<TokenBlacklistWhereInput>>;
  OR?: InputMaybe<Array<TokenBlacklistWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TokenBlacklistWhereUniqueInput = {
  AND?: InputMaybe<Array<TokenBlacklistWhereInput>>;
  NOT?: InputMaybe<Array<TokenBlacklistWhereInput>>;
  OR?: InputMaybe<Array<TokenBlacklistWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum TransactionIsolationLevel {
  ReadCommitted = 'ReadCommitted',
  ReadUncommitted = 'ReadUncommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable'
}

export type User = {
  __typename?: 'User';
  _count: UserCountOutputType;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  googleProfile?: Maybe<Scalars['Json']['output']>;
  id: Scalars['String']['output'];
  loginLogs: Array<LoginLog>;
  password?: Maybe<Scalars['String']['output']>;
  passwordResetTokens: Array<PasswordResetToken>;
  refreshTokens: Array<RefreshToken>;
  roles: Array<Roles>;
  sessions: Array<Session>;
  updatedAt: Scalars['DateTime']['output'];
};


export type UserLoginLogsArgs = {
  cursor?: InputMaybe<LoginLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<LoginLogScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<LoginLogOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LoginLogWhereInput>;
};


export type UserPasswordResetTokensArgs = {
  cursor?: InputMaybe<PasswordResetTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<PasswordResetTokenScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<PasswordResetTokenOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PasswordResetTokenWhereInput>;
};


export type UserRefreshTokensArgs = {
  cursor?: InputMaybe<RefreshTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<RefreshTokenScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<RefreshTokenOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RefreshTokenWhereInput>;
};


export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<SessionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<SessionOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  googleId: Scalars['Int']['output'];
  googleProfile: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  roles: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  googleId?: InputMaybe<SortOrder>;
  googleProfile?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  roles?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  loginLogs: Scalars['Int']['output'];
  passwordResetTokens: Scalars['Int']['output'];
  refreshTokens: Scalars['Int']['output'];
  sessions: Scalars['Int']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenCreateNestedManyWithoutUserInput>;
  refreshTokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Roles>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateNestedOneWithoutLoginLogsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLoginLogsInput>;
  create?: InputMaybe<UserCreateWithoutLoginLogsInput>;
};

export type UserCreateNestedOneWithoutPasswordResetTokensInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPasswordResetTokensInput>;
  create?: InputMaybe<UserCreateWithoutPasswordResetTokensInput>;
};

export type UserCreateNestedOneWithoutRefreshTokensInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRefreshTokensInput>;
  create?: InputMaybe<UserCreateWithoutRefreshTokensInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
};

export type UserCreateOrConnectWithoutLoginLogsInput = {
  create: UserCreateWithoutLoginLogsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPasswordResetTokensInput = {
  create: UserCreateWithoutPasswordResetTokensInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRefreshTokensInput = {
  create: UserCreateWithoutRefreshTokensInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutLoginLogsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenCreateNestedManyWithoutUserInput>;
  refreshTokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutPasswordResetTokensInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  refreshTokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutRefreshTokensInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutSessionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenCreateNestedManyWithoutUserInput>;
  refreshTokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<Array<Roles>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreaterolesInput = {
  set: Array<Roles>;
};

export type UserGroupByOutputType = {
  __typename?: 'UserGroupByOutputType';
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  googleId?: Maybe<Scalars['String']['output']>;
  googleProfile?: Maybe<Scalars['Json']['output']>;
  id: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Roles>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  googleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  googleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  googleId?: InputMaybe<SortOrderInput>;
  googleProfile?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrderInput>;
  roles?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  googleId?: InputMaybe<SortOrderInput>;
  googleProfile?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  loginLogs?: InputMaybe<LoginLogOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrderInput>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenOrderByRelationAggregateInput>;
  refreshTokens?: InputMaybe<RefreshTokenOrderByRelationAggregateInput>;
  roles?: InputMaybe<SortOrder>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  GoogleId = 'googleId',
  GoogleProfile = 'googleProfile',
  Id = 'id',
  Password = 'password',
  Roles = 'roles',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  googleId?: InputMaybe<StringNullableWithAggregatesFilter>;
  googleProfile?: InputMaybe<JsonNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  roles?: InputMaybe<EnumRolesNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput>;
  refreshTokens?: InputMaybe<RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUncheckedCreateWithoutLoginLogsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput>;
  refreshTokens?: InputMaybe<RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUncheckedCreateWithoutPasswordResetTokensInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  refreshTokens?: InputMaybe<RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUncheckedCreateWithoutRefreshTokensInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUncheckedCreateWithoutSessionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUncheckedCreateNestedManyWithoutUserInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput>;
  refreshTokens?: InputMaybe<RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<Array<Roles>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUncheckedUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUncheckedUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput>;
  refreshTokens?: InputMaybe<RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUncheckedUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Roles>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUncheckedUpdateWithoutLoginLogsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput>;
  refreshTokens?: InputMaybe<RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUncheckedUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUncheckedUpdateWithoutPasswordResetTokensInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUncheckedUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  refreshTokens?: InputMaybe<RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUncheckedUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUncheckedUpdateWithoutRefreshTokensInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUncheckedUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUncheckedUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUncheckedUpdateWithoutSessionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUncheckedUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput>;
  refreshTokens?: InputMaybe<RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<Array<Roles>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUpdateManyWithoutUserNestedInput>;
  refreshTokens?: InputMaybe<RefreshTokenUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Roles>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPasswordResetTokensInput>;
  create?: InputMaybe<UserCreateWithoutPasswordResetTokensInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutPasswordResetTokensInput>;
  upsert?: InputMaybe<UserUpsertWithoutPasswordResetTokensInput>;
};

export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRefreshTokensInput>;
  create?: InputMaybe<UserCreateWithoutRefreshTokensInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutRefreshTokensInput>;
  upsert?: InputMaybe<UserUpsertWithoutRefreshTokensInput>;
};

export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateOneWithoutLoginLogsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLoginLogsInput>;
  create?: InputMaybe<UserCreateWithoutLoginLogsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutLoginLogsInput>;
  upsert?: InputMaybe<UserUpsertWithoutLoginLogsInput>;
};

export type UserUpdateToOneWithWhereWithoutLoginLogsInput = {
  data: UserUpdateWithoutLoginLogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
  data: UserUpdateWithoutPasswordResetTokensInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
  data: UserUpdateWithoutRefreshTokensInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSessionsInput = {
  data: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutLoginLogsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUpdateManyWithoutUserNestedInput>;
  refreshTokens?: InputMaybe<RefreshTokenUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateWithoutPasswordResetTokensInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  refreshTokens?: InputMaybe<RefreshTokenUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateWithoutRefreshTokensInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<Array<Roles>>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateWithoutSessionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenUpdateManyWithoutUserNestedInput>;
  refreshTokens?: InputMaybe<RefreshTokenUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<Array<Roles>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdaterolesInput = {
  push?: InputMaybe<Array<Roles>>;
  set?: InputMaybe<Array<Roles>>;
};

export type UserUpsertWithoutLoginLogsInput = {
  create: UserCreateWithoutLoginLogsInput;
  update: UserUpdateWithoutLoginLogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutPasswordResetTokensInput = {
  create: UserCreateWithoutPasswordResetTokensInput;
  update: UserUpdateWithoutPasswordResetTokensInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutRefreshTokensInput = {
  create: UserCreateWithoutRefreshTokensInput;
  update: UserUpdateWithoutRefreshTokensInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  update: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  googleId?: InputMaybe<StringNullableFilter>;
  googleProfile?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  loginLogs?: InputMaybe<LoginLogListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenListRelationFilter>;
  refreshTokens?: InputMaybe<RefreshTokenListRelationFilter>;
  roles?: InputMaybe<EnumRolesNullableListFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfile?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginLogs?: InputMaybe<LoginLogListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  passwordResetTokens?: InputMaybe<PasswordResetTokenListRelationFilter>;
  refreshTokens?: InputMaybe<RefreshTokenListRelationFilter>;
  roles?: InputMaybe<EnumRolesNullableListFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};
