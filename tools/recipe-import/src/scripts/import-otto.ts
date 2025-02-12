import * as path from 'path';
import 'reflect-metadata';
import { OttoAdapter } from '../adapters/otto/otto.adapter';
import { config } from '../config';
import { ImportOrchestrator } from '../import.orchestrator';
import { APIRecipeImporter } from '../importer/api.importer';
import { JsonFileLoader } from '../loaders/file.loader';

async function importOttoRecipes() {
  const orchestrator = new ImportOrchestrator({
    adapter: new OttoAdapter(),
    importer: new APIRecipeImporter(config),
    loader: new JsonFileLoader(
      path.join(__dirname, '../../', '__data__', 'otto-recipes.json')
    ),
    batchSize: 10,
    maxRetries: 1,
    continueOnError: true
  }, 'OttoImport');

  return orchestrator.execute();
}

importOttoRecipes().then(() => {
  console.info('Otto recipes import complete.');
}).catch((error) => {
  console.error('Error importing Otto recipes:', error);
});
