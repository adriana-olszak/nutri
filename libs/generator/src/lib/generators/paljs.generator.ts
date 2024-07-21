import * as path from 'node:path';

import { existsSync } from 'node:fs';
import { readFile, rm } from 'node:fs/promises';
import { BaseGenerator } from './base.generator';
import { Logger } from '../logger';
import { Generator as PalGenerator } from '@paljs/generator';
import { glob } from 'glob';
import { PalGeneratorConfig } from '../generator.types';

export class PalCodeGenerator extends BaseGenerator<PalGeneratorConfig> {
  async generate(): Promise<void> {
    Logger.start('Generating Pal Code');
    const palOutPath = this.config.backend.output
      ? this.config.backend.output
      : path.join(this.baseConfig.apiOutPath, 'paljs');

    if (existsSync(palOutPath)) {
      await rm(palOutPath, { recursive: true });
      this.fileTracker.trackOperation(palOutPath, 'delete');
    }

    const pal = new PalGenerator(
      { name: this.config.backend.generator, schemaPath: this.config.schema },
      this.config.backend
    );
    await pal.run();
    this.fileTracker.trackOperation(palOutPath, 'write');

    // Remove the `resolvers.ts` files
    const resolversGlob = path.join(palOutPath, '**/resolvers.ts').replaceAll('\\', '/');
    const resolversFiles = await glob(resolversGlob);
    for (const file of resolversFiles) {
      await this.deleteFile(file);
    }

    const resolverTypesPath = path.join(palOutPath, '../resolversTypes.ts');
    const resolverTypesOriginal = (await readFile(resolverTypesPath)).toString();
    const resolverTypesUpdated =
      resolverTypesOriginal.slice(0, 25) + '@prisma/client' + resolverTypesOriginal.slice(39);
    await this.writeFile(resolverTypesPath, resolverTypesUpdated);

    this.logFileOperations();
    Logger.end('Pal Code Generation Complete');
  }
}
