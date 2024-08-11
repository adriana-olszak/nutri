import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImportInfoUpdateManyMutationInput } from './import-info-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ImportInfoWhereInput } from './import-info-where.input';

@ArgsType()
export class UpdateManyImportInfoArgs {

    @Field(() => ImportInfoUpdateManyMutationInput, {nullable:false})
    @Type(() => ImportInfoUpdateManyMutationInput)
    data!: ImportInfoUpdateManyMutationInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;
}
