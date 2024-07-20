import * as path from 'node:path';
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';

import { FileOperationTracker } from '../file-operation-tracker';
import { BaseConfig, GeneratorSpecificConfig } from '../generator.types';
import { Logger } from '../logger';
import { promisify } from 'node:util';
import { exec } from 'node:child_process';
import { existsSync } from 'node:fs';

const execAsync = promisify(exec);

export abstract class BaseGenerator<T extends GeneratorSpecificConfig> {
  protected fileTracker: FileOperationTracker;

  constructor(protected config: T, protected baseConfig: BaseConfig) {
    this.fileTracker = new FileOperationTracker();
  }

  abstract generate(): Promise<void>;

  protected async writeFile(path: string, content: string): Promise<void> {
    await writeFile(path, content);
    this.fileTracker.trackOperation(path, 'write');
  }

  protected async createFileIfMissing(path: string) {
    if (!existsSync(path)) {
      await mkdir(path);
      this.fileTracker.trackOperation(path, 'create');
    }
  }

  protected async deleteFile(path: string): Promise<void> {
    await rm(path);
    this.fileTracker.trackOperation(path, 'delete');
  }

  protected logFileOperations(): void {
    const operations = this.fileTracker.process().getOperations();
    if (operations.length > 0) {
      Logger.table(operations, 'File Operations');
    }
    this.fileTracker.printOperationCounts();
    this.fileTracker.clear();
  }

  protected async getFileNames(directory: string): Promise<string[]> {
    return (await readdir(directory, { withFileTypes: true }))
      .filter(dirent => dirent.isFile())
      .filter(f => {
        const fileName = path.basename(f.name);
        return (
          fileName !== 'index.ts' &&
          !fileName.endsWith('.spec.ts') &&
          !fileName.endsWith('.test.ts')
        );
      })
      .map(f => path.basename(f.name, '.ts'));
  }

}
