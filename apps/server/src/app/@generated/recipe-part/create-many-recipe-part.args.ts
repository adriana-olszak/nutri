import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipePartCreateManyInput } from './recipe-part-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecipePartArgs {

    @Field(() => [RecipePartCreateManyInput], {nullable:false})
    @Type(() => RecipePartCreateManyInput)
    data!: Array<RecipePartCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
