import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TableViewDefinitionWhereUniqueInput } from './table-view-definition-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTableViewDefinitionArgs {

    @Field(() => TableViewDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TableViewDefinitionWhereUniqueInput)
    where!: Prisma.AtLeast<TableViewDefinitionWhereUniqueInput, 'id'>;
}
