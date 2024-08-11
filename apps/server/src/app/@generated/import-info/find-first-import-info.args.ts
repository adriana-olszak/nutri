import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Type } from 'class-transformer';
import { ImportInfoOrderByWithRelationInput } from './import-info-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImportInfoScalarFieldEnum } from './import-info-scalar-field.enum';

@ArgsType()
export class FindFirstImportInfoArgs {

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;

    @Field(() => [ImportInfoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImportInfoOrderByWithRelationInput>;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ImportInfoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImportInfoScalarFieldEnum>;
}
