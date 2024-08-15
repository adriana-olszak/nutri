import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableViewDefinitionCreateInput } from './table-view-definition-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTableViewDefinitionArgs {

    @Field(() => TableViewDefinitionCreateInput, {nullable:false})
    @Type(() => TableViewDefinitionCreateInput)
    data!: TableViewDefinitionCreateInput;
}
