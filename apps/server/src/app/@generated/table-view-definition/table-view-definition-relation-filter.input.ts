import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableViewDefinitionWhereInput } from './table-view-definition-where.input';

@InputType()
export class TableViewDefinitionRelationFilter {

    @Field(() => TableViewDefinitionWhereInput, {nullable:true})
    is?: TableViewDefinitionWhereInput;

    @Field(() => TableViewDefinitionWhereInput, {nullable:true})
    isNot?: TableViewDefinitionWhereInput;
}
