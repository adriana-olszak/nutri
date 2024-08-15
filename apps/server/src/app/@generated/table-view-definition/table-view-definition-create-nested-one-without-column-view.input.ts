import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableViewDefinitionCreateWithoutColumnViewInput } from './table-view-definition-create-without-column-view.input';
import { Type } from 'class-transformer';
import { TableViewDefinitionCreateOrConnectWithoutColumnViewInput } from './table-view-definition-create-or-connect-without-column-view.input';
import { Prisma } from '@prisma/client';
import { TableViewDefinitionWhereUniqueInput } from './table-view-definition-where-unique.input';

@InputType()
export class TableViewDefinitionCreateNestedOneWithoutColumnViewInput {

    @Field(() => TableViewDefinitionCreateWithoutColumnViewInput, {nullable:true})
    @Type(() => TableViewDefinitionCreateWithoutColumnViewInput)
    create?: TableViewDefinitionCreateWithoutColumnViewInput;

    @Field(() => TableViewDefinitionCreateOrConnectWithoutColumnViewInput, {nullable:true})
    @Type(() => TableViewDefinitionCreateOrConnectWithoutColumnViewInput)
    connectOrCreate?: TableViewDefinitionCreateOrConnectWithoutColumnViewInput;

    @Field(() => TableViewDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TableViewDefinitionWhereUniqueInput)
    connect?: Prisma.AtLeast<TableViewDefinitionWhereUniqueInput, 'id'>;
}
