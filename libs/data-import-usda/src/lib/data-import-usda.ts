import { getParser } from './parser';
import { Config, loadConfig } from './config';
import * as path from 'node:path';
import { FoundationFoodItemModel } from './data-sources/usda/models';
import { plainToClass } from 'class-transformer';
import { importFoundationFood } from './data-sources/usda/import-foundation-food';
import { PrismaClient } from '@prisma/client';
import * as cliProgress from 'cli-progress';
import { validateSync } from 'class-validator';

async function main() {
  const prisma = new PrismaClient();

  try {
    const config = loadConfig(path.join(__dirname, 'config.yml'));
    await prisma.$connect();
    await processFiles(config, prisma);
  } catch (error) {
    await prisma.$disconnect();
    console.error(`Unhandled error: ${error.message}`);
    process.exit(1);
  }
}

async function processFiles(config: Config, prisma: PrismaClient): Promise<void> {
  const files = config.data_sources
    .flatMap(source => source.files);
  const importInfo = await prisma.importInfo.create({
    data: {
      sourceVersion: config.data_sources[0].sourceVersion,
      importDate: new Date(),
      dataSource: config.data_sources[0].dataSource
    }
  });

  try {
    for (const file of files) {
      const parser = getParser('json');
      const data: any = parser.parse(path.join(__dirname, file.path));

      if ('FoundationFoods' in data) {
        const progressBar = new cliProgress.SingleBar({ format: `Foundation foods [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}` }, cliProgress.Presets.shades_classic);
        const foundationFoods: FoundationFoodItemModel[] = data.FoundationFoods.map((food: any) => {
          const instance = plainToClass(FoundationFoodItemModel, food);
          const errors = validateSync(instance);

          if (errors.length) {
            throw new Error(`Validation error: ${errors}`);
          }
          return instance;
        });
        console.log(' >>>>>>>>>@>  (foundationFoods)', foundationFoods);

        progressBar.start(foundationFoods.length, 0);

        for (const food of foundationFoods) {
          await importFoundationFood(prisma, food, importInfo.id);
          progressBar.increment();
        }
        progressBar.stop();
      }
    }
  } catch (error) {
    await prisma.importInfo.delete({ where: { id: importInfo.id } });
    console.error(`Error processing files: ${error.message}`);
    throw error;
  }
}

main().catch(console.error);
