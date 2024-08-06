import { PrismaClient } from '@prisma/client';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const prisma = new PrismaClient();

async function importRecipes() {
  try {
    // Read the JSON file
    const rawData = await fs.readFile(path.join(__dirname, '__data__', 'recipes.json'), 'utf8');
    const recipes = JSON.parse(rawData);

    for (const recipeData of recipes) {
      // Check if the recipe already exists
      let existingRecipe = await prisma.recipe.findUnique({
        where: { title: recipeData.title.value }
      });

      const cookingTime = recipeData.fields.find(f => f.key === 'cooking_time');
      const description = recipeData.fields.find(f => f.key === 'description');
      const preparation_time = recipeData.fields.find(f => f.key === 'preparation_time');
      const serving_size = recipeData.fields.find(f => f.key === 'serving_size');
      const ingredients = recipeData.fields.find(f => f.key === 'ingredients');


      const servingData = parseServings(serving_size.value);
      if (!existingRecipe) {
        // Create the recipe
        existingRecipe = await prisma.recipe.create({
          data: {
            title: recipeData.title.value,
            sourceId: recipeData.id,
            sourceUrl: recipeData.onlineStoreUrl,
            description: description?.value,
            cookingTime: cookingTime?.value,
            prepTime: preparation_time?.value, servingsText: servingData.servingsText,
            servingsMin: servingData.servingsMin,
            servingsMax: servingData.servingsMax,
            instructions: recipeData.all_steps
          }
        });

        console.log(`Created recipe: ${existingRecipe.title}`);
      } else {
        console.log(`Recipe already exists: ${existingRecipe.title}`);
      }

      // Process images
      const images = recipeData.images?.references?.nodes || [];
      for (const image of images) {
        await prisma.recipeImage.create({
          data: {
            recipeId: existingRecipe.id,
            url: image.image.url,
            altText: image.image.altText,
            width: image.image.width,
            height: image.image.height
          }
        });
        console.log(`Created image: ${image.image.url}`);
      }

      // Process categories
      const collection = JSON.parse(recipeData.collection.value);
      const meal = JSON.parse(recipeData.meal.value);
      const categories = [...collection, ...meal];
      for (const categoryName of categories) {
        let category = await prisma.recipeCategory.findUnique({
          where: { name: categoryName }
        });

        if (!category) {
          category = await prisma.recipeCategory.create({
            data: { name: categoryName }
          });
          console.log(`Created category: ${category.name}`);
        }

        // Link category to recipe
        await prisma.recipe.update({
          where: { id: existingRecipe.id },
          data: {
            categories: {
              connect: { id: category.id }
            }
          }
        });
      }
      // Process seasons
      const seasons = JSON.parse(recipeData.fields.find(f => f.key === 'season').value);
      for (const seasonName of seasons) {
        let season = await prisma.season.findUnique({
          where: { name: seasonName }
        });

        if (!season) {
          season = await prisma.season.create({
            data: { name: seasonName }
          });
          console.log(`Created season: ${season.name}`);
        }

        // Link category to recipe
        await prisma.recipe.update({
          where: { id: existingRecipe.id },
          data: {
            seasons: {
              connect: { id: season.id }
            }
          }
        });
      }

      // Process tags
      const tags = JSON.parse(recipeData.fields.find(f => f.key === 'tags').value);
      for (const tagName of tags) {
        let tag = await prisma.tag.findUnique({
          where: { name: tagName }
        });

        if (!tag) {
          tag = await prisma.tag.create({
            data: { name: tagName }
          });
          console.log(`Created tag: ${tag.name}`);
        }

        // Link category to recipe
        await prisma.recipe.update({
          where: { id: existingRecipe.id },
          data: {
            tags: {
              connect: { id: tag.id }
            }
          }
        });
      }

      // Process ingredients and parts
      const ingredientsData = JSON.parse(ingredients.value);
      const parts = ingredientsData.split(/\n(?=[A-Z\s]+:)/);

      for (const part of parts) {
        const [partName, ...ingredientLines] = part.split('\n');

        let recipePart;
        if (partName.endsWith(':')) {
          recipePart = await prisma.recipePart.create({
            data: {
              name: partName.slice(0, -1).trim(),
              recipe: { connect: { id: existingRecipe.id } }
            }
          });
          console.log(`Created recipe part: ${recipePart.name}`);
        }

        for (const line of ingredientLines) {
          if (line.trim()) {
            const [quantity, ...rest] = line.trim().split(' ');
            const unit = rest[0].endsWith('g') || rest[0].endsWith('ml') ? rest.shift() : 'piece';
            const foodName = rest.join(' ');

            // Find or create the food
            let food = await prisma.food.findFirst({
              where: { description: { contains: foodName, mode: 'insensitive' } }
            });

            if (!food) {
              food = await prisma.food.create({
                data: {
                  description: foodName,
                  sourceId: `IMPORT_${Date.now()}`,
                  importInfo: {
                    create: {
                      sourceVersion: '1.0',
                      importDate: new Date(),
                      dataSource: 'USER_INPUT'
                    }
                  }
                }
              });
              console.log(`Created food: ${food.description}`);
            }

            // Create the recipe ingredient
            await prisma.recipeIngredient.create({
              data: {
                recipe: { connect: { id: existingRecipe.id } },
                part: recipePart ? { connect: { id: recipePart.id } } : undefined,
                food: { connect: { id: food.id } },
                quantity: parseFloat(quantity) || 1,
                unit: unit
              }
            });
            console.log(`Added ingredient: ${foodName} to recipe`);
          }
        }
      }
    }

    console.log('Recipe import completed successfully!');
  } catch (error) {
    console.error('Error importing recipes:', error);
  } finally {
    await prisma.$disconnect();
  }
}

importRecipes();

function parseServings(servingString: string) {

  const servingData = {
    servingsText: servingString,
    servingsMin: null,
    servingsMax: null
  };

  // Extract numbers from the string
  const numbers = servingString.match(/\d+/g);

  if (numbers) {
    if (numbers.length === 1) {
      servingData.servingsMin = servingData.servingsMax = parseInt(numbers[0]);
    } else if (numbers.length >= 2) {
      servingData.servingsMin = parseInt(numbers[0]);
      servingData.servingsMax = parseInt(numbers[1]);
    }
  }

  return servingData;
}
