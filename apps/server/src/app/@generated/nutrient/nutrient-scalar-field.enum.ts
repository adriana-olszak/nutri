import { registerEnumType } from '@nestjs/graphql';

export enum NutrientScalarFieldEnum {
    id = "id",
    name = "name",
    unitName = "unitName",
    sourceId = "sourceId",
    importInfoId = "importInfoId"
}


registerEnumType(NutrientScalarFieldEnum, { name: 'NutrientScalarFieldEnum', description: undefined })
