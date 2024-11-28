import React from 'react';
import { Match } from '@nutri/client-gql';
import { MoreHorizontal } from 'lucide-react';

import {
  createColumnHelper,
} from '@tanstack/react-table';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger, getColumnConfig,
  Skeleton,
} from '@nutri/client-ui';
import { Store } from '@nutri/store/main/store';
import { THead, getTHeadProps } from '@nutri/client-ui';
import { ColumnDef } from '@tanstack/react-table';

const columnHelper = createColumnHelper<Store<Match>>();

export const columns: Record<string, ColumnDef<Store<Match>, any>> = {
  id: columnHelper.accessor('value.id', {
    id: 'id',
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

  status: columnHelper.accessor('value.status', {
    id: 'status',
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

  recipeIngredient: columnHelper.accessor('value.ingredientText', {
    id: 'recipeIngredient',
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

  actions: {
    id: 'actions',
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
  },
};

export const getMatchColumnsConfig = (tableViewDef?: Array<any>[0]) =>
  getColumnConfig<Store<Match>>(columns, tableViewDef);
