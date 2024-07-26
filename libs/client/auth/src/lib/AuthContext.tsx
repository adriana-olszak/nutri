import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { RegisterData, AuthService } from './interfaces/AuthService';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  getAccessToken: () => Promise<string | null>;
  refreshToken: () => Promise<string | null>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (password: string, token: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
  authService: AuthService;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children, authService }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [accessTokenExpiresAt, setAccessTokenExpiresAt] = useState<Date | null>(null);

  const refreshToken = useCallback(async () => {
    try {
      const response = await authService.refreshToken();
      setAccessToken(response.accessToken);
      setAccessTokenExpiresAt(new Date(response.accessTokenExpiresAt));
      return response.accessToken;
    } catch (error) {
      console.error('Token refresh failed:', error);
      setAccessToken(null);
      setAccessTokenExpiresAt(null);
      return null;
    }
  }, [authService]);


  useEffect(() => {
    if (accessTokenExpiresAt) {
      const timeUntilExpiry = accessTokenExpiresAt.getTime() - Date.now();
      const timeToRefresh = Math.max(timeUntilExpiry - 60000, 0); // Refresh 1 minute before expiry
      const timeoutId = setTimeout(() => refreshToken(), timeToRefresh);
      return () => clearTimeout(timeoutId);
    }
  }, [accessTokenExpiresAt, refreshToken]);

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password });
      setAccessToken(response.accessToken);
      setAccessTokenExpiresAt(new Date(response.accessTokenExpiresAt));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    if (accessToken) {
      try {
        await authService.logout(accessToken);
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
    setAccessToken(null);
    setAccessTokenExpiresAt(null);
  };

  const register = async (data: RegisterData) => {
    try {
      const response = await authService.register(data);
      setAccessToken(response.accessToken);
      setAccessTokenExpiresAt(new Date(response.accessTokenExpiresAt));
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await authService.forgotPassword(email);
    } catch (error) {
      console.error('Forgot password failed:', error);
      throw error;
    }
  };

  const resetPassword = async (password: string, token: string) => {
    try {
      await authService.resetPassword({ password, token });
    } catch (error) {
      console.error('Reset password failed:', error);
      throw error;
    }
  };


  const getAccessToken = useCallback(async () => {
    if (!accessToken) {
      // Attempt to get a new access token using the refresh token
      return refreshToken();
    }

    if (accessTokenExpiresAt && accessTokenExpiresAt.getTime() <= Date.now()) {
      return refreshToken();
    }

    return accessToken;
  }, [accessToken, accessTokenExpiresAt, refreshToken]);

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!accessToken,
      login,
      logout,
      register,
      forgotPassword,
      resetPassword,
      getAccessToken,
      refreshToken
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
