import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MeasureUnitMinAggregate {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    importInfoId?: string;
}
