import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutInstructionsInput } from './recipe-update-without-instructions.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutInstructionsInput } from './recipe-create-without-instructions.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutInstructionsInput {

    @Field(() => RecipeUpdateWithoutInstructionsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutInstructionsInput)
    update!: RecipeUpdateWithoutInstructionsInput;

    @Field(() => RecipeCreateWithoutInstructionsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutInstructionsInput)
    create!: RecipeCreateWithoutInstructionsInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
