import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableViewDefinitionUpdateInput } from './table-view-definition-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TableViewDefinitionWhereUniqueInput } from './table-view-definition-where-unique.input';

@ArgsType()
export class UpdateOneTableViewDefinitionArgs {

    @Field(() => TableViewDefinitionUpdateInput, {nullable:false})
    @Type(() => TableViewDefinitionUpdateInput)
    data!: TableViewDefinitionUpdateInput;

    @Field(() => TableViewDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TableViewDefinitionWhereUniqueInput)
    where!: Prisma.AtLeast<TableViewDefinitionWhereUniqueInput, 'id'>;
}
