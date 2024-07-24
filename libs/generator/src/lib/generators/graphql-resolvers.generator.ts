import * as path from 'node:path';
import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { BaseGenerator } from './base.generator';
import { Logger } from '../logger';
import { GraphQLApiIndexTemplate, GraphQLPrismaIndexTemplate, GraphQLResolversRBACTemplate } from '../templates';
import { GraphQLResolversConfig } from '../generator.types';

export class GraphQLResolverGenerator extends BaseGenerator<GraphQLResolversConfig> {
  async generate(): Promise<void> {
    Logger.start('Generating Nest GraphQL Resolvers');
    const apiResolversPath = path.join(this.baseConfig.apiOutPath, 'resolvers');
    const prismaResolversPath = path.join(apiResolversPath, 'prisma');

    await this.createFileIfMissing(apiResolversPath);
    await this.createFileIfMissing(prismaResolversPath);


    const palOutPath = this.baseConfig.palConfig.backend.output
      ? this.baseConfig.palConfig.backend.output
      : path.join(this.baseConfig.apiOutPath, 'paljs');
    const dirents = await readdir(palOutPath, { withFileTypes: true });
    const prismaNames = dirents.filter(d => d.isDirectory()).map(d => d.name).sort();

    for (const prismaName of prismaNames.filter(name => !this.config.auth.excludeModels.includes(name))) {
      const outFile = path.join(prismaResolversPath, `${prismaName}.ts`);

      if (!existsSync(outFile)) {
        await this.writeFile(
          outFile,
          GraphQLResolversRBACTemplate(prismaName, this.config.auth?.defaultRBACRole ?? 'Prisma')
        );
      }
    }

    const prismaIndexFileNames = await this.getFileNames(prismaResolversPath);

    const prismaIndexPath = path.join(prismaResolversPath, 'index.ts');
    await this.writeFile(prismaIndexPath, GraphQLPrismaIndexTemplate(prismaIndexFileNames));

    const apiIndexFileNames = await this.getFileNames(apiResolversPath);
    const apiIndexPath = path.join(apiResolversPath, 'index.ts');
    await this.writeFile(apiIndexPath, GraphQLApiIndexTemplate(apiIndexFileNames));

    this.logFileOperations();

    Logger.end('GraphQL Resolver Generation Complete');
  }


}
