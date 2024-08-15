import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TableViewDefinitionAvgAggregate {

    @Field(() => Float, {nullable:true})
    order?: number;
}
