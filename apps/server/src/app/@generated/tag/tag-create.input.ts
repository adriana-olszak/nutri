import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedManyWithoutTagsInput } from '../recipe/recipe-create-nested-many-without-tags.input';

@InputType()
export class TagCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeCreateNestedManyWithoutTagsInput, {nullable:true})
    recipes?: RecipeCreateNestedManyWithoutTagsInput;
}
