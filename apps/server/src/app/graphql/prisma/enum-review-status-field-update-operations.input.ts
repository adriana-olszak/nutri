import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewStatus } from './review-status.enum';

@InputType()
export class EnumReviewStatusFieldUpdateOperationsInput {

    @Field(() => ReviewStatus, {nullable:true})
    set?: keyof typeof ReviewStatus;
}
