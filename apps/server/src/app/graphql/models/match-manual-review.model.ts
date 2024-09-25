import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from './user.model';
import { ReviewStatus } from '../prisma/review-status.enum';

@ObjectType()
export class MatchManualReview {

  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  matchId!: string;

  @Field(() => ReviewStatus, { nullable: false })
  reviewStatus!: keyof typeof ReviewStatus;

  @Field(() => String, { nullable: true })
  reviewerId!: string | null;

  @Field(() => String, { nullable: true })
  notes!: string | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;


  @Field(() => User, { nullable: true })
  reviewer?: User | null;
}
