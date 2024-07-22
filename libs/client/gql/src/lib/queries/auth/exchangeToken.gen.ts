import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AuthRefreshTokenQueryVariables = Types.Exact<{
  data: Types.AuthRefreshTokenInput;
}>;


export type AuthRefreshTokenQuery = { __typename?: 'Query', authRefreshToken: { __typename?: 'AuthSession', userId: string, token: string, roles: Array<string>, rememberMe: boolean, expiresIn: number } };


export const AuthRefreshTokenDocument = gql`
    query AuthRefreshToken($data: AuthRefreshTokenInput!) {
  authRefreshToken(data: $data) {
    userId
    token
    roles
    rememberMe
    expiresIn
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AuthRefreshToken(variables: AuthRefreshTokenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthRefreshTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthRefreshTokenQuery>(AuthRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthRefreshToken', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
