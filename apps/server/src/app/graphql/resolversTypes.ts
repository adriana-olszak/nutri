import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

import { GetAggregateResult } from '@prisma/client/runtime/library'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

type NoExpand<T> = T extends unknown ? T : never

type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
    ?
        | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
    : never
>

export type Resolvers = {
  [key: string]: { [key: string]: Resolver<any, any, any> }
} & {
  User?: User
  RefreshToken?: RefreshToken
  Session?: Session
  LoginLog?: LoginLog
  PasswordResetToken?: PasswordResetToken
  TokenBlacklist?: TokenBlacklist
  CreateManyUserAndReturnOutputType?: CreateManyUserAndReturnOutputType
  CreateManyRefreshTokenAndReturnOutputType?: CreateManyRefreshTokenAndReturnOutputType
  CreateManySessionAndReturnOutputType?: CreateManySessionAndReturnOutputType
  CreateManyLoginLogAndReturnOutputType?: CreateManyLoginLogAndReturnOutputType
  CreateManyPasswordResetTokenAndReturnOutputType?: CreateManyPasswordResetTokenAndReturnOutputType
  CreateManyTokenBlacklistAndReturnOutputType?: CreateManyTokenBlacklistAndReturnOutputType
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AggregateRefreshToken?: AggregateRefreshToken
  RefreshTokenGroupByOutputType?: RefreshTokenGroupByOutputType
  AggregateSession?: AggregateSession
  SessionGroupByOutputType?: SessionGroupByOutputType
  AggregateLoginLog?: AggregateLoginLog
  LoginLogGroupByOutputType?: LoginLogGroupByOutputType
  AggregatePasswordResetToken?: AggregatePasswordResetToken
  PasswordResetTokenGroupByOutputType?: PasswordResetTokenGroupByOutputType
  AggregateTokenBlacklist?: AggregateTokenBlacklist
  TokenBlacklistGroupByOutputType?: TokenBlacklistGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountOutputType?: UserCountOutputType
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  RefreshTokenCountAggregateOutputType?: RefreshTokenCountAggregateOutputType
  RefreshTokenMinAggregateOutputType?: RefreshTokenMinAggregateOutputType
  RefreshTokenMaxAggregateOutputType?: RefreshTokenMaxAggregateOutputType
  SessionCountAggregateOutputType?: SessionCountAggregateOutputType
  SessionMinAggregateOutputType?: SessionMinAggregateOutputType
  SessionMaxAggregateOutputType?: SessionMaxAggregateOutputType
  LoginLogCountAggregateOutputType?: LoginLogCountAggregateOutputType
  LoginLogMinAggregateOutputType?: LoginLogMinAggregateOutputType
  LoginLogMaxAggregateOutputType?: LoginLogMaxAggregateOutputType
  PasswordResetTokenCountAggregateOutputType?: PasswordResetTokenCountAggregateOutputType
  PasswordResetTokenMinAggregateOutputType?: PasswordResetTokenMinAggregateOutputType
  PasswordResetTokenMaxAggregateOutputType?: PasswordResetTokenMaxAggregateOutputType
  TokenBlacklistCountAggregateOutputType?: TokenBlacklistCountAggregateOutputType
  TokenBlacklistMinAggregateOutputType?: TokenBlacklistMinAggregateOutputType
  TokenBlacklistMaxAggregateOutputType?: TokenBlacklistMaxAggregateOutputType
}

export type User = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.User, {}, string>
  email?: Resolver<Client.User, {}, string>
  password?: Resolver<Client.User, {}, string | null>
  roles?: Resolver<Client.User, {}, Client.Roles[] | null>
  googleId?: Resolver<Client.User, {}, string | null>
  googleProfile?: Resolver<Client.User, {}, any | null>
  createdAt?: Resolver<Client.User, {}, Date>
  updatedAt?: Resolver<Client.User, {}, Date>
  refreshTokens?: Resolver<
    Client.User,
    UserRefreshTokensArgs,
    Client.RefreshToken[] | null
  >
  sessions?: Resolver<Client.User, UserSessionsArgs, Client.Session[] | null>
  loginLogs?: Resolver<Client.User, UserLoginLogsArgs, Client.LoginLog[] | null>
  passwordResetTokens?: Resolver<
    Client.User,
    UserPasswordResetTokensArgs,
    Client.PasswordResetToken[] | null
  >
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>
}

export type RefreshToken = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.RefreshToken, {}, string>
  token?: Resolver<Client.RefreshToken, {}, string>
  userId?: Resolver<Client.RefreshToken, {}, string>
  familyId?: Resolver<Client.RefreshToken, {}, string>
  sessionId?: Resolver<Client.RefreshToken, {}, string>
  expiresAt?: Resolver<Client.RefreshToken, {}, Date>
  used?: Resolver<Client.RefreshToken, {}, boolean>
  createdAt?: Resolver<Client.RefreshToken, {}, Date>
  updatedAt?: Resolver<Client.RefreshToken, {}, Date>
  user?: Resolver<Client.RefreshToken, {}, Client.User>
}

export type Session = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.Session, {}, string>
  userId?: Resolver<Client.Session, {}, string>
  deviceInfo?: Resolver<Client.Session, {}, string | null>
  ipAddress?: Resolver<Client.Session, {}, string | null>
  lastActiveAt?: Resolver<Client.Session, {}, Date>
  createdAt?: Resolver<Client.Session, {}, Date>
  updatedAt?: Resolver<Client.Session, {}, Date>
  user?: Resolver<Client.Session, {}, Client.User>
}

export type LoginLog = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.LoginLog, {}, string>
  userId?: Resolver<Client.LoginLog, {}, string | null>
  success?: Resolver<Client.LoginLog, {}, boolean>
  ipAddress?: Resolver<Client.LoginLog, {}, string | null>
  userAgent?: Resolver<Client.LoginLog, {}, string | null>
  createdAt?: Resolver<Client.LoginLog, {}, Date>
  updatedAt?: Resolver<Client.LoginLog, {}, Date>
  user?: Resolver<Client.LoginLog, LoginLogUserArgs, Client.User | null>
}

export type PasswordResetToken = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.PasswordResetToken, {}, string>
  token?: Resolver<Client.PasswordResetToken, {}, string>
  userId?: Resolver<Client.PasswordResetToken, {}, string>
  expiresAt?: Resolver<Client.PasswordResetToken, {}, Date>
  createdAt?: Resolver<Client.PasswordResetToken, {}, Date>
  updatedAt?: Resolver<Client.PasswordResetToken, {}, Date>
  user?: Resolver<Client.PasswordResetToken, {}, Client.User>
}

export type TokenBlacklist = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.TokenBlacklist, {}, string>
  token?: Resolver<Client.TokenBlacklist, {}, string>
  expiresAt?: Resolver<Client.TokenBlacklist, {}, Date>
  createdAt?: Resolver<Client.TokenBlacklist, {}, Date>
  updatedAt?: Resolver<Client.TokenBlacklist, {}, Date>
}

export type CreateManyUserAndReturnOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    string
  >
  email?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    string
  >
  password?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    string | null
  >
  roles?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    Client.Roles[] | null
  >
  googleId?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    string | null
  >
  googleProfile?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    any | null
  >
  createdAt?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    Date
  >
  updatedAt?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    Date
  >
}

export type CreateManyRefreshTokenAndReturnOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    ReturnType<Client.Prisma.RefreshTokenDelegate['createManyAndReturn']>,
    {},
    string
  >
  token?: Resolver<
    ReturnType<Client.Prisma.RefreshTokenDelegate['createManyAndReturn']>,
    {},
    string
  >
  userId?: Resolver<
    ReturnType<Client.Prisma.RefreshTokenDelegate['createManyAndReturn']>,
    {},
    string
  >
  familyId?: Resolver<
    ReturnType<Client.Prisma.RefreshTokenDelegate['createManyAndReturn']>,
    {},
    string
  >
  sessionId?: Resolver<
    ReturnType<Client.Prisma.RefreshTokenDelegate['createManyAndReturn']>,
    {},
    string
  >
  expiresAt?: Resolver<
    ReturnType<Client.Prisma.RefreshTokenDelegate['createManyAndReturn']>,
    {},
    Date
  >
  used?: Resolver<
    ReturnType<Client.Prisma.RefreshTokenDelegate['createManyAndReturn']>,
    {},
    boolean
  >
  createdAt?: Resolver<
    ReturnType<Client.Prisma.RefreshTokenDelegate['createManyAndReturn']>,
    {},
    Date
  >
  updatedAt?: Resolver<
    ReturnType<Client.Prisma.RefreshTokenDelegate['createManyAndReturn']>,
    {},
    Date
  >
  user?: Resolver<
    ReturnType<Client.Prisma.RefreshTokenDelegate['createManyAndReturn']>,
    {},
    Client.User
  >
}

export type CreateManySessionAndReturnOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    ReturnType<Client.Prisma.SessionDelegate['createManyAndReturn']>,
    {},
    string
  >
  userId?: Resolver<
    ReturnType<Client.Prisma.SessionDelegate['createManyAndReturn']>,
    {},
    string
  >
  deviceInfo?: Resolver<
    ReturnType<Client.Prisma.SessionDelegate['createManyAndReturn']>,
    {},
    string | null
  >
  ipAddress?: Resolver<
    ReturnType<Client.Prisma.SessionDelegate['createManyAndReturn']>,
    {},
    string | null
  >
  lastActiveAt?: Resolver<
    ReturnType<Client.Prisma.SessionDelegate['createManyAndReturn']>,
    {},
    Date
  >
  createdAt?: Resolver<
    ReturnType<Client.Prisma.SessionDelegate['createManyAndReturn']>,
    {},
    Date
  >
  updatedAt?: Resolver<
    ReturnType<Client.Prisma.SessionDelegate['createManyAndReturn']>,
    {},
    Date
  >
  user?: Resolver<
    ReturnType<Client.Prisma.SessionDelegate['createManyAndReturn']>,
    {},
    Client.User
  >
}

export type CreateManyLoginLogAndReturnOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    ReturnType<Client.Prisma.LoginLogDelegate['createManyAndReturn']>,
    {},
    string
  >
  userId?: Resolver<
    ReturnType<Client.Prisma.LoginLogDelegate['createManyAndReturn']>,
    {},
    string | null
  >
  success?: Resolver<
    ReturnType<Client.Prisma.LoginLogDelegate['createManyAndReturn']>,
    {},
    boolean
  >
  ipAddress?: Resolver<
    ReturnType<Client.Prisma.LoginLogDelegate['createManyAndReturn']>,
    {},
    string | null
  >
  userAgent?: Resolver<
    ReturnType<Client.Prisma.LoginLogDelegate['createManyAndReturn']>,
    {},
    string | null
  >
  createdAt?: Resolver<
    ReturnType<Client.Prisma.LoginLogDelegate['createManyAndReturn']>,
    {},
    Date
  >
  updatedAt?: Resolver<
    ReturnType<Client.Prisma.LoginLogDelegate['createManyAndReturn']>,
    {},
    Date
  >
  user?: Resolver<
    ReturnType<Client.Prisma.LoginLogDelegate['createManyAndReturn']>,
    CreateManyLoginLogAndReturnOutputTypeUserArgs,
    Client.User | null
  >
}

export type CreateManyPasswordResetTokenAndReturnOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    ReturnType<Client.Prisma.PasswordResetTokenDelegate['createManyAndReturn']>,
    {},
    string
  >
  token?: Resolver<
    ReturnType<Client.Prisma.PasswordResetTokenDelegate['createManyAndReturn']>,
    {},
    string
  >
  userId?: Resolver<
    ReturnType<Client.Prisma.PasswordResetTokenDelegate['createManyAndReturn']>,
    {},
    string
  >
  expiresAt?: Resolver<
    ReturnType<Client.Prisma.PasswordResetTokenDelegate['createManyAndReturn']>,
    {},
    Date
  >
  createdAt?: Resolver<
    ReturnType<Client.Prisma.PasswordResetTokenDelegate['createManyAndReturn']>,
    {},
    Date
  >
  updatedAt?: Resolver<
    ReturnType<Client.Prisma.PasswordResetTokenDelegate['createManyAndReturn']>,
    {},
    Date
  >
  user?: Resolver<
    ReturnType<Client.Prisma.PasswordResetTokenDelegate['createManyAndReturn']>,
    {},
    Client.User
  >
}

export type CreateManyTokenBlacklistAndReturnOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    ReturnType<Client.Prisma.TokenBlacklistDelegate['createManyAndReturn']>,
    {},
    string
  >
  token?: Resolver<
    ReturnType<Client.Prisma.TokenBlacklistDelegate['createManyAndReturn']>,
    {},
    string
  >
  expiresAt?: Resolver<
    ReturnType<Client.Prisma.TokenBlacklistDelegate['createManyAndReturn']>,
    {},
    Date
  >
  createdAt?: Resolver<
    ReturnType<Client.Prisma.TokenBlacklistDelegate['createManyAndReturn']>,
    {},
    Date
  >
  updatedAt?: Resolver<
    ReturnType<Client.Prisma.TokenBlacklistDelegate['createManyAndReturn']>,
    {},
    Date
  >
}

