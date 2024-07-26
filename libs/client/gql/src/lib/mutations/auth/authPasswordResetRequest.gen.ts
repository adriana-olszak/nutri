import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AuthPasswordResetRequestMutationVariables = Types.Exact<{
  data: Types.AuthPasswordResetRequestInput;
}>;


export type AuthPasswordResetRequestMutation = { __typename?: 'Mutation', authPasswordResetRequest?: boolean | null };


export const AuthPasswordResetRequestDocument = gql`
    mutation AuthPasswordResetRequest($data: AuthPasswordResetRequestInput!) {
  authPasswordResetRequest(data: $data)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AuthPasswordResetRequest(variables: AuthPasswordResetRequestMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthPasswordResetRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthPasswordResetRequestMutation>(AuthPasswordResetRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthPasswordResetRequest', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;