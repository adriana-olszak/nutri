import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodDataSource } from './food-data-source.enum';

@InputType()
export class EnumFoodDataSourceFieldUpdateOperationsInput {

    @Field(() => FoodDataSource, {nullable:true})
    set?: keyof typeof FoodDataSource;
}
