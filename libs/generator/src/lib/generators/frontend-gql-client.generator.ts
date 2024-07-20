import * as path from 'node:path';
import { existsSync } from 'node:fs';
import { mkdir, readdir } from 'node:fs/promises';
import { BaseGenerator } from './base.generator';
import { Logger } from '../logger';
import { ClientFieldsTemplate, ClientQueriesTemplate } from '../templates';
import { FrontendGqlClientConfig } from '../generator.types';


export class FrontendGqlClientGenerator extends BaseGenerator<FrontendGqlClientConfig> {
  async generate(): Promise<void> {
    if (!this.config) return;

    Logger.start('Generating Frontend Code');
    const fieldsFolderName = this.config.fieldsFolderName || 'fields';
    const queriesFolderName = this.config.queriesFolderName || 'prisma';

    const fieldsPath = path.join(this.config.outPath, fieldsFolderName);
    const queriesPath = path.join(this.config.outPath, queriesFolderName);

    if (!existsSync(fieldsPath)) await mkdir(fieldsPath);
    if (!existsSync(queriesPath)) await mkdir(queriesPath);

    const palOutPath = this.baseConfig.palConfig.backend.output
      ? this.baseConfig.palConfig.backend.output
      : path.join(this.baseConfig.apiOutPath, 'paljs');
    const dirents = await readdir(palOutPath, { withFileTypes: true });
    const prismaNames = dirents.filter(d => d.isDirectory()).map(d => d.name).sort();

    for (const prismaName of prismaNames) {
      const fieldsOutPath = path.join(fieldsPath, `${prismaName}.gql.ts`);
      const queriesOutPath = path.join(queriesPath, `${prismaName}.gql.ts`);

      if (!existsSync(fieldsOutPath)) {
        await this.writeFile(fieldsOutPath, ClientFieldsTemplate(prismaName));
      }
      await this.writeFile(queriesOutPath, ClientQueriesTemplate(prismaName, fieldsFolderName));
    }

    // Build frontend fields index.ts file
    let fieldsIndexSource = '';
    let fieldsFileNames = await this.getFileNames(fieldsPath);
    fieldsFileNames = fieldsFileNames.sort();
    for (let fileName of fieldsFileNames) {
      fieldsIndexSource += `export * from './${fileName}';\n`;
    }
    const fieldsIndexPath = path.join(fieldsPath, `index.ts`);
    await this.writeFile(fieldsIndexPath, fieldsIndexSource);
    Logger.success(`Wrote: ${fieldsIndexPath}`);

    this.logFileOperations();
    Logger.end('Frontend Code Generation Complete');
  }
}
