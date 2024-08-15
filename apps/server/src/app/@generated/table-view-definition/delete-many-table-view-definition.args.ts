import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableViewDefinitionWhereInput } from './table-view-definition-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTableViewDefinitionArgs {

    @Field(() => TableViewDefinitionWhereInput, {nullable:true})
    @Type(() => TableViewDefinitionWhereInput)
    where?: TableViewDefinitionWhereInput;
}
