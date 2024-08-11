import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipePartCreateWithoutIngredientsInput } from './recipe-part-create-without-ingredients.input';
import { Type } from 'class-transformer';
import { RecipePartCreateOrConnectWithoutIngredientsInput } from './recipe-part-create-or-connect-without-ingredients.input';
import { RecipePartUpsertWithoutIngredientsInput } from './recipe-part-upsert-without-ingredients.input';
import { RecipePartWhereInput } from './recipe-part-where.input';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';
import { RecipePartUpdateToOneWithWhereWithoutIngredientsInput } from './recipe-part-update-to-one-with-where-without-ingredients.input';

@InputType()
export class RecipePartUpdateOneWithoutIngredientsNestedInput {

    @Field(() => RecipePartCreateWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipePartCreateWithoutIngredientsInput)
    create?: RecipePartCreateWithoutIngredientsInput;

    @Field(() => RecipePartCreateOrConnectWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipePartCreateOrConnectWithoutIngredientsInput)
    connectOrCreate?: RecipePartCreateOrConnectWithoutIngredientsInput;

    @Field(() => RecipePartUpsertWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipePartUpsertWithoutIngredientsInput)
    upsert?: RecipePartUpsertWithoutIngredientsInput;

    @Field(() => RecipePartWhereInput, {nullable:true})
    @Type(() => RecipePartWhereInput)
    disconnect?: RecipePartWhereInput;

    @Field(() => RecipePartWhereInput, {nullable:true})
    @Type(() => RecipePartWhereInput)
    delete?: RecipePartWhereInput;

    @Field(() => RecipePartWhereUniqueInput, {nullable:true})
    @Type(() => RecipePartWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>;

    @Field(() => RecipePartUpdateToOneWithWhereWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipePartUpdateToOneWithWhereWithoutIngredientsInput)
    update?: RecipePartUpdateToOneWithWhereWithoutIngredientsInput;
}
