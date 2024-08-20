import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubmissionCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId: string;

    @Field(() => String, {nullable:false})
    questionnaireVersionId: string;

    @Field(() => String, {nullable:false})
    questionnaireId: string;
}
