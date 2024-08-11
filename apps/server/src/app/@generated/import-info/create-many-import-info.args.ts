import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImportInfoCreateManyInput } from './import-info-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyImportInfoArgs {

    @Field(() => [ImportInfoCreateManyInput], {nullable:false})
    @Type(() => ImportInfoCreateManyInput)
    data!: Array<ImportInfoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
