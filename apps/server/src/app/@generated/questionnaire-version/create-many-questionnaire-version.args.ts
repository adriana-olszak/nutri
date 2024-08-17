import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireVersionCreateManyInput } from './questionnaire-version-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyQuestionnaireVersionArgs {

    @Field(() => [QuestionnaireVersionCreateManyInput], {nullable:false})
    @Type(() => QuestionnaireVersionCreateManyInput)
    data!: Array<QuestionnaireVersionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
