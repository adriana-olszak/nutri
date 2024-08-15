import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableViewDefinitionUpdateWithoutColumnViewInput } from './table-view-definition-update-without-column-view.input';
import { Type } from 'class-transformer';
import { TableViewDefinitionCreateWithoutColumnViewInput } from './table-view-definition-create-without-column-view.input';
import { TableViewDefinitionWhereInput } from './table-view-definition-where.input';

@InputType()
export class TableViewDefinitionUpsertWithoutColumnViewInput {

    @Field(() => TableViewDefinitionUpdateWithoutColumnViewInput, {nullable:false})
    @Type(() => TableViewDefinitionUpdateWithoutColumnViewInput)
    update!: TableViewDefinitionUpdateWithoutColumnViewInput;

    @Field(() => TableViewDefinitionCreateWithoutColumnViewInput, {nullable:false})
    @Type(() => TableViewDefinitionCreateWithoutColumnViewInput)
    create!: TableViewDefinitionCreateWithoutColumnViewInput;

    @Field(() => TableViewDefinitionWhereInput, {nullable:true})
    @Type(() => TableViewDefinitionWhereInput)
    where?: TableViewDefinitionWhereInput;
}
