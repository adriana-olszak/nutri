import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasureUnitWhereInput } from './measure-unit-where.input';

@InputType()
export class MeasureUnitListRelationFilter {

    @Field(() => MeasureUnitWhereInput, {nullable:true})
    every?: MeasureUnitWhereInput;

    @Field(() => MeasureUnitWhereInput, {nullable:true})
    some?: MeasureUnitWhereInput;

    @Field(() => MeasureUnitWhereInput, {nullable:true})
    none?: MeasureUnitWhereInput;
}
