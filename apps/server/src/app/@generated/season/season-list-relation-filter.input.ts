import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeasonWhereInput } from './season-where.input';

@InputType()
export class SeasonListRelationFilter {

    @Field(() => SeasonWhereInput, {nullable:true})
    every?: SeasonWhereInput;

    @Field(() => SeasonWhereInput, {nullable:true})
    some?: SeasonWhereInput;

    @Field(() => SeasonWhereInput, {nullable:true})
    none?: SeasonWhereInput;
}
