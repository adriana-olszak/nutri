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
    for (let i = 0; i < 3; i++) {
      console.log(`Parsing recipe ${i + 1}/${recipes.length}: ${recipes[i].title.value}`);
      try {
        const parsedRecipe = parseRecipe(recipes[i]);
        parsedRecipes.push(parsedRecipe);
      } catch (error) {
        console.error(`Error parsing recipe "${recipes[i].title.value}" (ID: ${recipes[i].id}):`);
        console.error(error);
      }
    }

    console.log(' >>>>>>>>>@>  (JSON)', JSON.stringify(parsedRecipes, null, 2));

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
