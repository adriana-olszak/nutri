import { User } from '../resolversTypes';

export interface AuthSession {
  userId: User['id'];
  token: string;
  roles: string[];
  rememberMe: boolean;
  expiresIn: number;
}
