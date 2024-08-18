import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Section } from '../../../@generated/section/section.model';
import { SectionService } from '../services/section.service';
import { SectionCreateInput } from '../../../@generated/section/section-create.input';
import { SectionUpdateInput } from '../../../@generated/section/section-update.input';

@Resolver(() => Section)
export class SectionResolver {
  constructor(
    private readonly sectionService: SectionService,
  ) {
  }

  @Query(() => Section, { name: 'section' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Section> {
    return this.sectionService.findOne(id);
  }

  @Mutation(() => Section)
  async createSection(@Args('input') createSectionInput: SectionCreateInput): Promise<Section> {
    return this.sectionService.create(createSectionInput);
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
