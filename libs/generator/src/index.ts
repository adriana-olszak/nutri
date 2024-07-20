import { GeneratorPipeline } from './lib/generator-pipeline';
import { findRootDir } from './lib/utils/find-root-dir';
import * as path from 'node:path';

async function main() {
  const scriptDir = path.dirname(__filename);
  const rootDir = findRootDir(scriptDir);

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
        doNotUseFieldUpdateOperationsInput: true
      }
    },
    generators: [
      {
        type: 'graphqlResolvers',
        auth: {
          scheme: 'RBAC',
          defaultRBACRole: 'USER'
        }
      },
      {
        type: 'schemaExtensions',
        defaultFieldsOutPath: 'libs/server/db-client/src/lib/default-fields.ts'
      },
      {
        type: 'frontendGqlClient',
        outPath: 'libs/graphql/src/lib'
      }
    ]
  });

  await generator.run();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
