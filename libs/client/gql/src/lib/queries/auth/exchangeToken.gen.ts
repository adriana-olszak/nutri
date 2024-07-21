import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AuthExchangeTokenQueryVariables = Types.Exact<{
  data: Types.AuthExchangeTokenInput;
}>;


export type AuthExchangeTokenQuery = { __typename?: 'Query', authExchangeToken: { __typename?: 'AuthSession', userId: string, token: string, roles: Array<string>, rememberMe: boolean, expiresIn: number } };


export const AuthExchangeTokenDocument = gql`
    query AuthExchangeToken($data: AuthExchangeTokenInput!) {
  authExchangeToken(data: $data) {
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
    AuthExchangeToken(variables: AuthExchangeTokenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthExchangeTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthExchangeTokenQuery>(AuthExchangeTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthExchangeToken', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;