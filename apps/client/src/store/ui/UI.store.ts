import { makeAutoObservable } from 'mobx';
import { CommandMenuStore } from './CommandMenu.store';



export class UIStore {

  commandMenu = new CommandMenuStore();
  private activeConfirmationCallback: () => void = () => {};

  constructor() {
    makeAutoObservable(this);
  }


}
