export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
