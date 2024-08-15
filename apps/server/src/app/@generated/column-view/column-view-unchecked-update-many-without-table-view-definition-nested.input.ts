import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnViewCreateWithoutTableViewDefinitionInput } from './column-view-create-without-table-view-definition.input';
import { Type } from 'class-transformer';
import { ColumnViewCreateOrConnectWithoutTableViewDefinitionInput } from './column-view-create-or-connect-without-table-view-definition.input';
import { ColumnViewUpsertWithWhereUniqueWithoutTableViewDefinitionInput } from './column-view-upsert-with-where-unique-without-table-view-definition.input';
import { ColumnViewCreateManyTableViewDefinitionInputEnvelope } from './column-view-create-many-table-view-definition-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ColumnViewWhereUniqueInput } from './column-view-where-unique.input';
import { ColumnViewUpdateWithWhereUniqueWithoutTableViewDefinitionInput } from './column-view-update-with-where-unique-without-table-view-definition.input';
import { ColumnViewUpdateManyWithWhereWithoutTableViewDefinitionInput } from './column-view-update-many-with-where-without-table-view-definition.input';
import { ColumnViewScalarWhereInput } from './column-view-scalar-where.input';

@InputType()
export class ColumnViewUncheckedUpdateManyWithoutTableViewDefinitionNestedInput {

    @Field(() => [ColumnViewCreateWithoutTableViewDefinitionInput], {nullable:true})
    @Type(() => ColumnViewCreateWithoutTableViewDefinitionInput)
    create?: Array<ColumnViewCreateWithoutTableViewDefinitionInput>;

    @Field(() => [ColumnViewCreateOrConnectWithoutTableViewDefinitionInput], {nullable:true})
    @Type(() => ColumnViewCreateOrConnectWithoutTableViewDefinitionInput)
    connectOrCreate?: Array<ColumnViewCreateOrConnectWithoutTableViewDefinitionInput>;

    @Field(() => [ColumnViewUpsertWithWhereUniqueWithoutTableViewDefinitionInput], {nullable:true})
    @Type(() => ColumnViewUpsertWithWhereUniqueWithoutTableViewDefinitionInput)
    upsert?: Array<ColumnViewUpsertWithWhereUniqueWithoutTableViewDefinitionInput>;

    @Field(() => ColumnViewCreateManyTableViewDefinitionInputEnvelope, {nullable:true})
    @Type(() => ColumnViewCreateManyTableViewDefinitionInputEnvelope)
    createMany?: ColumnViewCreateManyTableViewDefinitionInputEnvelope;

    @Field(() => [ColumnViewWhereUniqueInput], {nullable:true})
    @Type(() => ColumnViewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ColumnViewWhereUniqueInput, 'id'>>;

    @Field(() => [ColumnViewWhereUniqueInput], {nullable:true})
    @Type(() => ColumnViewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ColumnViewWhereUniqueInput, 'id'>>;

    @Field(() => [ColumnViewWhereUniqueInput], {nullable:true})
    @Type(() => ColumnViewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ColumnViewWhereUniqueInput, 'id'>>;

    @Field(() => [ColumnViewWhereUniqueInput], {nullable:true})
    @Type(() => ColumnViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ColumnViewWhereUniqueInput, 'id'>>;

    @Field(() => [ColumnViewUpdateWithWhereUniqueWithoutTableViewDefinitionInput], {nullable:true})
    @Type(() => ColumnViewUpdateWithWhereUniqueWithoutTableViewDefinitionInput)
    update?: Array<ColumnViewUpdateWithWhereUniqueWithoutTableViewDefinitionInput>;

    @Field(() => [ColumnViewUpdateManyWithWhereWithoutTableViewDefinitionInput], {nullable:true})
    @Type(() => ColumnViewUpdateManyWithWhereWithoutTableViewDefinitionInput)
    updateMany?: Array<ColumnViewUpdateManyWithWhereWithoutTableViewDefinitionInput>;

    @Field(() => [ColumnViewScalarWhereInput], {nullable:true})
    @Type(() => ColumnViewScalarWhereInput)
    deleteMany?: Array<ColumnViewScalarWhereInput>;
}
