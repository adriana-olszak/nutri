import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutPartsInput } from './recipe-update-without-parts.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutPartsInput } from './recipe-create-without-parts.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutPartsInput {

    @Field(() => RecipeUpdateWithoutPartsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutPartsInput)
    update!: RecipeUpdateWithoutPartsInput;

    @Field(() => RecipeCreateWithoutPartsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutPartsInput)
    create!: RecipeCreateWithoutPartsInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
