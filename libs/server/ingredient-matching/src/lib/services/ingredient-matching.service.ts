import { Injectable, Logger } from '@nestjs/common';
import { MLService } from '@nutri/server-ml';
import {
  MatchFood,
  MatchQuality,
  MatchStatus,
  MatchType
} from '@prisma/client';
import { FoodRepository } from '../repositories/food.repository';
import { MatchRepository } from '../repositories/match.repository';
import {
  ErrorCodes,
  IngredientMatchingError,
  MatchEvaluationResult,
  MatchQualityEvaluation,
  ProcessMatchOptions,
  ProcessMatchResult,
  RankedMatch
} from '../types';

@Injectable()
export class IngredientMatchingService {
  logger = new Logger(IngredientMatchingService.name);
  // Quality thresholds for match evaluation
  private readonly qualityThresholds = {
    exact: 0.95,
    high: 0.85,
    medium: 0.75,
    low: 0.6,
  };

  constructor(
    private readonly mlService: MLService,
    private readonly matchRepository: MatchRepository,
    private readonly foodRepository: FoodRepository,
  ) {

  }

  async processMatch(
    matchId: string,
    options?: ProcessMatchOptions,
  ): Promise<ProcessMatchResult> {
    try {
      // Get match details
      const match = await this.matchRepository.getMatchById(matchId);

      // Update status to processing
      await this.matchRepository.updateMatchStatus({
        id: matchId,
        status: MatchStatus.AUTO_MATCHING_IN_PROGRESS,
      });

      // 1. Get food candidates with their embeddings
      const candidates = await this.foodRepository.getFoodCandidatesWithEmbeddings();

      // 2. Use ML service for pure matching operations
      const inputEmbedding = await this.mlService.generateEmbeddings(match.ingredientText);

      // 3. Calculate similarities using ML service
      const matchScores = await Promise.all(
        candidates.map(async candidate => ({
          foodId: candidate.id,
          score: await this.mlService.calculateSimilarity(inputEmbedding, candidate.embedding),
        }))
      );

      // 4. Filter and rank matches
      const rankedMatches = this.rankMatches(matchScores, options?.similarityThreshold);

     try {
       // 5. Apply cross-encoder for top candidates
       const finalMatches = await this.applyCrossEncoder(
         match.ingredientText,
         rankedMatches,
         candidates,
         options?.maxCandidates,
       );

       // Create food matches
       const foodMatches = await this.matchRepository.createFoodMatches(
         finalMatches.map((m, index) => ({
           matchId: matchId,
           foodId: m.foodId,
           rank: index + 1,
           confidence: m.score,
           matchQuality: this.evaluateMatchQuality(m.score).quality,
           matchType: MatchType.AUTOMATIC,
           algorithmVersion: this.mlService.version,
           algorithmData: this.mlService.metadata,
         })),
       );

       // Evaluate results and determine next status
       const evaluation = this.evaluateMatches(foodMatches);

       if (evaluation.selectedFoodMatch) {
         // Apply auto-match if we have a clear winner
         await this.applyAutoMatch(matchId, evaluation.selectedFoodMatch);
       }

       // Update match status based on evaluation
       await this.matchRepository.updateMatchStatus({
         id: matchId,
         status: evaluation.status,
       });

       return {
         matchId,
         status: evaluation.status,
         selectedFoodMatch: evaluation.selectedFoodMatch,
       };
     } catch (error) {
       if (error instanceof IngredientMatchingError) {
        if (error.code === ErrorCodes.NO_VALID_MATCHES) {
          // Handle no valid matches case
          await this.matchRepository.updateMatchStatus({
            id: matchId,
            status: MatchStatus.PENDING_REVIEW,
          });
        }
      }
      throw error;
     }

    } catch (error) {
      this.logger.error(`Error processing match ${matchId}`, error);

      // Update status to failed
      await this.matchRepository.updateMatchStatus({
        id: matchId,
        status: MatchStatus.AUTO_MATCHING_FAILED,
      });

      throw new IngredientMatchingError(
        ErrorCodes.PROCESSING_FAILED,
        `Failed to process match ${matchId}`,
        error,
      );
    }
  }

