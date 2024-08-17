import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireCreateNestedManyWithoutTenantInput } from '../questionnaire/questionnaire-create-nested-many-without-tenant.input';

@InputType()
export class TenantCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => QuestionnaireCreateNestedManyWithoutTenantInput, {nullable:true})
    questionnaires?: QuestionnaireCreateNestedManyWithoutTenantInput;
}
