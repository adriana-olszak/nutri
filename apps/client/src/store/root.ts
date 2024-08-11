import localforage from 'localforage';
import { when, makeAutoObservable } from 'mobx';
import { configurePersistable } from 'mobx-persist-store';

import { UIStore } from './ui/UI.store';
import { Transport } from './main/transport';

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'diet_draftDB',
  version: 1.0,
  storeName: 'diet_draft',
});

configurePersistable({
  storage: localforage,
  expireIn: 1000 * 60 * 60 * 24, // 1 day
  version: 1.0,
  stringify: false,
});

export class RootStore {
  isAuthenticated = false;
  ui: UIStore;

  constructor(private transport: Transport, isAuthenticated: boolean) {
    makeAutoObservable(this);

    this.ui = new UIStore();

    when(
      () => this.isAuthenticated,
      async () => {
        await this.bootstrap();
      },
    );
  }

  async bootstrap() {
    await Promise.all([]);
  }

  get isBootstrapped() {
    return true;
  }

  get isBootstrapping() {
    return true;
  }
}
