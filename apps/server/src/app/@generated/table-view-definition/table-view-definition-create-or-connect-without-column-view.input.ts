import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TableViewDefinitionWhereUniqueInput } from './table-view-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TableViewDefinitionCreateWithoutColumnViewInput } from './table-view-definition-create-without-column-view.input';

@InputType()
export class TableViewDefinitionCreateOrConnectWithoutColumnViewInput {

    @Field(() => TableViewDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TableViewDefinitionWhereUniqueInput)
    where!: Prisma.AtLeast<TableViewDefinitionWhereUniqueInput, 'id'>;

    @Field(() => TableViewDefinitionCreateWithoutColumnViewInput, {nullable:false})
    @Type(() => TableViewDefinitionCreateWithoutColumnViewInput)
    create!: TableViewDefinitionCreateWithoutColumnViewInput;
}
