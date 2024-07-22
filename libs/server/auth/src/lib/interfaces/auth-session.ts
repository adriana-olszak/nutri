export interface AuthSession {
  userId: string;
  accessToken: string;
  refreshToken: string;
  roles: string[];
}
