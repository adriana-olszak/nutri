import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnViewWhereInput } from './column-view-where.input';
import { Type } from 'class-transformer';
import { ColumnViewOrderByWithRelationInput } from './column-view-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ColumnViewWhereUniqueInput } from './column-view-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ColumnViewScalarFieldEnum } from './column-view-scalar-field.enum';

@ArgsType()
export class FindFirstColumnViewArgs {

    @Field(() => ColumnViewWhereInput, {nullable:true})
    @Type(() => ColumnViewWhereInput)
    where?: ColumnViewWhereInput;

    @Field(() => [ColumnViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ColumnViewOrderByWithRelationInput>;

    @Field(() => ColumnViewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ColumnViewWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ColumnViewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ColumnViewScalarFieldEnum>;
}
