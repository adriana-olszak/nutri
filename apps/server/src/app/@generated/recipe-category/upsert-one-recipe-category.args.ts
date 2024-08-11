import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeCategoryWhereUniqueInput } from './recipe-category-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCategoryCreateInput } from './recipe-category-create.input';
import { RecipeCategoryUpdateInput } from './recipe-category-update.input';

@ArgsType()
export class UpsertOneRecipeCategoryArgs {

    @Field(() => RecipeCategoryWhereUniqueInput, {nullable:false})
    @Type(() => RecipeCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RecipeCategoryCreateInput, {nullable:false})
    @Type(() => RecipeCategoryCreateInput)
    create!: RecipeCategoryCreateInput;

    @Field(() => RecipeCategoryUpdateInput, {nullable:false})
    @Type(() => RecipeCategoryUpdateInput)
    update!: RecipeCategoryUpdateInput;
}
