import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NutrientCount {

    @Field(() => Int, {nullable:false})
    foodNutrients?: number;
}
