import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FoodDataSource } from '../prisma/food-data-source.enum';

@ObjectType()
export class ImportInfoMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sourceVersion?: string;

    @Field(() => Date, {nullable:true})
    importDate?: Date | string;

    @Field(() => FoodDataSource, {nullable:true})
    dataSource?: keyof typeof FoodDataSource;
}
