import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImportInfoMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    sourceVersion?: true;

    @Field(() => Boolean, {nullable:true})
    importDate?: true;

    @Field(() => Boolean, {nullable:true})
    dataSource?: true;
}
