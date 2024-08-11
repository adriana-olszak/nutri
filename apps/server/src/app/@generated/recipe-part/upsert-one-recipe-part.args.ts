import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';
import { Type } from 'class-transformer';
import { RecipePartCreateInput } from './recipe-part-create.input';
import { RecipePartUpdateInput } from './recipe-part-update.input';

@ArgsType()
export class UpsertOneRecipePartArgs {

    @Field(() => RecipePartWhereUniqueInput, {nullable:false})
    @Type(() => RecipePartWhereUniqueInput)
    where!: Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>;

    @Field(() => RecipePartCreateInput, {nullable:false})
    @Type(() => RecipePartCreateInput)
    create!: RecipePartCreateInput;

    @Field(() => RecipePartUpdateInput, {nullable:false})
    @Type(() => RecipePartUpdateInput)
    update!: RecipePartUpdateInput;
}
