import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Questionnaire } from '../questionnaire/questionnaire.model';
import { TenantCount } from './tenant-count.output';

@ObjectType()
export class Tenant {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Questionnaire], {nullable:true})
    questionnaires?: Array<Questionnaire>;

    @Field(() => TenantCount, {nullable:false})
    _count?: TenantCount;
}
