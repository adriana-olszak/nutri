import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AuthPasswordResetRequestQueryVariables = Types.Exact<{
  data: Types.AuthPasswordResetRequestInput;
}>;


export type AuthPasswordResetRequestQuery = { __typename?: 'Query', authPasswordResetRequest?: boolean | null };


export const AuthPasswordResetRequestDocument = gql`
    query AuthPasswordResetRequest($data: AuthPasswordResetRequestInput!) {
  authPasswordResetRequest(data: $data)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AuthPasswordResetRequest(variables: AuthPasswordResetRequestQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthPasswordResetRequestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthPasswordResetRequestQuery>(AuthPasswordResetRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthPasswordResetRequest', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;