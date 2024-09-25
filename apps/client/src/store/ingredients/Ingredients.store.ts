import { Channel } from 'phoenix';
import { gql } from 'graphql-request';
import { runInAction, makeAutoObservable } from 'mobx';

import { getDefaultValue, IngredientStore } from './Ingredient.store';
import { Transport } from '../main/transport';
import { RootStore } from '../root';
import {
  GroupStore,
  makeAutoSyncableGroup,
  Store,
} from '@nutri/store/main/group';
import { GroupOperation } from '@nutri/store/main/types';
import { mock } from './mock';
import { Food } from '@nutri/client-gql';

export class IngredientsStore implements GroupStore<Food> {
  value: Map<string, Store<Food>> = new Map();
  isLoading = false;
  channel?: Channel;
  version: number = 0;
  isBootstrapped = false;
  error: string | null = null;
  sync = makeAutoSyncableGroup.sync;
  subscribe = makeAutoSyncableGroup.subscribe;
  load = makeAutoSyncableGroup.load<Food>();
  history: GroupOperation[] = [];

  constructor(public root: RootStore, public transport: Transport) {
    makeAutoSyncableGroup(this, {
      channelName: 'Foods',
      ItemStore: IngredientStore,
      getItemId: (item) => item.id,
    });
    makeAutoObservable(this);
  }

  async bootstrap() {
    if (this.isBootstrapped) return;
    // // @ts-expect-error temporarily ignore
    // this.load(mock.data.Foods);
    // this.isBootstrapped = true;
    //
    // return;

    try {
      this.isLoading = true;

      const res = await this.transport.client.PaginatedFoods({
        page: 1,
        perPage: 200,
      });
      // this.load(res?.tableViews);
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


  toArray() {
    return Array.from(this.value)?.flatMap(
      ([, tableViewStore]) => tableViewStore,
    );
  }

}
