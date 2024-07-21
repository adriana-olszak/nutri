import * as Types from '../../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type DeleteOneUserMutationVariables = Types.Exact<{
  where: Types.UserWhereUniqueInput;
}>;


export type DeleteOneUserMutation = { __typename?: 'Mutation', deleteOneUser?: { __typename?: 'User', id: string } | null };


export const DeleteOneUserDocument = gql`
    mutation DeleteOneUser($where: UserWhereUniqueInput!) {
  deleteOneUser(where: $where) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    DeleteOneUser(variables: DeleteOneUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteOneUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneUserMutation>(DeleteOneUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteOneUser', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;