export type Query = { [key: string]: Resolver<any, any, any> } & {
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findFirstUserOrThrow?: Resolver<
    {},
    FindFirstUserOrThrowArgs,
    Client.User | null
  >
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    GetAggregateResult<Client.Prisma.$UserPayload, AggregateUserArgs>
  >
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findUniqueUserOrThrow?: Resolver<
    {},
    FindUniqueUserOrThrowArgs,
    Client.User | null
  >
  findFirstRefreshToken?: Resolver<
    {},
    FindFirstRefreshTokenArgs,
    Client.RefreshToken | null
  >
  findFirstRefreshTokenOrThrow?: Resolver<
    {},
    FindFirstRefreshTokenOrThrowArgs,
    Client.RefreshToken | null
  >
  findManyRefreshToken?: Resolver<
    {},
    FindManyRefreshTokenArgs,
    Client.RefreshToken[]
  >
  findManyRefreshTokenCount?: Resolver<{}, FindManyRefreshTokenArgs, number>
  aggregateRefreshToken?: Resolver<
    {},
    AggregateRefreshTokenArgs,
    GetAggregateResult<
      Client.Prisma.$RefreshTokenPayload,
      AggregateRefreshTokenArgs
    >
  >
  groupByRefreshToken?: Resolver<
    {},
    GroupByRefreshTokenArgs,
    Client.Prisma.RefreshTokenGroupByOutputType[]
  >
  findUniqueRefreshToken?: Resolver<
    {},
    FindUniqueRefreshTokenArgs,
    Client.RefreshToken | null
  >
  findUniqueRefreshTokenOrThrow?: Resolver<
    {},
    FindUniqueRefreshTokenOrThrowArgs,
    Client.RefreshToken | null
  >
  findFirstSession?: Resolver<{}, FindFirstSessionArgs, Client.Session | null>
  findFirstSessionOrThrow?: Resolver<
    {},
    FindFirstSessionOrThrowArgs,
    Client.Session | null
  >
  findManySession?: Resolver<{}, FindManySessionArgs, Client.Session[]>
  findManySessionCount?: Resolver<{}, FindManySessionArgs, number>
  aggregateSession?: Resolver<
    {},
    AggregateSessionArgs,
    GetAggregateResult<Client.Prisma.$SessionPayload, AggregateSessionArgs>
  >
  groupBySession?: Resolver<
    {},
    GroupBySessionArgs,
    Client.Prisma.SessionGroupByOutputType[]
  >
  findUniqueSession?: Resolver<{}, FindUniqueSessionArgs, Client.Session | null>
  findUniqueSessionOrThrow?: Resolver<
    {},
    FindUniqueSessionOrThrowArgs,
    Client.Session | null
  >
  findFirstLoginLog?: Resolver<
    {},
    FindFirstLoginLogArgs,
    Client.LoginLog | null
  >
  findFirstLoginLogOrThrow?: Resolver<
    {},
    FindFirstLoginLogOrThrowArgs,
    Client.LoginLog | null
  >
  findManyLoginLog?: Resolver<{}, FindManyLoginLogArgs, Client.LoginLog[]>
  findManyLoginLogCount?: Resolver<{}, FindManyLoginLogArgs, number>
  aggregateLoginLog?: Resolver<
    {},
    AggregateLoginLogArgs,
    GetAggregateResult<Client.Prisma.$LoginLogPayload, AggregateLoginLogArgs>
  >
  groupByLoginLog?: Resolver<
    {},
    GroupByLoginLogArgs,
    Client.Prisma.LoginLogGroupByOutputType[]
  >
  findUniqueLoginLog?: Resolver<
    {},
    FindUniqueLoginLogArgs,
    Client.LoginLog | null
  >
  findUniqueLoginLogOrThrow?: Resolver<
    {},
    FindUniqueLoginLogOrThrowArgs,
    Client.LoginLog | null
  >
  findFirstPasswordResetToken?: Resolver<
    {},
    FindFirstPasswordResetTokenArgs,
    Client.PasswordResetToken | null
  >
  findFirstPasswordResetTokenOrThrow?: Resolver<
    {},
    FindFirstPasswordResetTokenOrThrowArgs,
    Client.PasswordResetToken | null
  >
  findManyPasswordResetToken?: Resolver<
    {},
    FindManyPasswordResetTokenArgs,
    Client.PasswordResetToken[]
  >
  findManyPasswordResetTokenCount?: Resolver<
    {},
    FindManyPasswordResetTokenArgs,
    number
  >
  aggregatePasswordResetToken?: Resolver<
    {},
    AggregatePasswordResetTokenArgs,
    GetAggregateResult<
      Client.Prisma.$PasswordResetTokenPayload,
      AggregatePasswordResetTokenArgs
    >
  >
  groupByPasswordResetToken?: Resolver<
    {},
    GroupByPasswordResetTokenArgs,
    Client.Prisma.PasswordResetTokenGroupByOutputType[]
  >
  findUniquePasswordResetToken?: Resolver<
    {},
    FindUniquePasswordResetTokenArgs,
    Client.PasswordResetToken | null
  >
  findUniquePasswordResetTokenOrThrow?: Resolver<
    {},
    FindUniquePasswordResetTokenOrThrowArgs,
    Client.PasswordResetToken | null
  >
  findFirstTokenBlacklist?: Resolver<
    {},
    FindFirstTokenBlacklistArgs,
    Client.TokenBlacklist | null
  >
  findFirstTokenBlacklistOrThrow?: Resolver<
    {},
    FindFirstTokenBlacklistOrThrowArgs,
    Client.TokenBlacklist | null
  >
  findManyTokenBlacklist?: Resolver<
    {},
    FindManyTokenBlacklistArgs,
    Client.TokenBlacklist[]
  >
  findManyTokenBlacklistCount?: Resolver<{}, FindManyTokenBlacklistArgs, number>
  aggregateTokenBlacklist?: Resolver<
    {},
    AggregateTokenBlacklistArgs,
    GetAggregateResult<
      Client.Prisma.$TokenBlacklistPayload,
      AggregateTokenBlacklistArgs
    >
  >
  groupByTokenBlacklist?: Resolver<
    {},
    GroupByTokenBlacklistArgs,
    Client.Prisma.TokenBlacklistGroupByOutputType[]
  >
  findUniqueTokenBlacklist?: Resolver<
    {},
    FindUniqueTokenBlacklistArgs,
    Client.TokenBlacklist | null
  >
  findUniqueTokenBlacklistOrThrow?: Resolver<
    {},
    FindUniqueTokenBlacklistOrThrowArgs,
    Client.TokenBlacklist | null
  >
}

export type Mutation = { [key: string]: Resolver<any, any, any> } & {
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>
  createManyUserAndReturn?: Resolver<
    {},
    CreateManyUserAndReturnArgs,
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>
  >
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOneRefreshToken?: Resolver<
    {},
    CreateOneRefreshTokenArgs,
    Client.RefreshToken
  >
  upsertOneRefreshToken?: Resolver<
    {},
    UpsertOneRefreshTokenArgs,
    Client.RefreshToken
  >
  createManyRefreshToken?: Resolver<
    {},
    CreateManyRefreshTokenArgs,
    Client.Prisma.BatchPayload
  >
  createManyRefreshTokenAndReturn?: Resolver<
    {},
    CreateManyRefreshTokenAndReturnArgs,
    ReturnType<Client.Prisma.RefreshTokenDelegate['createManyAndReturn']>
  >
  deleteOneRefreshToken?: Resolver<
    {},
    DeleteOneRefreshTokenArgs,
    Client.RefreshToken | null
  >
  updateOneRefreshToken?: Resolver<
    {},
    UpdateOneRefreshTokenArgs,
    Client.RefreshToken | null
  >
  updateManyRefreshToken?: Resolver<
    {},
    UpdateManyRefreshTokenArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyRefreshToken?: Resolver<
    {},
    DeleteManyRefreshTokenArgs,
    Client.Prisma.BatchPayload
  >
  createOneSession?: Resolver<{}, CreateOneSessionArgs, Client.Session>
  upsertOneSession?: Resolver<{}, UpsertOneSessionArgs, Client.Session>
  createManySession?: Resolver<
    {},
    CreateManySessionArgs,
    Client.Prisma.BatchPayload
  >
  createManySessionAndReturn?: Resolver<
    {},
    CreateManySessionAndReturnArgs,
    ReturnType<Client.Prisma.SessionDelegate['createManyAndReturn']>
  >
  deleteOneSession?: Resolver<{}, DeleteOneSessionArgs, Client.Session | null>
  updateOneSession?: Resolver<{}, UpdateOneSessionArgs, Client.Session | null>
  updateManySession?: Resolver<
    {},
    UpdateManySessionArgs,
    Client.Prisma.BatchPayload
  >
  deleteManySession?: Resolver<
    {},
    DeleteManySessionArgs,
    Client.Prisma.BatchPayload
  >
  createOneLoginLog?: Resolver<{}, CreateOneLoginLogArgs, Client.LoginLog>
  upsertOneLoginLog?: Resolver<{}, UpsertOneLoginLogArgs, Client.LoginLog>
  createManyLoginLog?: Resolver<
    {},
    CreateManyLoginLogArgs,
    Client.Prisma.BatchPayload
  >
  createManyLoginLogAndReturn?: Resolver<
    {},
    CreateManyLoginLogAndReturnArgs,
    ReturnType<Client.Prisma.LoginLogDelegate['createManyAndReturn']>
  >
  deleteOneLoginLog?: Resolver<
    {},
    DeleteOneLoginLogArgs,
    Client.LoginLog | null
  >
  updateOneLoginLog?: Resolver<
    {},
    UpdateOneLoginLogArgs,
    Client.LoginLog | null
  >
  updateManyLoginLog?: Resolver<
    {},
    UpdateManyLoginLogArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyLoginLog?: Resolver<
    {},
    DeleteManyLoginLogArgs,
    Client.Prisma.BatchPayload
  >
  createOnePasswordResetToken?: Resolver<
    {},
    CreateOnePasswordResetTokenArgs,
    Client.PasswordResetToken
  >
  upsertOnePasswordResetToken?: Resolver<
    {},
    UpsertOnePasswordResetTokenArgs,
    Client.PasswordResetToken
  >
  createManyPasswordResetToken?: Resolver<
    {},
    CreateManyPasswordResetTokenArgs,
    Client.Prisma.BatchPayload
  >
  createManyPasswordResetTokenAndReturn?: Resolver<
    {},
    CreateManyPasswordResetTokenAndReturnArgs,
    ReturnType<Client.Prisma.PasswordResetTokenDelegate['createManyAndReturn']>
  >
  deleteOnePasswordResetToken?: Resolver<
    {},
    DeleteOnePasswordResetTokenArgs,
    Client.PasswordResetToken | null
  >
  updateOnePasswordResetToken?: Resolver<
    {},
    UpdateOnePasswordResetTokenArgs,
    Client.PasswordResetToken | null
  >
  updateManyPasswordResetToken?: Resolver<
    {},
    UpdateManyPasswordResetTokenArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyPasswordResetToken?: Resolver<
    {},
    DeleteManyPasswordResetTokenArgs,
    Client.Prisma.BatchPayload
  >
  createOneTokenBlacklist?: Resolver<
    {},
    CreateOneTokenBlacklistArgs,
    Client.TokenBlacklist
  >
  upsertOneTokenBlacklist?: Resolver<
    {},
    UpsertOneTokenBlacklistArgs,
    Client.TokenBlacklist
  >
  createManyTokenBlacklist?: Resolver<
    {},
    CreateManyTokenBlacklistArgs,
    Client.Prisma.BatchPayload
  >
  createManyTokenBlacklistAndReturn?: Resolver<
    {},
    CreateManyTokenBlacklistAndReturnArgs,
    ReturnType<Client.Prisma.TokenBlacklistDelegate['createManyAndReturn']>
  >
  deleteOneTokenBlacklist?: Resolver<
    {},
    DeleteOneTokenBlacklistArgs,
    Client.TokenBlacklist | null
  >
  updateOneTokenBlacklist?: Resolver<
    {},
    UpdateOneTokenBlacklistArgs,
    Client.TokenBlacklist | null
  >
  updateManyTokenBlacklist?: Resolver<
    {},
    UpdateManyTokenBlacklistArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyTokenBlacklist?: Resolver<
    {},
    DeleteManyTokenBlacklistArgs,
    Client.Prisma.BatchPayload
  >
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export type AggregateUser = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export type UserGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  password?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  roles?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Roles[] | null
  >
  googleId?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  googleProfile?: Resolver<Client.Prisma.UserGroupByOutputType, {}, any | null>
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export type AggregateRefreshToken = {
  [key: string]: Resolver<any, any, any>
} & {
  _count?: Resolver<
    Client.Prisma.AggregateRefreshToken,
    {},
    Client.Prisma.RefreshTokenCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateRefreshToken,
    {},
    Client.Prisma.RefreshTokenMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateRefreshToken,
    {},
    Client.Prisma.RefreshTokenMaxAggregateOutputType | null
  >
}

export type RefreshTokenGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.RefreshTokenGroupByOutputType, {}, string>
  token?: Resolver<Client.Prisma.RefreshTokenGroupByOutputType, {}, string>
  userId?: Resolver<Client.Prisma.RefreshTokenGroupByOutputType, {}, string>
  familyId?: Resolver<Client.Prisma.RefreshTokenGroupByOutputType, {}, string>
  sessionId?: Resolver<Client.Prisma.RefreshTokenGroupByOutputType, {}, string>
  expiresAt?: Resolver<Client.Prisma.RefreshTokenGroupByOutputType, {}, Date>
  used?: Resolver<Client.Prisma.RefreshTokenGroupByOutputType, {}, boolean>
  createdAt?: Resolver<Client.Prisma.RefreshTokenGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.RefreshTokenGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.RefreshTokenGroupByOutputType,
    {},
    Client.Prisma.RefreshTokenCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.RefreshTokenGroupByOutputType,
    {},
    Client.Prisma.RefreshTokenMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.RefreshTokenGroupByOutputType,
    {},
    Client.Prisma.RefreshTokenMaxAggregateOutputType | null
  >
}

