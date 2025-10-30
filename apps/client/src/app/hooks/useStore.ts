import { useContext } from 'react';

import { RootStoreContext } from '../providers/RootStoreProvider';

export const useStores = () => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error('useStore must be used within a RootStoreProvider');
  }
  return store;
};

export const useUIStore = () => useStores().ui;
export const useTableViewsStore = () => useStores().tableViews;
export const useRecipesStore = () => useStores().recipes;
export const useIngredientsStore = () => useStores().ingredients;
export const useSurveysStore = () => useStores().surveys;
export const useMatchesStore = () => useStores().matches;
