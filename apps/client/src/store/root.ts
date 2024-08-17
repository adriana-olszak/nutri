import localforage from 'localforage';
import { when, makeAutoObservable } from 'mobx';
import { configurePersistable } from 'mobx-persist-store';

import { UIStore } from './ui/UI.store';
import { Transport } from './main/transport';
import { TableViewsStore } from '@nutri/store/tableViews/TableViews.store';

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
  tableViews: TableViewsStore;

  constructor(private transport: Transport, isAuthenticated: boolean) {
    makeAutoObservable(this);

    this.ui = new UIStore();
    this.isAuthenticated = isAuthenticated;
    this.tableViews = new TableViewsStore(this, transport);
    console.log(isAuthenticated)
    when(
      () => this.isAuthenticated,
      async () => {
        await this.bootstrap();
      },
    );
  }

  async bootstrap() {
    await Promise.all([
      this.tableViews.bootstrap(),
    ]);
  }

  get isBootstrapped() {
    return true;
  }

  get isBootstrapping() {
    return true;
  }
}
