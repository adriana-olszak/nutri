import { registerEnumType } from '@nestjs/graphql';

export enum TokenBlacklistScalarFieldEnum {
    id = "id",
    token = "token",
    expiresAt = "expiresAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TokenBlacklistScalarFieldEnum, { name: 'TokenBlacklistScalarFieldEnum', description: undefined })
