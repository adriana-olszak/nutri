import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireVersionWhereInput } from './questionnaire-version-where.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionOrderByWithRelationInput } from './questionnaire-version-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';
import { Int } from '@nestjs/graphql';
import { QuestionnaireVersionScalarFieldEnum } from './questionnaire-version-scalar-field.enum';

@ArgsType()
export class FindManyQuestionnaireVersionArgs {

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereInput)
    where?: QuestionnaireVersionWhereInput;

    @Field(() => [QuestionnaireVersionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuestionnaireVersionOrderByWithRelationInput>;

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [QuestionnaireVersionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof QuestionnaireVersionScalarFieldEnum>;
}
