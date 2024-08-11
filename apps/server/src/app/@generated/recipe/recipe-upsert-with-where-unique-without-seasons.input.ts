import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutSeasonsInput } from './recipe-update-without-seasons.input';
import { RecipeCreateWithoutSeasonsInput } from './recipe-create-without-seasons.input';

@InputType()
export class RecipeUpsertWithWhereUniqueWithoutSeasonsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeUpdateWithoutSeasonsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutSeasonsInput)
    update!: RecipeUpdateWithoutSeasonsInput;

    @Field(() => RecipeCreateWithoutSeasonsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutSeasonsInput)
    create!: RecipeCreateWithoutSeasonsInput;
}
