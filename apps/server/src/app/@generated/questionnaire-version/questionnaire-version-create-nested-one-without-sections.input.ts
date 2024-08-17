import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionCreateWithoutSectionsInput } from './questionnaire-version-create-without-sections.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionCreateOrConnectWithoutSectionsInput } from './questionnaire-version-create-or-connect-without-sections.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';

@InputType()
export class QuestionnaireVersionCreateNestedOneWithoutSectionsInput {

    @Field(() => QuestionnaireVersionCreateWithoutSectionsInput, {nullable:true})
    @Type(() => QuestionnaireVersionCreateWithoutSectionsInput)
    create?: QuestionnaireVersionCreateWithoutSectionsInput;

    @Field(() => QuestionnaireVersionCreateOrConnectWithoutSectionsInput, {nullable:true})
    @Type(() => QuestionnaireVersionCreateOrConnectWithoutSectionsInput)
    connectOrCreate?: QuestionnaireVersionCreateOrConnectWithoutSectionsInput;

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    connect?: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;
}
