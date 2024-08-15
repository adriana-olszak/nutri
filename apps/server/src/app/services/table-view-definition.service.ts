import { Injectable } from '@nestjs/common';
import { TableViewDefinition, Prisma } from '@prisma/client';
import { PrismaService } from '@nutri/server-db-client';

@Injectable()
export class TableViewDefinitionService {
  constructor(private prisma: PrismaService) {
  }

  async create(data: Prisma.TableViewDefinitionCreateInput): Promise<TableViewDefinition> {
    return this.prisma.tableViewDefinition.create({
      data
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TableViewDefinitionWhereUniqueInput;
    where?: Prisma.TableViewDefinitionWhereInput;
    orderBy?: Prisma.TableViewDefinitionOrderByWithRelationInput;
  }): Promise<TableViewDefinition[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.tableViewDefinition.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
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
