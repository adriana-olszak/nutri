import React, { useRef, useState } from 'react';

import { useStores } from '../../hooks/useStore';
import { observer } from 'mobx-react-lite';
import { Button, Table } from '@nutri/client-ui';
import { Plus } from 'lucide-react';
import { getQuestionnaireColumnsConfig } from './components/table/columns';

export const AssessmentTools: React.FC = observer(() => {
  const tableRef = useRef<any>(null);
  const store = useStores();
  const tableView = store.tableViews.getById('3');

  if (!tableView) {
    return null;
  }
  const surveys = store.surveys;
  const col = getQuestionnaireColumnsConfig(tableView.value);
  console.log(surveys?.toArray());
  return (
    <div>
      <div className="mx-auto px-4 py-3 stretch">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-800 mb-2">Questionnaire Central</h1>
            <p className="text-gray-600 text-sm">Craft, Customize, Conquer: Your Gateway to Personalized Nutrition
              Insights</p>
          </div>
          <div>
            <Button onClick={() => surveys.createSurvey()}>
              <Plus size={16} className="mr-1" />
              Create Questionnaire
            </Button>
          </div>
        </header>


        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <Table<any>
            columns={col}
            data={surveys?.toArray() ?? []}
            tableRef={tableRef}
            enableRowSelection
          />
        </div>

      </div>
    </div>
  );
});
