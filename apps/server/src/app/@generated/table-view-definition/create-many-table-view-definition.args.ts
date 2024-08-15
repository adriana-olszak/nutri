import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableViewDefinitionCreateManyInput } from './table-view-definition-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTableViewDefinitionArgs {

    @Field(() => [TableViewDefinitionCreateManyInput], {nullable:false})
    @Type(() => TableViewDefinitionCreateManyInput)
    data!: Array<TableViewDefinitionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
