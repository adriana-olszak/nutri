import { makeAutoObservable } from 'mobx';
import { CommandMenuStore } from './CommandMenu.store';



export class UIStore {
  filteredTable: Array<unknown> = [];
  isSearching: string | null = null;
  isFilteringTable: boolean = false;
  isEditingTableCell: boolean = false;

  commandMenu = new CommandMenuStore();
  private activeConfirmationCallback: () => void = () => {};

  constructor() {
    makeAutoObservable(this);
  }


  setFilteredTable(data: Array<unknown>) {
    this.filteredTable = data;
  }

  setIsFilteringTable(value: boolean) {
    this.isFilteringTable = value;
  }

  setIsEditingTableCell(value: boolean) {
    this.isEditingTableCell = value;
  }

}
