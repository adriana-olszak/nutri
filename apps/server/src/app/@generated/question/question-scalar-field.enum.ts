import { registerEnumType } from '@nestjs/graphql';

export enum QuestionScalarFieldEnum {
    id = "id",
    sectionId = "sectionId",
    type = "type",
    title = "title",
    description = "description",
    isRequired = "isRequired",
    order = "order",
    config = "config"
}


registerEnumType(QuestionScalarFieldEnum, { name: 'QuestionScalarFieldEnum', description: undefined })
