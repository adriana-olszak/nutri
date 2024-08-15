import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnViewScalarWhereInput } from './column-view-scalar-where.input';
import { Type } from 'class-transformer';
import { ColumnViewUpdateManyMutationInput } from './column-view-update-many-mutation.input';

@InputType()
export class ColumnViewUpdateManyWithWhereWithoutTableViewDefinitionInput {

    @Field(() => ColumnViewScalarWhereInput, {nullable:false})
    @Type(() => ColumnViewScalarWhereInput)
    where!: ColumnViewScalarWhereInput;

    @Field(() => ColumnViewUpdateManyMutationInput, {nullable:false})
    @Type(() => ColumnViewUpdateManyMutationInput)
    data!: ColumnViewUpdateManyMutationInput;
}
