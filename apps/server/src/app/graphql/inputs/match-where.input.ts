import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { EnumMatchStatusFilter } from '../prisma/enum-match-status-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class MatchWhereInput {

  @Field(() => [MatchWhereInput], { nullable: true })
  AND?: Array<MatchWhereInput>;

  @Field(() => [MatchWhereInput], { nullable: true })
  OR?: Array<MatchWhereInput>;

  @Field(() => [MatchWhereInput], { nullable: true })
  NOT?: Array<MatchWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => EnumMatchStatusFilter, { nullable: true })
  status?: EnumMatchStatusFilter;

  @Field(() => StringFilter, { nullable: true })
  ingredientText?: StringFilter;

  @Field(() => UuidNullableFilter, { nullable: true })
  selectedFoodMatchId?: UuidNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

}
