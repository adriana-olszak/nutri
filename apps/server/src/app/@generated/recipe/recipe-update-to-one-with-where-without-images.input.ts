import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutImagesInput } from './recipe-update-without-images.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutImagesInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutImagesInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutImagesInput)
    data!: RecipeUpdateWithoutImagesInput;
}
