import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionsCreateManyInput } from './recipe-instructions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecipeInstructionsArgs {

    @Field(() => [RecipeInstructionsCreateManyInput], {nullable:false})
    @Type(() => RecipeInstructionsCreateManyInput)
    data!: Array<RecipeInstructionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
