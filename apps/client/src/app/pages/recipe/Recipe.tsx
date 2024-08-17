import React, { useRef, useState } from 'react';
import { Button, Input, ToggleGroup, ToggleGroupItem } from '@nutri/client-ui';
import { Plus, Search, BookOpen, Apple, Clock, Users } from 'lucide-react';
import { useStores } from '../../hooks/useStore';
import { TableViewStore } from '@nutri/store/tableViews/TableView.store';
import {mock} from "./mock";
import NutritionProfileSummary from "./components/NutritionProfileSummary";
import NutritionProfileCharts from "./components/NutritionProfile";

type Recipe = {
  id: string;
  title: string;
  description: string;
  cookingTime: string;
  prepTime: string;
  servingsMin: number;
  servingsMax: number;
  ingredients: {
    name: string;
    amount: number;
    unit: string;
    notes?: string;
  }[];
  instructions: string;
  images: { url: string; altText: string }[];
  categories: { name: string; slug: string }[];
  seasons: string[];
  tags: { name: string; slug: string }[];
};


export function Recipe() {
  const [activeTab, setActiveTab] = useState<'recipes' | 'ingredients'>('recipes');
  const tableRef = useRef<HTMLDivElement | null>(null);
  const store = useStores();
  const tableView = store.tableViews.getById('1') as TableViewStore;

  return (
    <div className="py-1 stretch w-full max-w-7xl">
      <header className="mb-8 flex justify-end items-end">

        <Button variant="outline" colorScheme="lavender" size={'xs'}>
          <Plus size={18} />
          {activeTab === 'recipes' ? 'Add New Recipe' : 'Add New Ingredient'}
        </Button>
      </header>

      <div className="bg-white rounded-lg ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{mock.title}</h2>
          <div >
            <div className="flex gap-2 mb-2">
              {mock.categories.map((category) => (
                <span key={category.slug}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {category.name}
              </span>
              ))}
            </div>
              <div className="flex flex-wrap gap-2">
                {mock.tags.map((tag) => (
                  <span key={tag.slug}
                        className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {tag.name}
              </span>
                ))}
            </div>
          </div>

        </div>

        <div className="flex items-center space-x-6 mb-6">
          <div className="flex items-center">
            <Clock size={18} className="text-gray-500 mr-2"/>
            <span className="text-sm text-gray-600">Prep: {mock.prepTime}</span>
          </div>
          <div className="flex items-center">
            <Clock size={18} className="text-gray-500 mr-2"/>
            <span className="text-sm text-gray-600">Cook: {mock.cookingTime}</span>
          </div>
          <div className="flex items-center">
            <Users size={18} className="text-gray-500 mr-2"/>
            <span className="text-sm text-gray-600">Serves: {mock.servingsMin}-{mock.servingsMax}</span>
          </div>
        </div>

        <p className="text-gray-700 mb-6">{mock.description}</p>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
            <ul className="list-disc list-inside">
              {mock.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2">
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                  {ingredient.notes && <span className="text-gray-500 text-sm"> ({ingredient.notes})</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Instructions</h3>
            <ol className="list-decimal list-inside">
              {mock.instructions.split('\n').map((step, index) => (
                <li key={index} className="mb-2">{step.substring(step.indexOf('.') + 2)}</li>
              ))}
            </ol>
          </div>
        </div>


      </div>
      <NutritionProfileSummary />
      {/*<NutritionProfileCharts />*/}
    </div>
  );
}
