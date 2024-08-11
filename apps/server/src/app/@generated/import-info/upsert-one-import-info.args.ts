import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateInput } from './import-info-create.input';
import { ImportInfoUpdateInput } from './import-info-update.input';

@ArgsType()
export class UpsertOneImportInfoArgs {

    @Field(() => ImportInfoWhereUniqueInput, {nullable:false})
    @Type(() => ImportInfoWhereUniqueInput)
    where!: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoCreateInput, {nullable:false})
    @Type(() => ImportInfoCreateInput)
    create!: ImportInfoCreateInput;

    @Field(() => ImportInfoUpdateInput, {nullable:false})
    @Type(() => ImportInfoUpdateInput)
    update!: ImportInfoUpdateInput;
}
