import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles } from '../prisma/roles.enum';

@InputType()
export class UserUpdaterolesInput {

    @Field(() => [Roles], {nullable:true})
    set?: Array<keyof typeof Roles>;

    @Field(() => [Roles], {nullable:true})
    push?: Array<keyof typeof Roles>;
}
