import { registerEnumType } from '@nestjs/graphql';

export enum QuestionnaireVersionScalarFieldEnum {
    id = "id",
    questionnaireId = "questionnaireId",
    versionNumber = "versionNumber",
    isActive = "isActive",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(QuestionnaireVersionScalarFieldEnum, { name: 'QuestionnaireVersionScalarFieldEnum', description: undefined })
