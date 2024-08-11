import { useContext } from 'react';

import { RootStoreContext } from '../providers/RootStoreProvider';

export const useRootStore = () => {
  return useContext(RootStoreContext);
};
