import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MeasureUnitWhereUniqueInput } from './measure-unit-where-unique.input';
import { Type } from 'class-transformer';
import { MeasureUnitCreateInput } from './measure-unit-create.input';
import { MeasureUnitUpdateInput } from './measure-unit-update.input';

@ArgsType()
export class UpsertOneMeasureUnitArgs {

    @Field(() => MeasureUnitWhereUniqueInput, {nullable:false})
    @Type(() => MeasureUnitWhereUniqueInput)
    where!: Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>;

    @Field(() => MeasureUnitCreateInput, {nullable:false})
    @Type(() => MeasureUnitCreateInput)
    create!: MeasureUnitCreateInput;

    @Field(() => MeasureUnitUpdateInput, {nullable:false})
    @Type(() => MeasureUnitUpdateInput)
    update!: MeasureUnitUpdateInput;
}
