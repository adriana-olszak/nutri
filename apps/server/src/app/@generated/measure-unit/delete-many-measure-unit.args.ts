import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasureUnitWhereInput } from './measure-unit-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMeasureUnitArgs {

    @Field(() => MeasureUnitWhereInput, {nullable:true})
    @Type(() => MeasureUnitWhereInput)
    where?: MeasureUnitWhereInput;
}
