import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeCategoryWhereUniqueInput } from './recipe-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRecipeCategoryArgs {

    @Field(() => RecipeCategoryWhereUniqueInput, {nullable:false})
    @Type(() => RecipeCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>;
}
