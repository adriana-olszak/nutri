import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasureUnitUpdateManyMutationInput } from './measure-unit-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MeasureUnitWhereInput } from './measure-unit-where.input';

@ArgsType()
export class UpdateManyMeasureUnitArgs {

    @Field(() => MeasureUnitUpdateManyMutationInput, {nullable:false})
    @Type(() => MeasureUnitUpdateManyMutationInput)
    data!: MeasureUnitUpdateManyMutationInput;

    @Field(() => MeasureUnitWhereInput, {nullable:true})
    @Type(() => MeasureUnitWhereInput)
    where?: MeasureUnitWhereInput;
}
