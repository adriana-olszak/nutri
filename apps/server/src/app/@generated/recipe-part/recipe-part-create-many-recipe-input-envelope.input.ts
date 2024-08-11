import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipePartCreateManyRecipeInput } from './recipe-part-create-many-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipePartCreateManyRecipeInputEnvelope {

    @Field(() => [RecipePartCreateManyRecipeInput], {nullable:false})
    @Type(() => RecipePartCreateManyRecipeInput)
    data!: Array<RecipePartCreateManyRecipeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