export type AggregateSession = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateSession,
    {},
    Client.Prisma.SessionCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateSession,
    {},
    Client.Prisma.SessionMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateSession,
    {},
    Client.Prisma.SessionMaxAggregateOutputType | null
  >
}

export type SessionGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.SessionGroupByOutputType, {}, string>
  userId?: Resolver<Client.Prisma.SessionGroupByOutputType, {}, string>
  deviceInfo?: Resolver<
    Client.Prisma.SessionGroupByOutputType,
    {},
    string | null
  >
  ipAddress?: Resolver<
    Client.Prisma.SessionGroupByOutputType,
    {},
    string | null
  >
  lastActiveAt?: Resolver<Client.Prisma.SessionGroupByOutputType, {}, Date>
  createdAt?: Resolver<Client.Prisma.SessionGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.SessionGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.SessionGroupByOutputType,
    {},
    Client.Prisma.SessionCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.SessionGroupByOutputType,
    {},
    Client.Prisma.SessionMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.SessionGroupByOutputType,
    {},
    Client.Prisma.SessionMaxAggregateOutputType | null
  >
}

export type AggregateLoginLog = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateLoginLog,
    {},
    Client.Prisma.LoginLogCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateLoginLog,
    {},
    Client.Prisma.LoginLogMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateLoginLog,
    {},
    Client.Prisma.LoginLogMaxAggregateOutputType | null
  >
}

export type LoginLogGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.LoginLogGroupByOutputType, {}, string>
  userId?: Resolver<Client.Prisma.LoginLogGroupByOutputType, {}, string | null>
  success?: Resolver<Client.Prisma.LoginLogGroupByOutputType, {}, boolean>
  ipAddress?: Resolver<
    Client.Prisma.LoginLogGroupByOutputType,
    {},
    string | null
  >
  userAgent?: Resolver<
    Client.Prisma.LoginLogGroupByOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<Client.Prisma.LoginLogGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.LoginLogGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.LoginLogGroupByOutputType,
    {},
    Client.Prisma.LoginLogCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.LoginLogGroupByOutputType,
    {},
    Client.Prisma.LoginLogMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.LoginLogGroupByOutputType,
    {},
    Client.Prisma.LoginLogMaxAggregateOutputType | null
  >
}

export type AggregatePasswordResetToken = {
  [key: string]: Resolver<any, any, any>
} & {
  _count?: Resolver<
    Client.Prisma.AggregatePasswordResetToken,
    {},
    Client.Prisma.PasswordResetTokenCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregatePasswordResetToken,
    {},
    Client.Prisma.PasswordResetTokenMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregatePasswordResetToken,
    {},
    Client.Prisma.PasswordResetTokenMaxAggregateOutputType | null
  >
}

export type PasswordResetTokenGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PasswordResetTokenGroupByOutputType, {}, string>
  token?: Resolver<
    Client.Prisma.PasswordResetTokenGroupByOutputType,
    {},
    string
  >
  userId?: Resolver<
    Client.Prisma.PasswordResetTokenGroupByOutputType,
    {},
    string
  >
  expiresAt?: Resolver<
    Client.Prisma.PasswordResetTokenGroupByOutputType,
    {},
    Date
  >
  createdAt?: Resolver<
    Client.Prisma.PasswordResetTokenGroupByOutputType,
    {},
    Date
  >
  updatedAt?: Resolver<
    Client.Prisma.PasswordResetTokenGroupByOutputType,
    {},
    Date
  >
  _count?: Resolver<
    Client.Prisma.PasswordResetTokenGroupByOutputType,
    {},
    Client.Prisma.PasswordResetTokenCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.PasswordResetTokenGroupByOutputType,
    {},
    Client.Prisma.PasswordResetTokenMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.PasswordResetTokenGroupByOutputType,
    {},
    Client.Prisma.PasswordResetTokenMaxAggregateOutputType | null
  >
}

export type AggregateTokenBlacklist = {
  [key: string]: Resolver<any, any, any>
} & {
  _count?: Resolver<
    Client.Prisma.AggregateTokenBlacklist,
    {},
    Client.Prisma.TokenBlacklistCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateTokenBlacklist,
    {},
    Client.Prisma.TokenBlacklistMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateTokenBlacklist,
    {},
    Client.Prisma.TokenBlacklistMaxAggregateOutputType | null
  >
}

export type TokenBlacklistGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.TokenBlacklistGroupByOutputType, {}, string>
  token?: Resolver<Client.Prisma.TokenBlacklistGroupByOutputType, {}, string>
  expiresAt?: Resolver<Client.Prisma.TokenBlacklistGroupByOutputType, {}, Date>
  createdAt?: Resolver<Client.Prisma.TokenBlacklistGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.TokenBlacklistGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.TokenBlacklistGroupByOutputType,
    {},
    Client.Prisma.TokenBlacklistCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.TokenBlacklistGroupByOutputType,
    {},
    Client.Prisma.TokenBlacklistMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.TokenBlacklistGroupByOutputType,
    {},
    Client.Prisma.TokenBlacklistMaxAggregateOutputType | null
  >
}

export type AffectedRowsOutput = { [key: string]: Resolver<any, any, any> } & {
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export type UserCountOutputType = { [key: string]: Resolver<any, any, any> } & {
  refreshTokens?: Resolver<
    Client.Prisma.UserCountOutputType,
    UserCountOutputTypeRefreshTokensArgs,
    number
  >
  sessions?: Resolver<
    Client.Prisma.UserCountOutputType,
    UserCountOutputTypeSessionsArgs,
    number
  >
  loginLogs?: Resolver<
    Client.Prisma.UserCountOutputType,
    UserCountOutputTypeLoginLogsArgs,
    number
  >
  passwordResetTokens?: Resolver<
    Client.Prisma.UserCountOutputType,
    UserCountOutputTypePasswordResetTokensArgs,
    number
  >
}

export type UserCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  password?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  roles?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  googleId?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  googleProfile?: Resolver<
    Client.Prisma.UserCountAggregateOutputType,
    {},
    number
  >
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export type UserMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  password?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  googleId?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
}

export type UserMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  password?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  googleId?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
}

export type RefreshTokenCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.RefreshTokenCountAggregateOutputType, {}, number>
  token?: Resolver<
    Client.Prisma.RefreshTokenCountAggregateOutputType,
    {},
    number
  >
  userId?: Resolver<
    Client.Prisma.RefreshTokenCountAggregateOutputType,
    {},
    number
  >
  familyId?: Resolver<
    Client.Prisma.RefreshTokenCountAggregateOutputType,
    {},
    number
  >
  sessionId?: Resolver<
    Client.Prisma.RefreshTokenCountAggregateOutputType,
    {},
    number
  >
  expiresAt?: Resolver<
    Client.Prisma.RefreshTokenCountAggregateOutputType,
    {},
    number
  >
  used?: Resolver<
    Client.Prisma.RefreshTokenCountAggregateOutputType,
    {},
    number
  >
  createdAt?: Resolver<
    Client.Prisma.RefreshTokenCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.RefreshTokenCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<
    Client.Prisma.RefreshTokenCountAggregateOutputType,
    {},
    number
  >
}

export type RefreshTokenMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.RefreshTokenMinAggregateOutputType,
    {},
    string | null
  >
  token?: Resolver<
    Client.Prisma.RefreshTokenMinAggregateOutputType,
    {},
    string | null
  >
  userId?: Resolver<
    Client.Prisma.RefreshTokenMinAggregateOutputType,
    {},
    string | null
  >
  familyId?: Resolver<
    Client.Prisma.RefreshTokenMinAggregateOutputType,
    {},
    string | null
  >
  sessionId?: Resolver<
    Client.Prisma.RefreshTokenMinAggregateOutputType,
    {},
    string | null
  >
  expiresAt?: Resolver<
    Client.Prisma.RefreshTokenMinAggregateOutputType,
    {},
    Date | null
  >
  used?: Resolver<
    Client.Prisma.RefreshTokenMinAggregateOutputType,
    {},
    boolean | null
  >
  createdAt?: Resolver<
    Client.Prisma.RefreshTokenMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.RefreshTokenMinAggregateOutputType,
    {},
    Date | null
  >
}

export type RefreshTokenMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.RefreshTokenMaxAggregateOutputType,
    {},
    string | null
  >
  token?: Resolver<
    Client.Prisma.RefreshTokenMaxAggregateOutputType,
    {},
    string | null
  >
  userId?: Resolver<
    Client.Prisma.RefreshTokenMaxAggregateOutputType,
    {},
    string | null
  >
  familyId?: Resolver<
    Client.Prisma.RefreshTokenMaxAggregateOutputType,
    {},
    string | null
  >
  sessionId?: Resolver<
    Client.Prisma.RefreshTokenMaxAggregateOutputType,
    {},
    string | null
  >
  expiresAt?: Resolver<
    Client.Prisma.RefreshTokenMaxAggregateOutputType,
    {},
    Date | null
  >
  used?: Resolver<
    Client.Prisma.RefreshTokenMaxAggregateOutputType,
    {},
    boolean | null
  >
  createdAt?: Resolver<
    Client.Prisma.RefreshTokenMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.RefreshTokenMaxAggregateOutputType,
    {},
    Date | null
  >
}

export type SessionCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.SessionCountAggregateOutputType, {}, number>
  userId?: Resolver<Client.Prisma.SessionCountAggregateOutputType, {}, number>
  deviceInfo?: Resolver<
    Client.Prisma.SessionCountAggregateOutputType,
    {},
    number
  >
  ipAddress?: Resolver<
    Client.Prisma.SessionCountAggregateOutputType,
    {},
    number
  >
  lastActiveAt?: Resolver<
    Client.Prisma.SessionCountAggregateOutputType,
    {},
    number
  >
  createdAt?: Resolver<
    Client.Prisma.SessionCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.SessionCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.SessionCountAggregateOutputType, {}, number>
}

export type SessionMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.SessionMinAggregateOutputType, {}, string | null>
  userId?: Resolver<
    Client.Prisma.SessionMinAggregateOutputType,
    {},
    string | null
  >
  deviceInfo?: Resolver<
    Client.Prisma.SessionMinAggregateOutputType,
    {},
    string | null
  >
  ipAddress?: Resolver<
    Client.Prisma.SessionMinAggregateOutputType,
    {},
    string | null
  >
  lastActiveAt?: Resolver<
    Client.Prisma.SessionMinAggregateOutputType,
    {},
    Date | null
  >
  createdAt?: Resolver<
    Client.Prisma.SessionMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.SessionMinAggregateOutputType,
    {},
    Date | null
  >
}

export type SessionMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.SessionMaxAggregateOutputType, {}, string | null>
  userId?: Resolver<
    Client.Prisma.SessionMaxAggregateOutputType,
    {},
    string | null
  >
  deviceInfo?: Resolver<
    Client.Prisma.SessionMaxAggregateOutputType,
    {},
    string | null
  >
  ipAddress?: Resolver<
    Client.Prisma.SessionMaxAggregateOutputType,
    {},
    string | null
  >
  lastActiveAt?: Resolver<
    Client.Prisma.SessionMaxAggregateOutputType,
    {},
    Date | null
  >
  createdAt?: Resolver<
    Client.Prisma.SessionMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.SessionMaxAggregateOutputType,
    {},
    Date | null
  >
}

