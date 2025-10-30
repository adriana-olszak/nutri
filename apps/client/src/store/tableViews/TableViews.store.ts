import { TableViewDefinition, TableViewType } from '@nutri/client-gql';
import { makeAutoObservable } from 'mobx';
import { httpClient } from '../../api/httpClient';
import { CollectionStore } from '../base/CollectionStore';

export class TableViewsStore extends CollectionStore<TableViewDefinition> {
  constructor() {
    super();
    makeAutoObservable(this);
  }

  protected async fetchItems(): Promise<TableViewDefinition[]> {
    const response = await httpClient.get<{
      tableViewDefinitions: TableViewDefinition[];
    }>('/table-views');
    return response.tableViewDefinitions;
  }

  protected getItemId(item: TableViewDefinition): string {
    return item.id;
  }

  protected async addItem(
    item: TableViewDefinition,
  ): Promise<TableViewDefinition> {
    const response = await httpClient.post<{
      createTableViewDefinition: TableViewDefinition;
    }>('/table-views', { input: item });
    return response.createTableViewDefinition;
  }

  protected async updateItem(
    id: string,
    item: TableViewDefinition,
  ): Promise<TableViewDefinition> {
    const response = await httpClient.put<{
      updateTableViewDefinition: TableViewDefinition;
    }>(`/table-views/${id}`, { updateTableViewDefinitionInput: item });
    return response.updateTableViewDefinition;
  }

  protected async removeItem(id: string): Promise<boolean> {
    const response = await httpClient.delete<{
      archiveTableViewDefinition: { accepted: boolean };
    }>(`/table-views/${id}`);
    return response.archiveTableViewDefinition.accepted;
  }

  async createFavorite(
    { id, isShared, name }: { id: string; name?: string; isShared: boolean },
    options?: { onSuccess?: (serverId: string) => void },
  ): Promise<string> {
    const sourceItem = this.get(id);
    if (!sourceItem) throw new Error(`Table view with id ${id} not found`);

    const { id: _id, createdAt, updatedAt, ...copyData } = sourceItem;
    const newItem: Partial<TableViewDefinition> = {
      ...copyData,
      name: name || `Copy of ${copyData.name}`,
      isPreset: false,
      isShared,
    };

    const result = await this.add(newItem as TableViewDefinition);
    const newId = this.getItemId(result);
    options?.onSuccess?.(newId);
    return newId;
  }

  getByTableType(tableType: TableViewType): TableViewDefinition[] {
    return this.getAll().filter((item) => item.tableType === tableType);
  }

  getPresetByTableType(
    tableType: TableViewType,
  ): TableViewDefinition | undefined {
    return this.getAll().find(
      (item) => item.tableType === tableType && item.isPreset,
    );
  }
}
