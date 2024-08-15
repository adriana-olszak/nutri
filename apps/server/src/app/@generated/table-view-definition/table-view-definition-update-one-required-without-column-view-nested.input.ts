import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableViewDefinitionCreateWithoutColumnViewInput } from './table-view-definition-create-without-column-view.input';
import { Type } from 'class-transformer';
import { TableViewDefinitionCreateOrConnectWithoutColumnViewInput } from './table-view-definition-create-or-connect-without-column-view.input';
import { TableViewDefinitionUpsertWithoutColumnViewInput } from './table-view-definition-upsert-without-column-view.input';
import { Prisma } from '@prisma/client';
import { TableViewDefinitionWhereUniqueInput } from './table-view-definition-where-unique.input';
import { TableViewDefinitionUpdateToOneWithWhereWithoutColumnViewInput } from './table-view-definition-update-to-one-with-where-without-column-view.input';

@InputType()
export class TableViewDefinitionUpdateOneRequiredWithoutColumnViewNestedInput {

    @Field(() => TableViewDefinitionCreateWithoutColumnViewInput, {nullable:true})
    @Type(() => TableViewDefinitionCreateWithoutColumnViewInput)
    create?: TableViewDefinitionCreateWithoutColumnViewInput;

    @Field(() => TableViewDefinitionCreateOrConnectWithoutColumnViewInput, {nullable:true})
    @Type(() => TableViewDefinitionCreateOrConnectWithoutColumnViewInput)
    connectOrCreate?: TableViewDefinitionCreateOrConnectWithoutColumnViewInput;

    @Field(() => TableViewDefinitionUpsertWithoutColumnViewInput, {nullable:true})
    @Type(() => TableViewDefinitionUpsertWithoutColumnViewInput)
    upsert?: TableViewDefinitionUpsertWithoutColumnViewInput;

    @Field(() => TableViewDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TableViewDefinitionWhereUniqueInput)
    connect?: Prisma.AtLeast<TableViewDefinitionWhereUniqueInput, 'id'>;

    @Field(() => TableViewDefinitionUpdateToOneWithWhereWithoutColumnViewInput, {nullable:true})
    @Type(() => TableViewDefinitionUpdateToOneWithWhereWithoutColumnViewInput)
    update?: TableViewDefinitionUpdateToOneWithWhereWithoutColumnViewInput;
}
