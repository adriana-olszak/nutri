import { registerEnumType } from '@nestjs/graphql';

export enum AnswerScalarFieldEnum {
    id = "id",
    submissionId = "submissionId",
    questionId = "questionId",
    value = "value"
}


registerEnumType(AnswerScalarFieldEnum, { name: 'AnswerScalarFieldEnum', description: undefined })
