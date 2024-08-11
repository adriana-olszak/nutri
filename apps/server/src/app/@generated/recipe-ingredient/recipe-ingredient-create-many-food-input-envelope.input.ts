import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateManyFoodInput } from './recipe-ingredient-create-many-food.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeIngredientCreateManyFoodInputEnvelope {

    @Field(() => [RecipeIngredientCreateManyFoodInput], {nullable:false})
    @Type(() => RecipeIngredientCreateManyFoodInput)
    data!: Array<RecipeIngredientCreateManyFoodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
