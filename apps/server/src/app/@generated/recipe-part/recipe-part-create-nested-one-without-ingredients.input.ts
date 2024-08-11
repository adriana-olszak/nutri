import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipePartCreateWithoutIngredientsInput } from './recipe-part-create-without-ingredients.input';
import { Type } from 'class-transformer';
import { RecipePartCreateOrConnectWithoutIngredientsInput } from './recipe-part-create-or-connect-without-ingredients.input';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';

@InputType()
export class RecipePartCreateNestedOneWithoutIngredientsInput {

    @Field(() => RecipePartCreateWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipePartCreateWithoutIngredientsInput)
    create?: RecipePartCreateWithoutIngredientsInput;

    @Field(() => RecipePartCreateOrConnectWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipePartCreateOrConnectWithoutIngredientsInput)
    connectOrCreate?: RecipePartCreateOrConnectWithoutIngredientsInput;

    @Field(() => RecipePartWhereUniqueInput, {nullable:true})
    @Type(() => RecipePartWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>;
}
