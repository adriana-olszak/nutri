import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewStatus } from './review-status.enum';
import { NestedEnumReviewStatusWithAggregatesFilter } from './nested-enum-review-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReviewStatusFilter } from './nested-enum-review-status-filter.input';

@InputType()
export class EnumReviewStatusWithAggregatesFilter {

    @Field(() => ReviewStatus, {nullable:true})
    equals?: keyof typeof ReviewStatus;

    @Field(() => [ReviewStatus], {nullable:true})
    in?: Array<keyof typeof ReviewStatus>;

    @Field(() => [ReviewStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewStatus>;

    @Field(() => NestedEnumReviewStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReviewStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReviewStatusFilter, {nullable:true})
    _min?: NestedEnumReviewStatusFilter;

    @Field(() => NestedEnumReviewStatusFilter, {nullable:true})
    _max?: NestedEnumReviewStatusFilter;
}
