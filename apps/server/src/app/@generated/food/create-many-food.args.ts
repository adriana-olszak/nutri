import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCreateManyInput } from './food-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFoodArgs {

    @Field(() => [FoodCreateManyInput], {nullable:false})
    @Type(() => FoodCreateManyInput)
    data!: Array<FoodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
