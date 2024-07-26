export interface AuthSession {
  userId: string;
  accessToken: string;
  roles: string[];
  accessTokenExpiresAt: Date;
}
