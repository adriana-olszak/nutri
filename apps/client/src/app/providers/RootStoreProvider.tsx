import { useMemo, createContext } from 'react';

import { RootStore } from '@nutri/store/root';
import { Transport } from '@nutri/store/main/transport';
import {useAuth} from "@nutri/client-auth";

export const RootStoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const demoMode = window.location.search.includes('demoMode');
 const {getAccessToken, refreshToken, isAuthenticated} = useAuth()

  const rootStore = useMemo(() => {
    return new RootStore(new Transport({
      getAccessToken,
      refreshToken,
    }), isAuthenticated);
  }, [isAuthenticated]);

  return (

    <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
  );
};
