import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeImageCreateManyInput } from './recipe-image-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecipeImageArgs {

    @Field(() => [RecipeImageCreateManyInput], {nullable:false})
    @Type(() => RecipeImageCreateManyInput)
    data!: Array<RecipeImageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
