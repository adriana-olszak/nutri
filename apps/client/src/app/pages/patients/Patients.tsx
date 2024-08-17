import React, {useRef, useState} from 'react';
import {Button, Input, Table} from '@nutri/client-ui';
import { Plus, Search } from 'lucide-react';
import {useStores} from "../../hooks/useStore";
import {TableViewStore} from "@nutri/store/tableViews/TableView.store";
import {getPatientColumnsConfig} from "./columns";
import {dummyPatients} from "./mockData";

export const Patients= () => {
  const tableRef = useRef<HTMLDivElement | null>(null);
  const store = useStores();
  const tableView = store.tableViews.getById('2') as TableViewStore;

  const col = getPatientColumnsConfig(tableView.value);

  return (
    <div className="mx-auto px-4 py-1 stretch">
      <header className="mb-8 flex justify-between">

        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Patient Management</h1>
          <p className="text-gray-500">Efficiently manage your patient roster and their nutritional journeys.</p>
        </div>
        <div>
          <Button variant='outline'>
            <Plus size={18} className="mr-2"/>
            Add New Patient
          </Button>
        </div>

      </header>

      <div className="flex justify-between items-center mb-6">


      </div>

      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <Table<any>
          columns={col}
          data={dummyPatients}
          tableRef={tableRef}
          enableRowSelection
        />
      </div>

    </div>
  );
}
