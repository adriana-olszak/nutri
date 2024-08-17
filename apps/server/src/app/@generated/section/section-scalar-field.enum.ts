import { registerEnumType } from '@nestjs/graphql';

export enum SectionScalarFieldEnum {
    id = "id",
    questionnaireVersionId = "questionnaireVersionId",
    title = "title",
    description = "description",
    order = "order"
}


registerEnumType(SectionScalarFieldEnum, { name: 'SectionScalarFieldEnum', description: undefined })
