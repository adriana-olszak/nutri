import { PrismaClient } from '@prisma/client';
import * as path from 'node:path';
import { RecipeData, ParsedRecipe } from './types';
import { readJsonFile } from './utils';
import { parseRecipe } from './parser/parser';
import 'reflect-metadata';
import { populateDatabase } from './database';


const prisma = new PrismaClient();

async function importRecipes() {
  try {
    console.log('Starting recipe import process...');
    const recipes = await readJsonFile<RecipeData[]>(path.join(__dirname, '__data__', 'recipes.json'));
    console.log(`Found ${recipes.length} recipes to process.`);

    const parsedRecipes: ParsedRecipe[] = [];
    let processedIndex = 0;
    for (const recipe of recipes) {
      console.log(`Parsing recipe ${processedIndex + 1}/${recipes.length}: ${recipe.title.value}`);
      try {
        const parsedRecipe = parseRecipe(recipe);
        parsedRecipes.push(parsedRecipe);
      } catch (error) {
        console.error(`Error parsing recipe "${recipe.title.value}" (ID: ${recipe.id}):`);
        console.error(error);
      }
      processedIndex++;
    }

    console.log('Recipe parsing completed. Starting database population...');
    await populateDatabase(prisma, parsedRecipes);

    console.log('Recipe import completed successfully!');
  } catch (error) {
    console.error('Fatal error during recipe import:');
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

importRecipes().then(() => {
  console.log('Import process completed.');
  process.exit(0);
}).catch((e) => {
  console.error('Fatal error in import process:');
  console.error(e);
  process.exit(1);
});
