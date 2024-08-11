import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasureUnitCreateInput } from './measure-unit-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMeasureUnitArgs {

    @Field(() => MeasureUnitCreateInput, {nullable:false})
    @Type(() => MeasureUnitCreateInput)
    data!: MeasureUnitCreateInput;
}
