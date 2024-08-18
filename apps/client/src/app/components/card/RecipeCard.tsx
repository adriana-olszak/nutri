import React, {useMemo, useRef, useState} from 'react';
import {
  Clock,
  Utensils,
  Users,
  Badge,
  EllipsisVerticalIcon,
  EllipsisVertical,
  CircleHelp,
  Flame,
  Tag, ExternalLinkIcon,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@nutri/client-ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
} from '@nutri/client-ui';
import { Image } from '@radix-ui/react-avatar';
import { IconButton } from '@nutri/client-ui/icon-button';
import { Recipe } from '@nutri/client-gql';
import {useNavigate} from "react-router-dom";

export const nutrition = {
  servingSize: '1 cup (250ml)',
  servingsPerRecipe: 6,
  nutritionPerServing: {
    calories: 180,
    totalFat: 12,
    saturatedFat: 5,
    transFat: 0,
    cholesterol: 25,
    sodium: 400,
    totalCarbohydrates: 18,
    dietaryFiber: 3,
    sugars: 6,
    protein: 3,
  },
  nutritionPerRecipe: {
    calories: 1080,
    totalFat: 72,
    saturatedFat: 30,
    transFat: 0,
    cholesterol: 150,
    sodium: 2400,
    totalCarbohydrates: 108,
    dietaryFiber: 18,
    sugars: 36,
    protein: 18,
  },
  percentDailyValues: {
    totalFat: '15%',
    saturatedFat: '25%',
    cholesterol: '8%',
    sodium: '17%',
    totalCarbohydrates: '6%',
    dietaryFiber: '11%',
    protein: '6%',
  },
  vitaminsMinerals: {
    vitaminA: '200%',
    vitaminC: '10%',
    calcium: '4%',
    iron: '6%',
    potassium: '8%',
  },
  ingredients: [
    {
      name: 'Pumpkin',
      amount: 1000,
      unit: 'g',
    },
    {
      name: 'Onion',
      amount: 150,
      unit: 'g',
    },
    {
      name: 'Garlic',
      amount: 6,
      unit: 'g',
    },
    {
      name: 'Vegetable broth',
      amount: 1000,
      unit: 'ml',
    },
    {
      name: 'Heavy cream',
      amount: 200,
      unit: 'ml',
    },
    {
      name: 'Olive oil',
      amount: 30,
      unit: 'ml',
    },
    {
      name: 'Salt',
      amount: 5,
      unit: 'g',
    },
    {
      name: 'Black pepper',
      amount: 1,
      unit: 'g',
    },
    {
      name: 'Nutmeg',
      amount: 0.5,
      unit: 'g',
    },
  ],
};
const formatTime = (minutes) => {
  if (!minutes) {
    return '?';
  }
  const minutesNumber = parseInt(minutes);
  const hours = Math.floor(minutesNumber / 60);
  const remainingMinutes = minutesNumber % 60;
  return hours > 0 ? `${hours}h ${remainingMinutes}m` : `${remainingMinutes}m`;
};
const RecipeCard = ({ recipe, onRecipeClick }: { recipe: Recipe, onRecipeClick: () => void }) => {
  const navigate = useNavigate();
  const linkRef = useRef<HTMLParagraphElement>(null);

  const handleNavigate = () => {
    navigate(``);
  };


  const dedupedTags = useMemo(() => {
    const allTags = [
      ...(recipe.tags || []),
      ...(recipe.categories || []),
      ...(recipe.seasons || []),
    ];

    // Use a Set to remove duplicates based on id
    const uniqueTagsSet = new Set(
      allTags.map((tag) => JSON.stringify({ id: tag.id, name: tag.name })),
    );

    // Convert back to an array of objects
    return Array.from(uniqueTagsSet).map((tag) => JSON.parse(tag));
  }, [recipe.tags, recipe.categories, recipe.seasons]);

  return (
    <Card className="group relative" onClick={onRecipeClick} >
      <CardHeader className="p-0">
        {recipe?.images && (
          <div className="relative w-full h-[150px]">
            <div className="absolute inset-0 overflow-hidden rounded">
              <img
                alt="recipe"
                src={recipe.images[0].url}
                className="w-full h-full object-cover"
              />
            </div>

            <IconButton
              aria-label="Menu"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate(`${recipe.id}`)
              }}
              icon={<ExternalLinkIcon className="text-white " />}
              size="xs"
              className="absolute opacity-0 group-hover:opacity-100 top-2 right-2 rounded border-none bg-[#000000a3] hover:bg-[#4f4f4fc2] focused:bg-[#4f4f4fc2]"
              variant="outline"
            />
          </div>
        )}
        <Tooltip label={recipe.title}>
          <CardTitle className="text-base font-bold px-3 line-clamp-1">
            {recipe.title}
          </CardTitle>
        </Tooltip>
        {/*<CardDescription className='px-3'>{recipe.description}</CardDescription>*/}
      </CardHeader>
      <CardContent className="px-3 flex flex-col flex-1">
        <div className="flex gap-3 mb-4 text-sm">
          <Tooltip
            label={`Passive: ${formatTime(
              recipe.prepTime,
            )} + Hands on: ${formatTime(recipe.cookingTime)} `}
          >
            <div className="flex items-center">
              <Clock className="mr-1 size-3" />
              <span className="whitespace-nowrap">
                Cook: {formatTime(parseInt(recipe.prepTime || 0) + parseInt(recipe.cookingTime || 0))}
              </span>
            </div>
          </Tooltip>

          <div className="flex items-center">
            <Users className="mr-1 size-3" />
            <span className="whitespace-nowrap">
              Serves: {recipe.servingsMin !== recipe.servingsMax ? `${recipe.servingsMin}-${recipe.servingsMax}` : recipe.servingsMin}
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-500 flex flex-wrap gap-1  line-clamp-3 overflow-hidden">
          {dedupedTags.map((tag) => (
            <p key={tag.id} className="border rounded-full px-2">
              {tag.name}
            </p>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-3 pb-3 pt-4 absolute bottom-0 bg-white w-full">
        <div className="flex flex-1 flex-col">
          <div className="text-sm text-gray-700 flex justify-between ">
            <div className="flex items-center">
              <Flame className="size-3" />
              {nutrition.nutritionPerServing.calories} kcal
            </div>

            <div className="flex">
              <div className="flex gap-1 text-xs font-medium">
                <span className="border border-red-100 text-red-700 px-2 py-0 rounded-full">
                  F {nutrition.nutritionPerServing.totalFat}g
                </span>
                <span className="border border-yellow-100 text-yellow-700 px-2 py-0 rounded-full">
                  C {nutrition.nutritionPerServing.totalCarbohydrates}g
                </span>
                <span className="border border-green-100 text-green-700 px-2 py-0 rounded-full">
                  P {nutrition.nutritionPerServing.protein}g
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
