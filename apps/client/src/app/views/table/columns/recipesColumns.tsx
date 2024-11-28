import React from 'react';
import {
  HeaderContext,
} from '@tanstack/react-table';
import { createColumnHelper, getTHeadProps, Skeleton, THead } from '@nutri/client-ui';
import { EditableCell, LinkCell } from '../../../components/cell';
import { ColumnViewType, Recipe, TableViewDefinition } from '@nutri/client-gql';
import { Store } from '@nutri/store/main/store';
import { getColumnConfig } from './baseColumnConfig';
import { Column } from './types';

export type RecipesColumn = Store<Recipe>
const columnHelper = createColumnHelper<RecipesColumn>();

const recipeColumns: Record<string, Column<Recipe>> = {
  [ColumnViewType.RecipesTitle]: columnHelper.accessor('value.title', {
    header: (props: HeaderContext<RecipesColumn, any>) => (
      <THead id={'Title'} title={'Title'} {...getTHeadProps(props)} />
    ),
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300" />
      </div>
    ),
    id: ColumnViewType.RecipesTitle,
    size: 300,
    enableColumnFilter: true,
    enableResizing: false,
    enableSorting: true,
    cell: (props) => {
      return (
        <LinkCell title={props.getValue()} href={`${props.row.original.value.id}`} />
      );
    },
  }),
  [ColumnViewType.RecipesDescription]: columnHelper.accessor('value.description', {
    id: ColumnViewType.RecipesDescription,
    enableSorting: true,
    enableColumnFilter: true,
    header: (props: HeaderContext<RecipesColumn, any>) => (
      <THead
        id={'Description'}
        title={'Description'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300" />
      </div>
    ),
  }),
  [ColumnViewType.RecipesCookingTime]: columnHelper.accessor('value.cookingTime', {
    id: ColumnViewType.RecipesCookingTime,
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300" />
      </div>
    ),

    enableSorting: true,
    enableColumnFilter: true,
    header: (props: HeaderContext<RecipesColumn, any>) => (
      <THead
        id={'CookingTime'}
        title={'Cooking Time'}
        {...getTHeadProps(props)}
      />
    ),
  }),
  [ColumnViewType.RecipesPrepTime]: columnHelper.accessor('value.prepTime', {
    id: ColumnViewType.RecipesPrepTime,
    enableSorting: true,
    enableColumnFilter: true,
    header: (props: HeaderContext<RecipesColumn, any>) => (
      <THead
        id={'PrepTime'}
        title={'Preparation Time'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300" />
      </div>
    ),
  }),
  [ColumnViewType.RecipesServingsText]: columnHelper.accessor('value.servingsText', {
    id: ColumnViewType.RecipesServingsMin,
    enableSorting: true,
    enableColumnFilter: true,
    header: (props: HeaderContext<RecipesColumn, any>) => (
      <THead
        id={'TextServings'}
        title={'Servings Text'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300" />
      </div>
    ),

  }), [ColumnViewType.RecipesServingsMin]: columnHelper.accessor('value.servingsMin', {
    id: ColumnViewType.RecipesServingsMin,
    enableSorting: true,
    enableColumnFilter: true,
    header: (props: HeaderContext<RecipesColumn, any>) => (
      <THead
        id={'MinServings'}
        title={'Min Servings'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300" />
      </div>
    ),

  }),
  [ColumnViewType.RecipesServingsMax]: columnHelper.accessor('value.servingsMax', {
    id: ColumnViewType.RecipesServingsMax,
    enableSorting: true,
    enableColumnFilter: true,
    header: (props: HeaderContext<RecipesColumn, any>) => (
      <THead
        id={'MaxServings'}
        title={'Max Servings'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300" />
      </div>
    ),
  }),
  [ColumnViewType.RecipesSourceUrl]: columnHelper.accessor('value.sourceUrl', {
    id: ColumnViewType.RecipesServingsMax,
    enableSorting: true,
    enableColumnFilter: true,
    header: (props: HeaderContext<RecipesColumn, any>) => (
      <THead
        id={'SourceUrl'}
        title={'Source Url'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300" />
      </div>
    ),
  }), [ColumnViewType.RecipesCreatedAt]: columnHelper.accessor('value.createdAt', {
    id: ColumnViewType.RecipesCreatedAt,
    enableSorting: true,
    enableColumnFilter: true,
    header: (props: HeaderContext<RecipesColumn, any>) => (
      <THead
        id={'SourceUrl'}
        title={'Created at'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300" />
      </div>
    ),
  }), [ColumnViewType.RecipesUpdatedAt]: columnHelper.accessor('value.updatedAt', {
    id: ColumnViewType.RecipesUpdatedAt,
    enableSorting: true,
    enableColumnFilter: true,
    header: (props: HeaderContext<RecipesColumn, any>) => (
      <THead
        id={'updatedAt'}
        title={'Updated at'}
        {...getTHeadProps(props)}
      />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300" />
      </div>
    ),
  }),
};

export const getRecipeColumnsConfig = (tableViewDef?: Array<TableViewDefinition>[0]) =>
  getColumnConfig<Recipe>(recipeColumns, tableViewDef);
