import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewStatus } from './review-status.enum';

@InputType()
export class NestedEnumReviewStatusFilter {

    @Field(() => ReviewStatus, {nullable:true})
    equals?: keyof typeof ReviewStatus;

    @Field(() => [ReviewStatus], {nullable:true})
    in?: Array<keyof typeof ReviewStatus>;

    @Field(() => [ReviewStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewStatus>;

    @Field(() => NestedEnumReviewStatusFilter, {nullable:true})
    not?: NestedEnumReviewStatusFilter;
}
