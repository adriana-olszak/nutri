import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { DataAccessMatchingModule } from '@nutri/server-data-access-matching';
import { DataAccessRecipesModule } from '@nutri/server-data-access-recipes';
import { DbClientModule } from '@nutri/server-db-client';
import { MLModule } from '@nutri/server-ml';
import { RecipeImportController } from './controllers/recipe-import.controller';
import { FileProcessorService } from './file-processing/file-processor.service';
import { JsonProcessor } from './file-processing/processors/json-processor';
import { TextProcessor } from './file-processing/processors/text-processor';
import { RecipeImportRepository } from './repositories/recipe-import.repository';
import { RecipeImportService } from './services/recipe-import.service';
import { RecipeParserService } from './services/recipe-parser.service';

@Module({
  imports: [
    MLModule,
    MulterModule.register({
          limits: {
            fileSize: 1024 * 1024, // 1MB
          },
        }),
    DbClientModule,
    DataAccessRecipesModule,
    DataAccessMatchingModule,
  ],
  controllers: [RecipeImportController],
  providers: [
    RecipeImportService,
    RecipeImportRepository,
    JsonProcessor,
    TextProcessor,
    FileProcessorService,
    RecipeParserService
  ],
})
export class RecipeImportModule {}
