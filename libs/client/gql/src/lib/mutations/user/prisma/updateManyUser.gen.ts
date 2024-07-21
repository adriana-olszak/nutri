import * as Types from '../../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type UpdateManyUserMutationVariables = Types.Exact<{
  data: Types.UserUpdateManyMutationInput;
  where: Types.UserWhereInput;
}>;


export type UpdateManyUserMutation = { __typename?: 'Mutation', updateManyUser?: { __typename?: 'BatchPayload', count: number } | null };


export const UpdateManyUserDocument = gql`
    mutation UpdateManyUser($data: UserUpdateManyMutationInput!, $where: UserWhereInput!) {
  updateManyUser(data: $data, where: $where) {
    count
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    UpdateManyUser(variables: UpdateManyUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateManyUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateManyUserMutation>(UpdateManyUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateManyUser', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;