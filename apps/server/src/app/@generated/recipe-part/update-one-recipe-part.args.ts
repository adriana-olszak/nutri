import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipePartUpdateInput } from './recipe-part-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';

@ArgsType()
export class UpdateOneRecipePartArgs {

    @Field(() => RecipePartUpdateInput, {nullable:false})
    @Type(() => RecipePartUpdateInput)
    data!: RecipePartUpdateInput;

    @Field(() => RecipePartWhereUniqueInput, {nullable:false})
    @Type(() => RecipePartWhereUniqueInput)
    where!: Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>;
}