export type LoginLogCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.LoginLogCountAggregateOutputType, {}, number>
  userId?: Resolver<Client.Prisma.LoginLogCountAggregateOutputType, {}, number>
  success?: Resolver<Client.Prisma.LoginLogCountAggregateOutputType, {}, number>
  ipAddress?: Resolver<
    Client.Prisma.LoginLogCountAggregateOutputType,
    {},
    number
  >
  userAgent?: Resolver<
    Client.Prisma.LoginLogCountAggregateOutputType,
    {},
    number
  >
  createdAt?: Resolver<
    Client.Prisma.LoginLogCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.LoginLogCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.LoginLogCountAggregateOutputType, {}, number>
}

export type LoginLogMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.LoginLogMinAggregateOutputType, {}, string | null>
  userId?: Resolver<
    Client.Prisma.LoginLogMinAggregateOutputType,
    {},
    string | null
  >
  success?: Resolver<
    Client.Prisma.LoginLogMinAggregateOutputType,
    {},
    boolean | null
  >
  ipAddress?: Resolver<
    Client.Prisma.LoginLogMinAggregateOutputType,
    {},
    string | null
  >
  userAgent?: Resolver<
    Client.Prisma.LoginLogMinAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.LoginLogMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.LoginLogMinAggregateOutputType,
    {},
    Date | null
  >
}

export type LoginLogMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.LoginLogMaxAggregateOutputType, {}, string | null>
  userId?: Resolver<
    Client.Prisma.LoginLogMaxAggregateOutputType,
    {},
    string | null
  >
  success?: Resolver<
    Client.Prisma.LoginLogMaxAggregateOutputType,
    {},
    boolean | null
  >
  ipAddress?: Resolver<
    Client.Prisma.LoginLogMaxAggregateOutputType,
    {},
    string | null
  >
  userAgent?: Resolver<
    Client.Prisma.LoginLogMaxAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.LoginLogMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.LoginLogMaxAggregateOutputType,
    {},
    Date | null
  >
}

export type PasswordResetTokenCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PasswordResetTokenCountAggregateOutputType,
    {},
    number
  >
  token?: Resolver<
    Client.Prisma.PasswordResetTokenCountAggregateOutputType,
    {},
    number
  >
  userId?: Resolver<
    Client.Prisma.PasswordResetTokenCountAggregateOutputType,
    {},
    number
  >
  expiresAt?: Resolver<
    Client.Prisma.PasswordResetTokenCountAggregateOutputType,
    {},
    number
  >
  createdAt?: Resolver<
    Client.Prisma.PasswordResetTokenCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.PasswordResetTokenCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<
    Client.Prisma.PasswordResetTokenCountAggregateOutputType,
    {},
    number
  >
}

export type PasswordResetTokenMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PasswordResetTokenMinAggregateOutputType,
    {},
    string | null
  >
  token?: Resolver<
    Client.Prisma.PasswordResetTokenMinAggregateOutputType,
    {},
    string | null
  >
  userId?: Resolver<
    Client.Prisma.PasswordResetTokenMinAggregateOutputType,
    {},
    string | null
  >
  expiresAt?: Resolver<
    Client.Prisma.PasswordResetTokenMinAggregateOutputType,
    {},
    Date | null
  >
  createdAt?: Resolver<
    Client.Prisma.PasswordResetTokenMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PasswordResetTokenMinAggregateOutputType,
    {},
    Date | null
  >
}

export type PasswordResetTokenMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.PasswordResetTokenMaxAggregateOutputType,
    {},
    string | null
  >
  token?: Resolver<
    Client.Prisma.PasswordResetTokenMaxAggregateOutputType,
    {},
    string | null
  >
  userId?: Resolver<
    Client.Prisma.PasswordResetTokenMaxAggregateOutputType,
    {},
    string | null
  >
  expiresAt?: Resolver<
    Client.Prisma.PasswordResetTokenMaxAggregateOutputType,
    {},
    Date | null
  >
  createdAt?: Resolver<
    Client.Prisma.PasswordResetTokenMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PasswordResetTokenMaxAggregateOutputType,
    {},
    Date | null
  >
}

export type TokenBlacklistCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.TokenBlacklistCountAggregateOutputType,
    {},
    number
  >
  token?: Resolver<
    Client.Prisma.TokenBlacklistCountAggregateOutputType,
    {},
    number
  >
  expiresAt?: Resolver<
    Client.Prisma.TokenBlacklistCountAggregateOutputType,
    {},
    number
  >
  createdAt?: Resolver<
    Client.Prisma.TokenBlacklistCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.TokenBlacklistCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<
    Client.Prisma.TokenBlacklistCountAggregateOutputType,
    {},
    number
  >
}

export type TokenBlacklistMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.TokenBlacklistMinAggregateOutputType,
    {},
    string | null
  >
  token?: Resolver<
    Client.Prisma.TokenBlacklistMinAggregateOutputType,
    {},
    string | null
  >
  expiresAt?: Resolver<
    Client.Prisma.TokenBlacklistMinAggregateOutputType,
    {},
    Date | null
  >
  createdAt?: Resolver<
    Client.Prisma.TokenBlacklistMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.TokenBlacklistMinAggregateOutputType,
    {},
    Date | null
  >
}

export type TokenBlacklistMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    Client.Prisma.TokenBlacklistMaxAggregateOutputType,
    {},
    string | null
  >
  token?: Resolver<
    Client.Prisma.TokenBlacklistMaxAggregateOutputType,
    {},
    string | null
  >
  expiresAt?: Resolver<
    Client.Prisma.TokenBlacklistMaxAggregateOutputType,
    {},
    Date | null
  >
  createdAt?: Resolver<
    Client.Prisma.TokenBlacklistMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.TokenBlacklistMaxAggregateOutputType,
    {},
    Date | null
  >
}

export type UserRefreshTokensArgs = {
  where?: RefreshTokenWhereInput
  orderBy?: RefreshTokenOrderByWithRelationInput[]
  cursor?: RefreshTokenWhereUniqueInput
  take?: number
  skip?: number
  distinct?: RefreshTokenScalarFieldEnum[]
}

export type UserSessionsArgs = {
  where?: SessionWhereInput
  orderBy?: SessionOrderByWithRelationInput[]
  cursor?: SessionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: SessionScalarFieldEnum[]
}

export type UserLoginLogsArgs = {
  where?: LoginLogWhereInput
  orderBy?: LoginLogOrderByWithRelationInput[]
  cursor?: LoginLogWhereUniqueInput
  take?: number
  skip?: number
  distinct?: LoginLogScalarFieldEnum[]
}

export type UserPasswordResetTokensArgs = {
  where?: PasswordResetTokenWhereInput
  orderBy?: PasswordResetTokenOrderByWithRelationInput[]
  cursor?: PasswordResetTokenWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PasswordResetTokenScalarFieldEnum[]
}

export type LoginLogUserArgs = {
  where?: UserWhereInput
}

export type CreateManyLoginLogAndReturnOutputTypeUserArgs = {
  where?: UserWhereInput
}

export type FindFirstUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export type FindFirstUserOrThrowArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export type FindManyUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export type AggregateUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.UserCountAggregateInputType
  _min?: Client.Prisma.UserMinAggregateInputType
  _max?: Client.Prisma.UserMaxAggregateInputType
}

export type GroupByUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithAggregationInput[]
  by: UserScalarFieldEnum[]
  having?: UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniqueUserArgs = {
  where: UserWhereUniqueInput
}

export type FindUniqueUserOrThrowArgs = {
  where: UserWhereUniqueInput
}

export type FindFirstRefreshTokenArgs = {
  where?: RefreshTokenWhereInput
  orderBy?: RefreshTokenOrderByWithRelationInput[]
  cursor?: RefreshTokenWhereUniqueInput
  take?: number
  skip?: number
  distinct?: RefreshTokenScalarFieldEnum[]
}

export type FindFirstRefreshTokenOrThrowArgs = {
  where?: RefreshTokenWhereInput
  orderBy?: RefreshTokenOrderByWithRelationInput[]
  cursor?: RefreshTokenWhereUniqueInput
  take?: number
  skip?: number
  distinct?: RefreshTokenScalarFieldEnum[]
}

export type FindManyRefreshTokenArgs = {
  where?: RefreshTokenWhereInput
  orderBy?: RefreshTokenOrderByWithRelationInput[]
  cursor?: RefreshTokenWhereUniqueInput
  take?: number
  skip?: number
  distinct?: RefreshTokenScalarFieldEnum[]
}

export type AggregateRefreshTokenArgs = {
  where?: RefreshTokenWhereInput
  orderBy?: RefreshTokenOrderByWithRelationInput[]
  cursor?: RefreshTokenWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.RefreshTokenCountAggregateInputType
  _min?: Client.Prisma.RefreshTokenMinAggregateInputType
  _max?: Client.Prisma.RefreshTokenMaxAggregateInputType
}

