import * as Types from '../../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
import { UserFieldsFragmentDoc } from '../../../fragments/prisma/UserFields.gen';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type FindFirstUserQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.UserWhereInput>;
  orderBy?: Types.InputMaybe<Array<Types.InputMaybe<Types.UserOrderByWithRelationInput>> | Types.InputMaybe<Types.UserOrderByWithRelationInput>>;
  cursor?: Types.InputMaybe<Types.UserWhereUniqueInput>;
  take?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  distinct?: Types.InputMaybe<Array<Types.InputMaybe<Types.UserScalarFieldEnum>> | Types.InputMaybe<Types.UserScalarFieldEnum>>;
}>;


export type FindFirstUserQuery = { __typename?: 'Query', findFirstUser?: { __typename?: 'User', id: string } | null };


export const FindFirstUserDocument = gql`
    query FindFirstUser($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput], $cursor: UserWhereUniqueInput, $take: Int, $skip: Int, $distinct: [UserScalarFieldEnum]) {
  findFirstUser(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    FindFirstUser(variables?: FindFirstUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FindFirstUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindFirstUserQuery>(FindFirstUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FindFirstUser', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;