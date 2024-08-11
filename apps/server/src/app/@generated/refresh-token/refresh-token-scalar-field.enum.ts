import { registerEnumType } from '@nestjs/graphql';

export enum RefreshTokenScalarFieldEnum {
    id = "id",
    token = "token",
    userId = "userId",
    familyId = "familyId",
    sessionId = "sessionId",
    expiresAt = "expiresAt",
    used = "used",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RefreshTokenScalarFieldEnum, { name: 'RefreshTokenScalarFieldEnum', description: undefined })
