import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class QuestionnaireVersionSumAggregate {

    @Field(() => Int, {nullable:true})
    versionNumber?: number;
}
