# Matching and Review Process: User Journey and State Transitions

## Status Enums

```prisma
enum MatchStatus {
  PENDING_MATCH
  AUTO_MATCHING_IN_PROGRESS
  AUTO_MATCHING_FAILED
  PENDING_REVIEW
  IN_REVIEW
  AUTO_APPROVED
  APPROVED
  REJECTED
}

enum ReviewStatus {
  PENDING
  IN_PROGRESS
  APPROVED
  REJECTED
  NEEDS_FURTHER_REVIEW
  MANUAL_SELECTION
}

enum MatchType {
  AUTOMATIC
  MANUAL
}
```

## User Journey and State Transitions

1. **Initial Match Creation**
  - When a new `RecipeIngredient` is created:
    - Create a new `Match` with status `PENDING_MATCH`
  - State: `Match.status = PENDING_MATCH`

2. **Automatic Matching Process**
  - When the matching algorithm starts:
    - Update `Match.status` to `AUTO_MATCHING_IN_PROGRESS`
  - Algorithm runs and creates `MatchFood` entries
  - When matching is complete:
    - If matches found:
      - No matches with HIGH confidence: `Match.status` as `PENDING_REVIEW`
      - Many matches with HIGH confidence: `Match.status` as `PENDING_REVIEW`
      - One match with HIGH confidence:
        - Update `Match.status` to `AUTO_APPROVED`
        - Update `Match.selectedFoodMatch` with `FoodMatch.id`
        - Update `RecipeIngredient.food_id` populated
    - If errors: `Match.status` as `AUTO_MATCHING_FAILED` (for potential manual matching)
    - If no matches found: Keep `Match.status` as `PENDING_REVIEW` (for potential manual matching)
  - State: `Match.status = AUTO_MATCHING_IN_PROGRESS` or `PENDING_REVIEW` or `AUTO_APPROVED` or `AUTO_MATCHING_FAILED`

3. **Manual Review Initiation**
  - When a reviewer selects a match for review:
    - Create a new `MatchManualReview` with `reviewStatus = PENDING`
    - Update `Match.status` to `IN_REVIEW`
  - State: `Match.status = IN_REVIEW`, `MatchManualReview.reviewStatus = PENDING`

4. **Review in Progress**
  - As the reviewer examines the match:
    - Update `MatchManualReview.reviewStatus` to `IN_PROGRESS`
  - State: `Match.status = IN_REVIEW`, `MatchManualReview.reviewStatus = IN_PROGRESS`

5. **Review Completion**
  - Reviewer makes a decision:
    a. Approve:
    - Update `MatchManualReview.reviewStatus` to `APPROVED`
    - Update `Match.status` to `APPROVED`
    - Update `Match.selectedFoodMatch` with `FoodMatch.id`
    - Update `RecipeIngredient.food_id` with `FoodMatch.food_id`
      b. Reject:
    - Update `MatchManualReview.reviewStatus` to `REJECTED`
    - Update `Match.status` to `REJECTED`
      c. Need more information:
    - Update `MatchManualReview.reviewStatus` to `NEEDS_FURTHER_REVIEW`
    - Keep `Match.status` as `IN_REVIEW`
  - State: Varies based on decision

6. **Manual Food Selection**
  - When a reviewer decides to manually select a food:
    - Update `Match.status` to `REJECTED`
  - Reviewer searches for and selects a food:
    - Create a new `MatchFood` entry with `matchType = MANUAL`
    - Set `Match.selectedFoodMatch` to the new `MatchFood.id`
    - Update `RecipeIngredient.food_id` with the selected food's ID
    - Update `MatchManualReview.reviewStatus` to `MANUAL_SELECTION`
  - If the reviewer cancels the manual selection:
    - Keep `Match.status` as `REJECTED`
    - Update `MatchManualReview.reviewStatus` to `NEEDS_FURTHER_REVIEW`
  - State: Varies based on outcome of manual selection

7. **Manual Match Creation**
  - If automatic matching fails, a user can manually create a match:
    - Create new `MatchFood` entry
    - Update `Match.status` to `PENDING_REVIEW`
  - State: `Match.status = PENDING_REVIEW`

## Additional Considerations

1. **Multiple Reviews**: The system allows for multiple `MatchManualReview` entries per `Match`. This can be useful for:
  - Tracking review history
  - Implementing a multi-step review process
  - Allowing for second opinions on difficult matches

2. **Audit Trail**: Consider adding a `changes` field to `MatchManualReview` to log the history of status changes and
   reasons. For manual selections, include details about the selection process.

3. **Performance Considerations**: As the number of matches grows, consider implementing pagination, caching, or
   background processing for match creation and updates to ensure system responsiveness.

4. **User Interface for Manual Selection**: Develop a user-friendly interface for reviewers to search and select foods
   manually. This interface should provide comprehensive food information to aid in accurate selection.

5. **Feedback Loop**: Use data from manual selections and reviews of auto-approved matches to improve the automatic
   matching algorithm over time. Track patterns in manual selections and corrections of auto-approved matches to
   identify areas where the algorithm can be enhanced.

6. **Reporting**: Develop reports to track the frequency and outcomes of auto-approved matches, manual selections, and
   reviewed matches to monitor the overall efficiency of the matching process.

7. **Handling Existing Auto-Matches During Manual Selection**: When a manual selection is made, keep
   existing `MatchFood` entries for record-keeping, but they are effectively superseded by the manually selected match.

8. **Review of Auto-Approved Matches**: Consider implementing a process for occasional review of auto-approved matches
   to ensure the automatic approval process is working correctly. This could involve:
  - Randomly selecting a percentage of auto-approved matches for manual review
  - Tracking the accuracy of auto-approved matches over time
  - Adjusting the confidence threshold for auto-approval based on 
