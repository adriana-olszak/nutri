import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeCategoryWhereUniqueInput {
    @Field(() => String, {nullable:true})
    name?: string;
}
