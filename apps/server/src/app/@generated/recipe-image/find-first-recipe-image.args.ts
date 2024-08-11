import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeImageWhereInput } from './recipe-image-where.input';
import { Type } from 'class-transformer';
import { RecipeImageOrderByWithRelationInput } from './recipe-image-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RecipeImageWhereUniqueInput } from './recipe-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeImageScalarFieldEnum } from './recipe-image-scalar-field.enum';

@ArgsType()
export class FindFirstRecipeImageArgs {

    @Field(() => RecipeImageWhereInput, {nullable:true})
    @Type(() => RecipeImageWhereInput)
    where?: RecipeImageWhereInput;

    @Field(() => [RecipeImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeImageOrderByWithRelationInput>;

    @Field(() => RecipeImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RecipeImageScalarFieldEnum>;
}
