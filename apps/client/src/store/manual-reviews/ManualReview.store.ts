import { makeAutoObservable, runInAction } from 'mobx';
import { MatchManualReview, Match } from '@nutri/client-gql';
import { makeAutoSyncable, Store } from '@nutri/store/main/store';
import { RootStore } from '@nutri/store/root';
import { Transport } from '@nutri/store/main/transport';
import { Operation } from '@nutri/store/main/types';
import { Channel } from 'phoenix';

export class ManualReviewStore implements Store<MatchManualReview> {
  value: MatchManualReview = getDefaultManualReviewValue();
  version = 0;
  isLoading = false;
  error: string | null = null;
  channel: Channel | undefined;
  history: Operation[] = [];

  constructor(public root: RootStore, public transport: Transport) {
    makeAutoObservable(this);
    makeAutoSyncable(this, {
      channelName: 'manual_review',
      getId: (data: MatchManualReview) => data.id,
    });
  }

  async updateReviewStatus(status: string): Promise<MatchManualReview> {
    try {
      this.isLoading = true;
      const result = await this.transport.client.UpdateReviewStatus({ reviewId: this.value.id, status });
      runInAction(() => {
        Object.assign(this.value, result.updateReviewStatus);
      });
      return result.updateReviewStatus;
    } catch (e) {
      this.error = (e as Error)?.message;
      throw e;
    } finally {
      this.isLoading = false;
    }
  }

  async requestFurtherReview(reason: string): Promise<MatchManualReview> {
    try {
      this.isLoading = true;
      const result = await this.transport.client.RequestFurtherReview({ reviewId: this.value.id, reason });
      runInAction(() => {
        Object.assign(this.value, result.requestFurtherReview);
      });
      return result.requestFurtherReview;
    } catch (e) {
      this.error = (e as Error)?.message;
      throw e;
    } finally {
      this.isLoading = false;
    }
  }

  invalidate(): Promise<void> {
    return Promise.resolve(undefined);
  }

  get id() {
  }

  set id(id: string) {
  }

  load(data: MatchManualReview): Promise<void> {
    return Promise.resolve(undefined);
  }

  subscribe(): void {
  }

  update(updater: (prev: MatchManualReview) => MatchManualReview, options?: UpdateOptions): void {
  }
}

const getDefaultManualReviewValue = (): MatchManualReview => ({
  id: '',
  status: 'PENDING',
  reason: null,
  match: null,
});
