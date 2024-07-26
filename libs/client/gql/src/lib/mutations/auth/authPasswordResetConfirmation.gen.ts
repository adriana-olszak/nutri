import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AuthPasswordResetConfirmationMutationVariables = Types.Exact<{
  data: Types.AuthPasswordResetConfirmationInput;
}>;


export type AuthPasswordResetConfirmationMutation = { __typename?: 'Mutation', authPasswordResetConfirmation: { __typename?: 'AuthSession', userId: string, accessToken: string, refreshToken: string, roles: Array<string> } };


export const AuthPasswordResetConfirmationDocument = gql`
    mutation AuthPasswordResetConfirmation($data: AuthPasswordResetConfirmationInput!) {
  authPasswordResetConfirmation(data: $data) {
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
    AuthPasswordResetConfirmation(variables: AuthPasswordResetConfirmationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthPasswordResetConfirmationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthPasswordResetConfirmationMutation>(AuthPasswordResetConfirmationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthPasswordResetConfirmation', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;