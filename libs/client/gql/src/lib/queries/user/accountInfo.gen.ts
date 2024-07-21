import * as Types from '../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type AccountInfoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AccountInfoQuery = { __typename?: 'Query', accountInfo: { __typename?: 'AccountInfo', username?: string | null, hasPassword: boolean, googleProfile?: { __typename?: 'GoogleProfile', name?: string | null, given_name?: string | null, family_name?: string | null, locale?: string | null, email?: string | null, picture?: string | null } | null } };


export const AccountInfoDocument = gql`
    query AccountInfo {
  accountInfo {
    username
    hasPassword
    googleProfile {
      name
      given_name
      family_name
      locale
      email
      picture
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AccountInfo(variables?: AccountInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AccountInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AccountInfoQuery>(AccountInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AccountInfo', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;