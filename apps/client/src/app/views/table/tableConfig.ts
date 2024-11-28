import React from 'react';
import { TableIdType, TableViewDefinition, TableViewType } from '@nutri/client-gql';
import { RecipesTable } from './tables/RecipesTable';
import { useRecipesData } from './hooks/useRecipesData';
import { RecipesActions } from './actions/RecipesActions';
import { getRecipeColumnsConfig } from './columns/recipesColumns';
import { Store } from '@nutri/store/main/store';
import { ActionsComponentProps, TableComponentProps, UseDataResult } from './types';
import { Column } from './columns/types';
import { getMatchesColumnsConfig } from './columns/matchesColumns';
import { useMatchesData } from './hooks/useMatchesData';
import { MatchesTable } from './tables/MatchesTable';
import { NoOpActions } from './actions/NoOpActions';

type TabularStores = any

export const TableConfig: Record<TableIdType, {
  component: React.FC<TableComponentProps<TabularStores>>,
  useData: (tableViewDef: Store<TableViewDefinition>) => UseDataResult<TabularStores>,
  columns: (def?: TableViewDefinition) => Column<TabularStores>[],
  actions: React.FC<ActionsComponentProps>
}> = {
  [TableIdType.Recipes]: {
    component: RecipesTable,
    useData: useRecipesData,
    columns: getRecipeColumnsConfig,
    actions: RecipesActions,
  },

  [TableIdType.ManualReviewsMatches]: {
    component: MatchesTable,
    useData: useMatchesData,
    columns: getMatchesColumnsConfig,
    actions: NoOpActions,
  },
};

interface TableViewConfigItem {
  label: string;
  tableIds: Array<{
    id: TableIdType;
    label: string;
  }>;
}

export const TableViewConfig: Record<TableViewType, TableViewConfigItem> = {
  [TableViewType.Recipes]: {
    label: 'Recipes',
    tableIds: [
      { id: TableIdType.Recipes, label: 'All Recipes' },
      { id: TableIdType.FavoriteRecipes, label: 'Favorites' },
      { id: TableIdType.RecentlyAddedRecipes, label: 'Recently Added' },
    ],
  },
  [TableViewType.Ingredients]: {
    label: 'Ingredients',
    tableIds: [
      { id: TableIdType.Ingredients, label: 'Ingredients' },
    ],
  },
  [TableViewType.ManualReviews]: {
    label: 'Manual Reviews',
    tableIds: [
      { id: TableIdType.ManualReviewsFoodMatches, label: 'Food Matches' },
      { id: TableIdType.ManualReviewsMatches, label: 'Other Matches' },
    ],
  },
  [TableViewType.MealPlans]: {
    label: 'Meal Plans',
    tableIds: [
      { id: TableIdType.MealPlans, label: 'Meal Plans' },
    ],
  },
  [TableViewType.Patients]: {
    label: 'Patients',
    tableIds: [
      { id: TableIdType.Patients, label: 'Patients' },
    ],
  },
  [TableViewType.Polls]: {
    label: 'Polls',
    tableIds: [
      { id: TableIdType.Polls, label: 'Polls' },
    ],
  },
  [TableViewType.ShoppingLists]: {
    label: 'Shopping Lists',
    tableIds: [
      { id: TableIdType.ShoppingLists, label: 'Shopping Lists' },
    ],
  },
};

export const getTableViewConfig = (tableId: TableIdType): TableViewConfigItem | undefined => {
  const entry = Object.entries(TableViewConfig).find(([, config]) =>
    config.tableIds.some(item => item.id === tableId),
  );
  return entry ? entry[1] : undefined;
};

export const getRelatedTableIds = (tableId: TableIdType): Array<{ id: TableIdType; label: string }> => {
  const config = getTableViewConfig(tableId);
  return config ? config.tableIds : [{ id: tableId, label: tableId }];
};
