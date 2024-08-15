import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnViewCreateManyTableViewDefinitionInput } from './column-view-create-many-table-view-definition.input';
import { Type } from 'class-transformer';

@InputType()
export class ColumnViewCreateManyTableViewDefinitionInputEnvelope {

    @Field(() => [ColumnViewCreateManyTableViewDefinitionInput], {nullable:false})
    @Type(() => ColumnViewCreateManyTableViewDefinitionInput)
    data!: Array<ColumnViewCreateManyTableViewDefinitionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
