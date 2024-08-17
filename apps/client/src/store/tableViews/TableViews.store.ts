import { Channel } from 'phoenix';
import { gql } from 'graphql-request';
import { runInAction, makeAutoObservable } from 'mobx';

import { getDefaultValue, TableViewStore } from './TableView.store';
import { Transport } from '../main/transport';
import { RootStore } from '../root';
import { TableViewDef } from '@nutri/store/tableViews/types';
import {
  GroupStore,
  makeAutoSyncableGroup,
  Store,
} from '@nutri/store/main/group';
import { GroupOperation } from '@nutri/store/main/types';
import { mock } from './mock';
export class TableViewsStore implements GroupStore<TableViewDef> {
  value: Map<string, Store<TableViewDef>> = new Map();
  isLoading = false;
  channel?: Channel;
  version: number = 0;
  isBootstrapped = false;
  error: string | null = null;
  sync = makeAutoSyncableGroup.sync;
  subscribe = makeAutoSyncableGroup.subscribe;
  load = makeAutoSyncableGroup.load<TableViewDef>();
  history: GroupOperation[] = [];

  constructor(public root: RootStore, public transport: Transport) {
    makeAutoSyncableGroup(this, {
      channelName: 'TableViewDefs',
      ItemStore: TableViewStore,
      getItemId: (item) => item.id,
    });
    makeAutoObservable(this);
  }

  async bootstrap() {
    if(this.isBootstrapped) return
    // @ts-expect-error temporarily ignore
    this.load(mock.data.tableViewDefs);
    this.isBootstrapped = true;

    return;

    // try {
    //   this.isLoading = true;
    //
    //   const res =
    //     await this.transport.graphqlClient.request<TABLE_VIEW_DEFS_QUERY_RESULT>(
    //       TABLE_VIEW_DEFS_QUERY,
    //     );
    //
    //   // this.load(res?.tableViews);
    //   runInAction(() => {
    //     this.isBootstrapped = true;
    //   });
    // } catch (e) {
    //   runInAction(() => {
    //     this.error = (e as Error)?.message;
    //   });
    // } finally {
    //   runInAction(() => {
    //     this.isLoading = false;
    //   });
    // }
  }

  async invalidate() {}

  getById(id: string) {
    return this.value.get(id);
  }

  toArray() {
    return Array.from(this.value)?.flatMap(
      ([, tableViewStore]) => tableViewStore,
    );
  }

  createFavorite = async (
    favoritePresetId: string,
    options?: { onSuccess?: (serverId: string) => void },
  ) => {};

  archive = async (id: string, options?: { onSuccess?: () => void }) => {};
}

type TABLE_VIEW_DEFS_QUERY_RESULT = { tableViews: TableViewDef[] };
const TABLE_VIEW_DEFS_QUERY = gql`
  query tableViews {
    tableViews {
      id
      name
      tableType
      tableId
      order
      icon
      filters
      sorting
      columns {
        columnId
        columnType
        name
        width
        visible
        filter
      }
      isPreset
      isShared
      createdAt
      updatedAt
    }
  }
`;
