import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionsType } from './recipe-instructions-type.enum';
import { NestedEnumRecipeInstructionsTypeWithAggregatesFilter } from './nested-enum-recipe-instructions-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRecipeInstructionsTypeFilter } from './nested-enum-recipe-instructions-type-filter.input';

@InputType()
export class EnumRecipeInstructionsTypeWithAggregatesFilter {

    @Field(() => RecipeInstructionsType, {nullable:true})
    equals?: keyof typeof RecipeInstructionsType;

    @Field(() => [RecipeInstructionsType], {nullable:true})
    in?: Array<keyof typeof RecipeInstructionsType>;

    @Field(() => [RecipeInstructionsType], {nullable:true})
    notIn?: Array<keyof typeof RecipeInstructionsType>;

    @Field(() => NestedEnumRecipeInstructionsTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRecipeInstructionsTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRecipeInstructionsTypeFilter, {nullable:true})
    _min?: NestedEnumRecipeInstructionsTypeFilter;

    @Field(() => NestedEnumRecipeInstructionsTypeFilter, {nullable:true})
    _max?: NestedEnumRecipeInstructionsTypeFilter;
}
