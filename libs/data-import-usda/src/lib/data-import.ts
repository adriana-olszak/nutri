import { Config, FoodDataSource, loadConfig } from './config';
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
import { processCanadianData } from './data-import-canada';
import { importCanadaFood } from './import-canada-food';
import { PrismaTransactionalClient } from '@nutri/server-db-client';

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
  const usedDataSource = config.data_sources.find(ds => ds.dataSource === config.use_data_source);
  const { dataSource, sourceVersion } = usedDataSource;

  await prisma.$transaction(async trx => {
    const importInfo = await trx.importInfo.create({
      data: {
        sourceVersion: sourceVersion,
        importDate: new Date(),
        dataSource: dataSource
      }
    });

    await processingStrategy(config.use_data_source)(trx, importInfo.id, usedDataSource);
  }, {
    timeout: 1000 * 60 * 30
  });
  console.log(' >>>>>>>>>@>  (process DONE)',);

}


function processingStrategy(dataSource: FoodDataSource) {
  switch (dataSource) {
    case FoodDataSource.USDA: {
      console.log(' >>>>>>>>>@>  (USDA)');

      return processUSDA;
    }
    case FoodDataSource.CANADA: {
      console.log(' >>>>>>>>>@>  (CANADA)');

      return processCanada;
    }
    default:
      throw new Error(`Not implemented ${dataSource}`);
  }
}

async function processUSDA(prisma: PrismaTransactionalClient, importInfoId: string, { files }: Config['data_sources'][0]) {
  for (const file of files) {
    const filePath = path.join(__dirname, file.path);

    await new Promise<void>((resolve, reject) => {
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
}

async function processCanada(prisma: PrismaTransactionalClient, importInfoId: string) {
  const denormalizedData = await processCanadianData();
  console.log(' >>>>>>>>>@>  (Object.values(denormalizedData))', Object.values(denormalizedData));

  for (const [_, data] of denormalizedData) {
    console.log(' >>>>>>>>>@>  (importing...)');

    await importCanadaFood(prisma, data, importInfoId);
  }
}

main().catch(console.error);
