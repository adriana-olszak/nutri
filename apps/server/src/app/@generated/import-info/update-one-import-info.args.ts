import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImportInfoUpdateInput } from './import-info-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';

@ArgsType()
export class UpdateOneImportInfoArgs {

    @Field(() => ImportInfoUpdateInput, {nullable:false})
    @Type(() => ImportInfoUpdateInput)
    data!: ImportInfoUpdateInput;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:false})
    @Type(() => ImportInfoWhereUniqueInput)
    where!: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;
}
