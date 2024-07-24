import * as path from 'node:path';
import { mkdir, readdir } from 'node:fs/promises';
import { BaseGenerator } from './base.generator';
import { Logger } from '../logger';
import { ClientFieldsTemplate } from '../templates';
import { FrontendGqlClientConfig } from '../generator.types';
import { prismaClientFindUniqueTemplate } from '../templates/prisma-client-find-unique';
import { prismaClientFindFirstTemplate } from '../templates/prisma-client-find-first';
import { prismaClientFindManyTemplate } from '../templates/prisma-client-find-many';
import { prismaClientFindManyCountTemplate } from '../templates/prisma-client-find-many-count';
import { prismaClientCreateOneTemplate } from '../templates/prisma-client-create-one';
import { prismaClientCreateManyTemplate } from '../templates/prisma-client-create-many';
import { prismaClientCreateManyAndReturnTemplate } from '../templates/prisma-client-create-many-and-return';
import { prismaClientUpdateOneTemplate } from '../templates/prisma-client-update-one';
import { prismaClientUpdateManyTemplate } from '../templates/prisma-client-update-many';
import { prismaClientDeleteOneTemplate } from '../templates/prisma-client-delete-one';
import { prismaClientDeleteManyTemplate } from '../templates/prisma-client-delete-many';
import { prismaClientUpsertOneTemplate } from '../templates/prisma-client-upsert-one';
import { toKebabCase } from '../utils/to-kebab-case';

/**
 * FrontendGqlClientGenerator
 *
 * This class extends BaseGenerator and is responsible for generating frontend GraphQL client code.
 * It creates field and query files for each Prisma model, as well as index files for easy importing.
 *
 * @extends BaseGenerator<FrontendGqlClientConfig>
 */
export class FrontendGqlClientGenerator extends BaseGenerator<FrontendGqlClientConfig> {

  /**
   * Generates the frontend GraphQL client code.
   *
   * @async
   * @returns {Promise<void>}
   *
   * This method performs the following steps:
   * 1. Creates directories for fields and queries if they don't exist.
   * 2. Reads Prisma model names from the PalJS output directory.
   * 3. Generates field and query files for each Prisma model.
   * 4. Creates an index file for the fields directory.
   *
   * The method uses the following configuration options:
   * - fieldsFolderName: Name of the folder to store field files (default: 'fields')
   * - queriesFolderName: Name of the folder to store query files (default: 'prisma')
   * - outPath: Output path for generated files
   *
   * It also relies on the following templates:
   * - ClientFieldsTemplate: Template for generating field files
   * - ClientQueriesTemplate: Template for generating query files
   *
   * @throws Will throw an error if file operations fail
   */
  async generate(): Promise<void> {
    if (!this.config) return;

    Logger.start('Generating Frontend GraphQL Files');


    const palOutPath = this.baseConfig.palConfig.backend.output
      ? this.baseConfig.palConfig.backend.output
      : path.join(this.baseConfig.apiOutPath, 'paljs');
    const dirents = await readdir(palOutPath, { withFileTypes: true });
    const prismaNames = dirents.filter(d => d.isDirectory()).map(d => d.name).sort();

    for (const prismaName of prismaNames.filter(name => !this.config.excludeModels.includes(name))) {
      const { fragmentsPath, queriesPath, mutationsPath } = await this.ensurePaths(prismaName);
      // Queries
      await this.writeFile(path.join(queriesPath, `findUnique${prismaName}.graphql`), prismaClientFindUniqueTemplate(prismaName));
      await this.writeFile(path.join(queriesPath, `findFirst${prismaName}.graphql`), prismaClientFindFirstTemplate(prismaName));
      await this.writeFile(path.join(queriesPath, `findMany${prismaName}.graphql`), prismaClientFindManyTemplate(prismaName));
      await this.writeFile(path.join(queriesPath, `findManyCount${prismaName}.graphql`), prismaClientFindManyCountTemplate(prismaName));

      // Mutations
      await this.writeFile(path.join(mutationsPath, `createOne${prismaName}.graphql`), prismaClientCreateOneTemplate(prismaName));
      await this.writeFile(path.join(mutationsPath, `createMany${prismaName}.graphql`), prismaClientCreateManyTemplate(prismaName));
      await this.writeFile(path.join(mutationsPath, `createManyAndReturn${prismaName}.graphql`), prismaClientCreateManyAndReturnTemplate(prismaName));
      await this.writeFile(path.join(mutationsPath, `updateOne${prismaName}.graphql`), prismaClientUpdateOneTemplate(prismaName));
      await this.writeFile(path.join(mutationsPath, `updateMany${prismaName}.graphql`), prismaClientUpdateManyTemplate(prismaName));
      await this.writeFile(path.join(mutationsPath, `deleteOne${prismaName}.graphql`), prismaClientDeleteOneTemplate(prismaName));
      await this.writeFile(path.join(mutationsPath, `deleteMany${prismaName}.graphql`), prismaClientDeleteManyTemplate(prismaName));
      await this.writeFile(path.join(mutationsPath, `upsertOne${prismaName}.graphql`), prismaClientUpsertOneTemplate(prismaName));

      const fragmentOutPath = path.join(fragmentsPath, `${prismaName}Fields.graphql`);
      await this.writeFile(fragmentOutPath, ClientFieldsTemplate(prismaName));
    }

    this.logFileOperations();
    Logger.end('Frontend GraphQL File Generation Complete');
  }

  private async ensurePaths(prismaName: string) {
    const fragmentsFolderName = 'fragments/prisma';
    const snakePrismaName = toKebabCase(prismaName);
    const queriesFolderName = `queries/${snakePrismaName}/prisma`;
    const mutationsFolderName = `mutations/${snakePrismaName}/prisma`;

    const fragmentsPath = path.join(this.config.outPath, fragmentsFolderName);
    const queriesPath = path.join(this.config.outPath, queriesFolderName);
    const mutationsPath = path.join(this.config.outPath, mutationsFolderName);

    await mkdir(fragmentsPath, { recursive: true });
    await mkdir(queriesPath, { recursive: true });
    await mkdir(mutationsPath, { recursive: true });

    return { fragmentsPath, queriesPath, mutationsPath };
  }
}
