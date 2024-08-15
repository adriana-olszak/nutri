import { v4 as uuid } from 'uuid';
import { PrismaTransactionalClient } from '@nutri/server-db-client';
import { Prisma } from '@prisma/client';
import { BrandedFoodItemModel } from './models';

export async function importBrandedFoods(prisma: PrismaTransactionalClient, foodItem: BrandedFoodItemModel, importInfoId: string) {
  const {
    fdcId,
    description,
    brandedFoodCategory,
    brandOwner,
    foodClass,
    foodNutrients,
    dataType,
    gtinUpc,
    ingredients,
    labelNutrients,
    householdServingFullText,
    servingSize,
    servingSizeUnit
  } = foodItem;

  const foodUuid = uuid();

  const { id: foodCategoryId } = await prisma.foodCategory.upsert({
    where: { sourceId: String(brandedFoodCategory) },
    update: {
      description: brandedFoodCategory
    },
    create: {
      id: uuid(),
      description: brandedFoodCategory,
      level: 1,
      importInfoId,
      sourceId: String(brandedFoodCategory)
    },
    select: {
      id: true
    }
  });

  await prisma.food.upsert({
      where: { sourceId: String(fdcId) },
      update: {
        importInfoId
      },
      create: {
        id: foodUuid,
        description,
        sourceId: String(fdcId),
        importInfoId,
        brandedFood: {
          create: {
            id: uuid(),
            brandOwner,
            gtinUpc,
            ingredients,
            servingSize,
            servingUnit: servingSizeUnit,
            sourceId: String(fdcId),
            nutritionLabel: {
              create: {
                id: uuid(),
                calories: labelNutrients?.calories?.value,
                totalFat: labelNutrients?.fat?.value,
                saturatedFat: labelNutrients?.saturatedFat?.value,
                transFat: labelNutrients?.transFat?.value,
                cholesterol: labelNutrients?.cholesterol?.value,
                sodium: labelNutrients?.sodium?.value,
                totalCarbohydrate: labelNutrients?.carbohydrates?.value,
                dietaryFiber: labelNutrients?.fiber?.value,
                totalSugars: labelNutrients?.sugars?.value,
                addedSugars: labelNutrients?.addedSugar?.value,
                protein: labelNutrients?.protein?.value,
                calcium: labelNutrients?.calcium?.value,
                iron: labelNutrients?.iron?.value,
                potassium: labelNutrients?.potassium?.value,
                householdServingFullText: householdServingFullText,
              }
            },
            importInfo: {
              connect: {
                id: importInfoId
              }
            }
          }
        },
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
    brandName: brandOwner
  });
}

export async function populateFoodSearchVector(prisma: PrismaTransactionalClient, params: {
  foodId: string,
  description: string,
  brandName: string
}) {
  const { foodId, description, brandName } = params;
  const vector = `${description} ${brandName}`;
  const upsertQuery = Prisma.sql`
    INSERT INTO "FoodSearchVector" ("id", "foodId", "languageCode", "searchVector")
    VALUES (${uuid()}, ${foodId}, 'en', to_tsvector(${vector}));
  `;

  await prisma.$executeRaw(upsertQuery);
}
