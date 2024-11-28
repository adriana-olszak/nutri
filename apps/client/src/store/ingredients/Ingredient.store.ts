import { Channel } from 'phoenix';
import { makeAutoObservable } from 'mobx';
import { Transport } from '@nutri/store/main/transport';
import { RootStore } from '@nutri/store/root';
import { makeAutoSyncable, Store } from '@nutri/store/main/store';
import { Food, TableIdType, TableViewType } from '@nutri/client-gql';
import { Operation } from '@nutri/store/main/types';

export class IngredientStore implements Store<Food> {
  value: Food = getDefaultValue();
  version = 0;
  history: Operation[] = [];
  isLoading = false;
  error: string | null = null;
  channel: Channel | undefined;
  subscribe = makeAutoSyncable.subscribe;

  load = makeAutoSyncable.load<Food>();
  update = makeAutoSyncable.update<Food>();

  constructor(public root: RootStore, public transport: Transport) {
    makeAutoObservable(this);
  }

  set id(id: string) {
    this.value.id = id;
  }



  async invalidate() {}


}



export const getDefaultValue = () => ({
  tableId: TableIdType.Recipes,
  columns: [],
  createdAt: '',
  filters: '',
  icon: '',
  id: '',
  name: '',
  order: 0,
  sorting: '',
  updatedAt: '',
  isPreset: false,
  isShared: false,
  tableType: TableViewType.Recipes,
});
