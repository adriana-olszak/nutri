import { TableIdTypeEnum } from '../../graphql/enums/table-id-type.enum';
import { TableViewTypeEnum } from '../../graphql/enums/table-view-type.enum';
import { ColumnViewTypeEnum } from '../../graphql/enums/column-view-type.enum';
import { TableViewDefinition } from '../../graphql/models/table-view-definition.model';

export function mapStringToTableIdType(value: string): TableIdTypeEnum {
  return TableIdTypeEnum[value as keyof typeof TableIdTypeEnum];
}

export function mapStringToTableViewType(value: string): TableViewTypeEnum {
  return TableViewTypeEnum[value as keyof typeof TableViewTypeEnum];
}

export function mapStringToColumnViewType(value: string): ColumnViewTypeEnum {
  return ColumnViewTypeEnum[value as keyof typeof ColumnViewTypeEnum];
}

export function mapPrismaToGraphQLTableViewDefinition(prismaTableViewDefinition:any): TableViewDefinition {
  return {
    ...prismaTableViewDefinition,
    tableId: mapStringToTableIdType(prismaTableViewDefinition.tableId),
    tableType: mapStringToTableViewType(prismaTableViewDefinition.tableType),
    columnView: prismaTableViewDefinition.columnView.map((column: any) => ({
      ...column,
      columnType: mapStringToColumnViewType(column.columnType),
    })),
  };
}
