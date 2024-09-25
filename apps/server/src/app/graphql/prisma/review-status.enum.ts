import { registerEnumType } from '@nestjs/graphql';

export enum ReviewStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    NEEDS_FURTHER_REVIEW = "NEEDS_FURTHER_REVIEW",
    MANUAL_SELECTION = "MANUAL_SELECTION"
}


registerEnumType(ReviewStatus, { name: 'ReviewStatus', description: undefined })
