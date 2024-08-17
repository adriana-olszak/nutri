import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionWhereInput } from './questionnaire-version-where.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionUpdateWithoutSectionsInput } from './questionnaire-version-update-without-sections.input';

@InputType()
export class QuestionnaireVersionUpdateToOneWithWhereWithoutSectionsInput {

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereInput)
    where?: QuestionnaireVersionWhereInput;

    @Field(() => QuestionnaireVersionUpdateWithoutSectionsInput, {nullable:false})
    @Type(() => QuestionnaireVersionUpdateWithoutSectionsInput)
    data!: QuestionnaireVersionUpdateWithoutSectionsInput;
}
