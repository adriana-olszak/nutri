import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeImageUpdateInput } from './recipe-image-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RecipeImageWhereUniqueInput } from './recipe-image-where-unique.input';

@ArgsType()
export class UpdateOneRecipeImageArgs {

    @Field(() => RecipeImageUpdateInput, {nullable:false})
    @Type(() => RecipeImageUpdateInput)
    data!: RecipeImageUpdateInput;

    @Field(() => RecipeImageWhereUniqueInput, {nullable:false})
    @Type(() => RecipeImageWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>;
}
