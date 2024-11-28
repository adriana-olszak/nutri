import { runInAction, makeAutoObservable } from 'mobx';
import { MatchManualReview } from '@nutri/client-gql';
import { GroupStore, makeAutoSyncableGroup } from '@nutri/store/main/group';
import { ManualReviewStore } from '@nutri/store/manual-reviews/ManualReview.store';
import { GroupOperation } from '../main/types';
import { Channel } from 'phoenix';
import { Store } from '@nutri/store/main/store';
import { RootStore } from '@nutri/store/root';
import { Transport } from '@nutri/store/main/transport';

export class ManualReviewsStore implements GroupStore<MatchManualReview> {
  value: Map<string, Store<MatchManualReview>> = new Map();
  isLoading = false;
  channel?: Channel;
  version: number = 0;
  isBootstrapped = false;
  error: string | null = null;
  history: GroupOperation[] = [];

  constructor(public root: RootStore, public transport: Transport) {
    makeAutoSyncableGroup(this, {
      channelName: 'ManualReviews',
      ItemStore: ManualReviewStore,
      getItemId: (item) => item.id,
    });
    makeAutoObservable(this);
  }

  subscribe(): void {
    throw new Error('Method not implemented.');
  }

  load(data: MatchManualReview[]): void {
    throw new Error('Method not implemented.');
  }

  sync(operation: GroupOperation): void {
    throw new Error('Method not implemented.');
  }
}
