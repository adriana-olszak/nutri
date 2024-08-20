import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class QuestionnaireVersionCreateInput {
    @Field(() => Int, {nullable:false})
    versionNumber!: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

}
