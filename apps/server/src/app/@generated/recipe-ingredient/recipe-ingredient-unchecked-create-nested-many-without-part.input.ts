import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutPartInput } from './recipe-ingredient-create-without-part.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutPartInput } from './recipe-ingredient-create-or-connect-without-part.input';
import { RecipeIngredientCreateManyPartInputEnvelope } from './recipe-ingredient-create-many-part-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';

@InputType()
export class RecipeIngredientUncheckedCreateNestedManyWithoutPartInput {

    @Field(() => [RecipeIngredientCreateWithoutPartInput], {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutPartInput)
    create?: Array<RecipeIngredientCreateWithoutPartInput>;

    @Field(() => [RecipeIngredientCreateOrConnectWithoutPartInput], {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutPartInput)
    connectOrCreate?: Array<RecipeIngredientCreateOrConnectWithoutPartInput>;

    @Field(() => RecipeIngredientCreateManyPartInputEnvelope, {nullable:true})
    @Type(() => RecipeIngredientCreateManyPartInputEnvelope)
    createMany?: RecipeIngredientCreateManyPartInputEnvelope;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>>;
}
