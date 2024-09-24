import { RecipeData, ParsedRecipe, ParsedIngredient, ParsedStep, ParsedIngredientIngredient } from '../types';
import { getFieldValue, parseServings } from '../utils';
import { parseIngredient } from '../../../../../server/parse-recipe/src/index';
import { IngredientRoot } from './validators/ingredients.validator';
import { LinkNode, TextNode } from './validators/common.validator';
import { StepRoot } from './validators/steps.validator';

export function parseRecipe(recipeData: RecipeData): ParsedRecipe {
  const servingData = parseServings(getFieldValue(recipeData, 'serving_size') || '');

  return {
    sourceId: recipeData.id,
    title: recipeData.title.value,
    sourceUrl: recipeData.onlineStoreUrl,
    description: getFieldValue(recipeData, 'description'),
    cookingTime: getFieldValue(recipeData, 'cooking_time'),
    prepTime: getFieldValue(recipeData, 'preparation_time'),
    servingsText: servingData.servingsText,
    servingsMin: servingData.servingsMin,
    servingsMax: servingData.servingsMax,
    instructions: parseSteps(getFieldValue(recipeData, 'all_steps')),
    images: recipeData.images?.references?.nodes.map(image => ({
      url: image.image.url,
      altText: image.image.altText,
      width: image.image.width,
      height: image.image.height
    })) || [],
    categories: [...JSON.parse(recipeData.collection.value), ...JSON.parse(recipeData.meal.value)],
    seasons: JSON.parse(getFieldValue(recipeData, 'season') || '[]'),
    tags: JSON.parse(getFieldValue(recipeData, 'tags') || '[]'),
    ingredients: parseIngredients(getFieldValue(recipeData, 'ingredients') || '')
  };
}

function mergeIngredientsWithEmptyQuantities(acc: ParsedIngredient[], item: ParsedIngredient) {
  const isFirstItem = acc.length === 0;

  if (isFirstItem) {
    return [
      item
    ];
  }

  if (item.type === 'part') {
    return [
      ...acc,
      item
    ];
  }


  const currentIsIngredient = item.type === 'ingredient';
  if (!currentIsIngredient) {
    return [
      ...acc,
      item
    ];
  }
  const previousItemIndex = [...acc].reverse().findIndex((item) => item.type === 'ingredient');
  const previousItem = acc[acc.length - previousItemIndex - 1] as ParsedIngredientIngredient;
  const previousIngredient = previousItem.ingredient;
  const currentIngredient = 'ingredient' in item ? item.ingredient : null;

  if (previousItem && !previousIngredient && currentIngredient) {
    const slicedAcc = acc.slice(0, acc.length - previousItemIndex - 1);
    const secondPart = acc.slice(acc.length - previousItemIndex);

    return [
      ...slicedAcc,
      ...secondPart,
      {
        ...previousItem,
        ingredient: currentIngredient
      }
    ];
  }

  return [
    ...acc,
    item
  ];
}


export function parseIngredients(ingredientsData: string): ParsedIngredient[] {
  const parsedIngredients: IngredientRoot = JSON.parse(ingredientsData);
  const ingredientLines = extractIngredientLines(parsedIngredients);

  return ingredientLines.map(line => {
    if (line.toUpperCase() === line) {
      return { type: 'part', name: line.trim() };
    } else {
      const ingredient = parseIngredient(line, 'en');
      return {
        type: 'ingredient',
        ...ingredient
      };
    }
  }).reduce(mergeIngredientsWithEmptyQuantities, []);
}

export function extractIngredientLines(nodes: IngredientRoot): string[] {
  return nodes.children.flatMap(paragraph =>
    paragraph.children.flatMap(child => {
      if (child.type === 'text') {
        return processTextNode(child.value);
      } else if (child.type === 'link') {
        return processLinkNode(child);
      }
      return [];
    })
  );
}

function processTextNode(value: string): string[] {
  return value
    .split('\n')
    .map(line => line.trim())
    .map(line => line.replace(/\|/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(line => line);
}

function processLinkNode(link: LinkNode): string[] {
  // Only process the children, ignore the title
  return link.children
    .filter((child): child is TextNode => child.type === 'text')
    .flatMap(child => processTextNode(child.value));
}


export function parseSteps(instructionsData: string): ParsedStep[] {
  const parsedInstructions: StepRoot = JSON.parse(instructionsData);
  return extractInstructionLines(parsedInstructions);
}

function extractInstructionLines(nodes: StepRoot): ParsedStep[] {
  return nodes.children.flatMap((listNode, listIndex) =>
    listNode.children.map((item, itemIndex) => {
      const stepNumber = listNode.listType === 'ordered' ? itemIndex + 1 : undefined;
      const textContent = item.children.map(child => child.value).join(' ');
      return {
        type: 'step',
        content: textContent.trim(),
        stepNumber: stepNumber,
        listIndex: listIndex
      };
    })
  );
}
