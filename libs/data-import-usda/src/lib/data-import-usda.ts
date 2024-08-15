import { Config, loadConfig } from './config';
import * as path from 'node:path';
import { BrandedFoodItemModel, FoundationFoodItemModel } from './data-sources/usda/models';
import { plainToClass } from 'class-transformer';
import { importFoundationFood } from './data-sources/usda/import-foundation-food';
import { PrismaClient } from '@prisma/client';
import * as cliProgress from 'cli-progress';
import { validateSync } from 'class-validator';
import { importBrandedFoods } from './data-sources/usda/import-branded-food';
import * as fs from 'fs';
import * as StreamArray from 'stream-json/streamers/StreamArray';

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
  const files = config.data_sources.flatMap(source => source.files);
  const importInfo = await prisma.importInfo.create({
    data: {
      sourceVersion: config.data_sources[0].sourceVersion,
      importDate: new Date(),
      dataSource: config.data_sources[0].dataSource
    }
  });

  try {
    for (const file of files) {
      const filePath = path.join(__dirname, file.path);
      await processJsonFile(filePath, prisma, importInfo.id);
    }
  } catch (error) {
    console.error(`Error processing files: ${error.message}`);
    await prisma.importInfo.delete({ where: { id: importInfo.id } });
    throw error;
  }
}

async function processJsonFile(filePath: string, prisma: PrismaClient, importInfoId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath).pipe(StreamArray.withParser());

    let foundationFoodsCount = 0;
    let brandedFoodsCount = 0;
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    progressBar.start(100, 0);

    stream.on('data', async ({ key, value }) => {
      stream.pause();
      try {
        if (value.foodClass === 'FinalFood') {
          const instance = plainToClass(FoundationFoodItemModel, value);
          const errors = validateSync(instance);
          if (errors.length) {
            throw new Error(`Validation error: ${errors}`);
          }
          await importFoundationFood(prisma, instance, importInfoId);
          foundationFoodsCount++;
        } else if (value.foodClass === 'Branded') {
          const instance = plainToClass(BrandedFoodItemModel, value);
          const errors = validateSync(instance);
          if (errors.length) {
            throw new Error(`Validation error: ${errors}`);
          }
          await importBrandedFoods(prisma, instance, importInfoId);
          brandedFoodsCount++;
        }
        progressBar.increment();
      } catch (error) {
        stream.destroy(error);
      }
      stream.resume();
    });

    stream.on('end', () => {
      progressBar.stop();
      console.log(`Processed ${foundationFoodsCount} foundation foods and ${brandedFoodsCount} branded foods.`);
      resolve();
    });

    stream.on('error', (error) => {
      progressBar.stop();
      reject(error);
    });
  });
}

main().catch(console.error);
