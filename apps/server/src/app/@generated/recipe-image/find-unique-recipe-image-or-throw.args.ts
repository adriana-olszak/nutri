import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeImageWhereUniqueInput } from './recipe-image-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRecipeImageOrThrowArgs {

    @Field(() => RecipeImageWhereUniqueInput, {nullable:false})
    @Type(() => RecipeImageWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>;
}
