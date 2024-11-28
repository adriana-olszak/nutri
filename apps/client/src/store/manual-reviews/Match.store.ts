import { makeAutoObservable } from 'mobx';
import { Channel } from 'phoenix';
import { RootStore } from '@nutri/store/root';
import { Transport } from '@nutri/store/main/transport';
import { makeAutoSyncable, Store } from '@nutri/store/main/store';
import { v4 as uuidv4 } from 'uuid';

import { MatchStatus } from '@nutri/client-gql';
import { Operation } from '@nutri/store/main/types';
import { Match } from '@nutri/store/manual-reviews/types';


export class MatchStore implements Store<Match> {
  value: Match = getDefaultValue();
  version = 0;
  history: Operation[] = [];
  isLoading = false;
  error: string | null = null;
  channel: Channel | undefined;
  subscribe = makeAutoSyncable.subscribe;
  load = makeAutoSyncable.load<Match>();
  update = makeAutoSyncable.update<Match>();

  constructor(public root: RootStore, public transport: Transport) {
    makeAutoObservable(this);
    makeAutoSyncable(this, {
      channelName: 'match',
      getId: (data: Match) => data.id,
    });
  }

  get id() {
    return this.value.id;
  }

  set id(id: string) {
    this.value.id = id;
  }

  async invalidate() {
    // Implementation for invalidating the match
    // You might want to refetch the match data from the server here
  }

}

export const getDefaultValue = (): Match => ({
  id: uuidv4(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  status: MatchStatus.PendingReview,
  ingredientText: '',
});
