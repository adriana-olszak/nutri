import { registerEnumType } from '@nestjs/graphql';

export enum ImportInfoScalarFieldEnum {
    id = "id",
    sourceVersion = "sourceVersion",
    importDate = "importDate",
    dataSource = "dataSource"
}


registerEnumType(ImportInfoScalarFieldEnum, { name: 'ImportInfoScalarFieldEnum', description: undefined })
