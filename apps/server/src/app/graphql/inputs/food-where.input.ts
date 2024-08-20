import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FoodWhereInput {

    @Field(() => [FoodWhereInput], {nullable:true})
    AND?: Array<FoodWhereInput>;

    @Field(() => [FoodWhereInput], {nullable:true})
    OR?: Array<FoodWhereInput>;

    @Field(() => [FoodWhereInput], {nullable:true})
    NOT?: Array<FoodWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    scientificName?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

}
