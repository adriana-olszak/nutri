import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryScalarWhereInput } from './food-category-scalar-where.input';
import { Type } from 'class-transformer';
import { FoodCategoryUpdateManyMutationInput } from './food-category-update-many-mutation.input';

@InputType()
export class FoodCategoryUpdateManyWithWhereWithoutImportInfoInput {

    @Field(() => FoodCategoryScalarWhereInput, {nullable:false})
    @Type(() => FoodCategoryScalarWhereInput)
    where!: FoodCategoryScalarWhereInput;

    @Field(() => FoodCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodCategoryUpdateManyMutationInput)
    data!: FoodCategoryUpdateManyMutationInput;
}
