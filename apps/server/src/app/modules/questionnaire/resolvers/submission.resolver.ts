import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { SubmissionService } from '../services/submission.service';
import { SubmissionDataLoader } from '../data-loaders/submission.data-loader';
import { SubmissionCreateInput } from '../../../graphql/inputs/submission-create.input';
import { AnswerCreateManyInput } from '../../../graphql/inputs/answer-create-many.input';
import { Answer } from '../../../graphql/models/answer.model';
import { Submission } from '../../../graphql/models/submission.model';

@Resolver(() => Submission)
export class SubmissionResolver {
  constructor(
    private readonly submissionService: SubmissionService,
    private readonly submissionDataLoader: SubmissionDataLoader
  ) {
  }

  @Query(() => Submission, { name: 'submission' })
  async findOne(@Args('id', { type: () => String }) id: string): Promise<Submission> {
    return this.submissionService.findOne(id);
  }

  @Mutation(() => Submission)
  async createSubmission(
    @Args('input') createSubmissionInput: SubmissionCreateInput
  ): Promise<Submission> {
    return this.submissionService.create(createSubmissionInput);
  }

  @Mutation(() => Submission)
  async complete(
    @Args('id', { type: () => String }) id: string
  ): Promise<Submission> {
    return this.submissionService.complete(id);
  }

  @Mutation(() => Answer)
  async submitAnswer(@Args('input') submitAnswerInput: AnswerCreateManyInput): Promise<Answer> {
    return this.submissionService.submitAnswer(submitAnswerInput);
  }

  @Mutation(() => Submission)
  async submitAllAnswers(
    @Args('submissionId', { type: () => String }) submissionId: string,
    @Args('answers', { type: () => [AnswerCreateManyInput] }) answers: AnswerCreateManyInput[]
  ): Promise<Submission> {
    return this.submissionService.submitAllAnswers(submissionId, answers);
  }

  @ResolveField(() => [Answer])
  async answers(@Parent() submission: Submission): Promise<Answer[]> {
    return this.submissionDataLoader.batchAnswers.load(submission.id);
  }
}
