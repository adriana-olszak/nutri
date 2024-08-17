import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateManySectionInput } from './question-create-many-section.input';
import { Type } from 'class-transformer';

@InputType()
export class QuestionCreateManySectionInputEnvelope {

    @Field(() => [QuestionCreateManySectionInput], {nullable:false})
    @Type(() => QuestionCreateManySectionInput)
    data!: Array<QuestionCreateManySectionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
