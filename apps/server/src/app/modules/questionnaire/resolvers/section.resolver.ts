import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SectionService } from '../services/section.service';
import { SectionCreateInput } from '../../../graphql/inputs/section-create.input';
import { SectionUpdateInput } from '../../../graphql/inputs/section-update.input';
import { Section } from '../../../graphql/models/section.model';

@Resolver(() => Section)
export class SectionResolver {
  constructor(
    private readonly sectionService: SectionService
  ) {
  }

  @Query(() => Section, { name: 'section' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Section> {
    return this.sectionService.findOne(id);
  }

  @Mutation(() => Section)
  async createSection(@Args('questionnaireVersionId') questionnaireVersionId: string, @Args('input') createSectionInput: SectionCreateInput): Promise<Section> {
    return this.sectionService.create(questionnaireVersionId, createSectionInput);
  }

  @Mutation(() => Section)
  async updateSection(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') updateSectionInput: SectionUpdateInput
  ): Promise<Section> {
    return this.sectionService.update(id, updateSectionInput);
  }

  @Mutation(() => Section)
  async deleteSection(@Args('id', { type: () => ID }) id: string): Promise<Section> {
    return this.sectionService.delete(id);
  }
}
