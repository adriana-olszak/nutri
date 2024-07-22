// This file is generated automatically. Do not edit it manually.

import { LoginLogResolver, typeDefs as LoginLogTypeDefs } from './LoginLog';
import {
  PasswordResetTokenResolver,
  typeDefs as PasswordResetTokenTypeDefs,
} from './PasswordResetToken';
import {
  RefreshTokenResolver,
  typeDefs as RefreshTokenTypeDefs,
} from './RefreshToken';
import { SessionResolver, typeDefs as SessionTypeDefs } from './Session';
import {
  TokenBlacklistResolver,
  typeDefs as TokenBlacklistTypeDefs,
} from './TokenBlacklist';
import { UserResolver, typeDefs as UserTypeDefs } from './User';

export const PRISMA_RESOLVERS = [
  LoginLogResolver,
  PasswordResetTokenResolver,
  RefreshTokenResolver,
  SessionResolver,
  TokenBlacklistResolver,
  UserResolver,
];

export const PRISMA_TYPE_DEFS: any[] = [
  LoginLogTypeDefs,
  PasswordResetTokenTypeDefs,
  RefreshTokenTypeDefs,
  SessionTypeDefs,
  TokenBlacklistTypeDefs,
  UserTypeDefs,
].filter((x) => x);
