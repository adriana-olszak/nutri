import React, { useState } from 'react';
import {
  Column,
  ColumnDef,
  createColumnHelper,
  HeaderContext,
} from '@tanstack/react-table';
import { getTHeadProps, Input, Skeleton, THead } from '@nutri/client-ui';
import {LinkCell} from "../../../../components/cell";
import {QuestionnaireColumnType} from "@nutri/store/tableViews/types";



type Questionnaire = {
  id: string;
  name: string;
  tags: string[];
  questionCount: number;
  createdDate: string;
  lastModifiedDate: string;
  author: string;
  status: 'draft' | 'active' | 'archived';
  usedCount: number;
};

const columnHelper = createColumnHelper<Questionnaire>();

export const questionnaireColumns: Record<QuestionnaireColumnType, ColumnDef<Questionnaire, any>> = {
  [QuestionnaireColumnType.NAME]: {
    accessorKey: 'value.title',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'title'} title={'Title'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue, row }) => (
      <LinkCell title={getValue()} href={`/surveys/${row.original.id}`}/>
    ),
    enableSorting: true,
    enableColumnFilter: true,
  },
  [QuestionnaireColumnType.TAGS]: {
    accessorKey: 'value.tags',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'Tags'} title={'Tags'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue }) => getValue()?.join(','),
    enableSorting: true,
    enableColumnFilter: true,
  },

  [QuestionnaireColumnType.CREATED_DATE]: {
    accessorKey: 'value.createdAt',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'CreatedDate'} title={'Created'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString(),
    enableSorting: true,
    enableColumnFilter: true,
  },
  [QuestionnaireColumnType.LAST_MODIFIED_DATE]: {
    accessorKey: 'value.updatedAt',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'LastModifiedDate'} title={'Last Modified'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString(),
    enableSorting: true,
    enableColumnFilter: true,
  },
  [QuestionnaireColumnType.AUTHOR]: {
    accessorKey: 'author',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'Author'} title={'Author'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue }) => getValue(),
    enableSorting: true,
    enableColumnFilter: true,
  },
  [QuestionnaireColumnType.STATUS]: {
    accessorKey: 'status',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'Status'} title={'Status'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue }) => getValue(),
    enableSorting: true,
    enableColumnFilter: true,
  },
  [QuestionnaireColumnType.USED_COUNT]: {
    accessorKey: 'usedCount',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'UsedCount'} title={'Times Used'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue }) => getValue(),
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
  }, [] as ColumnDef<Datum, any>[]);
}

// Function to get column configuration for questionnaires table
export const getQuestionnaireColumnsConfig = (tableViewDef?: Array<any>[0]) =>
  getColumnConfig<Questionnaire>(questionnaireColumns, tableViewDef);
