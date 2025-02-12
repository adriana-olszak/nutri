import * as path from 'path';
import 'reflect-metadata';
import { BBCAdapter } from '../adapters/bbc/bbc.adapter';
import { config } from '../config';
import { ImportOrchestrator } from '../import.orchestrator';
import { APIRecipeImporter } from '../importer/api.importer';
import { JsonFileLoader } from '../loaders/file.loader';

async function importBBCRecipes() {
  const orchestrator = new ImportOrchestrator({
    adapter: new BBCAdapter(),
    importer: new APIRecipeImporter(config),
    loader: new JsonFileLoader(
      path.join(__dirname, '../../', '__data__', 'bbc-recipes.json')
    ),
    batchSize: 10,
    maxRetries: 1,
    continueOnError: true
  }, 'BBCImport');

  return orchestrator.execute();
}

importBBCRecipes().then(() => {
  console.info('BBC recipes import complete.');
}).catch((error) => {
  console.error('Error importing BBC recipes:', error);
});
