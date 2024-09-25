import { registerEnumType } from '@nestjs/graphql';

export enum MatchStatus {
    PENDING_MATCH = "PENDING_MATCH",
    AUTO_MATCHING_IN_PROGRESS = "AUTO_MATCHING_IN_PROGRESS",
    AUTO_MATCHING_FAILED = "AUTO_MATCHING_FAILED",
    PENDING_REVIEW = "PENDING_REVIEW",
    IN_REVIEW = "IN_REVIEW",
    AUTO_APPROVED = "AUTO_APPROVED",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    NEEDS_REMATCH = "NEEDS_REMATCH"
}


registerEnumType(MatchStatus, { name: 'MatchStatus', description: undefined })
