import { Injectable, NotFoundException } from '@nestjs/common';
import { Section } from '@prisma/client';
import { SectionCreateInput } from '../../../@generated/section/section-create.input';
import { SectionUpdateInput } from '../../../@generated/section/section-update.input';
import { PrismaService } from '@nutri/server-db-client';

@Injectable()
export class SectionService {
  constructor(private prisma: PrismaService) {
  }

  async findOne(id: string): Promise<Section> {
    const section = await this.prisma.section.findUnique({ where: { id } });
    if (!section) throw new NotFoundException(`Section with ID ${id} not found`);
    return section;
  }

  async create(input: SectionCreateInput): Promise<Section> {
    return this.prisma.section.create({ data: input });
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
