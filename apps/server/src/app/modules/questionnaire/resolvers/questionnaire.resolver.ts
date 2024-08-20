import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PaginationArgs } from '../../../graphql/args/pagination.args';
import { QuestionnaireService } from '../services/questionnaire.service';
import { QuestionnaireDataLoader } from '../data-loaders/questionnaire.data-loader';
import { QuestionnairePaginatedModel } from '../../../graphql/models/questionnaire-paginated.model';

import { Questionnaire } from '../../../graphql/models/questionnaire.model';
import { QuestionnaireVersion } from '../../../graphql/models/questionnaire-version.model';
import { Submission } from '../../../graphql/models/submission.model';
import {
  QuestionnaireOrderByWithRelationInput
} from '../../../graphql/inputs/questionnaire-order-by-with-relation.input';
import { QuestionnaireWhereInput } from '../../../graphql/inputs/questionnaire-where.input';
import { QuestionnaireUpdateInput } from '../../../graphql/inputs/questionnaire-update.input';
import { QuestionnaireCreateInput } from '../../../graphql/inputs/questionnaire-create.input';

@Resolver(() => Questionnaire)
export class QuestionnaireResolver {
  constructor(
    private readonly questionnaireService: QuestionnaireService,
    private readonly questionnaireDataLoader: QuestionnaireDataLoader
  ) {
  }

  @Query(() => Questionnaire, { name: 'questionnaire' })
  async findOne(@Args('id', { type: () => String }) id: string): Promise<Questionnaire> {
    return this.questionnaireService.findOne(id);
  }

  @Query(() => QuestionnairePaginatedModel, { name: 'paginatedQuestionnaires' })
  async paginatedFindAll(@Args({ nullable: true }) options?: PaginationArgs,
                         @Args('sortInput', { nullable: true }) sortInput?: QuestionnaireOrderByWithRelationInput,
                         @Args('filterInput', { nullable: true }) filterInput?: QuestionnaireWhereInput
  ) {
    return this.questionnaireService.paginatedFindAll(
      options,
      sortInput,
      filterInput);
  }

  @Mutation(() => Questionnaire)
  async createQuestionnaire(@Args('input') createQuestionnaireInput: QuestionnaireCreateInput): Promise<Questionnaire> {
    return this.questionnaireService.create(createQuestionnaireInput);
  }

  @Mutation(() => Questionnaire)
  async updateQuestionnaire(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') updateQuestionnaireInput: QuestionnaireUpdateInput
  ): Promise<Questionnaire> {
    return this.questionnaireService.update(id, updateQuestionnaireInput);
  }

  @Mutation(() => Questionnaire)
  async softDeleteQuestionnaire(@Args('id', { type: () => String }) id: string): Promise<Questionnaire> {
    return this.questionnaireService.softDelete(id);
  }

  @ResolveField(() => [QuestionnaireVersion])
  async versions(@Parent() questionnaire: Questionnaire): Promise<QuestionnaireVersion[]> {
    return this.questionnaireDataLoader.batchVersions.load(questionnaire.id);
  }

  @ResolveField(() => QuestionnaireVersion)
  async latestVersion(@Parent() questionnaire: Questionnaire): Promise<QuestionnaireVersion> {
    return this.questionnaireDataLoader.batchLatestVersion.load(questionnaire.id);
  }

  @ResolveField(() => [Submission])
  async submissions(@Parent() questionnaire: Questionnaire): Promise<Submission[]> {
    return this.questionnaireDataLoader.batchSubmissions.load(questionnaire.id);
  }
}
