import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AuthLogoutMutationVariables = Types.Exact<{
  refreshToken: Types.Scalars['String']['input'];
}>;


export type AuthLogoutMutation = { __typename?: 'Mutation', authLogout: boolean };


export const AuthLogoutDocument = gql`
    mutation AuthLogout($refreshToken: String!) {
  authLogout(refreshToken: $refreshToken)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AuthLogout(variables: AuthLogoutMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthLogoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthLogoutMutation>(AuthLogoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthLogout', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;