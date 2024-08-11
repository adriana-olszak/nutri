import React, { useState } from 'react';
import { TableComponent } from '../../components/Table';
import { Button, Input } from '@nutri/client-ui';
import { Plus, Search } from 'lucide-react';

export function Patients() {

  return (
    <div className="mx-auto px-4 py-1 stretch">
      <header className="mb-8 flex justify-between">

        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Patient Management</h1>
          <p className="text-gray-500">Efficiently manage your patient roster and their nutritional journeys.</p>
        </div>
        <Button variant='outline'>
          <Plus size={18} className="mr-2"/>
          Add New Patient
        </Button>
      </header>

      <div className="flex justify-between items-center mb-6">


      </div>

      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <TableComponent columns={[]} />
      </div>

    </div>
  );
}
