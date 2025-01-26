import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ScheduleMatchInput } from '../dto/schedule-match.dto';
import { MatchScheduler } from '../queue/match.scheduler';

@Resolver()
export class MatchResolver {
  constructor(private readonly matchScheduler: MatchScheduler) {}

  @Mutation(() => Boolean)
  async scheduleIngredientMatch(
    @Args('input') input: ScheduleMatchInput,
  ): Promise<boolean> {
    await this.matchScheduler.addMatchJob(
      input.matchId,
      {
        similarityThreshold: input.similarityThreshold,
        maxCandidates: input.maxCandidates,
        priority: input.priority,
      },
    );

    return true;
  }
}
