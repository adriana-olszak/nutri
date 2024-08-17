import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionWhereInput } from './submission-where.input';
import { Type } from 'class-transformer';
import { SubmissionOrderByWithRelationInput } from './submission-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubmissionScalarFieldEnum } from './submission-scalar-field.enum';

@ArgsType()
export class FindFirstSubmissionArgs {

    @Field(() => SubmissionWhereInput, {nullable:true})
    @Type(() => SubmissionWhereInput)
    where?: SubmissionWhereInput;

    @Field(() => [SubmissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubmissionOrderByWithRelationInput>;

    @Field(() => SubmissionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubmissionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubmissionScalarFieldEnum>;
}
