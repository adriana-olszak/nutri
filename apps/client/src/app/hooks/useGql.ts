import { useMemo, useRef, useCallback } from 'react';
import { GraphQLClient } from 'graphql-request';
import { getSdk, SdkFunctionWrapper } from '@nutri/client-gql';
import { useAuthenticatedFetcher } from '@nutri/client-auth';

export const useGql = () => {
  const authenticatedFetcher = useAuthenticatedFetcher();
  const clientRef = useRef<GraphQLClient | null>(null);

  const ensureClient = useCallback(() => {
    if (!clientRef.current) {
      clientRef.current = new GraphQLClient('/graphql', { credentials: 'include' });
    }
    return clientRef.current;
  }, []);

  const customFetcher: SdkFunctionWrapper = useCallback((action, _operationName, _operationType, variables) => {
    return authenticatedFetcher(async (token) => {
      const client = ensureClient();
      if (token) {
        client.setHeader('Authorization', `Bearer ${token}`);
      } else {
        client.setHeader('Authorization', '');
      }
      return action();
    });
  }, [authenticatedFetcher, ensureClient]);

  return useMemo(() => {
    const client = ensureClient();
    return getSdk(client, customFetcher);
  }, [customFetcher, ensureClient]);
};
