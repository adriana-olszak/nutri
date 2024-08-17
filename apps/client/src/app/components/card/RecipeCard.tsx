import React, { useState } from 'react';
import {Clock, Utensils, Users, Badge, EllipsisVerticalIcon} from 'lucide-react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@nutri/client-ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger, Tooltip} from "@nutri/client-ui";
import {Image} from "@radix-ui/react-avatar";
import {IconButton} from "@nutri/client-ui/icon-button";

export const nutrition = {
  "servingSize": "1 cup (250ml)",
  "servingsPerRecipe": 6,
  "nutritionPerServing": {
    "calories": 180,
    "totalFat": 12,
    "saturatedFat": 5,
    "transFat": 0,
    "cholesterol": 25,
    "sodium": 400,
    "totalCarbohydrates": 18,
    "dietaryFiber": 3,
    "sugars": 6,
    "protein": 3
  },
  "nutritionPerRecipe": {
    "calories": 1080,
    "totalFat": 72,
    "saturatedFat": 30,
    "transFat": 0,
    "cholesterol": 150,
    "sodium": 2400,
    "totalCarbohydrates": 108,
    "dietaryFiber": 18,
    "sugars": 36,
    "protein": 18
  },
  "percentDailyValues": {
    "totalFat": "15%",
    "saturatedFat": "25%",
    "cholesterol": "8%",
    "sodium": "17%",
    "totalCarbohydrates": "6%",
    "dietaryFiber": "11%",
    "protein": "6%"
  },
  "vitaminsMinerals": {
    "vitaminA": "200%",
    "vitaminC": "10%",
    "calcium": "4%",
    "iron": "6%",
    "potassium": "8%"
  },
  "ingredients": [
    {
      "name": "Pumpkin",
      "amount": 1000,
      "unit": "g"
    },
    {
      "name": "Onion",
      "amount": 150,
      "unit": "g"
    },
    {
      "name": "Garlic",
      "amount": 6,
      "unit": "g"
    },
    {
      "name": "Vegetable broth",
      "amount": 1000,
      "unit": "ml"
    },
    {
      "name": "Heavy cream",
      "amount": 200,
      "unit": "ml"
    },
    {
      "name": "Olive oil",
      "amount": 30,
      "unit": "ml"
    },
    {
      "name": "Salt",
      "amount": 5,
      "unit": "g"
    },
    {
      "name": "Black pepper",
      "amount": 1,
      "unit": "g"
    },
    {
      "name": "Nutmeg",
      "amount": 0.5,
      "unit": "g"
    }
  ]
};
const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return hours > 0 ? `${hours}h ${remainingMinutes}m` : `${remainingMinutes}m`;
};
const RecipeCard = ({ recipe}) => {
  const [activeTab, setActiveTab] = useState('overview');
  console.log(recipe.img)
  return (
    <Card className="">
      <CardHeader className='p-0'>

        {recipe?.img && (
          <div className='relative w-full'>
            <img alt="recipe" src={recipe?.img} className='rounded w-full h-[150px]'/>

            <IconButton aria-label='Menu' icon={<EllipsisVerticalIcon className='text-white bg-[#ffffff52]' />}
             className='absolute top-0 right-2 rounded-lg'
                        variant='ghost'

            />

          </div>

        )}
        <CardTitle className="text-lg font-bold px-3">{recipe.title}</CardTitle>
        {/*<CardDescription className='px-3'>{recipe.description}</CardDescription>*/}
      </CardHeader>
      <CardContent className='px-3'>
        <div className="flex gap-3 mb-4 text-sm">
          <Tooltip label={`Passive: ${formatTime(recipe.prepTime)} Hands on: ${formatTime(recipe.cookingTime)} `}>
            <div className="flex items-center">
              <Clock className="mr-1 size-3"/>
              <span className='whitespace-nowrap'>Cook: {formatTime(recipe.prepTime + recipe.cookingTime)}</span>
            </div>
          </Tooltip>


          <div className="flex items-center">
            <Users className="mr-1 size-3"/>
            <span className='whitespace-nowrap'>Serves: {recipe.servingsMin}-{recipe.servingsMax}</span>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <p>{recipe.description}</p>
          </TabsContent>
          <TabsContent value="nutrition" className="mt-4">
            {nutrition ? (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Per Serving ({nutrition.servingSize})</h4>
                  <ul className="list-disc pl-5">
                    <li>Calories: {nutrition.nutritionPerServing.calories}</li>
                    <li>Total Fat: {nutrition.nutritionPerServing.totalFat}g</li>
                    <li>Carbs: {nutrition.nutritionPerServing.totalCarbohydrates}g</li>
                    <li>Protein: {nutrition.nutritionPerServing.protein}g</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">% Daily Value</h4>
                  <ul className="list-disc pl-5">
                    <li>Total Fat: {nutrition.percentDailyValues.totalFat}</li>
                    <li>Sodium: {nutrition.percentDailyValues.sodium}</li>
                    <li>Vitamin A: {nutrition.vitaminsMinerals.vitaminA}</li>
                    <li>Calcium: {nutrition.vitaminsMinerals.calcium}</li>
                  </ul>
                </div>
              </div>
            ) : (
              <p>Nutrition information not available.</p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="text-sm text-gray-500">
        <p>Created: {new Date(recipe.createdAt).toLocaleDateString()}</p>
        <p className="ml-4">Last updated: {new Date(recipe.updatedAt).toLocaleDateString()}</p>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
