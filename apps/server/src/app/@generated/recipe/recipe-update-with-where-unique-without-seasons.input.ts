import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutSeasonsInput } from './recipe-update-without-seasons.input';

@InputType()
export class RecipeUpdateWithWhereUniqueWithoutSeasonsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeUpdateWithoutSeasonsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutSeasonsInput)
    data!: RecipeUpdateWithoutSeasonsInput;
}
