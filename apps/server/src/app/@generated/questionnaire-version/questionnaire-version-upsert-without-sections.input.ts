import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionUpdateWithoutSectionsInput } from './questionnaire-version-update-without-sections.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionCreateWithoutSectionsInput } from './questionnaire-version-create-without-sections.input';
import { QuestionnaireVersionWhereInput } from './questionnaire-version-where.input';

@InputType()
export class QuestionnaireVersionUpsertWithoutSectionsInput {

    @Field(() => QuestionnaireVersionUpdateWithoutSectionsInput, {nullable:false})
    @Type(() => QuestionnaireVersionUpdateWithoutSectionsInput)
    update!: QuestionnaireVersionUpdateWithoutSectionsInput;

    @Field(() => QuestionnaireVersionCreateWithoutSectionsInput, {nullable:false})
    @Type(() => QuestionnaireVersionCreateWithoutSectionsInput)
    create!: QuestionnaireVersionCreateWithoutSectionsInput;

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereInput)
    where?: QuestionnaireVersionWhereInput;
}
