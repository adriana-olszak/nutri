import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutImagesInput } from './recipe-create-without-images.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutImagesInput } from './recipe-create-or-connect-without-images.input';
import { RecipeUpsertWithoutImagesInput } from './recipe-upsert-without-images.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutImagesInput } from './recipe-update-to-one-with-where-without-images.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutImagesNestedInput {

    @Field(() => RecipeCreateWithoutImagesInput, {nullable:true})
    @Type(() => RecipeCreateWithoutImagesInput)
    create?: RecipeCreateWithoutImagesInput;

    @Field(() => RecipeCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutImagesInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutImagesInput;

    @Field(() => RecipeUpsertWithoutImagesInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutImagesInput)
    upsert?: RecipeUpsertWithoutImagesInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutImagesInput)
    update?: RecipeUpdateToOneWithWhereWithoutImagesInput;
}
