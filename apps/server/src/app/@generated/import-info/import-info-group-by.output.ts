import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FoodDataSource } from '../prisma/food-data-source.enum';
import { ImportInfoCountAggregate } from './import-info-count-aggregate.output';
import { ImportInfoMinAggregate } from './import-info-min-aggregate.output';
import { ImportInfoMaxAggregate } from './import-info-max-aggregate.output';

@ObjectType()
export class ImportInfoGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sourceVersion!: string;

    @Field(() => Date, {nullable:false})
    importDate!: Date | string;

    @Field(() => FoodDataSource, {nullable:false})
    dataSource!: keyof typeof FoodDataSource;

    @Field(() => ImportInfoCountAggregate, {nullable:true})
    _count?: ImportInfoCountAggregate;

    @Field(() => ImportInfoMinAggregate, {nullable:true})
    _min?: ImportInfoMinAggregate;

    @Field(() => ImportInfoMaxAggregate, {nullable:true})
    _max?: ImportInfoMaxAggregate;
}
