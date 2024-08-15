import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateColumnViewInput {
  @Field(() => Int)
  columnId: number;

  @Field(() => String)
  columnType: string;

  @Field(() => Int)
  width: number;

  @Field(() => Boolean)
  visible: boolean;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  filter?: string;
}