  private async applyCrossEncoder(
    inputText: string,
    matches: Array<{foodId: string; score: number}>,
    candidates: Array<{id: string; description: string}>,
    maxCandidates = 10,
  ): Promise<Array<{foodId: string; score: number; crossScore: number}>> {
    const topMatches = matches.slice(0, maxCandidates);

    // Get cross-encoder scores for top matches
    const crossEncoderScores = await Promise.all(
      topMatches.map(async match => {
        const candidate = candidates.find(c => c.id === match.foodId);

        if (!candidate) {
          this.logger.warn(
            `Food candidate not found for foodId: ${match.foodId}. Skipping cross-encoding.`,
          );
          throw new IngredientMatchingError(
            ErrorCodes.FOOD_NOT_FOUND,
            `Food candidate not found for foodId: ${match.foodId}`,
          );
        }

        try {
          const crossScore = await this.mlService.crossEncode(
            inputText,
            candidate.description,
          );

          return {
            ...match,
            crossScore,
          };
        } catch (error) {
          this.logger.error(
            `Failed to cross-encode for foodId: ${match.foodId}`,
            error,
          );
          throw new IngredientMatchingError(
            ErrorCodes.CROSS_ENCODING_FAILED,
            `Failed to cross-encode for foodId: ${match.foodId}`,
            error,
          );
        }
      }),
    ).then(results => results.filter((result): result is {
      foodId: string;
      score: number;
      crossScore: number;
    } => result !== null));

    if (crossEncoderScores.length === 0) {
      this.logger.warn('No successful cross-encoder scores obtained');
      throw new IngredientMatchingError(
        ErrorCodes.NO_VALID_MATCHES,
        'No valid matches found after cross-encoding',
      );
    }

    return crossEncoderScores;
  }

  private evaluateMatches(matches: MatchFood[]): MatchEvaluationResult {
    if (matches.length === 0) {
      return {
        status: MatchStatus.PENDING_REVIEW,
        needsReview: true,
      };
    }

    const highConfidenceMatches = matches.filter(
      m => m.matchQuality === MatchQuality.HIGH,
    );

    if (matches.length === 1) {
      const match = matches[0];
      if (match.matchQuality === MatchQuality.HIGH) {
        return {
          status: MatchStatus.AUTO_APPROVED,
          selectedFoodMatch: match,
          needsReview: false,
        };
      }
    }

    if (highConfidenceMatches.length === 1) {
      return {
        status: MatchStatus.AUTO_APPROVED,
        selectedFoodMatch: highConfidenceMatches[0],
        needsReview: false,
      };
    }

    return {
      status: MatchStatus.PENDING_REVIEW,
      needsReview: true,
    };
  }

  private evaluateMatchQuality(score: number): MatchQualityEvaluation {
    if (score >= this.qualityThresholds.exact) {
      return { quality: MatchQuality.EXACT, confidence: score };
    }
    if (score >= this.qualityThresholds.high) {
      return { quality: MatchQuality.HIGH, confidence: score };
    }
    if (score >= this.qualityThresholds.medium) {
      return { quality: MatchQuality.MEDIUM, confidence: score };
    }
    if (score >= this.qualityThresholds.low) {
      return { quality: MatchQuality.LOW, confidence: score };
    }
    return { quality: MatchQuality.POOR, confidence: score };
  }

  private async applyAutoMatch(
    matchId: string,
    foodMatch: MatchFood,
  ): Promise<void> {
    await this.matchRepository.updateSelectedFoodMatch(
      matchId,
      foodMatch.id,
    );

    await this.matchRepository.updateRecipeIngredientsFoodId(
      matchId,
      foodMatch.foodId,
    );
  }

  private rankMatches(
    matches: Array<{foodId: string; score: number}>,
    similarityThreshold = 0.6,
  ): RankedMatch[] {
    // Filter matches below threshold and sort by score
    return matches
      .filter(match => match.score >= similarityThreshold)
      .sort((a, b) => b.score - a.score);
  }
}
