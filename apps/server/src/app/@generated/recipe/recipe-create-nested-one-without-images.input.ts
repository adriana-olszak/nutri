import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutImagesInput } from './recipe-create-without-images.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutImagesInput } from './recipe-create-or-connect-without-images.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutImagesInput {

    @Field(() => RecipeCreateWithoutImagesInput, {nullable:true})
    @Type(() => RecipeCreateWithoutImagesInput)
    create?: RecipeCreateWithoutImagesInput;

    @Field(() => RecipeCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutImagesInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutImagesInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;
}
