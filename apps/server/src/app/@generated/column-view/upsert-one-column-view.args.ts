import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ColumnViewWhereUniqueInput } from './column-view-where-unique.input';
import { Type } from 'class-transformer';
import { ColumnViewCreateInput } from './column-view-create.input';
import { ColumnViewUpdateInput } from './column-view-update.input';

@ArgsType()
export class UpsertOneColumnViewArgs {

    @Field(() => ColumnViewWhereUniqueInput, {nullable:false})
    @Type(() => ColumnViewWhereUniqueInput)
    where!: Prisma.AtLeast<ColumnViewWhereUniqueInput, 'id'>;

    @Field(() => ColumnViewCreateInput, {nullable:false})
    @Type(() => ColumnViewCreateInput)
    create!: ColumnViewCreateInput;

    @Field(() => ColumnViewUpdateInput, {nullable:false})
    @Type(() => ColumnViewUpdateInput)
    update!: ColumnViewUpdateInput;
}
