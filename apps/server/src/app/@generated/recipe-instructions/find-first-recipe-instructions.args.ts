import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionsWhereInput } from './recipe-instructions-where.input';
import { Type } from 'class-transformer';
import { RecipeInstructionsOrderByWithRelationInput } from './recipe-instructions-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RecipeInstructionsWhereUniqueInput } from './recipe-instructions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeInstructionsScalarFieldEnum } from './recipe-instructions-scalar-field.enum';

@ArgsType()
export class FindFirstRecipeInstructionsArgs {

    @Field(() => RecipeInstructionsWhereInput, {nullable:true})
    @Type(() => RecipeInstructionsWhereInput)
    where?: RecipeInstructionsWhereInput;

    @Field(() => [RecipeInstructionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeInstructionsOrderByWithRelationInput>;

    @Field(() => RecipeInstructionsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeInstructionsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeInstructionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RecipeInstructionsScalarFieldEnum>;
}
