import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStore';
import { TableView } from '../../views/table/TableView';
import { Button } from '@nutri/client-ui';
import { Plus } from 'lucide-react';

export const Matches = observer(() => {
  const { matches } = useStores();
  return (
    <div className="mx-auto px-4 py-1 stretch w-[fill-available]">
      <header className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-700 mb-1">
            Manual Review
          </h1>
          <p className="text-gray-500 text-sm">
            Discover your personal recipe headquarters!
          </p>
          <p className="text-gray-500 text-sm">
            Seamlessly categorize dishes, track ingredients, and create your
            list of favorite recipes.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" colorScheme="lavender" size={'xs'}>
            <Plus size={18} />
            Add New Recipe
          </Button>
        </div>
      </header>

      <TableView isSidePanelOpen={false} />
      {matches.error && <div className="text-red-500 mt-4">Error: {matches.error}</div>}
    </div>
  );
});
