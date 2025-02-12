import { Prisma } from '@nutri/server-db-client';

export interface CreateFoodDto {
  sourceId: string;
  description: string;
  scientificName?: string;
  categoryId: string;
  importInfoId?: string;
}

export interface UpdateFoodDto extends Partial<CreateFoodDto> {
  id: string;
}

export interface FoodWithRelations {
  id: string;
  description: string;
  scientificName?: string;
  category: {
    id: string;
    description: string;
  };
  nutrients: Array<{
    nutrientId: string;
    amount: number;
    nutrient: {
      name: string;
      unitName: string;
    };
  }>;
  portions: Array<{
    id: string;
    gramWeight: number;
    measureUnit: {
      name: string;
    };
  }>;
}

export type FoodInclude = Prisma.FoodInclude;
export type FoodWhere = Prisma.FoodWhereInput;
