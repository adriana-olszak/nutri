import { registerEnumType } from '@nestjs/graphql';

export enum TranslationScalarFieldEnum {
    id = "id",
    entityType = "entityType",
    entityId = "entityId",
    field = "field",
    value = "value",
    languageCode = "languageCode"
}


registerEnumType(TranslationScalarFieldEnum, { name: 'TranslationScalarFieldEnum', description: undefined })
