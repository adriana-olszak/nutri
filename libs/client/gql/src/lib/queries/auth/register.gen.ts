import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AuthRegisterMutationVariables = Types.Exact<{
  data: Types.AuthRegisterInput;
}>;


export type AuthRegisterMutation = { __typename?: 'Mutation', authRegister: { __typename?: 'AuthSession', userId: string, token: string, roles: Array<string>, rememberMe: boolean, expiresIn: number } };


export const AuthRegisterDocument = gql`
    mutation AuthRegister($data: AuthRegisterInput!) {
  authRegister(data: $data) {
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
    AuthRegister(variables: AuthRegisterMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthRegisterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthRegisterMutation>(AuthRegisterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthRegister', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;