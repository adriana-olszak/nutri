import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AuthRefreshTokenMutationVariables = Types.Exact<{
  data?: Types.InputMaybe<Types.AuthRefreshTokenInput>;
}>;


export type AuthRefreshTokenMutation = { __typename?: 'Mutation', authRefreshToken: { __typename?: 'RefreshToken', accessToken: string } };


export const AuthRefreshTokenDocument = gql`
    mutation AuthRefreshToken($data: AuthRefreshTokenInput) {
  authRefreshToken(data: $data) {
    accessToken
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AuthRefreshToken(variables?: AuthRefreshTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthRefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthRefreshTokenMutation>(AuthRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthRefreshToken', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
