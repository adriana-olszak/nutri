import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedManyWithoutSeasonsInput } from '../recipe/recipe-create-nested-many-without-seasons.input';

@InputType()
export class SeasonCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeCreateNestedManyWithoutSeasonsInput, {nullable:true})
    recipes?: RecipeCreateNestedManyWithoutSeasonsInput;
}
