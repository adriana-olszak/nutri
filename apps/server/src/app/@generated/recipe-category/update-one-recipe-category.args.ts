import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeCategoryUpdateInput } from './recipe-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RecipeCategoryWhereUniqueInput } from './recipe-category-where-unique.input';

@ArgsType()
export class UpdateOneRecipeCategoryArgs {

    @Field(() => RecipeCategoryUpdateInput, {nullable:false})
    @Type(() => RecipeCategoryUpdateInput)
    data!: RecipeCategoryUpdateInput;

    @Field(() => RecipeCategoryWhereUniqueInput, {nullable:false})
    @Type(() => RecipeCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>;
}
