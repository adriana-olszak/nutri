import { Socket, Channel } from 'phoenix';
import axios, { AxiosInstance } from 'axios';
import { GraphQLClient } from 'graphql-request';
import { getSdk, SdkFunctionWrapper } from '@nutri/client-gql';

import { LatestDiff } from './types';
import {ClientAuthService} from "../../app/services/ClientAuthService";

export interface TransportOptions {
  email: string;
  userId: string;
  sessionToken: string;
}

interface AuthMethods {
  getAccessToken: () => Promise<string | null>;
  refreshToken: () => Promise<string | null>;
}

export class Transport {
  graphqlClient: GraphQLClient;
  private socket: Socket | null = null;
  refId: string = crypto.randomUUID();
  private channels: Map<string, Channel> = new Map();
  private channelMeta: Record<string, unknown> = {};
  private stream: ReturnType<typeof createStreamClient>;
  private auth: AuthMethods;

  constructor(auth: AuthMethods) {
    this.stream = createStreamClient({});

    this.graphqlClient = new GraphQLClient('http://localhost:4100/graphql', { credentials: 'include' });
    this.auth = auth;

    this.socket = new Socket(
      `${import.meta.env.VITE_REALTIME_WS_PATH}/socket`,
      {
        params: { token: import.meta.env.VITE_REALTIME_WS_API_KEY },
      },
    );

    if (this.socket.isConnected()) return;
    this.connect();
  }

  connect() {
    this?.socket?.connect();
  }

  // ... (other methods from the original Transport class)

  private async authenticatedFetcher<T>(action: (token: string | null) => Promise<T>): Promise<T> {
    try {
      const token = await this.auth.getAccessToken();
      return await action(token);
    } catch (error) {
      if (this.isAuthError(error)) {
        const newToken = await this.auth.refreshToken();
        if (newToken) {
          return await action(newToken);
        }
      }
      throw error;
    }
  }

  private isAuthError(error: unknown): boolean {
    return (
      error instanceof Error &&
      (error.message.toLowerCase().includes('unauthorized') ||
        error.message.toLowerCase().includes('unauthenticated'))
    );
  }

  get client() {
    const customFetcher: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => {
      return this.authenticatedFetcher(async (token) => {
        if (token) {
          this.graphqlClient.setHeader('Authorization', `Bearer ${token}`);
        } else {
          this.graphqlClient.setHeader('Authorization', '');
        }
        return action();
      });
    };
    return getSdk(this.graphqlClient, customFetcher);
  }

  setHeaders(headers: Record<string, string>) {
    this.stream = createStreamClient(headers);
    this.graphqlClient.setHeaders(headers);
  }
}
function createGraphqlClient(headers?: Record<string, string>) {
  return new GraphQLClient('/graphql', { credentials: 'include' });
}

function createStreamClient(headers?: Record<string, string>) {
  const baseUrl = import.meta.env.VITE_MIDDLEWARE_API_URL;

  return async <TData extends object>(
    endpoint: string,
    options: RequestInit & { onData?: (data: TData) => void },
  ) => {
    const response = await fetch(`${baseUrl}/stream${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
        ...options.headers,
      },
    });

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    let result;
    let buffer = '';

    while (!(result = await reader?.read())?.done) {
      buffer += decoder.decode(result?.value, { stream: true });

      let boundary = buffer.indexOf('\n');

      while (boundary !== -1) {
        const completeChunk = buffer.substring(0, boundary);

        buffer = buffer.substring(boundary + 1);
        boundary = buffer.indexOf('\n');

        if (completeChunk) {
          try {
            const data = JSON.parse(completeChunk);

            options.onData?.(data);
          } catch (e) {
            console.error('Error parsing JSON:', e);
          }
        }
      }
    }
  };
}
