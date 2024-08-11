import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutImagesInput } from './recipe-create-without-images.input';

@InputType()
export class RecipeCreateOrConnectWithoutImagesInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeCreateWithoutImagesInput, {nullable:false})
    @Type(() => RecipeCreateWithoutImagesInput)
    create!: RecipeCreateWithoutImagesInput;
}
