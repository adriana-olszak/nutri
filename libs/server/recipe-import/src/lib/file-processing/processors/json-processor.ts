import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { ImportRecipeDto } from '../../dto/import-recipe.dto';
import { FileProcessingError, FileProcessor, FileProcessorOptions } from '../types';

@Injectable()
export class JsonProcessor implements FileProcessor {
  canProcess(fileType: string): boolean {
    return fileType.toLowerCase() === 'json';
  }

  async process(
      file: Express.Multer.File,
      options?: FileProcessorOptions
    ): Promise<ImportRecipeDto[]> {
      try {
        const content = file.buffer.toString(options?.encoding || 'utf-8');
        const parsed = JSON.parse(content);

        // Handle both single recipe and array of recipes
        const recipes = Array.isArray(parsed) ? parsed : [parsed];

        const validatedRecipes = await Promise.all(
          recipes.map(async (recipe, index) => {
            try {
              const transformed = plainToInstance(ImportRecipeDto, recipe);
              await validateOrReject(transformed);
              return transformed;
            } catch (errors) {
              throw new FileProcessingError(
                `Validation failed for recipe at index ${index}`,
                'VALIDATION_ERROR',
                errors
              );
            }
          })
        );

        return validatedRecipes;
      } catch (error) {
        if (error instanceof SyntaxError) {
          throw new FileProcessingError(
            'Invalid JSON format',
            'INVALID_JSON',
            error
          );
        }
        throw error;
      }
    }
}
