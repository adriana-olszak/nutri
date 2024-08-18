import React, { useRef, useState } from 'react';
import { Button, Input, ToggleGroup, ToggleGroupItem } from '@nutri/client-ui';
import {Plus, Search, BookOpen, Apple, Clock, Users, Layers3, Layers2} from 'lucide-react';
import { useStores } from '../../hooks/useStore';
import NutritionProfileCharts from "./components/NutritionProfile";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";



export const Recipe = observer(() => {
  const store = useStores();
  const {recipeId} = useParams()
  const data = store.recipes.value.get(recipeId ?? '')?.value ;
  console.log('data',data)
  return (
    <div className="py-1 stretch w-full max-w-7xl">
      <header className="mb-8 flex justify-end items-end">

        <Button variant="outline" colorScheme="lavender" size={'xs'}>
          <Layers2 size={18} />
          Duplicate recipe
        </Button>
      </header>

      <div className="bg-white rounded-lg ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{data?.title}</h2>
          <div >
            <div className="flex gap-2 mb-2">
              {data?.categories?.map((category) => (
                <span key={category.id}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded whitespace-nowrap">
                {category.name}
              </span>
              ))}
            </div>
              <div className="flex flex-wrap gap-2">
                {data?.tags?.map((tag) => (
                  <span key={tag.id}
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
            <span className="text-sm text-gray-600">Prep: {data?.prepTime}</span>
          </div>
          <div className="flex items-center">
            <Clock size={18} className="text-gray-500 mr-2"/>
            <span className="text-sm text-gray-600">Cook: {data?.cookingTime}</span>
          </div>
          <div className="flex items-center">
            <Users size={18} className="text-gray-500 mr-2"/>
            <span className="text-sm text-gray-600">Serves: {data?.servingsMin}-{data?.servingsMax}</span>
          </div>
        </div>

        <p className="text-gray-700 mb-6">{data?.description}</p>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
            <ul className="list-disc list-inside">
              {data?.ingredients?.map((ingredient, index) => (
                <li key={index} className="mb-2">
                  {ingredient.quantity} {ingredient.unit} {ingredient?.ingredientText}
                  {ingredient.extraInfo && <span className="text-gray-500 text-sm"> ({ingredient.extraInfo})</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Instructions</h3>
            <ol className="list-decimal list-inside">
              {data?.instructions?.map((step, index) => (
                <li key={index} className="mb-2">{step.type}</li>
              ))}
            </ol>
          </div>
        </div>


      </div>
      {/*<NutritionProfileSummary />*/}
      <NutritionProfileCharts />
    </div>
  );
})
