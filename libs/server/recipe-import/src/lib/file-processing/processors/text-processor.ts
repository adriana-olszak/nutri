import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { ImportRecipeTextDto } from '../../dto/import-recipe-text.dto';
import { RecipeParserService } from '../../services/recipe-parser.service';
import {
    FileProcessingError,
    FileProcessor,
    FileProcessorOptions,
} from '../types';

@Injectable()
export class TextProcessor implements FileProcessor {
  constructor(private readonly recipeParserService: RecipeParserService) {}

  canProcess(fileType: string): boolean {
    return fileType.toLowerCase() === 'text';
  }

  async process(
    file: Express.Multer.File,
    options?: FileProcessorOptions,
  ): Promise<ImportRecipeTextDto[]> {
    try {
      const content = file.buffer.toString(options?.encoding || 'utf-8');

      const transformed = plainToInstance(ImportRecipeTextDto, {
        text: content,
        title: 'UNTITLED',
      });
      await validateOrReject(transformed);

      return [transformed];
    } catch (error) {
      if (Array.isArray(error)) {
        throw new FileProcessingError(
          'Recipe validation failed',
          'VALIDATION_ERROR',
          error,
        );
      }
      throw new FileProcessingError(
        'Failed to process text file',
        'TEXT_PROCESSING_ERROR',
        error,
      );
    }
  }
}
