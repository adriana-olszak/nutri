import { MatchStatus } from '@prisma/client';
import { IngredientMatchingException } from './base-exception';
import { IngredientMatchingErrorCode } from './error-codes';

export class MatchNotFoundException extends IngredientMatchingException {
  constructor(matchId: string, cause?: unknown) {
    super(
      IngredientMatchingErrorCode.MATCH_NOT_FOUND,
      `Match with id ${matchId} not found`,
      cause
    );
  }
}

export class InvalidMatchStatusException extends IngredientMatchingException {
  constructor(
    currentStatus: MatchStatus,
    expectedStatuses: MatchStatus[],
    cause?: unknown
  ) {
    super(
      IngredientMatchingErrorCode.INVALID_STATUS,
      `Invalid match status: ${currentStatus}. Expected one of: ${expectedStatuses.join(', ')}`,
      cause,
      { currentStatus, expectedStatuses }
    );
  }
}

export class FoodNotFoundException extends IngredientMatchingException {
  constructor(foodId: string, cause?: unknown) {
    super(
      IngredientMatchingErrorCode.FOOD_NOT_FOUND,
      `Food with id ${foodId} not found`,
      cause
    );
  }
}

export class CrossEncodingFailedException extends IngredientMatchingException {
  constructor(text: string, cause?: unknown) {
    super(
      IngredientMatchingErrorCode.CROSS_ENCODING_FAILED,
      `Failed to encode text: ${text}`,
      cause
    );
  }
}

export class NoValidMatchesException extends IngredientMatchingException {
  constructor(ingredientText: string, cause?: unknown, metadata?: Record<string, unknown>) {
    super(
      IngredientMatchingErrorCode.NO_VALID_MATCHES,
      `No valid matches found for ingredient: ${ingredientText}`,
      cause,
      metadata
    );
  }
}

export class NoCandidatesException extends IngredientMatchingException {
  constructor(cause?: unknown, metadata?: Record<string, unknown>) {
    super(
      IngredientMatchingErrorCode.NO_CANDIDATES,
      'No food candidates available for matching',
      cause,
      metadata
    );
  }
}

export class ProcessingFailedException extends IngredientMatchingException {
  constructor(reason: string, cause?: unknown, metadata?: Record<string, unknown>) {
    super(
      IngredientMatchingErrorCode.PROCESSING_FAILED,
      `Match processing failed: ${reason}`,
      cause,
      metadata
    );
  }
}
