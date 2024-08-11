import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUncheckedCreateNestedManyWithoutSeasonsInput } from '../recipe/recipe-unchecked-create-nested-many-without-seasons.input';

@InputType()
export class SeasonUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeUncheckedCreateNestedManyWithoutSeasonsInput, {nullable:true})
    recipes?: RecipeUncheckedCreateNestedManyWithoutSeasonsInput;
}
