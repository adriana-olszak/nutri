import { Injectable, Logger } from '@nestjs/common';
import { ImportRecipeOptionsDto } from '../dto/import-recipe-options.dto';
import { ImportRecipeTextDto } from '../dto/import-recipe-text.dto';
import { ImportRecipeDto } from '../dto/import-recipe.dto';
import { RecipeImportResponseDto } from '../dto/recipe-import-response.dto';
import { FileProcessorService } from '../file-processing/file-processor.service';
import { FileProcessorOptions, FileType } from '../file-processing/types';
import { RecipeImportRepository } from '../repositories/recipe-import.repository';
import { RecipeParserService } from './recipe-parser.service';

@Injectable()
export class RecipeImportService {
  private readonly logger = new Logger(RecipeImportService.name);

  constructor(
    private readonly recipeParserService: RecipeParserService,
    private readonly recipeImportRepository: RecipeImportRepository,
    private readonly fileProcessorService: FileProcessorService,
  ) {}

  async importRecipe(
    dto: ImportRecipeDto,
    options: ImportRecipeOptionsDto,
  ): Promise<RecipeImportResponseDto> {

    const parsedRecipe = await this.recipeParserService.parseRecipe(
      dto,
    );

    const saveResult = await this.recipeImportRepository.saveRecipe(
      parsedRecipe,
      { autoMatchIngredients: options.autoMatchIngredients || false },
    );

    //TODO if options say so create Matches using matchesRepository.

    return {
      recipeId: saveResult.id,
      status: 'success',
      matchIds: [],
    };
  }

  async importFromText(
    dto: ImportRecipeTextDto,
    options: ImportRecipeOptionsDto,
  ) {
    try {
      // Parse the text using the parser service
      const parsedRecipe =
        await this.recipeParserService.parseRecipe({
          text: dto.text,
          title: dto.title,
          language: 'en',
        });

      const saveResult = await this.recipeImportRepository.saveRecipe(
        parsedRecipe,
        { autoMatchIngredients: options.autoMatchIngredients || false },
      );

      return {
        recipeId: saveResult.id,
        status: 'success',
        matchIds: [],
      };
    } catch (error) {
      this.logger.error('Failed to import recipe from text', {
        error,
        title: dto.title,
      });
      throw error;
    }
  }

  // TODO (for later) this method should read the content of the file and push the content to the Queue.
  // We should not process files in a syncronous way, as it may take a long time to process the file
  // We should expose some sort of progress to the user
  // We should also expose an endpoint that returns a template for the file that can be used to import recipes
  async importFromFile(
    file: Express.Multer.File,
    fileType: FileType,
    options?: FileProcessorOptions,
  ) {
    try {
      this.logger.debug(`Processing ${fileType} file: ${file.originalname}`);

      const recipes = await this.fileProcessorService.processFile(
        file,
        fileType,
        options,
      );

      // TODO here we should schedule a job to process the recipes
      // As soon as we extract them from file we should push them to the queue

      // this.logger.debug(`Successfully processed ${recipes.length} recipes`);

      // const results = await Promise.allSettled(
      //   recipes.map((recipe) =>
      //     this.recipeImportRepository.saveRecipe(recipe, {
      //       autoMatchIngredients: true,
      //     }),
      //   ),
      // );

      // const summary = {
      //   total: recipes.length,
      //   successful: results.filter((r) => r.status === 'fulfilled').length,
      //   failed: results.filter((r) => r.status === 'rejected').length,
      //   recipes: results.map((result, index) => ({
      //     index,
      //     title: recipes[index].title,
      //     status: result.status,
      //     error:
      //       result.status === 'rejected' ? result.reason.message : undefined,
      //   })),
      // };

      const summary = {
        total: 0,
        successful: 0,
        failed: 0,
        recipes: [],
      };
      this.logger.debug('Import summary:', summary);

      return summary;
    } catch (error) {
      this.logger.error(`Failed to process file: ${file.originalname}`, error);
      throw error;
    }
  }
}
