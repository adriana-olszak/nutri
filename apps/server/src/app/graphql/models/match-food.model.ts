import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Match } from './match.model';
import { Food } from './food.model';
import { MatchQuality } from '../prisma/match-quality.enum';
import { MatchType } from '../prisma/match-type.enum';

@ObjectType()
export class MatchFood {

  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  matchId!: string;

  @Field(() => String, { nullable: false })
  foodId!: string;

  @Field(() => Int, { nullable: true })
  rank!: number | null;

  @Field(() => Float, { nullable: true })
  confidence!: number | null;

  @Field(() => MatchQuality, { nullable: true })
  matchQuality!: keyof typeof MatchQuality | null;

  @Field(() => MatchType, { nullable: false, defaultValue: 'AUTOMATIC' })
  matchType!: keyof typeof MatchType;

  @Field(() => String, { nullable: true })
  algorithmVersion!: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  algorithmData!: any | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Food, { nullable: false })
  food?: Food;
}
