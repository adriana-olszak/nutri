import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableViewDefinitionWhereInput } from './table-view-definition-where.input';
import { Type } from 'class-transformer';
import { TableViewDefinitionOrderByWithRelationInput } from './table-view-definition-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TableViewDefinitionWhereUniqueInput } from './table-view-definition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TableViewDefinitionScalarFieldEnum } from './table-view-definition-scalar-field.enum';

@ArgsType()
export class FindManyTableViewDefinitionArgs {

    @Field(() => TableViewDefinitionWhereInput, {nullable:true})
    @Type(() => TableViewDefinitionWhereInput)
    where?: TableViewDefinitionWhereInput;

    @Field(() => [TableViewDefinitionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TableViewDefinitionOrderByWithRelationInput>;

    @Field(() => TableViewDefinitionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TableViewDefinitionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TableViewDefinitionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TableViewDefinitionScalarFieldEnum>;
}
