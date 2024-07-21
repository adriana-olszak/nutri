import * as Types from '../../../graphql-types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type FindManyUserCountQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.UserWhereInput>;
  orderBy?: Types.InputMaybe<Array<Types.InputMaybe<Types.UserOrderByWithRelationInput>> | Types.InputMaybe<Types.UserOrderByWithRelationInput>>;
  cursor?: Types.InputMaybe<Types.UserWhereUniqueInput>;
  take?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  distinct?: Types.InputMaybe<Array<Types.InputMaybe<Types.UserScalarFieldEnum>> | Types.InputMaybe<Types.UserScalarFieldEnum>>;
}>;


export type FindManyUserCountQuery = { __typename?: 'Query', findManyUserCount: number };


export const FindManyUserCountDocument = gql`
    query FindManyUserCount($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput], $cursor: UserWhereUniqueInput, $take: Int, $skip: Int, $distinct: [UserScalarFieldEnum]) {
  findManyUserCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  )
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    FindManyUserCount(variables?: FindManyUserCountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FindManyUserCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindManyUserCountQuery>(FindManyUserCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FindManyUserCount', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;