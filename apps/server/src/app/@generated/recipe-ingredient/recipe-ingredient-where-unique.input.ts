import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientWhereInput } from './recipe-ingredient-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';
import { RecipePartNullableRelationFilter } from '../recipe-part/recipe-part-nullable-relation-filter.input';
import { FoodRelationFilter } from '../food/food-relation-filter.input';

@InputType()
export class RecipeIngredientWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    AND?: Array<RecipeIngredientWhereInput>;

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    OR?: Array<RecipeIngredientWhereInput>;

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    NOT?: Array<RecipeIngredientWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    partId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    quantity?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    unit?: StringFilter;

    @Field(() => RecipeRelationFilter, {nullable:true})
    recipe?: RecipeRelationFilter;

    @Field(() => RecipePartNullableRelationFilter, {nullable:true})
    part?: RecipePartNullableRelationFilter;

    @Field(() => FoodRelationFilter, {nullable:true})
    food?: FoodRelationFilter;
}
