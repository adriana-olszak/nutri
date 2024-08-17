import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireCreateWithoutVersionsInput } from './questionnaire-create-without-versions.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateOrConnectWithoutVersionsInput } from './questionnaire-create-or-connect-without-versions.input';
import { QuestionnaireUpsertWithoutVersionsInput } from './questionnaire-upsert-without-versions.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';
import { QuestionnaireUpdateToOneWithWhereWithoutVersionsInput } from './questionnaire-update-to-one-with-where-without-versions.input';

@InputType()
export class QuestionnaireUpdateOneRequiredWithoutVersionsNestedInput {

    @Field(() => QuestionnaireCreateWithoutVersionsInput, {nullable:true})
    @Type(() => QuestionnaireCreateWithoutVersionsInput)
    create?: QuestionnaireCreateWithoutVersionsInput;

    @Field(() => QuestionnaireCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => QuestionnaireCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutVersionsInput;

    @Field(() => QuestionnaireUpsertWithoutVersionsInput, {nullable:true})
    @Type(() => QuestionnaireUpsertWithoutVersionsInput)
    upsert?: QuestionnaireUpsertWithoutVersionsInput;

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:true})
    @Type(() => QuestionnaireWhereUniqueInput)
    connect?: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;

    @Field(() => QuestionnaireUpdateToOneWithWhereWithoutVersionsInput, {nullable:true})
    @Type(() => QuestionnaireUpdateToOneWithWhereWithoutVersionsInput)
    update?: QuestionnaireUpdateToOneWithWhereWithoutVersionsInput;
}
