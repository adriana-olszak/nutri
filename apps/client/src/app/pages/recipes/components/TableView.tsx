import React, { useRef, useState } from 'react';
import { Table } from '@nutri/client-ui/Table';
import { TableViewStore } from '@nutri/store/tableViews/TableView.store';
import { observer } from 'mobx-react-lite';
import {getColumnsConfig} from "./columns";
import {useStores} from "../../../hooks/useStore";

export const TableView = observer(() => {

  const tableRef = useRef<HTMLDivElement | null>(null);
  const store = useStores();
  const tableView = store.tableViews.getById('1') as TableViewStore;
  const col = getColumnsConfig(tableView.value);
  const data = store.recipes.toArray();


  return (
    <Table<any>
      columns={col}
      data={data}
      tableRef={tableRef}
      enableRowSelection
      enableColumnResizing
    />
  );
});
