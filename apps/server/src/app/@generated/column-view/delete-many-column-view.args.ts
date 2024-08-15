import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnViewWhereInput } from './column-view-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyColumnViewArgs {

    @Field(() => ColumnViewWhereInput, {nullable:true})
    @Type(() => ColumnViewWhereInput)
    where?: ColumnViewWhereInput;
}
