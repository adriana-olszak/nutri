/** This file is code generated */
import gql from 'graphql-tag';

export default gql`
  extend type Mutation {
    createManyLoginLog(data: [LoginLogCreateManyInput!]!): BatchPayload    createManyLoginLogAndReturn(data: [LoginLogCreateManyInput!]!): [LoginLog!]!    createManyPasswordResetToken(data: [PasswordResetTokenCreateManyInput!]!): BatchPayload    createManyPasswordResetTokenAndReturn(data: [PasswordResetTokenCreateManyInput!]!): [PasswordResetToken!]!    createManyRefreshToken(data: [RefreshTokenCreateManyInput!]!): BatchPayload    createManyRefreshTokenAndReturn(data: [RefreshTokenCreateManyInput!]!): [RefreshToken!]!    createManySession(data: [SessionCreateManyInput!]!): BatchPayload    createManySessionAndReturn(data: [SessionCreateManyInput!]!): [Session!]!    createManyTokenBlacklist(data: [TokenBlacklistCreateManyInput!]!): BatchPayload    createManyTokenBlacklistAndReturn(data: [TokenBlacklistCreateManyInput!]!): [TokenBlacklist!]!    createManyUser(data: [UserCreateManyInput!]!): BatchPayload    createManyUserAndReturn(data: [UserCreateManyInput!]!): [User!]!  }
`;
