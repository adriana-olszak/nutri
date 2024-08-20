import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '@nutri/server-db-client';
import { createPaginator, PaginatedResult, PaginateOptions } from 'prisma-pagination';
import { Food } from '../../graphql/models/food.model';
import { NutritionalValue } from '../../graphql/models/nutritional-value.model';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {
  }

  paginatedFindAll(
    options: PaginateOptions = {
      page: 1,
      perPage: 10
    },
    sortInput?: Prisma.FoodOrderByWithRelationInput,
    filterInput?: Prisma.FoodWhereInput
  ): Promise<PaginatedResult<Food>> {
    const paginate = createPaginator(options);
    return paginate<Food, Prisma.FoodFindManyArgs>(
      this.prisma.food,
      { orderBy: sortInput, where: filterInput }
    );
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

  private _formatTsQuery(input: string): string {
    const words = input.split(/\s+/).filter(word => word.length > 0);
    return words.join(' & ');
  }
}
