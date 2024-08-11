import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';
import { Type } from 'class-transformer';
import { RecipePartCreateWithoutRecipeInput } from './recipe-part-create-without-recipe.input';

@InputType()
export class RecipePartCreateOrConnectWithoutRecipeInput {

    @Field(() => RecipePartWhereUniqueInput, {nullable:false})
    @Type(() => RecipePartWhereUniqueInput)
    where!: Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>;

    @Field(() => RecipePartCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipePartCreateWithoutRecipeInput)
    create!: RecipePartCreateWithoutRecipeInput;
}
