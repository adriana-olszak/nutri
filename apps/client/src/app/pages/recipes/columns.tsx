import React, { useState } from 'react';
import { Column, HeaderContext} from '@tanstack/react-table';
import {Filter, ArrowUpDown} from 'lucide-react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  getTHeadProps,
  Input,
  Skeleton,
  THead,
} from '@nutri/client-ui';
import {DialogTrigger} from '@radix-ui/react-dialog';


// Custom header component with sort and filter

// Custom input component for better hover and focus styles
const StyledInput = ({value, onChange, onBlur}) => {
  return (
    <Input
      value={value as string}
      onChange={onChange}
      onBlur={onBlur}
      className="overflow-hidden overflow-ellipsis hover:overflow-visible focus:overflow-visible border-transparent hover:border-gray-400 focus:border-blue-500 outline-none focus-visible:ring-0 focus-visible:outline-transparent"
    />
  );
};

export const recipeColumns = [
  {
    accessorKey: 'title',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'Title'} title={'Title'} {...getTHeadProps(props)} />
    ),
    skeleton: () => (
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[50%] h-[18px] bg-gray-300"/>
      </div>
    ),
    cell: ({getValue, row: {index}, column: {id}, table}) => {
      const initialValue = getValue();
      const [value, setValue] = useState(initialValue);

      const onBlur = () => {
        table.options.meta?.updateData(index, id, value);
      };

      return (
        <StyledInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
        />
      );
    },
    enableSorting: true,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'description',
    canSort: true,
    canFilter: true,
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'Description'} title={'Description'} {...getTHeadProps(props)} />
    ),
    cell: StyledInput,
  },
  {
    accessorKey: 'cookingTime',
    cell: StyledInput,
    enableSorting: true,
    enableColumnFilter: true,
    canSort: true,
    canFilter: true,
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'CookingTime'} title={'Cooking Time'} {...getTHeadProps(props)} />
    ),
  },
  {
    accessorKey: 'prepTime',
    canSort: true,
    canFilter: true,
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'PrepTime'} title={'Preparation Time'} {...getTHeadProps(props)} />
    ),
    cell: StyledInput,
    enableSorting: true,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'servingsMin',
    canSort: true,
    canFilter: true,
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'MinServings'} title={'Min Servings'} {...getTHeadProps(props)} />
    ),
    cell: StyledInput,
    enableSorting: true,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'servingsMax',
    canSort: true,
    canFilter: true,
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'MaxServings'} title={'Max Servings'} {...getTHeadProps(props)} />
    ),
    cell: StyledInput,
    enableSorting: true,
    enableColumnFilter: true,
  },
];
