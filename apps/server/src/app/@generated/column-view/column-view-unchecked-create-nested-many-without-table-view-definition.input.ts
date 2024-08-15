import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnViewCreateWithoutTableViewDefinitionInput } from './column-view-create-without-table-view-definition.input';
import { Type } from 'class-transformer';
import { ColumnViewCreateOrConnectWithoutTableViewDefinitionInput } from './column-view-create-or-connect-without-table-view-definition.input';
import { ColumnViewCreateManyTableViewDefinitionInputEnvelope } from './column-view-create-many-table-view-definition-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ColumnViewWhereUniqueInput } from './column-view-where-unique.input';

@InputType()
export class ColumnViewUncheckedCreateNestedManyWithoutTableViewDefinitionInput {

    @Field(() => [ColumnViewCreateWithoutTableViewDefinitionInput], {nullable:true})
    @Type(() => ColumnViewCreateWithoutTableViewDefinitionInput)
    create?: Array<ColumnViewCreateWithoutTableViewDefinitionInput>;

    @Field(() => [ColumnViewCreateOrConnectWithoutTableViewDefinitionInput], {nullable:true})
    @Type(() => ColumnViewCreateOrConnectWithoutTableViewDefinitionInput)
    connectOrCreate?: Array<ColumnViewCreateOrConnectWithoutTableViewDefinitionInput>;

    @Field(() => ColumnViewCreateManyTableViewDefinitionInputEnvelope, {nullable:true})
    @Type(() => ColumnViewCreateManyTableViewDefinitionInputEnvelope)
    createMany?: ColumnViewCreateManyTableViewDefinitionInputEnvelope;

    @Field(() => [ColumnViewWhereUniqueInput], {nullable:true})
    @Type(() => ColumnViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ColumnViewWhereUniqueInput, 'id'>>;
}
