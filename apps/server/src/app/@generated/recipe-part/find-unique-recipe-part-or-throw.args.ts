import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRecipePartOrThrowArgs {

    @Field(() => RecipePartWhereUniqueInput, {nullable:false})
    @Type(() => RecipePartWhereUniqueInput)
    where!: Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>;
}