export type GroupByRefreshTokenArgs = {
  where?: RefreshTokenWhereInput
  orderBy?: RefreshTokenOrderByWithAggregationInput[]
  by: RefreshTokenScalarFieldEnum[]
  having?: RefreshTokenScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniqueRefreshTokenArgs = {
  where: RefreshTokenWhereUniqueInput
}

export type FindUniqueRefreshTokenOrThrowArgs = {
  where: RefreshTokenWhereUniqueInput
}

export type FindFirstSessionArgs = {
  where?: SessionWhereInput
  orderBy?: SessionOrderByWithRelationInput[]
  cursor?: SessionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: SessionScalarFieldEnum[]
}

export type FindFirstSessionOrThrowArgs = {
  where?: SessionWhereInput
  orderBy?: SessionOrderByWithRelationInput[]
  cursor?: SessionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: SessionScalarFieldEnum[]
}

export type FindManySessionArgs = {
  where?: SessionWhereInput
  orderBy?: SessionOrderByWithRelationInput[]
  cursor?: SessionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: SessionScalarFieldEnum[]
}

export type AggregateSessionArgs = {
  where?: SessionWhereInput
  orderBy?: SessionOrderByWithRelationInput[]
  cursor?: SessionWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.SessionCountAggregateInputType
  _min?: Client.Prisma.SessionMinAggregateInputType
  _max?: Client.Prisma.SessionMaxAggregateInputType
}

export type GroupBySessionArgs = {
  where?: SessionWhereInput
  orderBy?: SessionOrderByWithAggregationInput[]
  by: SessionScalarFieldEnum[]
  having?: SessionScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniqueSessionArgs = {
  where: SessionWhereUniqueInput
}

export type FindUniqueSessionOrThrowArgs = {
  where: SessionWhereUniqueInput
}

export type FindFirstLoginLogArgs = {
  where?: LoginLogWhereInput
  orderBy?: LoginLogOrderByWithRelationInput[]
  cursor?: LoginLogWhereUniqueInput
  take?: number
  skip?: number
  distinct?: LoginLogScalarFieldEnum[]
}

export type FindFirstLoginLogOrThrowArgs = {
  where?: LoginLogWhereInput
  orderBy?: LoginLogOrderByWithRelationInput[]
  cursor?: LoginLogWhereUniqueInput
  take?: number
  skip?: number
  distinct?: LoginLogScalarFieldEnum[]
}

export type FindManyLoginLogArgs = {
  where?: LoginLogWhereInput
  orderBy?: LoginLogOrderByWithRelationInput[]
  cursor?: LoginLogWhereUniqueInput
  take?: number
  skip?: number
  distinct?: LoginLogScalarFieldEnum[]
}

export type AggregateLoginLogArgs = {
  where?: LoginLogWhereInput
  orderBy?: LoginLogOrderByWithRelationInput[]
  cursor?: LoginLogWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.LoginLogCountAggregateInputType
  _min?: Client.Prisma.LoginLogMinAggregateInputType
  _max?: Client.Prisma.LoginLogMaxAggregateInputType
}

export type GroupByLoginLogArgs = {
  where?: LoginLogWhereInput
  orderBy?: LoginLogOrderByWithAggregationInput[]
  by: LoginLogScalarFieldEnum[]
  having?: LoginLogScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniqueLoginLogArgs = {
  where: LoginLogWhereUniqueInput
}

export type FindUniqueLoginLogOrThrowArgs = {
  where: LoginLogWhereUniqueInput
}

export type FindFirstPasswordResetTokenArgs = {
  where?: PasswordResetTokenWhereInput
  orderBy?: PasswordResetTokenOrderByWithRelationInput[]
  cursor?: PasswordResetTokenWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PasswordResetTokenScalarFieldEnum[]
}

export type FindFirstPasswordResetTokenOrThrowArgs = {
  where?: PasswordResetTokenWhereInput
  orderBy?: PasswordResetTokenOrderByWithRelationInput[]
  cursor?: PasswordResetTokenWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PasswordResetTokenScalarFieldEnum[]
}

export type FindManyPasswordResetTokenArgs = {
  where?: PasswordResetTokenWhereInput
  orderBy?: PasswordResetTokenOrderByWithRelationInput[]
  cursor?: PasswordResetTokenWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PasswordResetTokenScalarFieldEnum[]
}

export type AggregatePasswordResetTokenArgs = {
  where?: PasswordResetTokenWhereInput
  orderBy?: PasswordResetTokenOrderByWithRelationInput[]
  cursor?: PasswordResetTokenWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.PasswordResetTokenCountAggregateInputType
  _min?: Client.Prisma.PasswordResetTokenMinAggregateInputType
  _max?: Client.Prisma.PasswordResetTokenMaxAggregateInputType
}

export type GroupByPasswordResetTokenArgs = {
  where?: PasswordResetTokenWhereInput
  orderBy?: PasswordResetTokenOrderByWithAggregationInput[]
  by: PasswordResetTokenScalarFieldEnum[]
  having?: PasswordResetTokenScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniquePasswordResetTokenArgs = {
  where: PasswordResetTokenWhereUniqueInput
}

export type FindUniquePasswordResetTokenOrThrowArgs = {
  where: PasswordResetTokenWhereUniqueInput
}

export type FindFirstTokenBlacklistArgs = {
  where?: TokenBlacklistWhereInput
  orderBy?: TokenBlacklistOrderByWithRelationInput[]
  cursor?: TokenBlacklistWhereUniqueInput
  take?: number
  skip?: number
  distinct?: TokenBlacklistScalarFieldEnum[]
}

export type FindFirstTokenBlacklistOrThrowArgs = {
  where?: TokenBlacklistWhereInput
  orderBy?: TokenBlacklistOrderByWithRelationInput[]
  cursor?: TokenBlacklistWhereUniqueInput
  take?: number
  skip?: number
  distinct?: TokenBlacklistScalarFieldEnum[]
}

export type FindManyTokenBlacklistArgs = {
  where?: TokenBlacklistWhereInput
  orderBy?: TokenBlacklistOrderByWithRelationInput[]
  cursor?: TokenBlacklistWhereUniqueInput
  take?: number
  skip?: number
  distinct?: TokenBlacklistScalarFieldEnum[]
}

export type AggregateTokenBlacklistArgs = {
  where?: TokenBlacklistWhereInput
  orderBy?: TokenBlacklistOrderByWithRelationInput[]
  cursor?: TokenBlacklistWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.TokenBlacklistCountAggregateInputType
  _min?: Client.Prisma.TokenBlacklistMinAggregateInputType
  _max?: Client.Prisma.TokenBlacklistMaxAggregateInputType
}

export type GroupByTokenBlacklistArgs = {
  where?: TokenBlacklistWhereInput
  orderBy?: TokenBlacklistOrderByWithAggregationInput[]
  by: TokenBlacklistScalarFieldEnum[]
  having?: TokenBlacklistScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniqueTokenBlacklistArgs = {
  where: TokenBlacklistWhereUniqueInput
}

export type FindUniqueTokenBlacklistOrThrowArgs = {
  where: TokenBlacklistWhereUniqueInput
}

export type CreateOneUserArgs = {
  data: UserCreateInput
}

export type UpsertOneUserArgs = {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export type CreateManyUserArgs = {
  data: UserCreateManyInput[]
  skipDuplicates?: boolean
}

export type CreateManyUserAndReturnArgs = {
  data: UserCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOneUserArgs = {
  where: UserWhereUniqueInput
}

export type UpdateOneUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type UpdateManyUserArgs = {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}

export type DeleteManyUserArgs = {
  where?: UserWhereInput
}

export type CreateOneRefreshTokenArgs = {
  data: RefreshTokenCreateInput
}

export type UpsertOneRefreshTokenArgs = {
  where: RefreshTokenWhereUniqueInput
  create: RefreshTokenCreateInput
  update: RefreshTokenUpdateInput
}

export type CreateManyRefreshTokenArgs = {
  data: RefreshTokenCreateManyInput[]
  skipDuplicates?: boolean
}

export type CreateManyRefreshTokenAndReturnArgs = {
  data: RefreshTokenCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOneRefreshTokenArgs = {
  where: RefreshTokenWhereUniqueInput
}

export type UpdateOneRefreshTokenArgs = {
  data: RefreshTokenUpdateInput
  where: RefreshTokenWhereUniqueInput
}

export type UpdateManyRefreshTokenArgs = {
  data: RefreshTokenUpdateManyMutationInput
  where?: RefreshTokenWhereInput
}

export type DeleteManyRefreshTokenArgs = {
  where?: RefreshTokenWhereInput
}

export type CreateOneSessionArgs = {
  data: SessionCreateInput
}

export type UpsertOneSessionArgs = {
  where: SessionWhereUniqueInput
  create: SessionCreateInput
  update: SessionUpdateInput
}

export type CreateManySessionArgs = {
  data: SessionCreateManyInput[]
  skipDuplicates?: boolean
}

export type CreateManySessionAndReturnArgs = {
  data: SessionCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOneSessionArgs = {
  where: SessionWhereUniqueInput
}

export type UpdateOneSessionArgs = {
  data: SessionUpdateInput
  where: SessionWhereUniqueInput
}

export type UpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput
  where?: SessionWhereInput
}

export type DeleteManySessionArgs = {
  where?: SessionWhereInput
}

export type CreateOneLoginLogArgs = {
  data: LoginLogCreateInput
}

export type UpsertOneLoginLogArgs = {
  where: LoginLogWhereUniqueInput
  create: LoginLogCreateInput
  update: LoginLogUpdateInput
}

export type CreateManyLoginLogArgs = {
  data: LoginLogCreateManyInput[]
  skipDuplicates?: boolean
}

export type CreateManyLoginLogAndReturnArgs = {
  data: LoginLogCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOneLoginLogArgs = {
  where: LoginLogWhereUniqueInput
}

export type UpdateOneLoginLogArgs = {
  data: LoginLogUpdateInput
  where: LoginLogWhereUniqueInput
}

export type UpdateManyLoginLogArgs = {
  data: LoginLogUpdateManyMutationInput
  where?: LoginLogWhereInput
}

export type DeleteManyLoginLogArgs = {
  where?: LoginLogWhereInput
}

export type CreateOnePasswordResetTokenArgs = {
  data: PasswordResetTokenCreateInput
}

export type UpsertOnePasswordResetTokenArgs = {
  where: PasswordResetTokenWhereUniqueInput
  create: PasswordResetTokenCreateInput
  update: PasswordResetTokenUpdateInput
}

export type CreateManyPasswordResetTokenArgs = {
  data: PasswordResetTokenCreateManyInput[]
  skipDuplicates?: boolean
}

export type CreateManyPasswordResetTokenAndReturnArgs = {
  data: PasswordResetTokenCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOnePasswordResetTokenArgs = {
  where: PasswordResetTokenWhereUniqueInput
}

export type UpdateOnePasswordResetTokenArgs = {
  data: PasswordResetTokenUpdateInput
  where: PasswordResetTokenWhereUniqueInput
}

export type UpdateManyPasswordResetTokenArgs = {
  data: PasswordResetTokenUpdateManyMutationInput
  where?: PasswordResetTokenWhereInput
}

export type DeleteManyPasswordResetTokenArgs = {
  where?: PasswordResetTokenWhereInput
}

export type CreateOneTokenBlacklistArgs = {
  data: TokenBlacklistCreateInput
}

export type UpsertOneTokenBlacklistArgs = {
  where: TokenBlacklistWhereUniqueInput
  create: TokenBlacklistCreateInput
  update: TokenBlacklistUpdateInput
}

export type CreateManyTokenBlacklistArgs = {
  data: TokenBlacklistCreateManyInput[]
  skipDuplicates?: boolean
}

export type CreateManyTokenBlacklistAndReturnArgs = {
  data: TokenBlacklistCreateManyInput[]
  skipDuplicates?: boolean
}

export type DeleteOneTokenBlacklistArgs = {
  where: TokenBlacklistWhereUniqueInput
}

export type UpdateOneTokenBlacklistArgs = {
  data: TokenBlacklistUpdateInput
  where: TokenBlacklistWhereUniqueInput
}

export type UpdateManyTokenBlacklistArgs = {
  data: TokenBlacklistUpdateManyMutationInput
  where?: TokenBlacklistWhereInput
}

export type DeleteManyTokenBlacklistArgs = {
  where?: TokenBlacklistWhereInput
}

export type ExecuteRawArgs = {
  query: string
  parameters?: any
}

export type QueryRawArgs = {
  query: string
  parameters?: any
}

export type UserCountOutputTypeRefreshTokensArgs = {
  where?: RefreshTokenWhereInput
}

export type UserCountOutputTypeSessionsArgs = {
  where?: SessionWhereInput
}

export type UserCountOutputTypeLoginLogsArgs = {
  where?: LoginLogWhereInput
}

export type UserCountOutputTypePasswordResetTokensArgs = {
  where?: PasswordResetTokenWhereInput
}

export type UserWhereInput = {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: StringFilter
  email?: StringFilter
  password?: StringNullableFilter | null
  roles?: EnumRolesNullableListFilter
  googleId?: StringNullableFilter | null
  googleProfile?: JsonNullableFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  refreshTokens?: RefreshTokenListRelationFilter
  sessions?: SessionListRelationFilter
  loginLogs?: LoginLogListRelationFilter
  passwordResetTokens?: PasswordResetTokenListRelationFilter
}

export type UserOrderByWithRelationInput = {
  id?: SortOrder
  email?: SortOrder
  password?: SortOrderInput
  roles?: SortOrder
  googleId?: SortOrderInput
  googleProfile?: SortOrderInput
  createdAt?: SortOrder
  updatedAt?: SortOrder
  refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  sessions?: SessionOrderByRelationAggregateInput
  loginLogs?: LoginLogOrderByRelationAggregateInput
  passwordResetTokens?: PasswordResetTokenOrderByRelationAggregateInput
}

export type UserWhereUniqueInput = AtLeast<
  {
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput[]
    password?: StringNullableFilter | null
    roles?: EnumRolesNullableListFilter
    googleProfile?: JsonNullableFilter
    createdAt?: DateTimeFilter
    updatedAt?: DateTimeFilter
    refreshTokens?: RefreshTokenListRelationFilter
    sessions?: SessionListRelationFilter
    loginLogs?: LoginLogListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
  },
  'id' | 'email' | 'googleId'
>

export type UserOrderByWithAggregationInput = {
  id?: SortOrder
  email?: SortOrder
  password?: SortOrderInput
  roles?: SortOrder
  googleId?: SortOrderInput
  googleProfile?: SortOrderInput
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  email?: StringWithAggregatesFilter
  password?: StringNullableWithAggregatesFilter | null
  roles?: EnumRolesNullableListFilter
  googleId?: StringNullableWithAggregatesFilter | null
  googleProfile?: JsonNullableWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export type RefreshTokenWhereInput = {
  AND?: RefreshTokenWhereInput[]
  OR?: RefreshTokenWhereInput[]
  NOT?: RefreshTokenWhereInput[]
  id?: StringFilter
  token?: StringFilter
  userId?: StringFilter
  familyId?: StringFilter
  sessionId?: StringFilter
  expiresAt?: DateTimeFilter
  used?: BoolFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  user?: UserRelationFilter
}

export type RefreshTokenOrderByWithRelationInput = {
  id?: SortOrder
  token?: SortOrder
  userId?: SortOrder
  familyId?: SortOrder
  sessionId?: SortOrder
  expiresAt?: SortOrder
  used?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  user?: UserOrderByWithRelationInput
}

export type RefreshTokenWhereUniqueInput = AtLeast<
  {
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput[]
    userId?: StringFilter
    familyId?: StringFilter
    sessionId?: StringFilter
    expiresAt?: DateTimeFilter
    used?: BoolFilter
    createdAt?: DateTimeFilter
    updatedAt?: DateTimeFilter
    user?: UserRelationFilter
  },
  'id' | 'token'
>

export type RefreshTokenOrderByWithAggregationInput = {
  id?: SortOrder
  token?: SortOrder
  userId?: SortOrder
  familyId?: SortOrder
  sessionId?: SortOrder
  expiresAt?: SortOrder
  used?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: RefreshTokenCountOrderByAggregateInput
  _max?: RefreshTokenMaxOrderByAggregateInput
  _min?: RefreshTokenMinOrderByAggregateInput
}

export type RefreshTokenScalarWhereWithAggregatesInput = {
  AND?: RefreshTokenScalarWhereWithAggregatesInput[]
  OR?: RefreshTokenScalarWhereWithAggregatesInput[]
  NOT?: RefreshTokenScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  token?: StringWithAggregatesFilter
  userId?: StringWithAggregatesFilter
  familyId?: StringWithAggregatesFilter
  sessionId?: StringWithAggregatesFilter
  expiresAt?: DateTimeWithAggregatesFilter
  used?: BoolWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export type SessionWhereInput = {
  AND?: SessionWhereInput[]
  OR?: SessionWhereInput[]
  NOT?: SessionWhereInput[]
  id?: StringFilter
  userId?: StringFilter
  deviceInfo?: StringNullableFilter | null
  ipAddress?: StringNullableFilter | null
  lastActiveAt?: DateTimeFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  user?: UserRelationFilter
}

export type SessionOrderByWithRelationInput = {
  id?: SortOrder
  userId?: SortOrder
  deviceInfo?: SortOrderInput
  ipAddress?: SortOrderInput
  lastActiveAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  user?: UserOrderByWithRelationInput
}

export type SessionWhereUniqueInput = AtLeast<
  {
    id?: string
    AND?: SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput[]
    userId?: StringFilter
    deviceInfo?: StringNullableFilter | null
    ipAddress?: StringNullableFilter | null
    lastActiveAt?: DateTimeFilter
    createdAt?: DateTimeFilter
    updatedAt?: DateTimeFilter
    user?: UserRelationFilter
  },
  'id'
>

export type SessionOrderByWithAggregationInput = {
  id?: SortOrder
  userId?: SortOrder
  deviceInfo?: SortOrderInput
  ipAddress?: SortOrderInput
  lastActiveAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: SessionCountOrderByAggregateInput
  _max?: SessionMaxOrderByAggregateInput
  _min?: SessionMinOrderByAggregateInput
}

export type SessionScalarWhereWithAggregatesInput = {
  AND?: SessionScalarWhereWithAggregatesInput[]
  OR?: SessionScalarWhereWithAggregatesInput[]
  NOT?: SessionScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  userId?: StringWithAggregatesFilter
  deviceInfo?: StringNullableWithAggregatesFilter | null
  ipAddress?: StringNullableWithAggregatesFilter | null
  lastActiveAt?: DateTimeWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export type LoginLogWhereInput = {
  AND?: LoginLogWhereInput[]
  OR?: LoginLogWhereInput[]
  NOT?: LoginLogWhereInput[]
  id?: StringFilter
  userId?: StringNullableFilter | null
  success?: BoolFilter
  ipAddress?: StringNullableFilter | null
  userAgent?: StringNullableFilter | null
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  user?: UserNullableRelationFilter | null
}

export type LoginLogOrderByWithRelationInput = {
  id?: SortOrder
  userId?: SortOrderInput
  success?: SortOrder
  ipAddress?: SortOrderInput
  userAgent?: SortOrderInput
  createdAt?: SortOrder
  updatedAt?: SortOrder
  user?: UserOrderByWithRelationInput
}

export type LoginLogWhereUniqueInput = AtLeast<
  {
    id?: string
    AND?: LoginLogWhereInput[]
    OR?: LoginLogWhereInput[]
    NOT?: LoginLogWhereInput[]
    userId?: StringNullableFilter | null
    success?: BoolFilter
    ipAddress?: StringNullableFilter | null
    userAgent?: StringNullableFilter | null
    createdAt?: DateTimeFilter
    updatedAt?: DateTimeFilter
    user?: UserNullableRelationFilter | null
  },
  'id'
>

export type LoginLogOrderByWithAggregationInput = {
  id?: SortOrder
  userId?: SortOrderInput
  success?: SortOrder
  ipAddress?: SortOrderInput
  userAgent?: SortOrderInput
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: LoginLogCountOrderByAggregateInput
  _max?: LoginLogMaxOrderByAggregateInput
  _min?: LoginLogMinOrderByAggregateInput
}

export type LoginLogScalarWhereWithAggregatesInput = {
  AND?: LoginLogScalarWhereWithAggregatesInput[]
  OR?: LoginLogScalarWhereWithAggregatesInput[]
  NOT?: LoginLogScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  userId?: StringNullableWithAggregatesFilter | null
  success?: BoolWithAggregatesFilter
  ipAddress?: StringNullableWithAggregatesFilter | null
  userAgent?: StringNullableWithAggregatesFilter | null
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export type PasswordResetTokenWhereInput = {
  AND?: PasswordResetTokenWhereInput[]
  OR?: PasswordResetTokenWhereInput[]
  NOT?: PasswordResetTokenWhereInput[]
  id?: StringFilter
  token?: StringFilter
  userId?: StringFilter
  expiresAt?: DateTimeFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  user?: UserRelationFilter
}

export type PasswordResetTokenOrderByWithRelationInput = {
  id?: SortOrder
  token?: SortOrder
  userId?: SortOrder
  expiresAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  user?: UserOrderByWithRelationInput
}

export type PasswordResetTokenWhereUniqueInput = AtLeast<
  {
    id?: string
    token?: string
    AND?: PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput[]
    userId?: StringFilter
    expiresAt?: DateTimeFilter
    createdAt?: DateTimeFilter
    updatedAt?: DateTimeFilter
    user?: UserRelationFilter
  },
  'id' | 'token'
>

export type PasswordResetTokenOrderByWithAggregationInput = {
  id?: SortOrder
  token?: SortOrder
  userId?: SortOrder
  expiresAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: PasswordResetTokenCountOrderByAggregateInput
  _max?: PasswordResetTokenMaxOrderByAggregateInput
  _min?: PasswordResetTokenMinOrderByAggregateInput
}

export type PasswordResetTokenScalarWhereWithAggregatesInput = {
  AND?: PasswordResetTokenScalarWhereWithAggregatesInput[]
  OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
  NOT?: PasswordResetTokenScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  token?: StringWithAggregatesFilter
  userId?: StringWithAggregatesFilter
  expiresAt?: DateTimeWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export type TokenBlacklistWhereInput = {
  AND?: TokenBlacklistWhereInput[]
  OR?: TokenBlacklistWhereInput[]
  NOT?: TokenBlacklistWhereInput[]
  id?: StringFilter
  token?: StringFilter
  expiresAt?: DateTimeFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export type TokenBlacklistOrderByWithRelationInput = {
  id?: SortOrder
  token?: SortOrder
  expiresAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type TokenBlacklistWhereUniqueInput = AtLeast<
  {
    id?: string
    token?: string
    AND?: TokenBlacklistWhereInput[]
    OR?: TokenBlacklistWhereInput[]
    NOT?: TokenBlacklistWhereInput[]
    expiresAt?: DateTimeFilter
    createdAt?: DateTimeFilter
    updatedAt?: DateTimeFilter
  },
  'id' | 'token'
>

export type TokenBlacklistOrderByWithAggregationInput = {
  id?: SortOrder
  token?: SortOrder
  expiresAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: TokenBlacklistCountOrderByAggregateInput
  _max?: TokenBlacklistMaxOrderByAggregateInput
  _min?: TokenBlacklistMinOrderByAggregateInput
}

export type TokenBlacklistScalarWhereWithAggregatesInput = {
  AND?: TokenBlacklistScalarWhereWithAggregatesInput[]
  OR?: TokenBlacklistScalarWhereWithAggregatesInput[]
  NOT?: TokenBlacklistScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  token?: StringWithAggregatesFilter
  expiresAt?: DateTimeWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export type UserCreateInput = {
  id?: string
  email: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  sessions?: SessionCreateNestedManyWithoutUserInput
  loginLogs?: LoginLogCreateNestedManyWithoutUserInput
  passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateInput = {
  id?: string
  email: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  loginLogs?: LoginLogUncheckedCreateNestedManyWithoutUserInput
  passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
}

export type UserUpdateInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  sessions?: SessionUpdateManyWithoutUserNestedInput
  loginLogs?: LoginLogUpdateManyWithoutUserNestedInput
  passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  loginLogs?: LoginLogUncheckedUpdateManyWithoutUserNestedInput
  passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateManyInput = {
  id?: string
  email: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
}

export type UserUpdateManyMutationInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
}

export type UserUncheckedUpdateManyInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
}

export type RefreshTokenCreateInput = {
  id?: string
  token: string
  familyId: string
  sessionId: string
  expiresAt: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
  user: UserCreateNestedOneWithoutRefreshTokensInput
}

export type RefreshTokenUncheckedCreateInput = {
  id?: string
  token: string
  userId: string
  familyId: string
  sessionId: string
  expiresAt: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type RefreshTokenUpdateInput = {
  id?: string
  token?: string
  familyId?: string
  sessionId?: string
  expiresAt?: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
  user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
}

export type RefreshTokenUncheckedUpdateInput = {
  id?: string
  token?: string
  userId?: string
  familyId?: string
  sessionId?: string
  expiresAt?: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type RefreshTokenCreateManyInput = {
  id?: string
  token: string
  userId: string
  familyId: string
  sessionId: string
  expiresAt: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type RefreshTokenUpdateManyMutationInput = {
  id?: string
  token?: string
  familyId?: string
  sessionId?: string
  expiresAt?: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type RefreshTokenUncheckedUpdateManyInput = {
  id?: string
  token?: string
  userId?: string
  familyId?: string
  sessionId?: string
  expiresAt?: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type SessionCreateInput = {
  id?: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
  user: UserCreateNestedOneWithoutSessionsInput
}

export type SessionUncheckedCreateInput = {
  id?: string
  userId: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type SessionUpdateInput = {
  id?: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
  user?: UserUpdateOneRequiredWithoutSessionsNestedInput
}

export type SessionUncheckedUpdateInput = {
  id?: string
  userId?: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type SessionCreateManyInput = {
  id?: string
  userId: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type SessionUpdateManyMutationInput = {
  id?: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type SessionUncheckedUpdateManyInput = {
  id?: string
  userId?: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type LoginLogCreateInput = {
  id?: string
  success: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
  user?: UserCreateNestedOneWithoutLoginLogsInput
}

export type LoginLogUncheckedCreateInput = {
  id?: string
  userId?: string | null
  success: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type LoginLogUpdateInput = {
  id?: string
  success?: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
  user?: UserUpdateOneWithoutLoginLogsNestedInput
}

export type LoginLogUncheckedUpdateInput = {
  id?: string
  userId?: string | null
  success?: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type LoginLogCreateManyInput = {
  id?: string
  userId?: string | null
  success: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type LoginLogUpdateManyMutationInput = {
  id?: string
  success?: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type LoginLogUncheckedUpdateManyInput = {
  id?: string
  userId?: string | null
  success?: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type PasswordResetTokenCreateInput = {
  id?: string
  token: string
  expiresAt: Date
  createdAt?: Date
  updatedAt?: Date
  user: UserCreateNestedOneWithoutPasswordResetTokensInput
}

export type PasswordResetTokenUncheckedCreateInput = {
  id?: string
  token: string
  userId: string
  expiresAt: Date
  createdAt?: Date
  updatedAt?: Date
}

export type PasswordResetTokenUpdateInput = {
  id?: string
  token?: string
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
  user?: UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput
}

export type PasswordResetTokenUncheckedUpdateInput = {
  id?: string
  token?: string
  userId?: string
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type PasswordResetTokenCreateManyInput = {
  id?: string
  token: string
  userId: string
  expiresAt: Date
  createdAt?: Date
  updatedAt?: Date
}

export type PasswordResetTokenUpdateManyMutationInput = {
  id?: string
  token?: string
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type PasswordResetTokenUncheckedUpdateManyInput = {
  id?: string
  token?: string
  userId?: string
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type TokenBlacklistCreateInput = {
  id?: string
  token: string
  expiresAt: Date
  createdAt?: Date
  updatedAt?: Date
}

export type TokenBlacklistUncheckedCreateInput = {
  id?: string
  token: string
  expiresAt: Date
  createdAt?: Date
  updatedAt?: Date
}

export type TokenBlacklistUpdateInput = {
  id?: string
  token?: string
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type TokenBlacklistUncheckedUpdateInput = {
  id?: string
  token?: string
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type TokenBlacklistCreateManyInput = {
  id?: string
  token: string
  expiresAt: Date
  createdAt?: Date
  updatedAt?: Date
}

export type TokenBlacklistUpdateManyMutationInput = {
  id?: string
  token?: string
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type TokenBlacklistUncheckedUpdateManyInput = {
  id?: string
  token?: string
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type StringFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringFilter
}

export type StringNullableFilter = {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableFilter | null
}

export type EnumRolesNullableListFilter = {
  equals?: Roles[] | null
  has?: Roles | null
  hasEvery?: Roles[]
  hasSome?: Roles[]
  isEmpty?: boolean
}

export type JsonNullableFilter = {
  equals?: any
  path?: string[]
  string_contains?: string
  string_starts_with?: string
  string_ends_with?: string
  array_contains?: any | null
  array_starts_with?: any | null
  array_ends_with?: any | null
  lt?: any
  lte?: any
  gt?: any
  gte?: any
  not?: any
}

export type DateTimeFilter = {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export type RefreshTokenListRelationFilter = {
  every?: RefreshTokenWhereInput
  some?: RefreshTokenWhereInput
  none?: RefreshTokenWhereInput
}

export type SessionListRelationFilter = {
  every?: SessionWhereInput
  some?: SessionWhereInput
  none?: SessionWhereInput
}

export type LoginLogListRelationFilter = {
  every?: LoginLogWhereInput
  some?: LoginLogWhereInput
  none?: LoginLogWhereInput
}

export type PasswordResetTokenListRelationFilter = {
  every?: PasswordResetTokenWhereInput
  some?: PasswordResetTokenWhereInput
  none?: PasswordResetTokenWhereInput
}

export type SortOrderInput = {
  sort: SortOrder
  nulls?: NullsOrder
}

export type RefreshTokenOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type SessionOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type LoginLogOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type PasswordResetTokenOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type UserCountOrderByAggregateInput = {
  id?: SortOrder
  email?: SortOrder
  password?: SortOrder
  roles?: SortOrder
  googleId?: SortOrder
  googleProfile?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserMaxOrderByAggregateInput = {
  id?: SortOrder
  email?: SortOrder
  password?: SortOrder
  googleId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserMinOrderByAggregateInput = {
  id?: SortOrder
  email?: SortOrder
  password?: SortOrder
  googleId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type StringWithAggregatesFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export type StringNullableWithAggregatesFilter = {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export type JsonNullableWithAggregatesFilter = {
  equals?: any
  path?: string[]
  string_contains?: string
  string_starts_with?: string
  string_ends_with?: string
  array_contains?: any | null
  array_starts_with?: any | null
  array_ends_with?: any | null
  lt?: any
  lte?: any
  gt?: any
  gte?: any
  not?: any
  _count?: NestedIntNullableFilter
  _min?: NestedJsonNullableFilter
  _max?: NestedJsonNullableFilter
}

export type DateTimeWithAggregatesFilter = {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export type BoolFilter = {
  equals?: boolean
  not?: NestedBoolFilter
}

export type UserRelationFilter = {
  is?: UserWhereInput
  isNot?: UserWhereInput
}

export type RefreshTokenCountOrderByAggregateInput = {
  id?: SortOrder
  token?: SortOrder
  userId?: SortOrder
  familyId?: SortOrder
  sessionId?: SortOrder
  expiresAt?: SortOrder
  used?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type RefreshTokenMaxOrderByAggregateInput = {
  id?: SortOrder
  token?: SortOrder
  userId?: SortOrder
  familyId?: SortOrder
  sessionId?: SortOrder
  expiresAt?: SortOrder
  used?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type RefreshTokenMinOrderByAggregateInput = {
  id?: SortOrder
  token?: SortOrder
  userId?: SortOrder
  familyId?: SortOrder
  sessionId?: SortOrder
  expiresAt?: SortOrder
  used?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type BoolWithAggregatesFilter = {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export type SessionCountOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  deviceInfo?: SortOrder
  ipAddress?: SortOrder
  lastActiveAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type SessionMaxOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  deviceInfo?: SortOrder
  ipAddress?: SortOrder
  lastActiveAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type SessionMinOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  deviceInfo?: SortOrder
  ipAddress?: SortOrder
  lastActiveAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserNullableRelationFilter = {
  is?: UserWhereInput | null
  isNot?: UserWhereInput | null
}

export type LoginLogCountOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  success?: SortOrder
  ipAddress?: SortOrder
  userAgent?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type LoginLogMaxOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  success?: SortOrder
  ipAddress?: SortOrder
  userAgent?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type LoginLogMinOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  success?: SortOrder
  ipAddress?: SortOrder
  userAgent?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type PasswordResetTokenCountOrderByAggregateInput = {
  id?: SortOrder
  token?: SortOrder
  userId?: SortOrder
  expiresAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type PasswordResetTokenMaxOrderByAggregateInput = {
  id?: SortOrder
  token?: SortOrder
  userId?: SortOrder
  expiresAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type PasswordResetTokenMinOrderByAggregateInput = {
  id?: SortOrder
  token?: SortOrder
  userId?: SortOrder
  expiresAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type TokenBlacklistCountOrderByAggregateInput = {
  id?: SortOrder
  token?: SortOrder
  expiresAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type TokenBlacklistMaxOrderByAggregateInput = {
  id?: SortOrder
  token?: SortOrder
  expiresAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type TokenBlacklistMinOrderByAggregateInput = {
  id?: SortOrder
  token?: SortOrder
  expiresAt?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserCreaterolesInput = {
  set: Roles[]
}

export type RefreshTokenCreateNestedManyWithoutUserInput = {
  create?: RefreshTokenCreateWithoutUserInput[]
  connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput[]
  createMany?: RefreshTokenCreateManyUserInputEnvelope
  connect?: RefreshTokenWhereUniqueInput[]
}

export type SessionCreateNestedManyWithoutUserInput = {
  create?: SessionCreateWithoutUserInput[]
  connectOrCreate?: SessionCreateOrConnectWithoutUserInput[]
  createMany?: SessionCreateManyUserInputEnvelope
  connect?: SessionWhereUniqueInput[]
}

export type LoginLogCreateNestedManyWithoutUserInput = {
  create?: LoginLogCreateWithoutUserInput[]
  connectOrCreate?: LoginLogCreateOrConnectWithoutUserInput[]
  createMany?: LoginLogCreateManyUserInputEnvelope
  connect?: LoginLogWhereUniqueInput[]
}

export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
  create?: PasswordResetTokenCreateWithoutUserInput[]
  connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput[]
  createMany?: PasswordResetTokenCreateManyUserInputEnvelope
  connect?: PasswordResetTokenWhereUniqueInput[]
}

export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
  create?: RefreshTokenCreateWithoutUserInput[]
  connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput[]
  createMany?: RefreshTokenCreateManyUserInputEnvelope
  connect?: RefreshTokenWhereUniqueInput[]
}

export type SessionUncheckedCreateNestedManyWithoutUserInput = {
  create?: SessionCreateWithoutUserInput[]
  connectOrCreate?: SessionCreateOrConnectWithoutUserInput[]
  createMany?: SessionCreateManyUserInputEnvelope
  connect?: SessionWhereUniqueInput[]
}

export type LoginLogUncheckedCreateNestedManyWithoutUserInput = {
  create?: LoginLogCreateWithoutUserInput[]
  connectOrCreate?: LoginLogCreateOrConnectWithoutUserInput[]
  createMany?: LoginLogCreateManyUserInputEnvelope
  connect?: LoginLogWhereUniqueInput[]
}

export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
  create?: PasswordResetTokenCreateWithoutUserInput[]
  connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput[]
  createMany?: PasswordResetTokenCreateManyUserInputEnvelope
  connect?: PasswordResetTokenWhereUniqueInput[]
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: string | null
}

export type UserUpdaterolesInput = {
  set?: Roles[]
  push?: Roles[]
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Date
}

export type RefreshTokenUpdateManyWithoutUserNestedInput = {
  create?: RefreshTokenCreateWithoutUserInput[]
  connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput[]
  upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: RefreshTokenCreateManyUserInputEnvelope
  set?: RefreshTokenWhereUniqueInput[]
  disconnect?: RefreshTokenWhereUniqueInput[]
  delete?: RefreshTokenWhereUniqueInput[]
  connect?: RefreshTokenWhereUniqueInput[]
  update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: RefreshTokenScalarWhereInput[]
}

export type SessionUpdateManyWithoutUserNestedInput = {
  create?: SessionCreateWithoutUserInput[]
  connectOrCreate?: SessionCreateOrConnectWithoutUserInput[]
  upsert?: SessionUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: SessionCreateManyUserInputEnvelope
  set?: SessionWhereUniqueInput[]
  disconnect?: SessionWhereUniqueInput[]
  delete?: SessionWhereUniqueInput[]
  connect?: SessionWhereUniqueInput[]
  update?: SessionUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: SessionUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: SessionScalarWhereInput[]
}

export type LoginLogUpdateManyWithoutUserNestedInput = {
  create?: LoginLogCreateWithoutUserInput[]
  connectOrCreate?: LoginLogCreateOrConnectWithoutUserInput[]
  upsert?: LoginLogUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: LoginLogCreateManyUserInputEnvelope
  set?: LoginLogWhereUniqueInput[]
  disconnect?: LoginLogWhereUniqueInput[]
  delete?: LoginLogWhereUniqueInput[]
  connect?: LoginLogWhereUniqueInput[]
  update?: LoginLogUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: LoginLogUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: LoginLogScalarWhereInput[]
}

export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
  create?: PasswordResetTokenCreateWithoutUserInput[]
  connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput[]
  upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: PasswordResetTokenCreateManyUserInputEnvelope
  set?: PasswordResetTokenWhereUniqueInput[]
  disconnect?: PasswordResetTokenWhereUniqueInput[]
  delete?: PasswordResetTokenWhereUniqueInput[]
  connect?: PasswordResetTokenWhereUniqueInput[]
  update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: PasswordResetTokenScalarWhereInput[]
}

export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
  create?: RefreshTokenCreateWithoutUserInput[]
  connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput[]
  upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: RefreshTokenCreateManyUserInputEnvelope
  set?: RefreshTokenWhereUniqueInput[]
  disconnect?: RefreshTokenWhereUniqueInput[]
  delete?: RefreshTokenWhereUniqueInput[]
  connect?: RefreshTokenWhereUniqueInput[]
  update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: RefreshTokenScalarWhereInput[]
}

export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
  create?: SessionCreateWithoutUserInput[]
  connectOrCreate?: SessionCreateOrConnectWithoutUserInput[]
  upsert?: SessionUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: SessionCreateManyUserInputEnvelope
  set?: SessionWhereUniqueInput[]
  disconnect?: SessionWhereUniqueInput[]
  delete?: SessionWhereUniqueInput[]
  connect?: SessionWhereUniqueInput[]
  update?: SessionUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: SessionUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: SessionScalarWhereInput[]
}

export type LoginLogUncheckedUpdateManyWithoutUserNestedInput = {
  create?: LoginLogCreateWithoutUserInput[]
  connectOrCreate?: LoginLogCreateOrConnectWithoutUserInput[]
  upsert?: LoginLogUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: LoginLogCreateManyUserInputEnvelope
  set?: LoginLogWhereUniqueInput[]
  disconnect?: LoginLogWhereUniqueInput[]
  delete?: LoginLogWhereUniqueInput[]
  connect?: LoginLogWhereUniqueInput[]
  update?: LoginLogUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: LoginLogUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: LoginLogScalarWhereInput[]
}

export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
  create?: PasswordResetTokenCreateWithoutUserInput[]
  connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput[]
  upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: PasswordResetTokenCreateManyUserInputEnvelope
  set?: PasswordResetTokenWhereUniqueInput[]
  disconnect?: PasswordResetTokenWhereUniqueInput[]
  delete?: PasswordResetTokenWhereUniqueInput[]
  connect?: PasswordResetTokenWhereUniqueInput[]
  update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: PasswordResetTokenScalarWhereInput[]
}

export type UserCreateNestedOneWithoutRefreshTokensInput = {
  create?: UserCreateWithoutRefreshTokensInput
  connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
  connect?: UserWhereUniqueInput
}

export type BoolFieldUpdateOperationsInput = {
  set?: boolean
}

export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
  create?: UserCreateWithoutRefreshTokensInput
  connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
  upsert?: UserUpsertWithoutRefreshTokensInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateToOneWithWhereWithoutRefreshTokensInput
}

export type UserCreateNestedOneWithoutSessionsInput = {
  create?: UserCreateWithoutSessionsInput
  connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
  connect?: UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  create?: UserCreateWithoutSessionsInput
  connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
  upsert?: UserUpsertWithoutSessionsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateToOneWithWhereWithoutSessionsInput
}

export type UserCreateNestedOneWithoutLoginLogsInput = {
  create?: UserCreateWithoutLoginLogsInput
  connectOrCreate?: UserCreateOrConnectWithoutLoginLogsInput
  connect?: UserWhereUniqueInput
}

export type UserUpdateOneWithoutLoginLogsNestedInput = {
  create?: UserCreateWithoutLoginLogsInput
  connectOrCreate?: UserCreateOrConnectWithoutLoginLogsInput
  upsert?: UserUpsertWithoutLoginLogsInput
  disconnect?: UserWhereInput
  delete?: UserWhereInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateToOneWithWhereWithoutLoginLogsInput
}

export type UserCreateNestedOneWithoutPasswordResetTokensInput = {
  create?: UserCreateWithoutPasswordResetTokensInput
  connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
  connect?: UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
  create?: UserCreateWithoutPasswordResetTokensInput
  connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
  upsert?: UserUpsertWithoutPasswordResetTokensInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateToOneWithWhereWithoutPasswordResetTokensInput
}

export type NestedStringFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export type NestedStringNullableFilter = {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export type NestedDateTimeFilter = {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export type NestedStringWithAggregatesFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export type NestedIntFilter = {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export type NestedStringNullableWithAggregatesFilter = {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export type NestedIntNullableFilter = {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export type NestedJsonNullableFilter = {
  equals?: any
  path?: string[]
  string_contains?: string
  string_starts_with?: string
  string_ends_with?: string
  array_contains?: any | null
  array_starts_with?: any | null
  array_ends_with?: any | null
  lt?: any
  lte?: any
  gt?: any
  gte?: any
  not?: any
}

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export type NestedBoolFilter = {
  equals?: boolean
  not?: NestedBoolFilter
}

export type NestedBoolWithAggregatesFilter = {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export type RefreshTokenCreateWithoutUserInput = {
  id?: string
  token: string
  familyId: string
  sessionId: string
  expiresAt: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type RefreshTokenUncheckedCreateWithoutUserInput = {
  id?: string
  token: string
  familyId: string
  sessionId: string
  expiresAt: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type RefreshTokenCreateOrConnectWithoutUserInput = {
  where: RefreshTokenWhereUniqueInput
  create: RefreshTokenCreateWithoutUserInput
}

export type RefreshTokenCreateManyUserInputEnvelope = {
  data: RefreshTokenCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type SessionCreateWithoutUserInput = {
  id?: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type SessionUncheckedCreateWithoutUserInput = {
  id?: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type SessionCreateOrConnectWithoutUserInput = {
  where: SessionWhereUniqueInput
  create: SessionCreateWithoutUserInput
}

export type SessionCreateManyUserInputEnvelope = {
  data: SessionCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type LoginLogCreateWithoutUserInput = {
  id?: string
  success: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type LoginLogUncheckedCreateWithoutUserInput = {
  id?: string
  success: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type LoginLogCreateOrConnectWithoutUserInput = {
  where: LoginLogWhereUniqueInput
  create: LoginLogCreateWithoutUserInput
}

export type LoginLogCreateManyUserInputEnvelope = {
  data: LoginLogCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type PasswordResetTokenCreateWithoutUserInput = {
  id?: string
  token: string
  expiresAt: Date
  createdAt?: Date
  updatedAt?: Date
}

export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
  id?: string
  token: string
  expiresAt: Date
  createdAt?: Date
  updatedAt?: Date
}

export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
  where: PasswordResetTokenWhereUniqueInput
  create: PasswordResetTokenCreateWithoutUserInput
}

export type PasswordResetTokenCreateManyUserInputEnvelope = {
  data: PasswordResetTokenCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
  where: RefreshTokenWhereUniqueInput
  update: RefreshTokenUpdateWithoutUserInput
  create: RefreshTokenCreateWithoutUserInput
}

export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
  where: RefreshTokenWhereUniqueInput
  data: RefreshTokenUpdateWithoutUserInput
}

export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
  where: RefreshTokenScalarWhereInput
  data: RefreshTokenUpdateManyMutationInput
}

export type RefreshTokenScalarWhereInput = {
  AND?: RefreshTokenScalarWhereInput[]
  OR?: RefreshTokenScalarWhereInput[]
  NOT?: RefreshTokenScalarWhereInput[]
  id?: StringFilter
  token?: StringFilter
  userId?: StringFilter
  familyId?: StringFilter
  sessionId?: StringFilter
  expiresAt?: DateTimeFilter
  used?: BoolFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  where: SessionWhereUniqueInput
  update: SessionUpdateWithoutUserInput
  create: SessionCreateWithoutUserInput
}

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  where: SessionWhereUniqueInput
  data: SessionUpdateWithoutUserInput
}

export type SessionUpdateManyWithWhereWithoutUserInput = {
  where: SessionScalarWhereInput
  data: SessionUpdateManyMutationInput
}

export type SessionScalarWhereInput = {
  AND?: SessionScalarWhereInput[]
  OR?: SessionScalarWhereInput[]
  NOT?: SessionScalarWhereInput[]
  id?: StringFilter
  userId?: StringFilter
  deviceInfo?: StringNullableFilter | null
  ipAddress?: StringNullableFilter | null
  lastActiveAt?: DateTimeFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export type LoginLogUpsertWithWhereUniqueWithoutUserInput = {
  where: LoginLogWhereUniqueInput
  update: LoginLogUpdateWithoutUserInput
  create: LoginLogCreateWithoutUserInput
}

export type LoginLogUpdateWithWhereUniqueWithoutUserInput = {
  where: LoginLogWhereUniqueInput
  data: LoginLogUpdateWithoutUserInput
}

export type LoginLogUpdateManyWithWhereWithoutUserInput = {
  where: LoginLogScalarWhereInput
  data: LoginLogUpdateManyMutationInput
}

export type LoginLogScalarWhereInput = {
  AND?: LoginLogScalarWhereInput[]
  OR?: LoginLogScalarWhereInput[]
  NOT?: LoginLogScalarWhereInput[]
  id?: StringFilter
  userId?: StringNullableFilter | null
  success?: BoolFilter
  ipAddress?: StringNullableFilter | null
  userAgent?: StringNullableFilter | null
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
  where: PasswordResetTokenWhereUniqueInput
  update: PasswordResetTokenUpdateWithoutUserInput
  create: PasswordResetTokenCreateWithoutUserInput
}

export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
  where: PasswordResetTokenWhereUniqueInput
  data: PasswordResetTokenUpdateWithoutUserInput
}

export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
  where: PasswordResetTokenScalarWhereInput
  data: PasswordResetTokenUpdateManyMutationInput
}

export type PasswordResetTokenScalarWhereInput = {
  AND?: PasswordResetTokenScalarWhereInput[]
  OR?: PasswordResetTokenScalarWhereInput[]
  NOT?: PasswordResetTokenScalarWhereInput[]
  id?: StringFilter
  token?: StringFilter
  userId?: StringFilter
  expiresAt?: DateTimeFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export type UserCreateWithoutRefreshTokensInput = {
  id?: string
  email: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  sessions?: SessionCreateNestedManyWithoutUserInput
  loginLogs?: LoginLogCreateNestedManyWithoutUserInput
  passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutRefreshTokensInput = {
  id?: string
  email: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  loginLogs?: LoginLogUncheckedCreateNestedManyWithoutUserInput
  passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutRefreshTokensInput = {
  where: UserWhereUniqueInput
  create: UserCreateWithoutRefreshTokensInput
}

export type UserUpsertWithoutRefreshTokensInput = {
  update: UserUpdateWithoutRefreshTokensInput
  create: UserCreateWithoutRefreshTokensInput
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
  where?: UserWhereInput
  data: UserUpdateWithoutRefreshTokensInput
}

export type UserUpdateWithoutRefreshTokensInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  sessions?: SessionUpdateManyWithoutUserNestedInput
  loginLogs?: LoginLogUpdateManyWithoutUserNestedInput
  passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutRefreshTokensInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  loginLogs?: LoginLogUncheckedUpdateManyWithoutUserNestedInput
  passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateWithoutSessionsInput = {
  id?: string
  email: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  loginLogs?: LoginLogCreateNestedManyWithoutUserInput
  passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutSessionsInput = {
  id?: string
  email: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  loginLogs?: LoginLogUncheckedCreateNestedManyWithoutUserInput
  passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutSessionsInput = {
  where: UserWhereUniqueInput
  create: UserCreateWithoutSessionsInput
}

export type UserUpsertWithoutSessionsInput = {
  update: UserUpdateWithoutSessionsInput
  create: UserCreateWithoutSessionsInput
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutSessionsInput = {
  where?: UserWhereInput
  data: UserUpdateWithoutSessionsInput
}

export type UserUpdateWithoutSessionsInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  loginLogs?: LoginLogUpdateManyWithoutUserNestedInput
  passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutSessionsInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  loginLogs?: LoginLogUncheckedUpdateManyWithoutUserNestedInput
  passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateWithoutLoginLogsInput = {
  id?: string
  email: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  sessions?: SessionCreateNestedManyWithoutUserInput
  passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutLoginLogsInput = {
  id?: string
  email: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutLoginLogsInput = {
  where: UserWhereUniqueInput
  create: UserCreateWithoutLoginLogsInput
}

export type UserUpsertWithoutLoginLogsInput = {
  update: UserUpdateWithoutLoginLogsInput
  create: UserCreateWithoutLoginLogsInput
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutLoginLogsInput = {
  where?: UserWhereInput
  data: UserUpdateWithoutLoginLogsInput
}

export type UserUpdateWithoutLoginLogsInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  sessions?: SessionUpdateManyWithoutUserNestedInput
  passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutLoginLogsInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateWithoutPasswordResetTokensInput = {
  id?: string
  email: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  sessions?: SessionCreateNestedManyWithoutUserInput
  loginLogs?: LoginLogCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutPasswordResetTokensInput = {
  id?: string
  email: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  loginLogs?: LoginLogUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutPasswordResetTokensInput = {
  where: UserWhereUniqueInput
  create: UserCreateWithoutPasswordResetTokensInput
}

export type UserUpsertWithoutPasswordResetTokensInput = {
  update: UserUpdateWithoutPasswordResetTokensInput
  create: UserCreateWithoutPasswordResetTokensInput
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
  where?: UserWhereInput
  data: UserUpdateWithoutPasswordResetTokensInput
}

export type UserUpdateWithoutPasswordResetTokensInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  sessions?: SessionUpdateManyWithoutUserNestedInput
  loginLogs?: LoginLogUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutPasswordResetTokensInput = {
  id?: string
  email?: string
  password?: string | null
  roles?: Roles[]
  googleId?: string | null
  googleProfile?: any
  createdAt?: Date
  updatedAt?: Date
  refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  loginLogs?: LoginLogUncheckedUpdateManyWithoutUserNestedInput
}

export type RefreshTokenCreateManyUserInput = {
  id?: string
  token: string
  familyId: string
  sessionId: string
  expiresAt: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type SessionCreateManyUserInput = {
  id?: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type LoginLogCreateManyUserInput = {
  id?: string
  success: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type PasswordResetTokenCreateManyUserInput = {
  id?: string
  token: string
  expiresAt: Date
  createdAt?: Date
  updatedAt?: Date
}

export type RefreshTokenUpdateWithoutUserInput = {
  id?: string
  token?: string
  familyId?: string
  sessionId?: string
  expiresAt?: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type RefreshTokenUncheckedUpdateWithoutUserInput = {
  id?: string
  token?: string
  familyId?: string
  sessionId?: string
  expiresAt?: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
  id?: string
  token?: string
  familyId?: string
  sessionId?: string
  expiresAt?: Date
  used?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type SessionUpdateWithoutUserInput = {
  id?: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type SessionUncheckedUpdateWithoutUserInput = {
  id?: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type SessionUncheckedUpdateManyWithoutUserInput = {
  id?: string
  deviceInfo?: string | null
  ipAddress?: string | null
  lastActiveAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type LoginLogUpdateWithoutUserInput = {
  id?: string
  success?: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type LoginLogUncheckedUpdateWithoutUserInput = {
  id?: string
  success?: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type LoginLogUncheckedUpdateManyWithoutUserInput = {
  id?: string
  success?: boolean
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type PasswordResetTokenUpdateWithoutUserInput = {
  id?: string
  token?: string
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
  id?: string
  token?: string
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
  id?: string
  token?: string
  expiresAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}
export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  password = 'password',
  roles = 'roles',
  googleId = 'googleId',
  googleProfile = 'googleProfile',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum RefreshTokenScalarFieldEnum {
  id = 'id',
  token = 'token',
  userId = 'userId',
  familyId = 'familyId',
  sessionId = 'sessionId',
  expiresAt = 'expiresAt',
  used = 'used',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum SessionScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  deviceInfo = 'deviceInfo',
  ipAddress = 'ipAddress',
  lastActiveAt = 'lastActiveAt',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum LoginLogScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  success = 'success',
  ipAddress = 'ipAddress',
  userAgent = 'userAgent',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum PasswordResetTokenScalarFieldEnum {
  id = 'id',
  token = 'token',
  userId = 'userId',
  expiresAt = 'expiresAt',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum TokenBlacklistScalarFieldEnum {
  id = 'id',
  token = 'token',
  expiresAt = 'expiresAt',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum NullableJsonNullValueInput {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum JsonNullValueFilter {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
  AnyNull = 'AnyNull',
}
export enum NullsOrder {
  first = 'first',
  last = 'last',
}
export enum Roles {
  USER = 'USER',
  SUPERADMIN = 'SUPERADMIN',
}
