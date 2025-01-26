import { Injectable, Logger } from '@nestjs/common';
import { StatsDService } from '@nutri/server-metrics';
import { EMBEDDING_MODELS, EmbeddingService, LLMConfidence, LLMMatchResult, LLMService } from '@nutri/server-ml';
import {
  MatchFood,
  MatchQuality,
  MatchStatus,
  MatchType
} from '@prisma/client';

import { FoodEmbeddingRepository } from '../repositories/food-embedding.repository';
import { MatchRepository } from '../repositories/match.repository';
import {
  ErrorCodes,
  IngredientMatchingError,
  MatchQualityEvaluation,
  ProcessMatchOptions,
  ProcessMatchResult
} from '../types';
import { SimilarFood } from '../types/embeddings.types';

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
    private readonly embeddingService: EmbeddingService,
    private readonly llmService: LLMService,
    private readonly matchRepository: MatchRepository,
    private readonly foodEmbeddingRepository: FoodEmbeddingRepository,
    private readonly metrics: StatsDService,

  ) {}

  async processMatch(
      matchId: string,
      options?: ProcessMatchOptions,
  ): Promise<ProcessMatchResult> {
    const startTime = Date.now();

    try {
      this.logger.debug('Starting match processing', {
          matchId,
          options,
        });
      const match = await this.matchRepository.getMatchById(matchId);

      // Track ingredient text length for analysis
      this.metrics.histogram('ingredient_matching.text_length', match.ingredientText.length);

      await this.matchRepository.updateMatchStatus({
        id: matchId,
        status: MatchStatus.AUTO_MATCHING_IN_PROGRESS,
      });

      // 1. Generate embedding and find candidates
      const embedding = await this.embeddingService.generateEmbedding(
        match.ingredientText,
        EMBEDDING_MODELS.MINI_LM_L6.name,
      );

      const candidates = await this.foodEmbeddingRepository.findSimilarFoods(
        embedding,
        {
          languageCode: 'en',
          embeddingType: 'sentenceTransformer',
          modelVersion: EMBEDDING_MODELS.MINI_LM_L6.dbname,
          similarityThreshold: options?.similarityThreshold ??
            EMBEDDING_MODELS.MINI_LM_L6.similarityThreshold,
          limit: options?.maxCandidates ?? 100,
        },
      );

      if (candidates.length === 0) {
        await this.handleNoMatches(matchId);
        return {
          matchId,
          status: MatchStatus.PENDING_REVIEW,
        };
      }

      // 2. Get LLM's best match
      const llmResult = await this.llmService.findBestMatch(
        match.ingredientText,
        candidates,
      );

      // 3. Create food matches and process result
      const result = await this.processLLMResult(
        matchId,
        llmResult,
        candidates,
      );

      this.logger.debug('Match processing completed', {
          matchId,
          ingredientText: match.ingredientText,
          llmResultText: llmResult.bestMatch,
          llmConfidence: llmResult.confidence,
          status: result.status,
          processingTime: Date.now() - startTime,
          candidateCount: candidates.length,
        });

      return result;

    } catch (error) {
      return this.handleError(matchId, error);
    }
  }

  private async processLLMResult(
    matchId: string,
    llmResult: LLMMatchResult,
    candidates: SimilarFood[],
  ): Promise<ProcessMatchResult> {
    const {confidence, quality: matchQuality } = this.evaluateMatchQuality(this.getLLMConfidenceScore(llmResult.confidence))
    const [primaryMatch] = await this.matchRepository.createFoodMatches([{
      matchId,
      foodId: llmResult.foodId,
      rank: 1,
      confidence,
      matchQuality,
      matchType: MatchType.AUTOMATIC,
      algorithmData: {
        llmReasoning: llmResult.reasoning,
        originalScore: llmResult.confidence,
      },
    }]);

    if (this.isHighQualityMatch(primaryMatch)) {
      await this.applyAutoMatch(matchId, primaryMatch);
      await this.matchRepository.updateMatchStatus({
        id: matchId,
        status: MatchStatus.AUTO_APPROVED,
      });

      return {
        matchId,
        status: MatchStatus.AUTO_APPROVED,
        selectedFoodMatch: primaryMatch,
      };
    }

    // If LLM match isn't high quality, store top candidates for manual review
    await this.storeTopCandidatesForReview(matchId, candidates);
    await this.matchRepository.updateMatchStatus({
      id: matchId,
      status: MatchStatus.PENDING_REVIEW,
    });

    return {
      matchId,
      status: MatchStatus.PENDING_REVIEW,
    };
  }

  private async storeTopCandidatesForReview(
    matchId: string,
    candidates: SimilarFood[],
  ): Promise<void> {
    const topCandidates = candidates
      .slice(0, 5)
      .map((candidate, index) => ({
        matchId,
        foodId: candidate.id,
        rank: index + 1,
        confidence: candidate.similarity,
        matchQuality: this.evaluateMatchQuality(candidate.similarity).quality,
        matchType: MatchType.AUTOMATIC,
        algorithmData: {
          vectorSimilarity: candidate.similarity,
          categoryId: candidate.categoryId,
          categoryName: candidate.categoryName,
        },
      }));

    await this.matchRepository.createFoodMatches(topCandidates);
  }

  private determineMatchQuality(
    confidence: LLMConfidence,
    similarity: number,
  ): MatchQuality {
    switch (confidence) {
      case LLMConfidence.EXACT:
      case LLMConfidence.HIGH:
        return similarity >= 0.9 ? MatchQuality.EXACT : MatchQuality.HIGH;
      case LLMConfidence.MEDIUM:
        return similarity >= 0.8 ? MatchQuality.HIGH : MatchQuality.MEDIUM;
      case LLMConfidence.LOW:
        return similarity >= 0.7 ? MatchQuality.MEDIUM : MatchQuality.LOW;
      default:
        return MatchQuality.POOR;
    }
  }

  private isHighQualityMatch(match: MatchFood): boolean {
    return match.matchQuality === MatchQuality.HIGH ||
            match.matchQuality === MatchQuality.EXACT;
  }

  private async handleNoMatches(matchId: string): Promise<void> {
    this.logger.warn(`No matches found for match ${matchId}`);
    await this.matchRepository.updateMatchStatus({
      id: matchId,
      status: MatchStatus.PENDING_REVIEW,
    });
  }

  private async handleError(
    matchId: string,
    error: unknown,
  ): Promise<ProcessMatchResult> {
    this.logger.error(`Error processing match ${matchId}`, error);

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

  private getLLMConfidenceScore(confidence: LLMConfidence): number {
      switch (confidence) {
        case LLMConfidence.EXACT: return 1;
        case LLMConfidence.HIGH: return 0.9;
        case LLMConfidence.MEDIUM: return 0.7;
        case LLMConfidence.LOW: return 0.5;
      }
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
}
