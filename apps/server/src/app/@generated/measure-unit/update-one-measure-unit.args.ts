import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasureUnitUpdateInput } from './measure-unit-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MeasureUnitWhereUniqueInput } from './measure-unit-where-unique.input';

@ArgsType()
export class UpdateOneMeasureUnitArgs {

    @Field(() => MeasureUnitUpdateInput, {nullable:false})
    @Type(() => MeasureUnitUpdateInput)
    data!: MeasureUnitUpdateInput;

    @Field(() => MeasureUnitWhereUniqueInput, {nullable:false})
    @Type(() => MeasureUnitWhereUniqueInput)
    where!: Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>;
}
