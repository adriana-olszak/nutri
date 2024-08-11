import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipePartWhereInput } from './recipe-part-where.input';
import { Type } from 'class-transformer';
import { RecipePartOrderByWithRelationInput } from './recipe-part-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipePartScalarFieldEnum } from './recipe-part-scalar-field.enum';

@ArgsType()
export class FindManyRecipePartArgs {

    @Field(() => RecipePartWhereInput, {nullable:true})
    @Type(() => RecipePartWhereInput)
    where?: RecipePartWhereInput;

    @Field(() => [RecipePartOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipePartOrderByWithRelationInput>;

    @Field(() => RecipePartWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipePartScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RecipePartScalarFieldEnum>;
}
