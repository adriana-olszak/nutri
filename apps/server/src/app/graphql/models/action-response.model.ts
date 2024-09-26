import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ActionResponseModel {
  @Field(() => Boolean)
  accepted!: boolean;
}
