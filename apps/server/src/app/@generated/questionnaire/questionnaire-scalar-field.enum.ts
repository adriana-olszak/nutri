import { registerEnumType } from '@nestjs/graphql';

export enum QuestionnaireScalarFieldEnum {
    id = "id",
    tenantId = "tenantId",
    title = "title",
    description = "description",
    isPublic = "isPublic",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(QuestionnaireScalarFieldEnum, { name: 'QuestionnaireScalarFieldEnum', description: undefined })
