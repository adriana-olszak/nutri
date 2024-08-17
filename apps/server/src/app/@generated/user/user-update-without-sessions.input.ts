import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdaterolesInput } from './user-updateroles.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RefreshTokenUpdateManyWithoutUserNestedInput } from '../refresh-token/refresh-token-update-many-without-user-nested.input';
import { LoginLogUpdateManyWithoutUserNestedInput } from '../login-log/login-log-update-many-without-user-nested.input';
import { PasswordResetTokenUpdateManyWithoutUserNestedInput } from '../password-reset-token/password-reset-token-update-many-without-user-nested.input';
import { SubmissionUpdateManyWithoutUserNestedInput } from '../submission/submission-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutSessionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdaterolesInput, {nullable:true})
    roles?: UserUpdaterolesInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    googleProfile?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;

    @Field(() => LoginLogUpdateManyWithoutUserNestedInput, {nullable:true})
    loginLogs?: LoginLogUpdateManyWithoutUserNestedInput;

    @Field(() => PasswordResetTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput;

    @Field(() => SubmissionUpdateManyWithoutUserNestedInput, {nullable:true})
    submissions?: SubmissionUpdateManyWithoutUserNestedInput;
}
