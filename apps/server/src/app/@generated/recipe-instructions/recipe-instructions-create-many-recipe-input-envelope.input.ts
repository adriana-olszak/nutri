import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionsCreateManyRecipeInput } from './recipe-instructions-create-many-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeInstructionsCreateManyRecipeInputEnvelope {

    @Field(() => [RecipeInstructionsCreateManyRecipeInput], {nullable:false})
    @Type(() => RecipeInstructionsCreateManyRecipeInput)
    data!: Array<RecipeInstructionsCreateManyRecipeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
