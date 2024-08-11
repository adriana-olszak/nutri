import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeImageCreateManyRecipeInput } from './recipe-image-create-many-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeImageCreateManyRecipeInputEnvelope {

    @Field(() => [RecipeImageCreateManyRecipeInput], {nullable:false})
    @Type(() => RecipeImageCreateManyRecipeInput)
    data!: Array<RecipeImageCreateManyRecipeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
