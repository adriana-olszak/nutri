import React, {useRef, useState} from 'react';
import { TableComponent } from '../../components/Table';
import { Button, Input, ToggleGroup, ToggleGroupItem } from '@nutri/client-ui';
import { Plus, Search, BookOpen, Apple } from 'lucide-react';
import data from './mockData';
import { recipeColumns } from './columns';
import { Table } from '@nutri/client-ui/Table';
import {GraphQLClient} from "graphql-request";
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

            Seamlessly categorize dishes, track ingredients, and create your list of favorite recipes.

          </p>

        </div>
        <Button variant="outline" colorScheme='lavender' size={'xs'}>
          <Plus size={18}/>
          {activeTab === 'recipes' ? 'Add New Recipe' : 'Add New Ingredient'}
        </Button>
      </header>
      {/*<div className="flex justify-between items-center mb-6">*/}
      {/*  <ToggleGroup*/}
      {/*    type="single"*/}
      {/*    value={activeTab}*/}
      {/*    onValueChange={(value) =>*/}
      {/*      setActiveTab(value as 'recipes' | 'ingredients')*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <ToggleGroupItem value="recipes" aria-label="Toggle recipes">*/}
      {/*      <BookOpen className="mr-2" />*/}
      {/*      Recipes*/}
      {/*    </ToggleGroupItem>*/}
      {/*    <ToggleGroupItem value="ingredients" aria-label="Toggle ingredients">*/}
      {/*      <Apple className="mr-2" />*/}
      {/*      Ingredients*/}
      {/*    </ToggleGroupItem>*/}
      {/*  </ToggleGroup>*/}

      {/*</div>*/}

      <Table<any>  columns={recipeColumns} data={data} tableRef={tableRef}
      enableRowSelection
      />

    </div>
  );
}
