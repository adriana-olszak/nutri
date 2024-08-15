import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutInstructionsInput } from './recipe-update-without-instructions.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutInstructionsInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutInstructionsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutInstructionsInput)
    data!: RecipeUpdateWithoutInstructionsInput;
}
