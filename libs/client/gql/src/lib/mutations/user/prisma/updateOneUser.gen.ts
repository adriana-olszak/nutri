import * as Types from '../../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
import { UserFieldsFragmentDoc } from '../../../fragments/prisma/UserFields.gen';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type UpdateOneUserMutationVariables = Types.Exact<{
  data: Types.UserUpdateInput;
  where: Types.UserWhereUniqueInput;
}>;


export type UpdateOneUserMutation = { __typename?: 'Mutation', updateOneUser: { __typename?: 'User', id: string } };


export const UpdateOneUserDocument = gql`
    mutation UpdateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateOneUser(data: $data, where: $where) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    UpdateOneUser(variables: UpdateOneUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateOneUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOneUserMutation>(UpdateOneUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateOneUser', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;