import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableViewDefinitionUpdateManyMutationInput } from './table-view-definition-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TableViewDefinitionWhereInput } from './table-view-definition-where.input';

@ArgsType()
export class UpdateManyTableViewDefinitionArgs {

    @Field(() => TableViewDefinitionUpdateManyMutationInput, {nullable:false})
    @Type(() => TableViewDefinitionUpdateManyMutationInput)
    data!: TableViewDefinitionUpdateManyMutationInput;

    @Field(() => TableViewDefinitionWhereInput, {nullable:true})
    @Type(() => TableViewDefinitionWhereInput)
    where?: TableViewDefinitionWhereInput;
}
