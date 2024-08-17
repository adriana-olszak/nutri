import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Tenant } from '../tenant/tenant.model';
import { QuestionnaireVersion } from '../questionnaire-version/questionnaire-version.model';
import { Submission } from '../submission/submission.model';
import { QuestionnaireCount } from './questionnaire-count.output';

@ObjectType()
export class Questionnaire {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    tenantId!: string | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPublic!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Tenant, {nullable:true})
    tenant?: Tenant | null;

    @Field(() => [QuestionnaireVersion], {nullable:true})
    versions?: Array<QuestionnaireVersion>;

    @Field(() => [Submission], {nullable:true})
    submissions?: Array<Submission>;

    @Field(() => QuestionnaireCount, {nullable:false})
    _count?: QuestionnaireCount;
}
