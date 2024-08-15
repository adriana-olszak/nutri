import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '@nutri/server-db-client';
import { createPaginator, PaginatedResult, PaginateOptions } from 'prisma-pagination';
import { Food } from '../@generated/food/food.model';
import { FoodCount } from '../@generated/food/food-count.output';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(options: Prisma.FoodFindManyArgs) {
    return this.prisma.food.findMany(options);
  }

  paginatedFindAll(
    options: PaginateOptions = {
      page: 1,
      perPage: 10
    }
  ): Promise<PaginatedResult<Food>> {
    const paginate = createPaginator(options);
    return paginate<Food, Prisma.FoodFindManyArgs>(this.prisma.food);
  }

  findOne(id: string): Promise<Food> {
    return this.prisma.food.findUnique({ where: { id } });
  }

  async smartSearch(name: string, limit: number, similarityThreshold: number, nonBrandedBoost: number): Promise<any[]> {
    const formattedName = this._formatTsQuery(name);

    const searchQuery = Prisma.sql`
    SELECT f.id,
           f.description,
           CASE
               WHEN bf.id IS NULL THEN
                   (ts_rank(fv."searchVector", to_tsquery(${formattedName})) + word_similarity(f.description, ${name})) *
                   ${nonBrandedBoost}
               ELSE ts_rank(fv."searchVector", to_tsquery(${formattedName})) + word_similarity(f.description, ${name})
           END as "rank"
    FROM "FoodSearchVector" fv
    JOIN "Food" f ON f.id = fv."foodId"
    LEFT JOIN "BrandedFood" bf ON bf."foodId" = f.id
    WHERE fv."searchVector" @@ to_tsquery(${formattedName})
      AND word_similarity(f.description, ${name}) > ${similarityThreshold}
    ORDER BY "rank" DESC
    LIMIT ${limit};
  `;

    return this.prisma.$queryRaw(searchQuery);
  }

  async getFoodCount(foodId: string): Promise<FoodCount> {
    const food = await this.prisma.food.findUnique({
      where: { id: foodId },
      include: {
        _count: {
          select: {
            nutrients: true,
            portions: true,
            categories: true,
            searchVectors: true,
            RecipeIngredient: true
          }
        }
      }
    });

    if (!food) {
      throw new Error(`Food with id ${foodId} not found`);
    }

    return {
      nutrients: food._count.nutrients,
      portions: food._count.portions,
      categories: food._count.categories,
      searchVectors: food._count.searchVectors,
      RecipeIngredient: food._count.RecipeIngredient
    };
  }

  private _formatTsQuery(input: string): string {
    const words = input.split(/\s+/).filter(word => word.length > 0);
    return words.join(' & ');
  }
}
