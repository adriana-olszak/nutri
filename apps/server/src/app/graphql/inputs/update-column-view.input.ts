import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateColumnViewInput {
  @Field(() => Int, { nullable: true })
  columnId?: number;

  @Field(() => String, { nullable: true })
  columnType?: string;

  @Field(() => Int, { nullable: true })
  width?: number;

  @Field(() => Boolean, { nullable: true })
  visible?: boolean;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  filter?: string;
}
