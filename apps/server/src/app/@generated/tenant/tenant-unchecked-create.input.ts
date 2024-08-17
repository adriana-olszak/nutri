import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireUncheckedCreateNestedManyWithoutTenantInput } from '../questionnaire/questionnaire-unchecked-create-nested-many-without-tenant.input';

@InputType()
export class TenantUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => QuestionnaireUncheckedCreateNestedManyWithoutTenantInput, {nullable:true})
    questionnaires?: QuestionnaireUncheckedCreateNestedManyWithoutTenantInput;
}
