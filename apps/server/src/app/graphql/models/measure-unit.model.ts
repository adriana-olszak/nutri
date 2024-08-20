import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class MeasureUnit {
    @Field(() => ID, {nullable:false})
    name!: string;
}
