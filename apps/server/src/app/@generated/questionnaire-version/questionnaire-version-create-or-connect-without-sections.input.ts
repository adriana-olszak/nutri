import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionCreateWithoutSectionsInput } from './questionnaire-version-create-without-sections.input';

@InputType()
export class QuestionnaireVersionCreateOrConnectWithoutSectionsInput {

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;

    @Field(() => QuestionnaireVersionCreateWithoutSectionsInput, {nullable:false})
    @Type(() => QuestionnaireVersionCreateWithoutSectionsInput)
    create!: QuestionnaireVersionCreateWithoutSectionsInput;
}
