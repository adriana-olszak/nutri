import { registerEnumType } from '@nestjs/graphql';

export enum PasswordResetTokenScalarFieldEnum {
    id = "id",
    token = "token",
    userId = "userId",
    expiresAt = "expiresAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PasswordResetTokenScalarFieldEnum, { name: 'PasswordResetTokenScalarFieldEnum', description: undefined })
