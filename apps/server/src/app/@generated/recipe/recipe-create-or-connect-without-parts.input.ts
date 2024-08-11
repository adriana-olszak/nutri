import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutPartsInput } from './recipe-create-without-parts.input';

@InputType()
export class RecipeCreateOrConnectWithoutPartsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'title'>;

    @Field(() => RecipeCreateWithoutPartsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutPartsInput)
    create!: RecipeCreateWithoutPartsInput;
}
