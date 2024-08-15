import { registerEnumType } from '@nestjs/graphql';

export enum TableViewDefinitionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    tableId = "tableId",
    tableType = "tableType",
    name = "name",
    order = "order",
    icon = "icon",
    filters = "filters",
    sorting = "sorting",
    isPreset = "isPreset",
    isShared = "isShared"
}


registerEnumType(TableViewDefinitionScalarFieldEnum, { name: 'TableViewDefinitionScalarFieldEnum', description: undefined })
