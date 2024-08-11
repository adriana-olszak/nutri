import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoWhereInput } from './import-info-where.input';

@InputType()
export class ImportInfoRelationFilter {

    @Field(() => ImportInfoWhereInput, {nullable:true})
    is?: ImportInfoWhereInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    isNot?: ImportInfoWhereInput;
}
