import {  SRLegacyFoodItem } from './interfaces';
import { v4 as uuid } from 'uuid';
import { PrismaTransactionalClient } from '@nutri/server-db-client';
import { Prisma } from '@prisma/client';

export async function importFoundationFood(prisma: PrismaTransactionalClient, foodItem: SRLegacyFoodItem, importInfoId: string) {
  const {
    fdcId,
    description,
    foodCategory,
    foodNutrients,
    foodPortions,
    nutrientConversionFactors,
    scientificName,
  } = foodItem;

  (nutrientConversionFactors || []).map((conversionFactor) => {
    const { type, value } = conversionFactor;
  });

  const foodUuid = uuid();

  const { id: foodCategoryId } = await prisma.foodCategory.upsert({
    where: { sourceId: String(foodCategory.description) },
    update: {
      description: foodCategory.description
    },
    create: {
      id: uuid(),
      description: foodCategory.description,
      level: 1,
      importInfoId,
      sourceId: String(foodCategory.description)
    },
    select: {
      id: true
    }
  });

  await prisma.food.upsert({
      where: { sourceId: String(fdcId) },
      update: {
        scientificName,
        importInfoId
      },
      create: {
        id: foodUuid,
        description,
        sourceId: String(fdcId),
        scientificName,
        importInfoId,
        nutrients: {
          create: (foodNutrients || []).map(({ nutrient, amount, id, max, median, min }) => {
            if (!amount) return;

            return {
              nutrient: {
                connectOrCreate: {
                  where: { sourceId: String(nutrient.id) },
                  create: {
                    name: nutrient.name.trim(),
                    sourceId: String(nutrient.id),
                    unitName: nutrient.unitName.trim(),
                    importInfo: {
                      connect: {
                        id: importInfoId
                      }
                    }
                  }
                }
              },
              amount,
              max,
              median,
              min,
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
          create: (foodPortions || []).map(({ amount, gramWeight, id, measureUnit, portionDescription, modifier }) => ({
            amount,
            gramWeight,
            id: uuid(),
            measureUnit: {
              connectOrCreate: {
                where: { name: measureUnit.name },
                create: {
                  name: measureUnit.name.trim(),
                  importInfo: {
                    connect: {
                      id: importInfoId
                    }
                  }

                }
              }
            },
            portionDescription: modifier || portionDescription,
            sourceId: String(id),
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
    categoryDescription: foodCategory.description
  });
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
