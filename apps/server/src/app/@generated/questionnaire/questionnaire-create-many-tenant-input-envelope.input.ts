import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireCreateManyTenantInput } from './questionnaire-create-many-tenant.input';
import { Type } from 'class-transformer';

@InputType()
export class QuestionnaireCreateManyTenantInputEnvelope {

    @Field(() => [QuestionnaireCreateManyTenantInput], {nullable:false})
    @Type(() => QuestionnaireCreateManyTenantInput)
    data!: Array<QuestionnaireCreateManyTenantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
