import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AuthLoginQueryVariables = Types.Exact<{
  data: Types.AuthLoginInput;
}>;


export type AuthLoginQuery = { __typename?: 'Query', authLogin: { __typename?: 'AuthSession', userId: string, token: string, roles: Array<string>, rememberMe: boolean, expiresIn: number } };


export const AuthLoginDocument = gql`
    query AuthLogin($data: AuthLoginInput!) {
  authLogin(data: $data) {
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
    AuthLogin(variables: AuthLoginQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthLoginQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthLoginQuery>(AuthLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthLogin', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;