import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireCreateWithoutSubmissionsInput } from './questionnaire-create-without-submissions.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateOrConnectWithoutSubmissionsInput } from './questionnaire-create-or-connect-without-submissions.input';
import { QuestionnaireUpsertWithoutSubmissionsInput } from './questionnaire-upsert-without-submissions.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';
import { QuestionnaireUpdateToOneWithWhereWithoutSubmissionsInput } from './questionnaire-update-to-one-with-where-without-submissions.input';

@InputType()
export class QuestionnaireUpdateOneRequiredWithoutSubmissionsNestedInput {

    @Field(() => QuestionnaireCreateWithoutSubmissionsInput, {nullable:true})
    @Type(() => QuestionnaireCreateWithoutSubmissionsInput)
    create?: QuestionnaireCreateWithoutSubmissionsInput;

    @Field(() => QuestionnaireCreateOrConnectWithoutSubmissionsInput, {nullable:true})
    @Type(() => QuestionnaireCreateOrConnectWithoutSubmissionsInput)
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutSubmissionsInput;

    @Field(() => QuestionnaireUpsertWithoutSubmissionsInput, {nullable:true})
    @Type(() => QuestionnaireUpsertWithoutSubmissionsInput)
    upsert?: QuestionnaireUpsertWithoutSubmissionsInput;

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:true})
    @Type(() => QuestionnaireWhereUniqueInput)
    connect?: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;

    @Field(() => QuestionnaireUpdateToOneWithWhereWithoutSubmissionsInput, {nullable:true})
    @Type(() => QuestionnaireUpdateToOneWithWhereWithoutSubmissionsInput)
    update?: QuestionnaireUpdateToOneWithWhereWithoutSubmissionsInput;
}
