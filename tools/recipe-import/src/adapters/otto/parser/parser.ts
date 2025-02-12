import { OttoRecipe } from '../parsed.type';
import { RecipeData } from '../types';
import { LinkNode, TextNode } from './validators/common.validator';
import { IngredientRoot } from './validators/ingredients.validator';
import { StepRoot } from './validators/steps.validator';

export function parseRecipe(recipeData: RecipeData): OttoRecipe {
  const result: OttoRecipe = {
    sourceId: recipeData.id,
    title: recipeData.title.value,
    sourceUrl: recipeData.onlineStoreUrl,
    description: getFieldValue(recipeData, 'description'),
    cookingTime: getFieldValue(recipeData, 'cooking_time'),
    prepTime: getFieldValue(recipeData, 'preparation_time'),
    servingsText: getFieldValue(recipeData, 'serving_size') || '',
    instructions: parseSteps(getFieldValue(recipeData, 'all_steps')),
    images:
      recipeData.images?.references?.nodes.map((image) => ({
        url: image.image.url,
        altText: image.image.altText,
        width: image.image.width,
        height: image.image.height,
      })) || [],
    categories: [
      ...JSON.parse(recipeData.collection.value),
      ...JSON.parse(recipeData.meal.value),
    ],
    seasons: JSON.parse(getFieldValue(recipeData, 'season') || '[]'),
    tags: JSON.parse(getFieldValue(recipeData, 'tags') || '[]'),
    ingredients: parseIngredients(
      getFieldValue(recipeData, 'ingredients') || '',
    ),
  };
  return result;
}

export function parseIngredients(ingredientsData: string): string[] {
  const parsedIngredients: IngredientRoot = JSON.parse(ingredientsData);
  const ingredientLines = extractIngredientLines(parsedIngredients);

  return ingredientLines
    .map((line) => {
      if (line.toUpperCase() === line) {
        return null;
      } else {
        return line;
      }
    })
    .filter(Boolean);
}

export function extractIngredientLines(nodes: IngredientRoot): string[] {
  return nodes.children.flatMap((paragraph) =>
    paragraph.children.flatMap((child) => {
      if (child.type === 'text') {
        return processTextNode(child.value);
      } else if (child.type === 'link') {
        return processLinkNode(child);
      }
      return [];
    }),
  );
}

function processTextNode(value: string): string[] {
  return value
    .split('\n')
    .map((line) => line.trim())
    .map((line) => line.replace(/\|/g, ' ').replace(/\s+/g, ' ').trim())
    .filter((line) => line);
}

function processLinkNode(link: LinkNode): string[] {
  // Only process the children, ignore the title
  return link.children
    .filter((child): child is TextNode => child.type === 'text')
    .flatMap((child) => processTextNode(child.value));
}

export function parseSteps(instructionsData: string): string[] {
  const parsedInstructions: StepRoot = JSON.parse(instructionsData);

  return parsedInstructions.children.flatMap((listNode, listIndex) =>
    listNode.children.map((item, itemIndex) => {
      const textContent = item.children.map((child) => child.value).join(' ');
      return textContent.trim();
    }),
  );
}

export function getFieldValue(
  recipeData: RecipeData,
  key: string,
): string | undefined {
  const field = recipeData.fields.find((f) => f.key === key);
  if (!field) {
    console.warn(
      `Field "${key}" not found for recipe "${recipeData.title.value}"`,
    );
  }
  return field?.value;
}
