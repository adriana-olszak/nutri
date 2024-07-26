import { useCallback } from 'react';
import { useAuth } from '../AuthContext';

export type AuthenticatedFetcher = <T>(action: (token: string | null) => Promise<T>) => Promise<T>;

export const useAuthenticatedFetcher = (): AuthenticatedFetcher => {
  const { getAccessToken, refreshToken } = useAuth();

  return useCallback(async <T>(action: (token: string | null) => Promise<T>): Promise<T> => {
    try {
      const token = await getAccessToken();
      return await action(token);
    } catch (error) {
      if (isAuthError(error)) {
        const newToken = await refreshToken();
        if (newToken) {
          return await action(newToken);
        }
      }
      throw error;
    }
  }, [getAccessToken, refreshToken]);
};

// Helper function
function isAuthError(error: unknown): boolean {
  return (
    error instanceof Error &&
    (error.message.toLowerCase().includes('unauthorized') ||
      error.message.toLowerCase().includes('unauthenticated'))
  );
}
