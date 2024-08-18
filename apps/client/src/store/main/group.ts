import { Channel } from 'phoenix';
import { match } from 'ts-pattern';
import { when, runInAction } from 'mobx';
import { rdiffResult } from 'recursive-diff';

import { Transport } from './transport';
import { GroupOperation, GroupSyncPacket } from './types';
import {RootStore} from "@nutri/store/root";

type UpdateOptions = {
  mutate?: boolean;
  syncMutate?: boolean;
};
export type Operation = { id: number; ref?: string; diff: rdiffResult[] };

export interface Store<T> {
  value: T;
  get id();
  version: number;
  root: RootStore;
  channel?: Channel;
  subscribe(): void;
  init?(data: T): T;
  isLoading: boolean;
  set id(id: string);
  error: string | null;
  history: Operation[];
  transport: Transport;
  load(data: T): Promise<void>;
  invalidate: () => Promise<void>;
  update(updater: (prev: T) => T, options?: UpdateOptions): void;
}

export type StoreConstructor<T> = new (
  root: RootStore,
  transport: Transport,
) => Store<T>;

export interface GroupStore<T> {
  version: number;
  root: RootStore;
  channel?: Channel;
  subscribe(): void;
  isLoading: boolean;
  error: string | null;
  transport: Transport;
  load(data: T[]): void;
  isBootstrapped: boolean;
  history: GroupOperation[];
  value: Map<string, Store<T>>;
  sync(operation: GroupOperation): void;
}

type GroupStoreConstructor<T> = new (
  root: RootStore,
  transport: Transport,
) => GroupStore<T>;

export function makeAutoSyncableGroup<T extends Record<string, unknown>>(
  instance: InstanceType<GroupStoreConstructor<T>>,
  options: {
    channelName: string;
    ItemStore: StoreConstructor<T>;
    getItemId: (data: T) => string;
  },
) {
  const {
    ItemStore,
    channelName,
    getItemId = (data) => data?.id as string,
  } = options;
  function load(this: GroupStore<T>, data: T[]) {

    data.forEach((item) => {
      const id = getItemId(item);
      if (this.value.has(id)) {
        console.log('exists')
        this.value.get(id)?.load(item);

        return;
      }

      const itemStore = new ItemStore(this.root, this.transport);
      itemStore.value = item;
      this.value.set(id, itemStore);
    });

    // when(
    //   () => !!this.root.session.value.tenant && !this.root.demoMode,
    //   async () => {
    //     const tenant = this.root.session.value.tenant;
    //
    //     try {
    //       const connection = await this.transport.join(
    //         channelName,
    //         tenant,
    //         this.version,
    //       );
    //
    //       if (!connection) return;
    //
    //       this.channel = connection.channel;
    //       this.subscribe();
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   },
    // );

    this.isBootstrapped = true;
  }

  function subscribe(this: GroupStore<T>) {
    if (!this.channel) return;

    this.channel.on('sync_group_packet', (packet: GroupSyncPacket) => {
      if (packet.ref === this.transport.refId) return;
      applyGroupOperation(this, ItemStore, packet);
      this.history.push(packet);
    });
  }

  function sync(this: GroupStore<T>, operation: GroupOperation) {
    const op = {
      ...operation,
      ref: this.transport.refId,
    };

    this.history.push(op);
    this?.channel
      ?.push('sync_group_packet', { payload: { operation: op } })
      ?.receive('ok', ({ version }: { version: number }) => {
        this.version = version;
      });
  }

  instance.load = load.bind(instance);
  instance.subscribe = subscribe.bind(instance);
  instance.sync = sync.bind(instance);
}

makeAutoSyncableGroup.subscribe = function () {};

makeAutoSyncableGroup.load = function <T>() {
  return function (data: T[]): void {};
};

makeAutoSyncableGroup.sync = function (operation: GroupOperation): void {};

function applyGroupOperation<T>(
  instance: GroupStore<T>,
  ItemStore: StoreConstructor<T>,
  operation: GroupOperation,
) {
  match(operation.action)
    .with('APPEND', () => {
      operation.ids.forEach((id) => {
        const newItem = new ItemStore(instance.root, instance.transport);

        runInAction(() => {
          newItem.id = id;
          instance.value.set(id, newItem);
        });

        setTimeout(() => {
          instance.value.get(id)?.invalidate();
        }, 1000);
      });
    })
    .with('DELETE', () => {
      operation.ids.forEach((id) => {
        runInAction(() => {
          instance.value.delete(id);
        });
      });
    })
    .with('INVALIDATE', () => {
      operation.ids.forEach((id) => {
        const item = instance.value.get(id);

        if (!item) return;

        item.invalidate();
      });
    })
    .otherwise(() => {});
}

