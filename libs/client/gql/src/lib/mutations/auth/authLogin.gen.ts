import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AuthLoginMutationVariables = Types.Exact<{
  data: Types.AuthLoginInput;
}>;


export type AuthLoginMutation = { __typename?: 'Mutation', authLogin: { __typename?: 'AuthSession', userId: string, accessToken: string, refreshToken: string, roles: Array<string> } };


export const AuthLoginDocument = gql`
    mutation AuthLogin($data: AuthLoginInput!) {
  authLogin(data: $data) {
    userId
    accessToken
    refreshToken
    roles
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AuthLogin(variables: AuthLoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthLoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthLoginMutation>(AuthLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthLogin', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;