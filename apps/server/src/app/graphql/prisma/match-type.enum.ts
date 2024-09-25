import { registerEnumType } from '@nestjs/graphql';

export enum MatchType {
    AUTOMATIC = "AUTOMATIC",
    MANUAL = "MANUAL"
}


registerEnumType(MatchType, { name: 'MatchType', description: undefined })
