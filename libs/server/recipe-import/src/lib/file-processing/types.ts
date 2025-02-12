import { ImportRecipeTextDto } from '../dto/import-recipe-text.dto';
import { ImportRecipeDto } from '../dto/import-recipe.dto';

export enum FileType {
  json = 'json',
  text = 'text',
}

export interface FileProcessorOptions {
  language?: 'en' | 'pl';
  encoding?: BufferEncoding;
  delimiter?: string; // for CSV
}

export interface FileProcessor {
  canProcess(fileType: string): boolean;
  process(
    file: Express.Multer.File,
    options?: FileProcessorOptions,
  ): Promise<(ImportRecipeTextDto | ImportRecipeDto)[]>;
}

export class FileProcessingError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = 'FileProcessingError';
  }
}
