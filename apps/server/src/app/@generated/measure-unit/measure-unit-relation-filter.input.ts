import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasureUnitWhereInput } from './measure-unit-where.input';

@InputType()
export class MeasureUnitRelationFilter {

    @Field(() => MeasureUnitWhereInput, {nullable:true})
    is?: MeasureUnitWhereInput;

    @Field(() => MeasureUnitWhereInput, {nullable:true})
    isNot?: MeasureUnitWhereInput;
}
