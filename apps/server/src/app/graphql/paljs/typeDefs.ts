import { mergeTypeDefs } from '@graphql-tools/merge';

import InputTypes from './InputTypes';
import SchemaExtensions from './SchemaExtensions';
import LoginLog from './LoginLog/typeDefs';
import PasswordResetToken from './PasswordResetToken/typeDefs';
import RefreshToken from './RefreshToken/typeDefs';
import Session from './Session/typeDefs';
import TokenBlacklist from './TokenBlacklist/typeDefs';
import User from './User/typeDefs';

export default mergeTypeDefs([
  InputTypes,
  SchemaExtensions,
  LoginLog,
  PasswordResetToken,
  RefreshToken,
  Session,
  TokenBlacklist,
  User,
]);
