import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Submission } from '../../../@generated/submission/submission.model';
import { Answer } from '../../../@generated/answer/answer.model';
import { SubmissionService } from '../services/submission.service';
import { SubmissionDataLoader } from '../data-loaders/submission.data-loader';
import { SubmissionCreateInput } from '../../../@generated/submission/submission-create.input';
import { AnswerCreateManyInput } from '../../../@generated/answer/answer-create-many.input';
import { SubmissionUpdateInput } from '../../../@generated/submission/submission-update.input';

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
  async createSubmission(@Args('input') createSubmissionInput: SubmissionCreateInput): Promise<Submission> {
    return this.submissionService.create(createSubmissionInput);
  }

  @Mutation(() => Submission)
  async updateSubmission(
    @Args('id', { type: () => String }) id: string,
    @Args('input') updateSubmissionInput: SubmissionUpdateInput
  ): Promise<Submission> {
    return this.submissionService.update(id, updateSubmissionInput);
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
