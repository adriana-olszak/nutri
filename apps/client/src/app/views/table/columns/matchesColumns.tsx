import React from 'react';

import {
  Button,
  createColumnHelper,
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuTrigger,
  getTHeadProps,
  Skeleton,
  THead,
} from '@nutri/client-ui';
import { ColumnViewType, TableViewDefinition } from '@nutri/client-gql';
import { Store } from '@nutri/store/main/store';
import { getColumnConfig } from './baseColumnConfig';
import { Match } from '@nutri/store/manual-reviews/types';
import { Column } from './types';
import { MoreHorizontal } from 'lucide-react';

export type ManualReviewMatchesColumn = Store<Match>
const columnHelper = createColumnHelper<ManualReviewMatchesColumn>();

const columns: Record<string, Column<Match>> = {
  [ColumnViewType.MatchesIngredientText]: columnHelper.accessor('value.ingredientText', {
    id: ColumnViewType.MatchesIngredientText,
    header: (props) => (
      <THead id="id" title="ID" {...getTHeadProps<Store<Match>>(props)} />
    ),
    cell: (info) => info.getValue(),
    size: 100,
    minSize: 100,
    maxSize: 200,
    enableSorting: true,
    enableColumnFilter: true,
    skeleton: () => <Skeleton className="w-[75%] h-[14px]" />,
  }),

  [ColumnViewType.MatchesStatus]: columnHelper.accessor('value.status', {
    id: ColumnViewType.MatchesStatus,
    header: (props) => (
      <THead id="status" title="Status" {...getTHeadProps<Store<Match>>(props)} />
    ),
    cell: (info) => info.getValue(),
    size: 120,
    minSize: 120,
    maxSize: 200,
    enableSorting: true,
    enableColumnFilter: true,
    skeleton: () => <Skeleton className="w-[50%] h-[14px]" />,
  }),

  [ColumnViewType.MatchesSelectedFoodMatchId]: columnHelper.accessor('value.selectedFoodMatchId', {
    id: ColumnViewType.MatchesSelectedFoodMatchId,
    header: (props) => (
      <THead id="recipeIngredient" title="Recipe Ingredient" {...getTHeadProps<Store<Match>>(props)} />
    ),
    cell: (info) => info.getValue(),
    size: 200,
    minSize: 150,
    maxSize: 300,
    enableSorting: true,
    enableColumnFilter: true,
    skeleton: () => <Skeleton className="w-[100%] h-[14px]" />,
  }),

  [ColumnViewType.MatchesActions]: columnHelper.accessor('value', {
    id: ColumnViewType.MatchesActions,
    header: 'Actions',
    size: 100,
    minSize: 100,
    maxSize: 100,
    enableSorting: false,
    enableColumnFilter: false,
    cell: ({ row }) => {
      const match = row.original.value;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(match.id)}>
              Copy match ID
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log('View details', match)}>View details</DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log('Start review', match)}>Start review</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    skeleton: () => <Skeleton className="w-[24px] h-[24px] rounded-full" />,
  }),
};

export const getMatchesColumnsConfig = (tableViewDef?: Array<TableViewDefinition>[0]) =>
  getColumnConfig<Match>(columns, tableViewDef);
