import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionsType } from './recipe-instructions-type.enum';

@InputType()
export class EnumRecipeInstructionsTypeFieldUpdateOperationsInput {

    @Field(() => RecipeInstructionsType, {nullable:true})
    set?: keyof typeof RecipeInstructionsType;
}
