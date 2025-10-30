import { useMemo, createContext } from 'react';

import { RootStore } from '../../store/root';
import { Transport } from '../../store/main/transport';
import { useAuth } from '@nutri/client-auth';
import { httpClient } from '../../api/httpClient';

export const RootStoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getAccessToken, refreshToken, isAuthenticated } = useAuth();

  const rootStore = useMemo(() => {
    const store = new RootStore(
      new Transport({
        getAccessToken,
        refreshToken,
      }),
      isAuthenticated,
    );

    const setupAuth = async () => {
      const token = await getAccessToken();
      httpClient.setAuthToken(token);
    };

    if (isAuthenticated) {
      setupAuth();
    }
    return store;
  }, [isAuthenticated]);

  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};
