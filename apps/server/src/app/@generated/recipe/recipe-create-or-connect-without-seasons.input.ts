import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutSeasonsInput } from './recipe-create-without-seasons.input';

@InputType()
export class RecipeCreateOrConnectWithoutSeasonsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeCreateWithoutSeasonsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutSeasonsInput)
    create!: RecipeCreateWithoutSeasonsInput;
}
