import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeImageWhereUniqueInput } from './recipe-image-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeImageCreateWithoutRecipeInput } from './recipe-image-create-without-recipe.input';

@InputType()
export class RecipeImageCreateOrConnectWithoutRecipeInput {

    @Field(() => RecipeImageWhereUniqueInput, {nullable:false})
    @Type(() => RecipeImageWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>;

    @Field(() => RecipeImageCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeImageCreateWithoutRecipeInput)
    create!: RecipeImageCreateWithoutRecipeInput;
}
