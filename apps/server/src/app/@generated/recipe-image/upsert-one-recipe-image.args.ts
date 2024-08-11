import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeImageWhereUniqueInput } from './recipe-image-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeImageCreateInput } from './recipe-image-create.input';
import { RecipeImageUpdateInput } from './recipe-image-update.input';

@ArgsType()
export class UpsertOneRecipeImageArgs {

    @Field(() => RecipeImageWhereUniqueInput, {nullable:false})
    @Type(() => RecipeImageWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>;

    @Field(() => RecipeImageCreateInput, {nullable:false})
    @Type(() => RecipeImageCreateInput)
    create!: RecipeImageCreateInput;

    @Field(() => RecipeImageUpdateInput, {nullable:false})
    @Type(() => RecipeImageUpdateInput)
    update!: RecipeImageUpdateInput;
}
