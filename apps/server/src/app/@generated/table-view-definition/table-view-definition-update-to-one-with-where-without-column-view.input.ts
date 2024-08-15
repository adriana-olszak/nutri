import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableViewDefinitionWhereInput } from './table-view-definition-where.input';
import { Type } from 'class-transformer';
import { TableViewDefinitionUpdateWithoutColumnViewInput } from './table-view-definition-update-without-column-view.input';

@InputType()
export class TableViewDefinitionUpdateToOneWithWhereWithoutColumnViewInput {

    @Field(() => TableViewDefinitionWhereInput, {nullable:true})
    @Type(() => TableViewDefinitionWhereInput)
    where?: TableViewDefinitionWhereInput;

    @Field(() => TableViewDefinitionUpdateWithoutColumnViewInput, {nullable:false})
    @Type(() => TableViewDefinitionUpdateWithoutColumnViewInput)
    data!: TableViewDefinitionUpdateWithoutColumnViewInput;
}
