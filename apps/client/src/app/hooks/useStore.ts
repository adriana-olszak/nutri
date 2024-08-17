import { useContext } from 'react';

import { RootStoreContext } from '../providers/RootStoreProvider';

export const useStores = () => {
  return useContext(RootStoreContext);
};
