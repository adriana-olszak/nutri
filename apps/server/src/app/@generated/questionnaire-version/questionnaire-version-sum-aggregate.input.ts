import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class QuestionnaireVersionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    versionNumber?: true;
}
