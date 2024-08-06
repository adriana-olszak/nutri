import { FoundationFoodItem } from './interfaces';
import { v4 as uuid } from 'uuid';
import { PrismaTransactionalClient } from '@nutri/server-db-client';


export async function importFoundationFood(prisma: PrismaTransactionalClient, foodItem: FoundationFoodItem, importInfoId: string) {
  console.log(' >>>>>>>>>@>  (foodItem)', foodItem);

  const {
    fdcId,
    description,
    foodCategory,
    foodClass,
    foodNutrients,
    foodPortions,
    nutrientConversionFactors,
    dataType,
    scientificName,
    foodComponents,
    footNote,
    inputFoods
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
          create: (foodPortions || []).map(({ amount, gramWeight, id, measureUnit, portionDescription }) => ({
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
            portionDescription,
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

// TODO: populate FoodSearchVector table with food description and category name
}

