import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImportInfoCreateInput } from './import-info-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneImportInfoArgs {

    @Field(() => ImportInfoCreateInput, {nullable:false})
    @Type(() => ImportInfoCreateInput)
    data!: ImportInfoCreateInput;
}
