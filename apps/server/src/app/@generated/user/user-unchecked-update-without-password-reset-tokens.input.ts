import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdaterolesInput } from './user-updateroles.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RefreshTokenUncheckedUpdateManyWithoutUserNestedInput } from '../refresh-token/refresh-token-unchecked-update-many-without-user-nested.input';
import { SessionUncheckedUpdateManyWithoutUserNestedInput } from '../session/session-unchecked-update-many-without-user-nested.input';
import { LoginLogUncheckedUpdateManyWithoutUserNestedInput } from '../login-log/login-log-unchecked-update-many-without-user-nested.input';
import { SubmissionUncheckedUpdateManyWithoutUserNestedInput } from '../submission/submission-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutPasswordResetTokensInput {

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

    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => LoginLogUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    loginLogs?: LoginLogUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => SubmissionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput;
}
