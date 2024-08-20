import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { QuestionService } from '../services/question.service';
import { QuestionDataLoader } from '../data-loaders/question.data-loader';
import { QuestionCreateInput } from '../../../graphql/inputs/question-create.input';
import { QuestionUpdateInput } from '../../../graphql/inputs/question-update.input';
import { Question } from '../../../graphql/models/question.model';
import { Answer } from '../../../graphql/models/answer.model';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(
    private readonly questionService: QuestionService,
    private readonly questionDataLoader: QuestionDataLoader
  ) {
  }

  @Query(() => Question, { name: 'question' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Question> {
    return this.questionService.findOne(id);
  }

  @Mutation(() => Question)
  async createQuestion(@Args('input') createQuestionInput: QuestionCreateInput): Promise<Question> {
    return this.questionService.create(createQuestionInput);
  }

  @Mutation(() => Question)
  async updateQuestion(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') updateQuestionInput: QuestionUpdateInput
  ): Promise<Question> {
    return this.questionService.update(id, updateQuestionInput);
  }

  @Mutation(() => Question)
  async deleteQuestion(@Args('id', { type: () => ID }) id: string): Promise<Question> {
    return this.questionService.delete(id);
  }

  @ResolveField(() => [Answer])
  async answers(@Parent() question: Question): Promise<Answer[]> {
    return this.questionDataLoader.batchAnswers.load(question.id);
  }
}
