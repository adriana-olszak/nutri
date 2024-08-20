import { Injectable, NotFoundException } from '@nestjs/common';
import { Section } from '@prisma/client';
import { PrismaService } from '@nutri/server-db-client';
import { SectionCreateInput } from '../../../graphql/inputs/section-create.input';
import { SectionUpdateInput } from '../../../graphql/inputs/section-update.input';

@Injectable()
export class SectionService {
  constructor(private prisma: PrismaService) {
  }

  async findOne(id: string): Promise<Section> {
    const section = await this.prisma.section.findUnique({ where: { id } });
    if (!section) throw new NotFoundException(`Section with ID ${id} not found`);
    return section;
  }

  async create(questionnaireVersionId: string, input: SectionCreateInput): Promise<Section> {
    return this.prisma.section.create({
      data: {
        ...input,
        questionnaireVersionId
      }
    });
  }

  async update(id: string, input: SectionUpdateInput): Promise<Section> {
    await this.findOne(id);
    return this.prisma.section.update({ where: { id }, data: input });
  }

  async delete(id: string): Promise<Section> {
    await this.findOne(id);
    return this.prisma.section.delete({ where: { id } });
  }
}
