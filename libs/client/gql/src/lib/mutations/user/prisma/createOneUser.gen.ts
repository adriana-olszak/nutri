import * as Types from '../../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
import { UserFieldsFragmentDoc } from '../../../fragments/prisma/UserFields.gen';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type CreateOneUserMutationVariables = Types.Exact<{
  data: Types.UserCreateInput;
}>;


export type CreateOneUserMutation = { __typename?: 'Mutation', createOneUser: { __typename?: 'User', id: string } };


export const CreateOneUserDocument = gql`
    mutation CreateOneUser($data: UserCreateInput!) {
  createOneUser(data: $data) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateOneUser(variables: CreateOneUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOneUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneUserMutation>(CreateOneUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateOneUser', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;