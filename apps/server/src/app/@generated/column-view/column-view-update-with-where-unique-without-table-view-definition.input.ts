import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ColumnViewWhereUniqueInput } from './column-view-where-unique.input';
import { Type } from 'class-transformer';
import { ColumnViewUpdateWithoutTableViewDefinitionInput } from './column-view-update-without-table-view-definition.input';

@InputType()
export class ColumnViewUpdateWithWhereUniqueWithoutTableViewDefinitionInput {

    @Field(() => ColumnViewWhereUniqueInput, {nullable:false})
    @Type(() => ColumnViewWhereUniqueInput)
    where!: Prisma.AtLeast<ColumnViewWhereUniqueInput, 'id'>;

    @Field(() => ColumnViewUpdateWithoutTableViewDefinitionInput, {nullable:false})
    @Type(() => ColumnViewUpdateWithoutTableViewDefinitionInput)
    data!: ColumnViewUpdateWithoutTableViewDefinitionInput;
}
