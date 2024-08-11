import { registerEnumType } from '@nestjs/graphql';

export enum LoginLogScalarFieldEnum {
    id = "id",
    userId = "userId",
    success = "success",
    ipAddress = "ipAddress",
    userAgent = "userAgent",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LoginLogScalarFieldEnum, { name: 'LoginLogScalarFieldEnum', description: undefined })
