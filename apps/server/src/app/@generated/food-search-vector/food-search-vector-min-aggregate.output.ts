import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FoodSearchVectorMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    foodId?: string;

    @Field(() => String, {nullable:true})
    languageCode?: string;
}
