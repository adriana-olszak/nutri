import { registerEnumType } from '@nestjs/graphql';

export enum SessionScalarFieldEnum {
    id = "id",
    userId = "userId",
    deviceInfo = "deviceInfo",
    ipAddress = "ipAddress",
    lastActiveAt = "lastActiveAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SessionScalarFieldEnum, { name: 'SessionScalarFieldEnum', description: undefined })
