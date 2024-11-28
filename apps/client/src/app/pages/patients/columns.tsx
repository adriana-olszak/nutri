import React, { useState } from 'react';
import {
  Column,
  ColumnDef,
  createColumnHelper,
  HeaderContext,
} from '@tanstack/react-table';
import { getTHeadProps, Input, THead } from '@nutri/client-ui';
import { Patient } from './type';
import { EditableCell, LinkCell } from '../../components/cell';
import { ColumnViewType } from '@nutri/client-gql';

type ColumnDatum = ColumnDef<ColumnDatum, any>;

const columnHelper = createColumnHelper<ColumnDatum>();
// Custom header component with sort and filter

// Custom input component for better hover and focus styles
const StyledInput = ({ value, row }) => {
  const [newVal, setValue] = useState(value);

  return (
    <Input
      value={newVal}
      variant="outline"
      onChange={(e) => setValue(e.target.value)}
      className="overflow-hidden overflow-ellipsis hover:overflow-visible focus:overflow-visible border-transparent hover:border-gray-400 focus:border-blue-500 outline-none focus-visible:ring-0 focus-visible:outline-transparent"
    />
  );
};

export const patientColumns = {
  [ColumnViewType.PatientsName]: {
    accessorKey: 'name',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'Name'} title={'Name'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue, row }) => {
      return <LinkCell title={getValue()} href={`${row.original.id}`} />;
    },
    enableSorting: true,
    enableColumnFilter: true,
  },
  [ColumnViewType.PatientsAge]: {
    accessorKey: 'age',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'Age'} title={'Age'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    enableSorting: true,
    enableColumnFilter: true,
  },
  [ColumnViewType.PatientsHeight]: {
    accessorKey: 'height',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'Height'} title={'Height (cm)'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,

    enableSorting: true,
    enableColumnFilter: true,
  },
  [ColumnViewType.PatientsWeight]: {
    accessorKey: 'weight',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'Weight'} title={'Weight (kg)'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,

    enableSorting: true,
    enableColumnFilter: true,
  },
  [ColumnViewType.PatientsBmi]: {
    accessorKey: 'bmi',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'BMI'} title={'BMI'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    enableSorting: true,
    enableColumnFilter: true,
  },
  [ColumnViewType.PatientsFitnessLevel]: {
    accessorKey: 'fitnessLevel',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'FitnessLevel'} title={'Fitness Level'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue()}`} />,
    enableSorting: true,
    enableColumnFilter: true,
  },
  [ColumnViewType.PatientsDietaryPreferences]: {
    accessorKey: 'dietaryPreferences',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'DietaryPreferences'} title={'Dietary Preferences'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue().join(', ')}`} />,

    enableSorting: true,
    enableColumnFilter: true,
  },
  [ColumnViewType.PatientsDietaryRestrictions]: {
    accessorKey: 'dietaryRestrictions',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'DietaryRestrictions'} title={'Dietary Restrictions'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue().join(', ')}`} />,
    enableSorting: true,
    enableColumnFilter: true,
  },
  [ColumnViewType.PatientsHealthProblems]: {
    accessorKey: 'diagnosedHealthProblems',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'HealthProblems'} title={'Health Problems'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue().join(', ')}`} />,
    enableSorting: true,
    enableColumnFilter: true,
  },
  [ColumnViewType.PatientsAllergies]: {
    accessorKey: 'allergies',
    header: (props: HeaderContext<object, unknown>) => (
      <THead id={'Allergies'} title={'Allergies'} {...getTHeadProps(props)} />
    ),
    cell: ({ getValue, row }) => <EditableCell id={row.original.id} value={`${getValue().join(', ')}`} />,
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

// Function to get column configuration for patients table
export const getPatientColumnsConfig = (tableViewDef?: Array<any>[0]) =>
  getColumnConfig<Patient>(patientColumns, tableViewDef);
