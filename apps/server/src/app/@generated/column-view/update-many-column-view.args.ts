import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnViewUpdateManyMutationInput } from './column-view-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ColumnViewWhereInput } from './column-view-where.input';

@ArgsType()
export class UpdateManyColumnViewArgs {

    @Field(() => ColumnViewUpdateManyMutationInput, {nullable:false})
    @Type(() => ColumnViewUpdateManyMutationInput)
    data!: ColumnViewUpdateManyMutationInput;

    @Field(() => ColumnViewWhereInput, {nullable:true})
    @Type(() => ColumnViewWhereInput)
    where?: ColumnViewWhereInput;
}
