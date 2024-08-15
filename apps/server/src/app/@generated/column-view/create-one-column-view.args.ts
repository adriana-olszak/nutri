import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnViewCreateInput } from './column-view-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneColumnViewArgs {

    @Field(() => ColumnViewCreateInput, {nullable:false})
    @Type(() => ColumnViewCreateInput)
    data!: ColumnViewCreateInput;
}
