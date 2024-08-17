import { registerEnumType } from '@nestjs/graphql';

export enum SubmissionScalarFieldEnum {
    id = "id",
    questionnaireId = "questionnaireId",
    questionnaireVersionId = "questionnaireVersionId",
    userId = "userId",
    isComplete = "isComplete",
    startedAt = "startedAt",
    completedAt = "completedAt"
}


registerEnumType(SubmissionScalarFieldEnum, { name: 'SubmissionScalarFieldEnum', description: undefined })
