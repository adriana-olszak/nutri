import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class QuestionnaireVersionQuestionnaireIdVersionNumberCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    questionnaireId!: string;

    @Field(() => Int, {nullable:false})
    versionNumber!: number;
}
