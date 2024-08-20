import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Questionnaire } from './questionnaire.model';
import { Section } from './section.model';
import { Submission } from './submission.model';

@ObjectType()
export class QuestionnaireVersion {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    questionnaireId!: string;

    @Field(() => Int, {nullable:false})
    versionNumber!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Questionnaire, {nullable:false})
    questionnaire?: Questionnaire;

    @Field(() => [Section], {nullable:true})
    sections?: Array<Section>;

    @Field(() => [Submission], {nullable:true})
    submissions?: Array<Submission>;

}
