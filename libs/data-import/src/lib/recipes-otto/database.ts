import { Prisma, PrismaClient, RecipeInstructionsType } from '@prisma/client';
import { ParsedRecipe, ParsedIngredient, ParsedImage, EntityType, EntityHandler } from './types';


export async function populateDatabase(prisma: PrismaClient, parsedRecipes: ParsedRecipe[]) {
  for (const recipe of parsedRecipes) {
    await createRecipe(prisma, recipe);
  }
}

async function createRecipe(prisma: PrismaClient, recipe: ParsedRecipe) {
  try {
    const recipeEntity = await findOrCreateRecipe(prisma, recipe);
    await createRecipeImages(prisma, recipeEntity.id, recipe.images);
    await createRecipeCategories(prisma, recipeEntity.id, recipe.categories);
    await createRecipeSeasons(prisma, recipeEntity.id, recipe.seasons);
    await createRecipeTags(prisma, recipeEntity.id, recipe.tags);
    await createRecipeIngredients(prisma, recipeEntity.id, recipe.ingredients);

    console.log(`Created recipe: ${recipeEntity.title}`);
  } catch (error) {
    console.error(`Error creating recipe "${recipe.title}": ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function createRecipeImages(prisma: PrismaClient, recipeId: string, images: ParsedImage[]) {
  for (const image of images) {
    try {
      const imageEntity = await prisma.recipeImage.findFirst({
        where: { url: image.url, recipeId }
      });
      if (!imageEntity)
        await prisma.recipeImage.create({
          data: {
            recipeId,
            url: image.url,
            altText: image.altText,
            width: image.width,
            height: image.height
          }
        });
    } catch (error) {
      console.error(`Error creating image for recipe ${recipeId}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}

async function createRecipeCategories(prisma: PrismaClient, recipeId: string, categories: string[]) {
  await createRecipeEntities(prisma, recipeId, categories, 'recipeCategory');
}

async function createRecipeSeasons(prisma: PrismaClient, recipeId: string, seasons: string[]) {
  await createRecipeEntities(prisma, recipeId, seasons, 'season');
}

async function createRecipeTags(prisma: PrismaClient, recipeId: string, tags: string[]) {
  await createRecipeEntities(prisma, recipeId, tags, 'tag');
}

const entityHandlers = (prisma: PrismaClient): Record<EntityType, EntityHandler> => ({
  recipeCategory: {
    model: prisma.recipeCategory,
    connectionField: 'categories'
  },
  season: {
    model: prisma.season,
    connectionField: 'seasons'
  },
  tag: {
    model: prisma.tag,
    connectionField: 'tags'
  }
});


export async function createRecipeEntities(prisma: PrismaClient, recipeId: string, entities: string[], type: EntityType) {
  const handler = entityHandlers(prisma)[type];

  for (const entityName of entities) {
    try {
      let entity = await (handler.model as any).findUnique({
        where: { name: entityName }
      });

      if (!entity) {
        entity = await (handler.model as any).create({
          data: { name: entityName }
        });
        console.log(`Created ${type}: ${entity.name}`);
      }

      await prisma.recipe.update({
        where: { id: recipeId },
        data: {
          [handler.connectionField]: {
            connect: { id: entity.id }
          }
        }
      });
    } catch (error) {
      console.error(`Error processing ${type} "${entityName}": ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}


async function createRecipeIngredients(prisma: PrismaClient, recipeId: string, ingredients: ParsedIngredient[]) {
  let currentPartId: string | undefined;

  for (const ingredient of ingredients) {
    try {
      if (ingredient.type === 'part') {
        const part = await prisma.recipePart.create({
          data: {
            name: ingredient.name!,
            recipeId
          }
        });
        currentPartId = part.id;
      } else {
        const food = await findOrCreateFood(prisma, ingredient.ingredient);
        await prisma.recipeIngredient.create({
          data: {
            recipeId,
            partId: currentPartId,
            foodId: food.id,
            quantity: ingredient.quantity,
            quantityText: ingredient.quantityText,
            minQuantity: ingredient.minQuantity,
            maxQuantity: ingredient.maxQuantity,
            unit: ingredient.unit,
            unitText: ingredient.unitText,
            ingredientText: ingredient.ingredient,
            extraInfo: ingredient.extra
          }
        });
      }
    } catch (error) {
      console.error(`Error creating ingredient for recipe ${recipeId}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}

async function findOrCreateFood(prisma: PrismaClient, foodName: string) {
  const matches = await matchIngredientToFood(prisma, foodName);
  console.log(' >>>>>>>>>@>  (matches)', matches);


  let food = matches.length ? await prisma.food.findUnique({
    where: { id: matches[0].foodId }
  }) : null;

  if (!matches.length) {
    food = await prisma.food.create({
      data: {
        description: foodName,
        sourceId: `OTTO_${foodName}`
      }
    });
  }

  return food;
}

export async function findOrCreateRecipe(prisma: PrismaClient, recipeData: ParsedRecipe) {
  try {
    const existingRecipe = await prisma.recipe.findUnique({
      where: { title: recipeData.title }
    });

    if (existingRecipe) {
      console.log(`Recipe already exists: ${existingRecipe.title}`);
      return existingRecipe;
    }

    const newRecipe = await prisma.recipe.create({
      data: {
        title: recipeData.title,
        sourceId: recipeData.sourceId,
        sourceUrl: recipeData.sourceUrl,
        description: recipeData.description,
        cookingTime: recipeData.cookingTime,
        prepTime: recipeData.prepTime,
        servingsText: recipeData.servingsText,
        servingsMin: recipeData.servingsMin,
        servingsMax: recipeData.servingsMax,
        instructions: {
          create: recipeData.instructions.map(step => ({
            content: step.content,
            type: RecipeInstructionsType.TEXT,
            order: step.stepNumber,
            listIndex: step.listIndex
          }))
        }
      }
    });

    console.log(`Created recipe: ${newRecipe.title}`);
    return newRecipe;
  } catch (error) {
    throw new Error(`Error finding or creating recipe "${recipeData.title}": ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function matchIngredientToFood(prisma: PrismaClient, name: string): Promise<[{
  foodId: string,
  rank: number
}]> {
  const similarityThreshold = 0.3;
  const nonBrandedBoost = 1.5;

  const formattedName = _formatTsQuery(name);

  const searchQuery = Prisma.sql`
    SELECT f.id "foodId",
           CASE
               WHEN bf.id IS NULL THEN
                   (ts_rank(fv."searchVector", to_tsquery(${formattedName})) + word_similarity(f.description, ${name})) *
                   ${nonBrandedBoost}
               ELSE ts_rank(fv."searchVector", to_tsquery(${formattedName})) + word_similarity(f.description, ${name})
           END as "rank"
    FROM "FoodSearchVector" fv
    JOIN "Food" f ON f.id = fv."foodId"
    LEFT JOIN "BrandedFood" bf ON bf."foodId" = f.id
    WHERE fv."searchVector" @@ to_tsquery(${formattedName})
      AND word_similarity(f.description, ${name}) > ${similarityThreshold}
    ORDER BY "rank" DESC
    LIMIT 1;
  `;

  return prisma.$queryRaw(searchQuery);
}

function _formatTsQuery(input: string): string {
  const words = input.split(/\s+/).filter(word => word.length > 0);
  return words.join(' & ');
}
