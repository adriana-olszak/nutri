import * as Types from '../../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type DeleteManyUserMutationVariables = Types.Exact<{
  where: Types.UserWhereInput;
}>;


export type DeleteManyUserMutation = { __typename?: 'Mutation', deleteManyUser?: { __typename?: 'BatchPayload', count: number } | null };


export const DeleteManyUserDocument = gql`
    mutation DeleteManyUser($where: UserWhereInput!) {
  deleteManyUser(where: $where) {
    count
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    DeleteManyUser(variables: DeleteManyUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteManyUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteManyUserMutation>(DeleteManyUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteManyUser', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;