import { registerEnumType } from '@nestjs/graphql';

export enum MeasureUnitScalarFieldEnum {
    name = "name",
    importInfoId = "importInfoId"
}


registerEnumType(MeasureUnitScalarFieldEnum, { name: 'MeasureUnitScalarFieldEnum', description: undefined })
