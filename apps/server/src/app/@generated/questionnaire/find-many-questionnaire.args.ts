import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireWhereInput } from './questionnaire-where.input';
import { Type } from 'class-transformer';
import { QuestionnaireOrderByWithRelationInput } from './questionnaire-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';
import { Int } from '@nestjs/graphql';
import { QuestionnaireScalarFieldEnum } from './questionnaire-scalar-field.enum';

@ArgsType()
export class FindManyQuestionnaireArgs {

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    @Type(() => QuestionnaireWhereInput)
    where?: QuestionnaireWhereInput;

    @Field(() => [QuestionnaireOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuestionnaireOrderByWithRelationInput>;

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [QuestionnaireScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof QuestionnaireScalarFieldEnum>;
}
