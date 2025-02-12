import {
    Body,
    Controller,
    Header,
    HttpStatus,
    ParseEnumPipe,
    ParseFilePipeBuilder,
    Post,
    Query,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
    ApiBody,
    ApiConsumes,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import 'multer';
import { ImportRecipeTextInputDto } from '../dto/import-recipe-text.dto';
import { ImportRecipeInputDto } from '../dto/import-recipe.dto';
import { RecipeImportResponseDto } from '../dto/recipe-import-response.dto';
import { FileType } from '../file-processing/types';
import { RecipeImportService } from '../services/recipe-import.service';

@ApiTags('Recipe Import')
@Controller('recipes')
export class RecipeImportController {
  constructor(private readonly importService: RecipeImportService) {}

  @Post('import')
  @ApiOperation({ summary: 'Import recipe from structured JSON' })
  @ApiResponse({ status: 201, description: 'Recipe imported successfully' })
  @ApiConsumes('application/json')
  async importRecipe(
    @Body() { data, options }: ImportRecipeInputDto,
  ): Promise<RecipeImportResponseDto> {
    return this.importService.importRecipe(data, options);
  }

  @Post('import/text')
  @ApiOperation({ summary: 'Import recipe from plain text' })
  @ApiResponse({ status: 201, description: 'Recipe imported successfully' })
  @ApiConsumes('text/plain')
  @Header('Content-Type', 'text/plain')
  async importPlainText(
    @Body() { data, options }: ImportRecipeTextInputDto,
  ): Promise<RecipeImportResponseDto> {
    return this.importService.importFromText(data, options);
  }

  @Post('import/file')
  @ApiOperation({ summary: 'Import recipe from file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        language: {
          type: 'string',
          enum: ['en', 'pl'],
          default: 'en',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async importFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(text\/plain|application\/json)/,
        })
        .addMaxSizeValidator({
          maxSize: 1024 * 1024, // 1MB
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
    @Query('type', new ParseEnumPipe(FileType)) fileType: FileType,
    @Query('language') language: 'en' | 'pl' = 'en',
  ) {
    return this.importService.importFromFile(file, fileType, { language });
  }
}
