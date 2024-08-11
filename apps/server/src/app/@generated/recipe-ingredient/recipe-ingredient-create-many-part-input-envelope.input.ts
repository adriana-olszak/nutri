import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateManyPartInput } from './recipe-ingredient-create-many-part.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeIngredientCreateManyPartInputEnvelope {

    @Field(() => [RecipeIngredientCreateManyPartInput], {nullable:false})
    @Type(() => RecipeIngredientCreateManyPartInput)
    data!: Array<RecipeIngredientCreateManyPartInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
