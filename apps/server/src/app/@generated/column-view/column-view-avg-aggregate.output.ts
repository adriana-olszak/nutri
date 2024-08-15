import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ColumnViewAvgAggregate {

    @Field(() => Float, {nullable:true})
    columnId?: number;

    @Field(() => Float, {nullable:true})
    width?: number;
}
