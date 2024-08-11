import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeCategoryWhereInput } from './recipe-category-where.input';
import { Type } from 'class-transformer';
import { RecipeCategoryOrderByWithRelationInput } from './recipe-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RecipeCategoryWhereUniqueInput } from './recipe-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeCategoryScalarFieldEnum } from './recipe-category-scalar-field.enum';

@ArgsType()
export class FindFirstRecipeCategoryOrThrowArgs {

    @Field(() => RecipeCategoryWhereInput, {nullable:true})
    @Type(() => RecipeCategoryWhereInput)
    where?: RecipeCategoryWhereInput;

    @Field(() => [RecipeCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeCategoryOrderByWithRelationInput>;

    @Field(() => RecipeCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RecipeCategoryScalarFieldEnum>;
}
