import { Channel } from 'phoenix';
import { runInAction, makeAutoObservable } from 'mobx';


import { GroupStore, makeAutoSyncableGroup } from '@nutri/store/main/group';
import { getDefaultValue, TableViewDefStore } from '@nutri/store/tableViews/TableView.store';
import { GroupOperation } from '@nutri/store/main/types';
import { RootStore } from '@nutri/store/root';
import { Transport } from '@nutri/store/main/transport';
import { TableIdType, TableViewDefinition as TableViewDef, TableViewType } from '@nutri/client-gql';

export class TableViewsStore implements GroupStore<TableViewDef> {
  value: Map<string, TableViewDefStore> = new Map();
  isLoading = false;
  channel?: Channel;
  version = 0;
  history: GroupOperation[] = [];
  isBootstrapped = false;
  error: string | null = null;
  sync = makeAutoSyncableGroup.sync;
  subscribe = makeAutoSyncableGroup.subscribe;
  load = makeAutoSyncableGroup.load<TableViewDef>();

  constructor(public root: RootStore, public transport: Transport) {
    makeAutoSyncableGroup(this, {
      channelName: 'TableViewDefs',
      ItemStore: TableViewDefStore,
      getItemId: (item) => item.id,
    });
    makeAutoObservable(this);
  }

  async bootstrap() {
    if (this.isBootstrapped) return;

    try {
      this.isLoading = true;

      const { tableViewDefinitions } =
        await this.transport.client.TableViewDefinitions();

      this.load(tableViewDefinitions);
      runInAction(() => {
        this.isBootstrapped = true;
      });
    } catch (e) {
      runInAction(() => {
        this.error = (e as Error)?.message;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async invalidate() {
    try {
      this.isLoading = true;

      const { tableViewDefinitions } = await this.transport.client.TableViewDefinitions();

      this.load(tableViewDefinitions);
    } catch (err) {
      runInAction(() => {
        this.error = (err as Error)?.message;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  getById(id: string) {
    const tableViewDefStore = this.value.get(id);

    if (!tableViewDefStore && this.isBootstrapped) {
      const defaultPresetId = this.defaultPreset;

      if (defaultPresetId) {
        const defaultTableViewDefStore = this.value.get(defaultPresetId);

        if (defaultTableViewDefStore) {
          runInAction(() => {
            const url = new URL(window.location.href);

            url.searchParams.set('preset', defaultPresetId);
            window.history.replaceState(null, '', url.toString());
          });

          return defaultTableViewDefStore;
        }
      }
    }

    return tableViewDefStore;
  }

  toArray(): TableViewDefStore[] {
    return Array.from(this.value)?.flatMap(
      ([, tableViewDefStore]) => tableViewDefStore,
    );
  }

  get defaultPreset() {
    return this?.toArray().find(
      (t) => t.value.tableId === TableIdType.Recipes && t.value.isPreset,
    )?.value.id;
  }


  presetByType(tableType: TableViewType) {
    return this?.toArray().find(
      (t) => t.value.tableType === tableType && t.value.isPreset,
    )?.value.id;
  }

  createFavorite = async (
    {
      id,
      isShared,
      name,
    }: {
      id: string;
      name?: string;
      isShared: boolean;
    },
    options?: { onSuccess?: (serverId: string) => void },
  ) => {
    const favoritePreset = this.getById(id)?.getPayloadToCopy();

    const newTableViewDef = new TableViewDefStore(this.root, this.transport);

    newTableViewDef.value = {
      ...getDefaultValue(),
      ...favoritePreset,
      name: name
        ? name
        : `Copy of ${
          favoritePreset?.name
        }`,
      isPreset: false,
      isShared,
    };

    const { id: _id, createdAt, updatedAt, ...payload } = newTableViewDef.value;

    const tempId = newTableViewDef.id;
    let serverId = '';

    this.value.set(tempId, newTableViewDef);
    this.isLoading = true;

    try {
      const { createTableViewDefinition } = await this.transport.client.CreateTableViewDefinition({
        input: {
          ...payload,
        },
      });

      runInAction(() => {
        serverId = createTableViewDefinition.id;
        newTableViewDef.value.id = serverId;

        this.value.set(serverId, newTableViewDef);
        this.value.delete(tempId);

        this.sync({
          action: 'APPEND',
          ids: [serverId],
        });
      });
    } catch (err) {
      runInAction(() => {
        this.error = (err as Error).message;
      });
    } finally {
      this.isLoading = false;

      if (serverId) {
        setTimeout(() => {
          this.invalidate();
          options?.onSuccess?.(serverId);
        }, 100);
      }
    }
  };

  archive = async (id: string, options?: { onSuccess?: () => void }) => {
    this.isLoading = true;

    const viewName = this.getById(id)?.value.name;

    try {
      const { archiveTableViewDefinition } = await this.transport.client.ArchiveTableViewDefinition({
        archiveTableViewDefinitionId: id,
      });

      if (archiveTableViewDefinition.accepted) {
        runInAction(() => {
          this.value.delete(id);

          this.sync({
            action: 'DELETE',
            ids: [id],
          });
        });

      }
    } catch (err) {
      runInAction(() => {
        this.error = (err as Error).message;

      });
    } finally {
      this.isLoading = false;
      options?.onSuccess?.();
    }
  };
}
