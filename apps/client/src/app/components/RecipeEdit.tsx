import React from 'react';
import {
  Clock,
  Users,
  Layers2,
  EditIcon
} from 'lucide-react';

import {observer} from "mobx-react-lite";
import NutritionProfileCharts from "../pages/recipe/components/NutritionProfile";
import {useStores} from "../hooks/useStore";
import {IconButton} from "@nutri/client-ui/icon-button";



export const RecipeDetail = observer(({id}:{id: string}) => {
  const store = useStores();
  const data = store.recipes.value.get(id ?? '')?.value ;
  console.log('data',data)
  return (
    <div className="py-1 stretch w-full max-w-7xl">

      {data?.images && (
        <div className="relative w-full h-[250px]">
          <div className="absolute inset-0 overflow-hidden rounded">
            <img
              alt="recipe"
              src={data.images[0].url}
              className="w-full h-full object-cover"
            />
          </div>

          <IconButton
            aria-label="Duplicate"
            icon={<Layers2 className="text-white " />}
            size="xs"
            className="absolute top-2 right-2 rounded border-none bg-[#000000a3] hover:bg-[#4f4f4fc2] focused:bg-[#4f4f4fc2]"
            variant="outline"
          />
        </div>
      )}


      <div className="bg-white rounded-lg px-6">

        <header className="mb-3 mt-4 flex items-start justify-between">
          <div className="flex items-center space-x-6 mr-6 ">
            <div className="flex items-center">
              <Clock size={18} className="text-gray-500 mr-2"/>
              <span className="text-sm text-gray-600 whitespace-nowrap">Prep: {data?.prepTime}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="text-gray-500 mr-2"/>
              <span className="text-sm text-gray-600 whitespace-nowrap">Cook: {data?.cookingTime}</span>
            </div>
            <div className="flex items-center">
              <Users size={18} className="text-gray-500 mr-2"/>
              <span className="text-sm text-gray-600 whitespace-nowrap">Serves: {data?.servingsMin}-{data?.servingsMax}</span>
            </div>
          </div>
          <div className='flex flex-col items-end'>
            <div className="flex gap-2 mb-2 flex-wrap justify-end">
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


        </header>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{data?.title}</h2>


        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ingredients
              <IconButton aria-label='Edit instructions' icon={<EditIcon/>} size='xxs' className='ml-3'/>

            </h3>
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
            <h3 className="text-xl font-semibold mb-4">Instructions
              <IconButton aria-label='Edit instructions' icon={<EditIcon/>} size='xxs' className='ml-3'/>
            </h3>
            <ol className="list-decimal list-inside">
              {data?.instructions?.map((step, index) => (
                <li key={index} className="mb-2">{step.type}</li>
              ))}
            </ol>
          </div>
        </div>


      </div>
      <NutritionProfileCharts/>
    </div>
  );
})
