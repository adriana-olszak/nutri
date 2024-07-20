import { Generator } from './generator';

async function main() {
  const generator = new Generator({
    palConfig: {
      schema: 'apps/api/prisma/schema.prisma',
      backend: {
        generator: 'sdl',
        output: 'apps/server/src/app/graphql/paljs',
        /** @see [Pal.js GraphQL SDL Inputs Docs](https://paljs.com/plugins/sdl-inputs) */
        doNotUseFieldUpdateOperationsInput: true,
      },
    },
    prismaClientPath: 'libs/server/db-client/src/lib/generated',
    auth: {
      scheme: 'RBAC',
      defaultRBACRole: 'USER',
    },
    apiOutPath: 'apps/api/src/app/graphql',
    caslSubjectsOutFile: 'apps/api/src/app/auth/casl/generated.ts',
    defaultFieldsOutFile: 'libs/server/db-client/src/lib/default-fields.ts',
    frontend: {
      outPath: 'libs/graphql/src/lib',
    },
  });

  await generator.run();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
