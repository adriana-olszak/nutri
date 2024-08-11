import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasureUnitWhereInput } from './measure-unit-where.input';
import { Type } from 'class-transformer';
import { MeasureUnitOrderByWithRelationInput } from './measure-unit-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MeasureUnitWhereUniqueInput } from './measure-unit-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MeasureUnitScalarFieldEnum } from './measure-unit-scalar-field.enum';

@ArgsType()
export class FindManyMeasureUnitArgs {

    @Field(() => MeasureUnitWhereInput, {nullable:true})
    @Type(() => MeasureUnitWhereInput)
    where?: MeasureUnitWhereInput;

    @Field(() => [MeasureUnitOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MeasureUnitOrderByWithRelationInput>;

    @Field(() => MeasureUnitWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MeasureUnitScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MeasureUnitScalarFieldEnum>;
}
