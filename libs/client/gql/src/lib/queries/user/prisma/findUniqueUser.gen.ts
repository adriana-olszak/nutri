import * as Types from '../../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
import { UserFieldsFragmentDoc } from '../../../fragments/prisma/UserFields.gen';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type FindUniqueUserQueryVariables = Types.Exact<{
  where: Types.UserWhereUniqueInput;
}>;


export type FindUniqueUserQuery = { __typename?: 'Query', findUniqueUser?: { __typename?: 'User', id: string } | null };


export const FindUniqueUserDocument = gql`
    query FindUniqueUser($where: UserWhereUniqueInput!) {
  findUniqueUser(where: $where) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    FindUniqueUser(variables: FindUniqueUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FindUniqueUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindUniqueUserQuery>(FindUniqueUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FindUniqueUser', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;