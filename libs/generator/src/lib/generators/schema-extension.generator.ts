import * as path from 'node:path';
import { readdir } from 'node:fs/promises';
import { BaseGenerator } from './base.generator';
import { Logger } from '../logger';
import { DefaultFieldsTemplate, GraphQLSchemaExtensionsTemplate, PaljsTypeDefsTemplate } from '../templates';
import { SchemaExtensionsConfig } from '../generator.types';

export class SchemaExtensionGenerator extends BaseGenerator<SchemaExtensionsConfig> {
  async generate(): Promise<void> {
    Logger.start('Generating Schema Extensions');
    const palOutPath = this.baseConfig.palConfig.backend.output
      ? this.baseConfig.palConfig.backend.output
      : path.join(this.baseConfig.apiOutPath, 'paljs');
    const dirents = await readdir(palOutPath, { withFileTypes: true });
    const prismaNames = dirents.filter(d => d.isDirectory()).map(d => d.name).sort();

    const palTypeDefsFilePath = path.join(palOutPath, 'typeDefs.ts');
    await this.writeFile(palTypeDefsFilePath, PaljsTypeDefsTemplate(prismaNames));

    const schemaExtensionsPath = path.join(palOutPath, 'SchemaExtensions.ts');
    await this.writeFile(schemaExtensionsPath, GraphQLSchemaExtensionsTemplate(prismaNames));

    if (this.config.defaultFieldsOutPath) {
      await this.writeFile(this.config.defaultFieldsOutPath, DefaultFieldsTemplate(prismaNames));
    }

    this.logFileOperations();
    Logger.end('Schema Extension Generation Complete');
  }
}
