import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthAccountInfoModel = {
  __typename?: 'AuthAccountInfoModel';
  email: Scalars['String']['output'];
  googleProfile?: Maybe<AuthGoogleProfile>;
  hasPassword: Scalars['Boolean']['output'];
};

export type AuthGoogleProfile = {
  __typename?: 'AuthGoogleProfile';
  email: Scalars['String']['output'];
  family_name: Scalars['String']['output'];
  given_name: Scalars['String']['output'];
  locale: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture: Scalars['String']['output'];
};

export type AuthLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthPasswordChangeInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type AuthPasswordResetConfirmationInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type AuthPasswordResetRequestInput = {
  email: Scalars['String']['input'];
};

export type AuthRefreshTokenModel = {
  __typename?: 'AuthRefreshTokenModel';
  accessToken: Scalars['String']['output'];
  accessTokenExpiresAt: Scalars['DateTime']['output'];
};

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthSessionModel = {
  __typename?: 'AuthSessionModel';
  accessToken: Scalars['String']['output'];
  accessTokenExpiresAt: Scalars['DateTime']['output'];
  roles: Array<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authLogin: AuthSessionModel;
  authLogout: Scalars['Boolean']['output'];
  authPasswordChange: Scalars['Boolean']['output'];
  authPasswordResetConfirmation: Scalars['Boolean']['output'];
  authPasswordResetRequest: Scalars['Boolean']['output'];
  authRefreshToken: AuthRefreshTokenModel;
  authRegister: AuthSessionModel;
};


export type MutationAuthLoginArgs = {
  data: AuthLoginInput;
};


export type MutationAuthPasswordChangeArgs = {
  data: AuthPasswordChangeInput;
};


export type MutationAuthPasswordResetConfirmationArgs = {
  data: AuthPasswordResetConfirmationInput;
};


export type MutationAuthPasswordResetRequestArgs = {
  data: AuthPasswordResetRequestInput;
};


export type MutationAuthRegisterArgs = {
  data: AuthRegisterInput;
};

export type Query = {
  __typename?: 'Query';
  accountInfo: AuthAccountInfoModel;
};

export type AuthLoginMutationVariables = Exact<{
  data: AuthLoginInput;
}>;


export type AuthLoginMutation = { __typename?: 'Mutation', authLogin: { __typename?: 'AuthSessionModel', userId: string, accessToken: string, roles: Array<string>, accessTokenExpiresAt: any } };

export type AuthLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type AuthLogoutMutation = { __typename?: 'Mutation', authLogout: boolean };

export type AuthPasswordChangeMutationVariables = Exact<{
  data: AuthPasswordChangeInput;
}>;


export type AuthPasswordChangeMutation = { __typename?: 'Mutation', authPasswordChange: boolean };

export type AuthPasswordResetConfirmationMutationVariables = Exact<{
  data: AuthPasswordResetConfirmationInput;
}>;


export type AuthPasswordResetConfirmationMutation = { __typename?: 'Mutation', authPasswordResetConfirmation: boolean };

export type AuthPasswordResetRequestMutationVariables = Exact<{
  data: AuthPasswordResetRequestInput;
}>;


export type AuthPasswordResetRequestMutation = { __typename?: 'Mutation', authPasswordResetRequest: boolean };

export type AuthRefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type AuthRefreshTokenMutation = { __typename?: 'Mutation', authRefreshToken: { __typename?: 'AuthRefreshTokenModel', accessToken: string, accessTokenExpiresAt: any } };

export type AuthRegisterMutationVariables = Exact<{
  data: AuthRegisterInput;
}>;


export type AuthRegisterMutation = { __typename?: 'Mutation', authRegister: { __typename?: 'AuthSessionModel', userId: string, accessToken: string, accessTokenExpiresAt: any, roles: Array<string> } };

export type AccountInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountInfoQuery = { __typename?: 'Query', accountInfo: { __typename?: 'AuthAccountInfoModel', email: string, hasPassword: boolean, googleProfile?: { __typename?: 'AuthGoogleProfile', name: string, given_name: string, family_name: string, locale: string, email: string, picture: string } | null } };


export const AuthLoginDocument = gql`
    mutation AuthLogin($data: AuthLoginInput!) {
  authLogin(data: $data) {
    userId
    accessToken
    roles
    accessTokenExpiresAt
  }
}
    `;
export const AuthLogoutDocument = gql`
    mutation AuthLogout {
  authLogout
}
    `;
export const AuthPasswordChangeDocument = gql`
    mutation AuthPasswordChange($data: AuthPasswordChangeInput!) {
  authPasswordChange(data: $data)
}
    `;
export const AuthPasswordResetConfirmationDocument = gql`
    mutation AuthPasswordResetConfirmation($data: AuthPasswordResetConfirmationInput!) {
  authPasswordResetConfirmation(data: $data)
}
    `;
export const AuthPasswordResetRequestDocument = gql`
    mutation AuthPasswordResetRequest($data: AuthPasswordResetRequestInput!) {
  authPasswordResetRequest(data: $data)
}
    `;
export const AuthRefreshTokenDocument = gql`
    mutation AuthRefreshToken {
  authRefreshToken {
    accessToken
    accessTokenExpiresAt
  }
}
    `;
export const AuthRegisterDocument = gql`
    mutation AuthRegister($data: AuthRegisterInput!) {
  authRegister(data: $data) {
    userId
    accessToken
    accessTokenExpiresAt
    roles
  }
}
    `;
export const AccountInfoDocument = gql`
    query AccountInfo {
  accountInfo {
    email
    hasPassword
    googleProfile {
      name
      given_name
      family_name
      locale
      email
      picture
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AuthLogin(variables: AuthLoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthLoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthLoginMutation>(AuthLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthLogin', 'mutation', variables);
    },
    AuthLogout(variables?: AuthLogoutMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthLogoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthLogoutMutation>(AuthLogoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthLogout', 'mutation', variables);
    },
    AuthPasswordChange(variables: AuthPasswordChangeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthPasswordChangeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthPasswordChangeMutation>(AuthPasswordChangeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthPasswordChange', 'mutation', variables);
    },
    AuthPasswordResetConfirmation(variables: AuthPasswordResetConfirmationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthPasswordResetConfirmationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthPasswordResetConfirmationMutation>(AuthPasswordResetConfirmationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthPasswordResetConfirmation', 'mutation', variables);
    },
    AuthPasswordResetRequest(variables: AuthPasswordResetRequestMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthPasswordResetRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthPasswordResetRequestMutation>(AuthPasswordResetRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthPasswordResetRequest', 'mutation', variables);
    },
    AuthRefreshToken(variables?: AuthRefreshTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthRefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthRefreshTokenMutation>(AuthRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthRefreshToken', 'mutation', variables);
    },
    AuthRegister(variables: AuthRegisterMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AuthRegisterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthRegisterMutation>(AuthRegisterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthRegister', 'mutation', variables);
    },
    AccountInfo(variables?: AccountInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AccountInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AccountInfoQuery>(AccountInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AccountInfo', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
