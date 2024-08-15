import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TableViewDefinitionWhereUniqueInput } from './table-view-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TableViewDefinitionCreateInput } from './table-view-definition-create.input';
import { TableViewDefinitionUpdateInput } from './table-view-definition-update.input';

@ArgsType()
export class UpsertOneTableViewDefinitionArgs {

    @Field(() => TableViewDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TableViewDefinitionWhereUniqueInput)
    where!: Prisma.AtLeast<TableViewDefinitionWhereUniqueInput, 'id'>;

    @Field(() => TableViewDefinitionCreateInput, {nullable:false})
    @Type(() => TableViewDefinitionCreateInput)
    create!: TableViewDefinitionCreateInput;

    @Field(() => TableViewDefinitionUpdateInput, {nullable:false})
    @Type(() => TableViewDefinitionUpdateInput)
    update!: TableViewDefinitionUpdateInput;
}
