import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeCategoryCreateManyInput } from './recipe-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecipeCategoryArgs {

    @Field(() => [RecipeCategoryCreateManyInput], {nullable:false})
    @Type(() => RecipeCategoryCreateManyInput)
    data!: Array<RecipeCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
