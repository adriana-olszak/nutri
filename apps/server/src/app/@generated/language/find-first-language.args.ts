import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageWhereInput } from './language-where.input';
import { Type } from 'class-transformer';
import { LanguageOrderByWithRelationInput } from './language-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LanguageScalarFieldEnum } from './language-scalar-field.enum';

@ArgsType()
export class FindFirstLanguageArgs {

    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    where?: LanguageWhereInput;

    @Field(() => [LanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithRelationInput>;

    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LanguageWhereUniqueInput, 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LanguageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LanguageScalarFieldEnum>;
}
