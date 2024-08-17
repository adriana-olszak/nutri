import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateManyQuestionnaireVersionInput } from './section-create-many-questionnaire-version.input';
import { Type } from 'class-transformer';

@InputType()
export class SectionCreateManyQuestionnaireVersionInputEnvelope {

    @Field(() => [SectionCreateManyQuestionnaireVersionInput], {nullable:false})
    @Type(() => SectionCreateManyQuestionnaireVersionInput)
    data!: Array<SectionCreateManyQuestionnaireVersionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
