import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@nutri/server-db-client';
import { TableViewDefinition } from '../../graphql/models/table-view-definition.model';
import { createDefaultTableViewDefinitions } from './default-table-view-definition';
import { mapPrismaToGraphQLTableViewDefinition } from './mapper';
import { CreateTableViewDefinitionInput } from '../../graphql/inputs/create-table-view-definition.input';

@Injectable()
export class TableViewDefinitionService {
  constructor(private prisma: PrismaService) {
  }

  async create(data: CreateTableViewDefinitionInput, userId: string): Promise<TableViewDefinition> {
    const res = await this.prisma.tableViewDefinition.create({
      data: {
        filters: data.filters,
        icon: data.icon,
        isPreset: data.isPreset,
        isShared: data.isShared,
        name: data.name,
        order: data.order,
        sorting: data.sorting,
        tableId: data.tableId,
        tableType: data.tableType,
        userId,
        columnView: {
          createMany: {
            data: data.columnView,
          },
        },
      },
      include: {
        columnView: true,
      },
    });

    return mapPrismaToGraphQLTableViewDefinition(res);
  }

  async findAll(userId: string): Promise<TableViewDefinition[]> {
    const existingDefinitions = await this.prisma.tableViewDefinition.findMany({
      where: {
        userId,
      },
      include: {
        columnView: true,
      },
    });

    if (!existingDefinitions.length) {
      const defaultDefinitions = createDefaultTableViewDefinitions();

      const definitions: TableViewDefinition[] = [];
      for (const definition of defaultDefinitions) {
        definitions.push(await this.create(definition, userId));
      }

      return definitions;
    }

    return existingDefinitions.map(mapPrismaToGraphQLTableViewDefinition);
  }

  async findOne(
    tableViewDefinitionWhereUniqueInput: Prisma.TableViewDefinitionWhereUniqueInput,
  ): Promise<TableViewDefinition | null> {
    const res = await this.prisma.tableViewDefinition.findUnique({
      where: tableViewDefinitionWhereUniqueInput,
      include: {
        columnView: true,
      },
    });

    return mapPrismaToGraphQLTableViewDefinition(res);
  }

  async update(params: {
    where: Prisma.TableViewDefinitionWhereUniqueInput;
    data: Prisma.TableViewDefinitionUpdateInput;
  }): Promise<TableViewDefinition> {
    const { where, data } = params;
    const res = await this.prisma.tableViewDefinition.update({
      data,
      where,
      include: {
        columnView: true,
      },
    });

    return mapPrismaToGraphQLTableViewDefinition(res);

  }

  async archive(id: string): Promise<boolean> {
    const result = await this.prisma.tableViewDefinition.delete({
      where: {
        id,
      },
    });

    return !!result;
  }
}
