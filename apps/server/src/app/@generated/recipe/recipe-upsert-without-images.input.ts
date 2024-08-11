import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutImagesInput } from './recipe-update-without-images.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutImagesInput } from './recipe-create-without-images.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutImagesInput {

    @Field(() => RecipeUpdateWithoutImagesInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutImagesInput)
    update!: RecipeUpdateWithoutImagesInput;

    @Field(() => RecipeCreateWithoutImagesInput, {nullable:false})
    @Type(() => RecipeCreateWithoutImagesInput)
    create!: RecipeCreateWithoutImagesInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
