import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireCreateManyInput } from './questionnaire-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyQuestionnaireArgs {

    @Field(() => [QuestionnaireCreateManyInput], {nullable:false})
    @Type(() => QuestionnaireCreateManyInput)
    data!: Array<QuestionnaireCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
