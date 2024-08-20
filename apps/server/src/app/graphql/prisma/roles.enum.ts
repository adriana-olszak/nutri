import { registerEnumType } from '@nestjs/graphql';

export enum Roles {
    USER = "USER",
    SUPERADMIN = "SUPERADMIN"
}


registerEnumType(Roles, { name: 'Roles', description: undefined })
