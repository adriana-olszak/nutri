import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@nutri/server-db-client';
import { PaginateOptions, PaginatedResult, createPaginator } from 'prisma-pagination';
import { TableViewDefinition } from '../../graphql/models/table-view-definition.model';

@Injectable()
export class TableViewDefinitionService {
  constructor(private prisma: PrismaService) {
  }

  async create(data: Prisma.TableViewDefinitionCreateInput): Promise<TableViewDefinition> {
    return this.prisma.tableViewDefinition.create({
      data
    });
  }

  paginatedFindAll(
    options: PaginateOptions = {
      page: 1,
      perPage: 10
    },
    sortInput?: Prisma.RecipeOrderByWithRelationInput,
    filterInput?: Prisma.TableViewDefinitionWhereInput
  ): Promise<PaginatedResult<TableViewDefinition>> {
    const paginate = createPaginator(options);
    return paginate<TableViewDefinition, Prisma.TableViewDefinitionFindManyArgs>(
      this.prisma.recipe,
      { orderBy: sortInput, where: filterInput }
    );
  }


  async findOne(
    tableViewDefinitionWhereUniqueInput: Prisma.TableViewDefinitionWhereUniqueInput
  ): Promise<TableViewDefinition | null> {
    return this.prisma.tableViewDefinition.findUnique({
      where: tableViewDefinitionWhereUniqueInput
    });
  }

  async update(params: {
    where: Prisma.TableViewDefinitionWhereUniqueInput;
    data: Prisma.TableViewDefinitionUpdateInput;
  }): Promise<TableViewDefinition> {
    const { where, data } = params;
    return this.prisma.tableViewDefinition.update({
      data,
      where
    });
  }

  async remove(where: Prisma.TableViewDefinitionWhereUniqueInput): Promise<TableViewDefinition> {
    return this.prisma.tableViewDefinition.delete({
      where
    });
  }
}
