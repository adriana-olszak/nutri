import { Channel } from 'phoenix';
import { runInAction, makeAutoObservable } from 'mobx';

import { RecipeStore } from './Recipe.store';
import { Transport } from '../main/transport';
import { RootStore } from '../root';
import {
  GroupStore,
  makeAutoSyncableGroup,
} from '@nutri/store/main/group';
import { GroupOperation } from '@nutri/store/main/types';
import { Recipe } from '@nutri/client-gql';
import { Store } from '@nutri/store/main/store';

export class RecipesStore implements GroupStore<Recipe> {
  value: Map<string, Store<Recipe>> = new Map();
  isLoading = false;
  channel?: Channel;
  version: number = 0;
  isBootstrapped = false;
  error: string | null = null;
  sync = makeAutoSyncableGroup.sync;
  subscribe = makeAutoSyncableGroup.subscribe;
  load = makeAutoSyncableGroup.load<Recipe>();
  history: GroupOperation[] = [];
  totalElements: number = 0;
  currentPage: number = 0;

  constructor(public root: RootStore, public transport: Transport) {
    makeAutoSyncableGroup(this, {
      channelName: 'Recipes',
      ItemStore: RecipeStore,
      getItemId: (item) => item.id,
    });
    makeAutoObservable(this);
  }

  async bootstrap() {
    try {
      this.isLoading = true;

      const res = await this.transport.client.PaginatedRecipes({
        page: 1,
        perPage: 100,
      });

      this.load(res?.paginatedRecipes?.data);
      runInAction(() => {
        this.isBootstrapped = true;
        this.totalElements = res.paginatedRecipes.meta.total;
        this.currentPage = res.paginatedRecipes.meta.currentPage;
      });
    } catch (e) {
      runInAction(() => {
        this.error = (e as Error)?.message;
        console.log(e);
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async invalidate() {
  }

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
  ) => {
  };

  archive = async (id: string, options?: { onSuccess?: () => void }) => {
  };
}
