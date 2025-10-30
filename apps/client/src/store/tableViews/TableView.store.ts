import {
    TableIdType,
    TableViewDefinition as TableViewDef,
    TableViewDefinition,
    TableViewType,
} from '@nutri/client-gql';
import {
    ComparisonOperator,
    IBaseFilter,
    IBaseFilterItem,
} from '@nutri/common-interfaces';
import omit from 'lodash/omit';
import set from 'lodash/set';
import { makeAutoObservable, runInAction } from 'mobx';
import { P, match } from 'ts-pattern';
import { httpClient } from '../../api/httpClient';
import { Store } from '../base/Store';

export type ExtendedFilterItem = IBaseFilterItem & { active?: boolean };

export class TableViewStore extends Store<TableViewDefinition> {
  constructor(private id: string) {
    super();
    makeAutoObservable(this);
  }

  protected async fetchData(): Promise<TableViewDefinition> {
    return httpClient.get<TableViewDefinition>(`/table-views/${this.id}`);
  }

  protected async saveData(data: TableViewDefinition): Promise<TableViewDefinition> {
    return httpClient.put<TableViewDefinition>(`/table-views/${this.id}`, data);
  }


  reorderColumn(sourceColumnId: number, targetColumnId: number) {
    this.update((value) => {
      const fromIndex = value.columnView.findIndex(
        (c) => c.columnId === sourceColumnId,
      );
      const toIndex = value.columnView.findIndex(
        (c) => c.columnId === targetColumnId,
      );
      const column = value.columnView[fromIndex];

      value.columnView.splice(fromIndex, 1);
      value.columnView.splice(toIndex, 0, column);

      return value;
    });
  }

  orderColumnsByVisibility() {
    const prevLastVisibleIndex = [
      ...this.value.columnView.map((c) => c.visible),
    ].lastIndexOf(true);

    const orderedColumns = this.value.columnView.sort((a, b) => {
      if (a.visible === b.visible) return 0;
      if (a.visible) return -1;

      return 1;
    });

    const currentLastVisibleIndex = orderedColumns
      .map((c) => c.visible)
      .lastIndexOf(true);

    if (prevLastVisibleIndex === currentLastVisibleIndex) return;

    this.update((value) => {
      value.columnView.sort((a, b) => {
        if (a.visible === b.visible) return 0;
        if (a.visible) return -1;

        return 1;
      });

      return value;
    });
  }

  setColumnName(columnId: number, name: string) {
    this.update(
      (value) => {
        const columnIdx = value.columnView.findIndex(
          (c) => c.columnId === columnId,
        );

        value.columnView[columnIdx].name = name;

        return value;
      },
      { mutate: false },
    );
  }

  setColumnSize(columnType: string, size: number) {
    runInAction(() => {
      const columnIdx = this.value.columnView.findIndex(
        (c) => c.columnType === columnType,
      );

      if (columnIdx !== -1) {
        this.value.columnView[columnIdx].width = size;
      }
    });
  }

  async save() {
    const payload = {
      updateTableViewDefinitionInput: omit(
        this.value,
        'updatedAt',
        'createdAt',
        'tableType',
        'tableId',
        'isPreset',
        'isShared',
      ),
    };

    try {
      this.isLoading = true;
      await this.transport.client.UpdateTableViewDefinition(payload);
    } catch (e) {
      this.error = (e as Error)?.message;
    } finally {
      this.isLoading = false;
    }
  }

  getPossibleFilters() {
    return this.value.possibleFilters;
  }

  getFilters(): IBaseFilter<ExtendedFilterItem> | null {
    try {
      return match(this.value.filters)
        .with(P.string.includes('AND'), (data) => JSON.parse(data))
        .otherwise(() => null);
    } catch (err) {
      console.error('Error parsing filters', err);

      return null;
    }
  }

  getFilter(id: string) {
    const filters = this.getFilters();

    return filters?.AND?.find((f) => f.filter?.property === id)?.filter;
  }

  appendFilter(filter: ExtendedFilterItem) {
    this.update((value) => {
      let draft = this.getFilters();

      if (
        draft &&
        draft?.AND?.findIndex((f) => f.filter?.property === filter.property) !==
          -1
      ) {
        return value;
      }

      if (draft) {
        (draft as IBaseFilter<ExtendedFilterItem>).AND?.push({ filter });
      } else {
        draft = { AND: [{ filter }] };
      }

      value.filters = JSON.stringify(draft);

      return value;
    });
  }

  removeFilter(id: string) {
    this.update((value) => {
      const draft = this.getFilters();

      if (draft) {
        draft.AND = draft.AND?.filter((f) => f.filter?.property !== id);
        value.filters = JSON.stringify(draft);
      }

      return value;
    });
  }

  removeFilters() {
    this.update((value) => {
      value.filters = JSON.stringify({ AND: [] });

      return value;
    });
  }

  toggleFilter(filter: ExtendedFilterItem) {
    this.update((value) => {
      const draft = this.getFilters();

      if (draft) {
        const foundFilter = draft.AND?.find(
          (f) => f.filter?.property === filter.property,
        )?.filter;

        if (foundFilter) {
          set(foundFilter, 'active', !filter?.active);
          value.filters = JSON.stringify(draft);
        } else {
          this.appendFilter({ ...filter, active: true });
        }
      }

      return value;
    });
  }

  setFilter(filter: ExtendedFilterItem) {
    this.update((value) => {
      const draft = this.getFilters();

      if (!draft) {
        this.appendFilter({ ...filter, active: true });

        return value;
      }

      if (!draft.AND) {
        return value;
      }
      const foundIndex = draft.AND?.findIndex(
        (f) => f.filter?.property === filter.property,
      );

      if (foundIndex !== -1) {
        draft.AND[foundIndex].filter = filter;
        value.filters = JSON.stringify(draft);
      } else {
        this.appendFilter({ ...filter, active: true });
      }

      return value;
    });
  }

  setPropertyFilter(property: string, operation: ComparisonOperator) {
    this.update((value) => {
      const draft = this.getFilters();

      if (!draft) {
        this.appendFilter({
          property,
          active: false,
          value: '',
          operation,
        });

        return value;
      }
      if (!draft.AND) {
        return value;
      }

      const foundIndex = draft.AND.findIndex(
        (f) => f.filter?.property === property,
      );

      if (foundIndex !== -1) {
        draft.AND[foundIndex].filter = {
          property,
          active: false,
          operation,
          value: '',
        };
        value.filters = JSON.stringify(draft);
      } else {
        this.appendFilter({
          property,
          active: false,
          value: '',
          operation,
        });
      }

      return value;
    });
  }

  getPayloadToCopy = () => {
    return omit(this.value, 'id', 'createdAt', 'updatedAt');
  };
}

export const getDefaultValue = (): TableViewDef => ({
  tableId: TableIdType.Recipes,
  columnView: [],
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
  possibleFilters: [],
});
