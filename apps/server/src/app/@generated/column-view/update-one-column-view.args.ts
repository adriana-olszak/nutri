import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnViewUpdateInput } from './column-view-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ColumnViewWhereUniqueInput } from './column-view-where-unique.input';

@ArgsType()
export class UpdateOneColumnViewArgs {

    @Field(() => ColumnViewUpdateInput, {nullable:false})
    @Type(() => ColumnViewUpdateInput)
    data!: ColumnViewUpdateInput;

    @Field(() => ColumnViewWhereUniqueInput, {nullable:false})
    @Type(() => ColumnViewWhereUniqueInput)
    where!: Prisma.AtLeast<ColumnViewWhereUniqueInput, 'id'>;
}
