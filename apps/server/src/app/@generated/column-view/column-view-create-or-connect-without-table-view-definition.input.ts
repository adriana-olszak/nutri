import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ColumnViewWhereUniqueInput } from './column-view-where-unique.input';
import { Type } from 'class-transformer';
import { ColumnViewCreateWithoutTableViewDefinitionInput } from './column-view-create-without-table-view-definition.input';

@InputType()
export class ColumnViewCreateOrConnectWithoutTableViewDefinitionInput {

    @Field(() => ColumnViewWhereUniqueInput, {nullable:false})
    @Type(() => ColumnViewWhereUniqueInput)
    where!: Prisma.AtLeast<ColumnViewWhereUniqueInput, 'id'>;

    @Field(() => ColumnViewCreateWithoutTableViewDefinitionInput, {nullable:false})
    @Type(() => ColumnViewCreateWithoutTableViewDefinitionInput)
    create!: ColumnViewCreateWithoutTableViewDefinitionInput;
}
