import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionsType } from './recipe-instructions-type.enum';
import { NestedEnumRecipeInstructionsTypeFilter } from './nested-enum-recipe-instructions-type-filter.input';

@InputType()
export class EnumRecipeInstructionsTypeFilter {

    @Field(() => RecipeInstructionsType, {nullable:true})
    equals?: keyof typeof RecipeInstructionsType;

    @Field(() => [RecipeInstructionsType], {nullable:true})
    in?: Array<keyof typeof RecipeInstructionsType>;

    @Field(() => [RecipeInstructionsType], {nullable:true})
    notIn?: Array<keyof typeof RecipeInstructionsType>;

    @Field(() => NestedEnumRecipeInstructionsTypeFilter, {nullable:true})
    not?: NestedEnumRecipeInstructionsTypeFilter;
}
