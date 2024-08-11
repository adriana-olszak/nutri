import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutIngredientsInput } from './recipe-create-without-ingredients.input';

@InputType()
export class RecipeCreateOrConnectWithoutIngredientsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeCreateWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutIngredientsInput)
    create!: RecipeCreateWithoutIngredientsInput;
}
