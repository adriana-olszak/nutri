import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class QuestionnaireVersionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    versionNumber?: true;
}
