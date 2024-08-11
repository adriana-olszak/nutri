import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutIngredientsInput } from './recipe-update-without-ingredients.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutIngredientsInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutIngredientsInput)
    data!: RecipeUpdateWithoutIngredientsInput;
}
