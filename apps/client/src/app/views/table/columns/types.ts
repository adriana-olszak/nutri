import { ColumnDef } from '@tanstack/react-table';
import { Store } from '@nutri/store/main/store';

export type Column<T> = ColumnDef<Store<T>, any>;
