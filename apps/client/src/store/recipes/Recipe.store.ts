import { Channel } from 'phoenix';
import { makeAutoObservable } from 'mobx';
import { Transport } from '@nutri/store/main/transport';
import { RootStore } from '@nutri/store/root';
import { makeAutoSyncable, Store } from '@nutri/store/main/store';
import { Operation } from '@nutri/store/main/types';
import { Recipe } from '@nutri/client-gql';

export class RecipeStore implements Store<Recipe> {
  value: Recipe = getDefaultValue();
  version = 0;
  history: Operation[] = [];
  isLoading = false;
  error: string | null = null;
  channel: Channel | undefined;
  subscribe = makeAutoSyncable.subscribe;
  load = makeAutoSyncable.load<Recipe>();
  update = makeAutoSyncable.update<Recipe>();

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

  async invalidate() {
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

}

export const getDefaultValue = (): Recipe => ({
  createdAt: undefined,
  id: '',
  title: '',
  updatedAt: undefined,
});
