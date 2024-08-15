import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionsWhereInput } from './recipe-instructions-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRecipeInstructionsTypeFilter } from '../prisma/enum-recipe-instructions-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';

@InputType()
export class RecipeInstructionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [RecipeInstructionsWhereInput], {nullable:true})
    AND?: Array<RecipeInstructionsWhereInput>;

    @Field(() => [RecipeInstructionsWhereInput], {nullable:true})
    OR?: Array<RecipeInstructionsWhereInput>;

    @Field(() => [RecipeInstructionsWhereInput], {nullable:true})
    NOT?: Array<RecipeInstructionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => EnumRecipeInstructionsTypeFilter, {nullable:true})
    type?: EnumRecipeInstructionsTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    listIndex?: IntNullableFilter;

    @Field(() => RecipeRelationFilter, {nullable:true})
    recipe?: RecipeRelationFilter;
}
