import { AuthService, AuthResponse, PasswordChange, ResetPassword, LoginData } from '@nutri/client-auth';
import { getSdk } from '@nutri/client-gql';
import { GraphQLClient } from 'graphql-request';

export class ClientAuthService implements AuthService {
  private client: ReturnType<typeof getSdk>;
  private graphqlClient: GraphQLClient;

  constructor() {
    this.graphqlClient = new GraphQLClient('http://localhost:3000/graphql', { credentials: 'include' });
    this.client = getSdk(this.graphqlClient);
  }

  async login({ email, password }: LoginData): Promise<AuthResponse> {
    const response = await this.client.AuthLogin({ data: { email, password } });
    return {
      accessToken: response.authLogin.accessToken,
      accessTokenExpiresAt: response.authLogin.accessTokenExpiresAt
    };
  }

  async logout(accessToken: string): Promise<void> {
    this.graphqlClient.setHeader('Authorization', `Bearer ${accessToken}`);
    await this.client.AuthLogout();
    this.graphqlClient.setHeader('Authorization', ''); // Clear the header after logout
  }

  async refreshToken(): Promise<AuthResponse> {
    const response = await this.client.AuthRefreshToken();
    return {
      accessToken: response.authRefreshToken.accessToken,
      accessTokenExpiresAt: response.authRefreshToken.accessTokenExpiresAt
    };
  }

  async register(data: { email: string; password: string; }): Promise<AuthResponse> {
    const response = await this.client.AuthRegister({ data });
    return {
      accessToken: response.authRegister.accessToken,
      accessTokenExpiresAt: response.authRegister.accessTokenExpiresAt
    };
  }

  async forgotPassword(email: string): Promise<void> {
    await this.client.AuthPasswordResetRequest({ data: { email } });
  }

  async resetPassword({ password, token }: ResetPassword): Promise<void> {
    await this.client.AuthPasswordResetConfirmation({ data: { newPassword: password, token } });
  }

  async passwordChange({ newPassword, oldPassword }: PasswordChange): Promise<void> {
    await this.client.AuthPasswordChange({ data: { oldPassword, newPassword } });
  }
}
