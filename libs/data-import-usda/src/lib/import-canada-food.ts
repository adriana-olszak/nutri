import { v4 as uuid } from 'uuid';
import { PrismaTransactionalClient } from '@nutri/server-db-client';
import { Prisma } from '@prisma/client';
import { FoodData } from './data-import-canada';

export async function importCanadaFood(prisma: PrismaTransactionalClient, foodItem: FoodData, importInfoId: string) {
  const {
    id,
    scientificName,
    nutrients,
    conversionFactors,
    description,
    category
  } = foodItem;

  const foodUuid = uuid();

  const { id: foodCategoryId } = await prisma.foodCategory.upsert({
    where: { sourceId: String(category.id) },
    update: {
      description: category.name
    },
    create: {
      id: uuid(),
      description: category.name,
      level: 1,
      importInfoId,
      sourceId: String(category.id)
    },
    select: {
      id: true
    }
  });

  await prisma.food.upsert({
      where: { sourceId: String(id) },
      update: {
        scientificName,
        importInfoId
      },
      create: {
        id: foodUuid,
        description,
        sourceId: String(id),
        scientificName,
        importInfoId,
        nutrients: {
          create: (nutrients || []).map(({ decimals, unit, value, name, id }) => {
            if (!value) return;
            // TODO what to do with decimal ?
            return {
              nutrient: {
                connectOrCreate: {
                  where: { sourceId: String(id) },
                  create: {
                    name: name.trim(),
                    sourceId: String(id),
                    unitName: unit.trim(),
                    importInfo: {
                      connect: {
                        id: importInfoId
                      }
                    }
                  }
                }
              },
              amount: value,
              sourceId: String(id),
              importInfo: {
                connect: {
                  id: importInfoId
                }
              }
            };
          }).filter(Boolean)
        },
        portions: {
          create: (conversionFactors || []).map(({
                                                   measureDescription, value, measureId
                                                 }) => ({
            amount: value,
            gramWeight: value * 100,
            id: uuid(),
            measureUnit: {
              connectOrCreate: {
                where: {
                  name: measureDescription.trim()
                },
                create: {
                  name: measureDescription.trim(),
                  importInfo: {
                    connect: {
                      id: importInfoId
                    }
                  }

                }
              }
            },
            portionDescription: null,
            sourceId: String(measureId),
            importInfo: {
              connect: {
                id: importInfoId
              }
            }
          }))
        },
        categories: {
          create: {
            isPrimaryCategory: true,
            categoryId: foodCategoryId
          }
        }
      }
    }
  );

  await prisma.translation.create({
    data: {
      language: {
        connectOrCreate: {
          where: { code: 'en' },
          create: {
            code: 'en',
            name: 'English'
          }
        }
      },
      entityType: 'Food',
      entityId: foodUuid,
      field: 'description',
      value: description
    }
  });

  await populateFoodSearchVector(prisma, {
    foodId: foodUuid,
    description,
    categoryDescription: category.name
  });

  console.log(' >>>>>>>>>@>  IMPORTED!!! ()' );

}

export async function populateFoodSearchVector(prisma: PrismaTransactionalClient, params: {
  foodId: string,
  description: string,
  categoryDescription: string
}) {
  const { foodId, description } = params;

  const upsertQuery = Prisma.sql`
    INSERT INTO "FoodSearchVector" ("id", "foodId", "languageCode", "searchVector")
    VALUES (${uuid()}, ${foodId}, 'en', to_tsvector(${description}));
  `;

  await prisma.$executeRaw(upsertQuery);
}
