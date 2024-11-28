import { useContext } from 'react';

import { RootStoreContext } from '../providers/RootStoreProvider';

export const useStores = () => {
  return useContext(RootStoreContext);
};

export const useUIStore = () => useStores().ui;
export const useTableViewsStore = () => useStores().tableViews;
export const useRecipesStore = () => useStores().recipes;
export const useIngredientsStore = () => useStores().ingredients;
export const useSurveysStore = () => useStores().surveys;
export const useMatchesStore = () => useStores().matches;
