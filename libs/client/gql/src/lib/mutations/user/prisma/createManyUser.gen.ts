import * as Types from '../../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type CreateManyUserMutationVariables = Types.Exact<{
  data: Array<Types.UserCreateManyInput> | Types.UserCreateManyInput;
}>;


export type CreateManyUserMutation = { __typename?: 'Mutation', createManyUser?: { __typename?: 'BatchPayload', count: number } | null };


export const CreateManyUserDocument = gql`
    mutation CreateManyUser($data: [UserCreateManyInput!]!) {
  createManyUser(data: $data) {
    count
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateManyUser(variables: CreateManyUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateManyUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateManyUserMutation>(CreateManyUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateManyUser', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;