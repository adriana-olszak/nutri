import React, { useRef, useState } from 'react';
import { TableComponent } from '../../components/Table';
import { Button, Input, ToggleGroup, ToggleGroupItem } from '@nutri/client-ui';
import { Plus, Search, BookOpen, Apple } from 'lucide-react';
import data from './mockData';
import { getColumnsConfig, recipeColumns } from './columns';
import { Table } from '@nutri/client-ui/Table';
import { GraphQLClient } from 'graphql-request';
import { useStores } from '../../hooks/useStore';
import { TableViewStore } from '@nutri/store/tableViews/TableView.store';
import RecipeCard from "../../components/card/RecipeCard";
import './components/grid-view.scss'

type Recipe = {
  id: string;
  title: string;
  description: string;
  cookingTime: number;
  prepTime: number;
  servingsMin: number;
  servingsMax: number;
  createdAt: string;
  updatedAt: string;
};

export function Recipes() {
  const [activeTab, setActiveTab] = useState<'recipes' | 'ingredients'>(
    'recipes',
  );
  const tableRef = useRef<HTMLDivElement | null>(null);
  const store = useStores();
  const tableView = store.tableViews.getById('1') as TableViewStore;

  const col = getColumnsConfig(tableView.value);

  return (
    <div className="mx-auto px-4 py-1 stretch w-[fill-available]">
      <header className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-700 mb-1">
            Recipe Management
          </h1>
          <p className="text-gray-500 text-sm">
            Discover your personal recipe headquarters!
          </p>
          <p className="text-gray-500 text-sm">
            Seamlessly categorize dishes, track ingredients, and create your
            list of favorite recipes.
          </p>
        </div>
        <Button variant="outline" colorScheme="lavender" size={'xs'}>
          <Plus size={18} />
          {activeTab === 'recipes' ? 'Add New Recipe' : 'Add New Ingredient'}
        </Button>
      </header>

      <div className='recipe-grid'>

        {data.map(e => (
          <RecipeCard key={`${e.id}-${e.title}`} recipe={e} />
        ))}

      </div>


      <Table<any>
        columns={col}
        data={data}
        tableRef={tableRef}
        enableRowSelection
        enableColumnResizing

      />
    </div>
  );
}
