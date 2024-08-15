import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnViewCreateManyInput } from './column-view-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyColumnViewArgs {

    @Field(() => [ColumnViewCreateManyInput], {nullable:false})
    @Type(() => ColumnViewCreateManyInput)
    data!: Array<ColumnViewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
