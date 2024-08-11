import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutTagsInput } from './recipe-update-without-tags.input';

@InputType()
export class RecipeUpdateWithWhereUniqueWithoutTagsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeUpdateWithoutTagsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutTagsInput)
    data!: RecipeUpdateWithoutTagsInput;
}
