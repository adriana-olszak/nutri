export interface AuthResponse {
  accessToken: string;
  accessTokenExpiresAt: string;
  refreshToken?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
}

export interface PasswordChange {
  newPassword: string;
  oldPassword: string;
}

export interface ResetPassword {
  password: string,
  token: string
}

export interface AuthService {
  login(data: LoginData): Promise<AuthResponse>;

  register(data: RegisterData): Promise<AuthResponse>;

  logout(accessToken: string): Promise<void>;

  refreshToken(): Promise<AuthResponse>;

  forgotPassword(email: string): Promise<void>;

  resetPassword(data: ResetPassword): Promise<void>;

  passwordChange(data: PasswordChange): Promise<void>;
}
