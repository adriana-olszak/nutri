import omit from 'lodash';
import { Channel } from 'phoenix';
import { P, match } from 'ts-pattern';
import { gql } from 'graphql-request';
import { makeAutoObservable } from 'mobx';
import { TableIdType, TableType, TableViewDef } from './types';
import { Transport } from '@nutri/store/main/transport';
import { RootStore } from '@nutri/store/root';
import { GroupStore, Operation, Store } from '@nutri/store/main/group';
import { makeAutoSyncable } from '@nutri/store/main/store';

export class RecipeStore implements Store<TableViewDef> {
  value: TableViewDef = getDefaultValue();
  version = 0;
  history: Operation[] = [];
  isLoading = false;
  error: string | null = null;
  channel: Channel | undefined;
  subscribe = makeAutoSyncable.subscribe;

  load = makeAutoSyncable.load<TableViewDef>();
  update = makeAutoSyncable.update<TableViewDef>();

  constructor(public root: RootStore, public transport: Transport) {
    makeAutoObservable(this);
  }

  set id(id: string) {
    this.value.id = id;
  }
  get id() {
    return this.value.id;
  }

  reorderColumn(sourceColumnId: number, targetColumnId: number) {
    // this.update((value) => {
    //   const fromIndex = value.cell.findIndex(
    //     (c) => c.columnId === sourceColumnId,
    //   );
    //   const toIndex = value.cell.findIndex(
    //     (c) => c.columnId === targetColumnId,
    //   );
    //   const column = value.cell[fromIndex];
    //
    //   value.cell.splice(fromIndex, 1);
    //   value.cell.splice(toIndex, 0, column);
    //
    //   return value;
    // });
  }

  orderColumnsByVisibility() {
    const prevLastVisibleIndex = [
      ...this.value.columns.map((c) => c.visible),
    ].lastIndexOf(true);

    const orderedColumns = this.value.columns.sort((a, b) => {
      if (a.visible === b.visible) return 0;
      if (a.visible) return -1;

      return 1;
    });

    const currentLastVisibleIndex = orderedColumns
      .map((c) => c.visible)
      .lastIndexOf(true);

    if (prevLastVisibleIndex === currentLastVisibleIndex) return;

    // this.update((value) => {
    //   value.cell.sort((a, b) => {
    //     if (a.visible === b.visible) return 0;
    //     if (a.visible) return -1;
    //
    //     return 1;
    //   });
    //
    //   return value;
    // });
  }

  setColumnName(columnId: number, name: string) {
    // this.update(
    //   (value) => {
    //     const columnIdx = value.cell.findIndex(
    //       (c) => c.columnId === columnId,
    //     );
    //
    //     value.cell[columnIdx].name = name;
    //
    //     return value;
    //   },
    //   { mutate: false },
    // );
  }

  async invalidate() {}

  async save() {
    const mutation = UPDATE_TABLE_VIEW_DEF;

    const payload: PAYLOAD = {
      input: omit(
        this.value,
        'updatedAt',
        'createdAt',
        'tableType',
        'tableId',
        'isPreset',
        'isShared',
      ),
    };

    try {
      this.isLoading = true;
      await this.transport.graphqlClient.request(mutation, payload);
    } catch (e) {
      this.error = (e as Error)?.message;
    } finally {
      this.isLoading = false;
    }
  }

  getFilters() {
    try {
      return match(this.value.filters)
        .with(P.string.includes('AND'), (data) => JSON.parse(data))
        .otherwise(() => null);
    } catch (err) {
      console.error('Error parsing filters', err);

      return null;
    }
  }

  getFilter(id: string) {
    const filters = this.getFilters();

    return (filters?.AND)?.find((f) => f.filter?.property === id)
      ?.filter;
  }

  // appendFilter(filter: FilterItem) {
  //   this.update((value) => {
  //     let draft = this.getFilters() as Filter;
  //
  //     if (
  //       draft &&
  //       draft?.AND?.findIndex((f) => f.filter?.property === filter.property) !==
  //       -1
  //     ) {
  //       return value;
  //     }
  //
  //     if (draft) {
  //       (draft as Filter).AND?.push({ filter });
  //     } else {
  //       draft = { AND: [{ filter }] };
  //     }
  //
  //     value.filters = JSON.stringify(draft);
  //
  //     return value;
  //   });
  // }

  // removeFilter(id: string) {
  //   this.update((value) => {
  //     const draft = this.getFilters();
  //
  //     if (draft) {
  //       draft.AND = (draft.AND as Filter[])?.filter(
  //         (f) => f.filter?.property !== id,
  //       );
  //       value.filters = JSON.stringify(draft);
  //     }
  //
  //     return value;
  //   });
  // }
  //
  // toggleFilter(filter: FilterItem) {
  //   this.update((value) => {
  //     const draft = this.getFilters();
  //
  //     if (draft) {
  //       const foundFilter = (draft.AND as Filter[])?.find(
  //         (f) => f.filter?.property === filter.property,
  //       )?.filter;
  //
  //       if (foundFilter) {
  //         set(foundFilter, 'active', !filter?.active);
  //         value.filters = JSON.stringify(draft);
  //       } else {
  //         this.appendFilter({ ...filter, active: true });
  //       }
  //     }
  //
  //     return value;
  //   });
  // }
  //
  // setFilter(filter: FilterItem) {
  //   this.update((value) => {
  //     const draft = this.getFilters();
  //
  //     if (!draft) {
  //       this.appendFilter({ ...filter, active: true });
  //
  //       return value;
  //     }
  //
  //     const foundIndex = (draft.AND as Filter[])?.findIndex(
  //       (f) => f.filter?.property === filter.property,
  //     );
  //
  //     if (foundIndex !== -1) {
  //       draft.AND[foundIndex].filter = filter;
  //       value.filters = JSON.stringify(draft);
  //     } else {
  //       this.appendFilter({ ...filter, active: true });
  //     }
  //
  //     return value;
  //   });
  // }

  getPayloadToCopy = () => {
    return omit(this.value, 'id', 'createdAt', 'updatedAt');
  };
}

export const getDefaultValue = () => ({
  tableId: TableIdType.ALL_RECIPES,
  columns: [],
  createdAt: '',
  filters: '',
  icon: '',
  id: '',
  name: '',
  order: 0,
  sorting: '',
  updatedAt: '',
  isPreset: false,
  isShared: false,
  tableType: TableType.RECIPES,
});
