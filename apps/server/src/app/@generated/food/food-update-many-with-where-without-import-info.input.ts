import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodScalarWhereInput } from './food-scalar-where.input';
import { Type } from 'class-transformer';
import { FoodUpdateManyMutationInput } from './food-update-many-mutation.input';

@InputType()
export class FoodUpdateManyWithWhereWithoutImportInfoInput {

    @Field(() => FoodScalarWhereInput, {nullable:false})
    @Type(() => FoodScalarWhereInput)
    where!: FoodScalarWhereInput;

    @Field(() => FoodUpdateManyMutationInput, {nullable:false})
    @Type(() => FoodUpdateManyMutationInput)
    data!: FoodUpdateManyMutationInput;
}
