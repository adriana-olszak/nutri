import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateWithoutPartInput } from './recipe-ingredient-create-without-part.input';

@InputType()
export class RecipeIngredientCreateOrConnectWithoutPartInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>;

    @Field(() => RecipeIngredientCreateWithoutPartInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutPartInput)
    create!: RecipeIngredientCreateWithoutPartInput;
}
