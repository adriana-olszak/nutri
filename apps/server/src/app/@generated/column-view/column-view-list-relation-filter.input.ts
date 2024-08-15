import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnViewWhereInput } from './column-view-where.input';

@InputType()
export class ColumnViewListRelationFilter {

    @Field(() => ColumnViewWhereInput, {nullable:true})
    every?: ColumnViewWhereInput;

    @Field(() => ColumnViewWhereInput, {nullable:true})
    some?: ColumnViewWhereInput;

    @Field(() => ColumnViewWhereInput, {nullable:true})
    none?: ColumnViewWhereInput;
}
