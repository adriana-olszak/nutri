import { runInAction, makeAutoObservable, when } from 'mobx';
import { GroupStore, makeAutoSyncableGroup } from '@nutri/store/main/group';
import { MatchStore } from '@nutri/store/manual-reviews/Match.store';
import { RootStore } from '@nutri/store/root';
import { Transport } from '@nutri/store/main/transport';
import { GroupOperation } from '@nutri/store/main/types';
import { Store } from '@nutri/store/main/store';
import { Channel } from 'phoenix';
import { Match } from '@nutri/store/manual-reviews/types';


export class MatchesStore implements GroupStore<Match> {
  value: Map<string, Store<Match>> = new Map();
  isLoading = false;
  channel?: Channel;
  version: number = 0;
  isBootstrapped = false;
  error: string | null = null;
  sync = makeAutoSyncableGroup.sync;
  subscribe = makeAutoSyncableGroup.subscribe;
  load = makeAutoSyncableGroup.load<Match>();
  history: GroupOperation[] = [];
  totalElements: number = 0;
  currentPage: number = 0;


  constructor(public root: RootStore, public transport: Transport) {
    makeAutoSyncableGroup(this, {
      channelName: 'Matches',
      ItemStore: MatchStore,
      getItemId: (item) => item.id,
    });
    makeAutoObservable(this);

    when(
      () =>
        this.isBootstrapped && this.totalElements > 0,
      async () => {
        await this.bootstrapRest();
      },
    );
  }

  async bootstrap() {

    if (this.isBootstrapped || this.isLoading) return;

    try {
      this.isLoading = true;
      const res = await this.transport.client.PaginatedMatches({ page: 1, perPage: 1000 });


      this.load(res.paginatedMatches.data);

      runInAction(() => {
        this.isBootstrapped = true;
        this.totalElements = res.paginatedMatches.meta.total;
        this.currentPage = res.paginatedMatches.meta.currentPage;
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


  async bootstrapRest() {
    let page = 1;

    while (this.totalElements > this.value.size) {
      try {
        const res = await this.transport.client.PaginatedMatches({ page, perPage: 1000 });
        runInAction(() => {
          page++;
          this.load(res.paginatedMatches.data);
        });
      } catch (e) {
        runInAction(() => {
          this.error = (e as Error)?.message;
        });
        break;
      }
    }
  }

  getById(id: string) {
    return this.value.get(id);
  }


  toArray() {
    return Array.from(this.value)?.flatMap(
      ([, store]) => store,
    );
  }

}
