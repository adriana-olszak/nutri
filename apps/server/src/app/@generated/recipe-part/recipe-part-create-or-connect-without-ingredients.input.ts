import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';
import { Type } from 'class-transformer';
import { RecipePartCreateWithoutIngredientsInput } from './recipe-part-create-without-ingredients.input';

@InputType()
export class RecipePartCreateOrConnectWithoutIngredientsInput {

    @Field(() => RecipePartWhereUniqueInput, {nullable:false})
    @Type(() => RecipePartWhereUniqueInput)
    where!: Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>;

    @Field(() => RecipePartCreateWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipePartCreateWithoutIngredientsInput)
    create!: RecipePartCreateWithoutIngredientsInput;
}
