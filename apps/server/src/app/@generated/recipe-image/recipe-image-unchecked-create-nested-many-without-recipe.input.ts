import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeImageCreateWithoutRecipeInput } from './recipe-image-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeImageCreateOrConnectWithoutRecipeInput } from './recipe-image-create-or-connect-without-recipe.input';
import { RecipeImageCreateManyRecipeInputEnvelope } from './recipe-image-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeImageWhereUniqueInput } from './recipe-image-where-unique.input';

@InputType()
export class RecipeImageUncheckedCreateNestedManyWithoutRecipeInput {

    @Field(() => [RecipeImageCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeImageCreateWithoutRecipeInput)
    create?: Array<RecipeImageCreateWithoutRecipeInput>;

    @Field(() => [RecipeImageCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeImageCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeImageCreateOrConnectWithoutRecipeInput>;

    @Field(() => RecipeImageCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeImageCreateManyRecipeInputEnvelope)
    createMany?: RecipeImageCreateManyRecipeInputEnvelope;

    @Field(() => [RecipeImageWhereUniqueInput], {nullable:true})
    @Type(() => RecipeImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>>;
}
