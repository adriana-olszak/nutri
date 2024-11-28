import { Store } from '@nutri/store/main/store';
import { Column } from './columns/types';

export type TableData<T> = Store<T>;

export interface TableComponentProps<T> {
  data: TableData<T>[];
  columns: Column<T>[]
  renderTableActions: (table: any, focusRow: any, selectedIds: string[]) => React.ReactNode;
}

export interface UseDataResult<T> {
  data: TableData<T>[];
}

export interface ActionsComponentProps {
  table: any;
  focusRow: any;
  selectedIds: string[];
}
