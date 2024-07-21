import * as Types from '../../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
import { UserFieldsFragmentDoc } from '../../../fragments/prisma/UserFields.gen';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type CreateManyUserAndReturnMutationVariables = Types.Exact<{
  data: Array<Types.UserCreateManyInput> | Types.UserCreateManyInput;
}>;


export type CreateManyUserAndReturnMutation = { __typename?: 'Mutation', createManyUserAndReturn: Array<{ __typename?: 'User', id: string }> };


export const CreateManyUserAndReturnDocument = gql`
    mutation CreateManyUserAndReturn($data: [UserCreateManyInput!]!) {
  createManyUserAndReturn(data: $data) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateManyUserAndReturn(variables: CreateManyUserAndReturnMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateManyUserAndReturnMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateManyUserAndReturnMutation>(CreateManyUserAndReturnDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateManyUserAndReturn', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;