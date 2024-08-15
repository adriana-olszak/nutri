import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '@nutri/server-db-client';
import { createPaginator, PaginatedResult, PaginateOptions } from 'prisma-pagination';
import { Food } from '../@generated/food/food.model';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}


  findAll(options: Prisma.FoodFindManyArgs) {
    return this.prisma.food.findMany(options);
  }

  paginatedFindAll(
    options: PaginateOptions = {
      page: 1,
      perPage: 10,
    },
  ): Promise<PaginatedResult<Food>> {
    const paginate = createPaginator(options);
    return paginate<Food, Prisma.FoodFindManyArgs>(this.prisma.food);
  }

  findOne(id: string): Promise<Food> {
    return this.prisma.food.findUnique({ where: { id } });
  }

  async smartSearch(name: string, limit: number): Promise<any[]> {
    const searchQuery = Prisma.sql`
      SELECT
        f.id,
        f.description,
        CASE
          WHEN bf.id IS NULL THEN ts_rank(fv."searchVector", plainto_tsquery(${name})) * 1.2
          ELSE ts_rank(fv."searchVector", plainto_tsquery(${name}))
        END as rank,
        f."sourceId",
        f."scientificName",
        f."importInfoId",
        f."createdAt",
        f."updatedAt",
        bf.id as "brandedFoodId",
        bf."brandOwner",
        bf."gtinUpc",
        bf.ingredients,
        bf."servingSize",
        bf."servingUnit",
        bf."sourceId" as "brandedSourceId",
        bf."importInfoId" as "brandedImportInfoId",
        CASE WHEN bf.id IS NULL THEN false ELSE true END as "isBranded"
      FROM "FoodSearchVector" fv
      JOIN "Food" f ON f.id = fv."foodId"
      LEFT JOIN "BrandedFood" bf ON bf."foodId" = f.id
      WHERE fv."searchVector" @@ plainto_tsquery(${name})
        OR word_similarity(${name}, f.description) > 0.3
      ORDER BY rank DESC, f.description ASC
      LIMIT ${limit}
    `;

    return this.prisma.$queryRaw(searchQuery);
  }
}
