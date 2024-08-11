import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipePartCreateWithoutRecipeInput } from './recipe-part-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipePartCreateOrConnectWithoutRecipeInput } from './recipe-part-create-or-connect-without-recipe.input';
import { RecipePartCreateManyRecipeInputEnvelope } from './recipe-part-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';

@InputType()
export class RecipePartCreateNestedManyWithoutRecipeInput {

    @Field(() => [RecipePartCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipePartCreateWithoutRecipeInput)
    create?: Array<RecipePartCreateWithoutRecipeInput>;

    @Field(() => [RecipePartCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipePartCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipePartCreateOrConnectWithoutRecipeInput>;

    @Field(() => RecipePartCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipePartCreateManyRecipeInputEnvelope)
    createMany?: RecipePartCreateManyRecipeInputEnvelope;

    @Field(() => [RecipePartWhereUniqueInput], {nullable:true})
    @Type(() => RecipePartWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>>;
}
