import React, { useRef, useState } from 'react';
import {
  Button,
  Table,
} from '@nutri/client-ui';
import { Plus, Table2Icon, Grid2X2Icon, X } from 'lucide-react';
import './components/grid-view.scss';
import { observer } from 'mobx-react-lite';
import { IconButton } from '@nutri/client-ui/icon-button';
import { useLocalstorageState } from 'rooks';
import { cn } from '@nutri/client-utils';
import { GridView } from './components/GridView';
import { Recipe, Recipe as RecipeType, TableIdType } from '@nutri/client-gql';
import { RecipeDetail } from '../../components/RecipeEdit';
import { TableView } from '../../views/table/TableView';

export const Recipes = observer(() => {
  const [activeTab, setActiveTab] = useLocalstorageState<'table' | 'grid'>(
    'bite:recipes-prev-view',
    'table',
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeType | null>(null);

  const openDrawer = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedRecipe(null);
  };

  const toggleSlideOver = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

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

        <div className="flex gap-2">
          <div className="border rounded overflow-hidden flex items-center">
            <IconButton
              aria-label="table view"
              icon={<Table2Icon className="text-inherit size-4" />}
              variant="ghost"
              className={cn('rounded-none text-gray-700 hover:bg-gray-100', {
                'text-gray-500': activeTab !== 'table',
              })}
              size="xs"
              onClick={() => setActiveTab('table')}
            />
            <IconButton
              aria-label="grid view"
              icon={<Grid2X2Icon className="text-inherit size-4" />}
              variant="ghost"
              className={cn('rounded-none text-gray-700 hover:bg-gray-100', {
                'text-gray-500': activeTab !== 'grid',
              })}
              size="xs"
              onClick={() => setActiveTab('grid')}
            />
          </div>

          <Button variant="outline" colorScheme="lavender" size={'xs'}>
            <Plus size={18} />
            Add New Recipe
          </Button>
        </div>
      </header>

      {activeTab === 'table' &&
       <TableView isSidePanelOpen={false}/>
      }

      {activeTab === 'grid' && <GridView onRecipeClick={openDrawer} />}

      <div className="w-screen h-screen flex items-center justify-center">

        <div className={`w-full h-full fixed inset-0 ${isDrawerOpen ? '' : 'invisible'}`}>
          <div
            onClick={toggleSlideOver}
            className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 ${
              isDrawerOpen ? 'opacity-50' : 'opacity-0'
            }`}
          />
          <div
            className={`max-w-[50%] min-w-[750px] bg-white h-full absolute right-0 duration-300 ease-out transition-all ${
              isDrawerOpen ? '' : 'translate-x-full'
            }`}
          >


            <RecipeDetail id={selectedRecipe?.id || ''} />


            {/* Add your slide-over content here */}
          </div>
        </div>
      </div>
    </div>
  );
});
