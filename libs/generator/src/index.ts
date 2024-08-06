import { GeneratorPipeline } from './lib/generator-pipeline';
import { findRootDir } from './lib/utils/find-root-dir';
import * as path from 'node:path';

async function main() {
  const scriptDir = path.dirname(__filename);
  const rootDir = findRootDir(scriptDir);

  const excludeModels = ['LoginLog',
    'RefreshToken',
    'Session',
    'LoginLog',
    'PasswordResetToken',
    'TokenBlacklist',
    'Food',
    'RecipeCategory',
    'RecipeIngredient',
    'RecipePart',
    'Tag',
    'Season',
    'RecipeImage',
    'Recipe',
    'ImportInfo',
    'FoodDataSource',
    'MeasureUnit',
    'FoodPortion',
    'FoodNutrient',
    'Nutrient',
    'BrandedFood',
    'FoodCategoryOnFood',
    'FoodCategory',
    'FoodSearchVector',
    'Food',
    'Translation',
    'Language',
  ];
  const generator = new GeneratorPipeline({
    rootDir,
    prismaClientPath: 'libs/server/db-client/src/lib/generated',
    apiOutPath: 'apps/server/src/app/graphql',
    palConfig: {
      type: 'pal',
      schema: 'libs/server/db-client/prisma/schema.prisma',
      backend: {
        generator: 'sdl',
        output: 'apps/server/src/app/graphql/paljs',
        doNotUseFieldUpdateOperationsInput: true,
        excludeModels: excludeModels.map(name => ({
          name,
          queries: true,
          mutations: true
        }))
      }
    },
    generators: [
      {
        type: 'graphqlResolvers',
        auth: {
          scheme: 'RBAC',
          defaultRBACRole: 'USER',
          excludeModels
        }
      },
      {
        type: 'schemaExtensions',
        defaultFieldsOutPath: 'libs/server/db-client/src/lib/default-fields.ts'
      },
      {
        type: 'frontendGqlClient',
        outPath: 'libs/client/gql/src/lib',
        fieldsFolderName: 'fields',
        queriesFolderName: 'prisma',
        excludeModels
      }
    ]
  });

  await generator.run();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
