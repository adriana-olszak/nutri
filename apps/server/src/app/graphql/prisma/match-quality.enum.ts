import { registerEnumType } from '@nestjs/graphql';

export enum MatchQuality {
    EXACT = "EXACT",
    HIGH = "HIGH",
    MEDIUM = "MEDIUM",
    LOW = "LOW",
    POOR = "POOR"
}


registerEnumType(MatchQuality, { name: 'MatchQuality', description: undefined })
