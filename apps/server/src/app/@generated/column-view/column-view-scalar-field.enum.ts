import { registerEnumType } from '@nestjs/graphql';

export enum ColumnViewScalarFieldEnum {
    id = "id",
    columnId = "columnId",
    columnType = "columnType",
    width = "width",
    visible = "visible",
    name = "name",
    filter = "filter",
    tableViewDefinitionId = "tableViewDefinitionId"
}


registerEnumType(ColumnViewScalarFieldEnum, { name: 'ColumnViewScalarFieldEnum', description: undefined })
