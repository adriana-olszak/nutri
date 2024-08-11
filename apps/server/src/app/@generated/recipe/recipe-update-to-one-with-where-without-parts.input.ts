import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutPartsInput } from './recipe-update-without-parts.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutPartsInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutPartsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutPartsInput)
    data!: RecipeUpdateWithoutPartsInput;
}
