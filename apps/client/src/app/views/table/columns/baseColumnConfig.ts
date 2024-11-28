import { TableViewDefinition } from '@nutri/client-gql';
import { Column } from './types';

export function getColumnConfig<StoreType>(
  columns: Record<string, Column<StoreType>>,
  tableViewDef?: Array<TableViewDefinition>[0],
): Column<StoreType>[] {
  if (!tableViewDef) return [];
  return (tableViewDef.columnView ?? []).reduce((acc: any, curr: any) => {
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
  }, [] as Column<StoreType>[]);
}
