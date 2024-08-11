import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryCreateManyParentCategoryInput } from './food-category-create-many-parent-category.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodCategoryCreateManyParentCategoryInputEnvelope {

    @Field(() => [FoodCategoryCreateManyParentCategoryInput], {nullable:false})
    @Type(() => FoodCategoryCreateManyParentCategoryInput)
    data!: Array<FoodCategoryCreateManyParentCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
