import * as Types from '../../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
import { UserFieldsFragmentDoc } from '../../../fragments/prisma/UserFields.gen';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type UpsertOneUserMutationVariables = Types.Exact<{
  where: Types.UserWhereUniqueInput;
  create: Types.UserCreateInput;
  update: Types.UserUpdateInput;
}>;


export type UpsertOneUserMutation = { __typename?: 'Mutation', upsertOneUser?: { __typename?: 'User', id: string } | null };


export const UpsertOneUserDocument = gql`
    mutation UpsertOneUser($where: UserWhereUniqueInput!, $create: UserCreateInput!, $update: UserUpdateInput!) {
  upsertOneUser(where: $where, create: $create, update: $update) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    UpsertOneUser(variables: UpsertOneUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpsertOneUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertOneUserMutation>(UpsertOneUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpsertOneUser', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;