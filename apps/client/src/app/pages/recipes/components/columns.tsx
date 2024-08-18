import React, { useState } from 'react';
import {
  ColumnDef,
  createColumnHelper,
  HeaderContext,
} from '@tanstack/react-table';
import { getTHeadProps, Input, Skeleton, THead } from '@nutri/client-ui';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { RecipeColumnType } from '@nutri/store/tableViews/types';
import {EditableCell, LinkCell} from "../../../components/cell";

type ColumnDatum = ColumnDef<ColumnDatum, any>;

const columnHelper = createColumnHelper<ColumnDatum>();
// Custom header component with sort and filter


export const recipeColumns = {
  [RecipeColumnType.RECIPES_TITLE]: {
    accessorKey: 'value.title',
    size: 300,
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'Title'} title={'Title'} {...getTHeadProps(props)} />
    ),
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300" />
      </div>
    ),
    cell: ({ getValue, row }) => {
      return <LinkCell title={getValue()} href={`${row.original.value.id}`}/>
    },
    enableSorting: true,
    enableColumnFilter: true,
  },
  [RecipeColumnType.RECIPES_DESCRIPTION]: {
    accessorKey: 'value.description',
    canSort: true,
    canFilter: true,
    header: (props: HeaderContext<object, unknown>) => (
      <THead
        id={'Description'}
        title={'Description'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
  },
  [RecipeColumnType.RECIPES_COOKING_TIME]: {
    accessorKey: 'value.cookingTime',
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,

    enableSorting: true,
    enableColumnFilter: true,
    canSort: true,
    canFilter: true,
    header: (props: HeaderContext<object, unknown>) => (
      <THead
        id={'CookingTime'}
        title={'Cooking Time'}
        {...getTHeadProps(props)}
      />
    ),
  },
  [RecipeColumnType.RECIPES_PREP_TIME]: {
    accessorKey: 'value.prepTime',
    canSort: true,
    canFilter: true,
    header: (props: HeaderContext<object, unknown>) => (
      <THead
        id={'PrepTime'}
        title={'Preparation Time'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,

    enableSorting: true,
    enableColumnFilter: true,
  },
  [RecipeColumnType.RECIPES_SERVINGS_MIN]: {
    accessorKey: 'value.servingsMin',
    canSort: true,
    canFilter: true,
    header: (props: HeaderContext<object, unknown>) => (
      <THead
        id={'MinServings'}
        title={'Min Servings'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,

    enableSorting: true,
    enableColumnFilter: true,
  },
  [RecipeColumnType.RECIPES_SERVINGS_MAX]: {
    accessorKey: 'value.servingsMax',
    canSort: true,
    canFilter: true,
    header: (props: HeaderContext<object, unknown>) => (
      <THead
        id={'MaxServings'}
        title={'Max Servings'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,

    enableSorting: true,
    enableColumnFilter: true,
  },
};

export function getColumnConfig<Datum>(
  columns: Record<string, ColumnDef<Datum>>,
  tableViewDef?: Array<any>[0],
) {
  if (!tableViewDef) return [];

  return (tableViewDef.columns ?? []).reduce((acc, curr) => {
    const columnTypeName = curr?.columnType;

    if (!columnTypeName) return acc;

    if (columns[columnTypeName] === undefined) return acc;
    const column = {
      ...columns[columnTypeName],
      enableHiding: !curr.visible,
      size: curr.visible ? columns[columnTypeName].size : 0,
    };

    if (!column) return acc;

    return [...acc, column];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [] as ColumnDef<Datum, any>[]);
}
export const getColumnsConfig = (tableViewDef?: Array<any>[0]) =>
  getColumnConfig<ColumnDatum>(recipeColumns, tableViewDef);
