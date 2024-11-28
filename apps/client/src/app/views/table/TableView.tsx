import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { TableConfig } from './tableConfig';
import { useStores } from '../../hooks/useStore';
import { TableViewToggle } from './TableViewToggle';

export const TableView = observer(({ isSidePanelOpen }: {
  isSidePanelOpen: boolean
}) => {
  const store = useStores();
  const [searchParams] = useSearchParams();
  const preset = searchParams?.get('preset');
  const tableViewDef = store.tableViews.getById(preset ?? '1');

  if (!tableViewDef) {
    console.error('Table view not found for RecipesTable');
    return null;
  }
  const tableId = tableViewDef.value.tableId;

  const TableComponent = TableConfig[tableId].component;
  const useTableData = TableConfig[tableId].useData;
  const columns = TableConfig[tableId].columns(tableViewDef.value);
  const ActionComponent = TableConfig[tableId].actions;

  const { data } = useTableData(tableViewDef);

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <TableViewToggle />
      </div>
      <div className="flex">
        <TableComponent
          data={data}
          columns={columns}
          renderTableActions={(table, focusRow, selectedIds) => (
            <ActionComponent
              table={table}
              focusRow={focusRow}
              selectedIds={selectedIds}
            />
          )}
        />
        {/*{isSidePanelOpen && <SidePanel />}*/}
      </div>
    </div>
  );
});
