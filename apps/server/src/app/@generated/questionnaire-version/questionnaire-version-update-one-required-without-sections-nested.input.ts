import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireVersionCreateWithoutSectionsInput } from './questionnaire-version-create-without-sections.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionCreateOrConnectWithoutSectionsInput } from './questionnaire-version-create-or-connect-without-sections.input';
import { QuestionnaireVersionUpsertWithoutSectionsInput } from './questionnaire-version-upsert-without-sections.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';
import { QuestionnaireVersionUpdateToOneWithWhereWithoutSectionsInput } from './questionnaire-version-update-to-one-with-where-without-sections.input';

@InputType()
export class QuestionnaireVersionUpdateOneRequiredWithoutSectionsNestedInput {

    @Field(() => QuestionnaireVersionCreateWithoutSectionsInput, {nullable:true})
    @Type(() => QuestionnaireVersionCreateWithoutSectionsInput)
    create?: QuestionnaireVersionCreateWithoutSectionsInput;

    @Field(() => QuestionnaireVersionCreateOrConnectWithoutSectionsInput, {nullable:true})
    @Type(() => QuestionnaireVersionCreateOrConnectWithoutSectionsInput)
    connectOrCreate?: QuestionnaireVersionCreateOrConnectWithoutSectionsInput;

    @Field(() => QuestionnaireVersionUpsertWithoutSectionsInput, {nullable:true})
    @Type(() => QuestionnaireVersionUpsertWithoutSectionsInput)
    upsert?: QuestionnaireVersionUpsertWithoutSectionsInput;

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    connect?: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;

    @Field(() => QuestionnaireVersionUpdateToOneWithWhereWithoutSectionsInput, {nullable:true})
    @Type(() => QuestionnaireVersionUpdateToOneWithWhereWithoutSectionsInput)
    update?: QuestionnaireVersionUpdateToOneWithWhereWithoutSectionsInput;
}
