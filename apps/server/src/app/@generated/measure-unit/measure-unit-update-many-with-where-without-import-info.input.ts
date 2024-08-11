import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasureUnitScalarWhereInput } from './measure-unit-scalar-where.input';
import { Type } from 'class-transformer';
import { MeasureUnitUpdateManyMutationInput } from './measure-unit-update-many-mutation.input';

@InputType()
export class MeasureUnitUpdateManyWithWhereWithoutImportInfoInput {

    @Field(() => MeasureUnitScalarWhereInput, {nullable:false})
    @Type(() => MeasureUnitScalarWhereInput)
    where!: MeasureUnitScalarWhereInput;

    @Field(() => MeasureUnitUpdateManyMutationInput, {nullable:false})
    @Type(() => MeasureUnitUpdateManyMutationInput)
    data!: MeasureUnitUpdateManyMutationInput;
}
