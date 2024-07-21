import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AuthPasswordChangeMutationVariables = Types.Exact<{
  data: Types.AuthPasswordChangeInput;
}>;


export type AuthPasswordChangeMutation = { __typename?: 'Mutation', authPasswordChange?: boolean | null };


export const AuthPasswordChangeDocument = gql`
    mutation AuthPasswordChange($data: AuthPasswordChangeInput!) {
  authPasswordChange(data: $data)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AuthPasswordChange(variables: AuthPasswordChangeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthPasswordChangeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthPasswordChangeMutation>(AuthPasswordChangeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthPasswordChange', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;