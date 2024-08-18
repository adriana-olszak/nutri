import { Injectable, NotFoundException } from '@nestjs/common';
import { Question } from '@prisma/client';
import { PrismaService } from '@nutri/server-db-client';
import { QuestionCreateInput } from '../../../@generated/question/question-create.input';
import { QuestionUpdateInput } from '../../../@generated/question/question-update.input';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {
  }

  async findOne(id: string): Promise<Question> {
    const question = await this.prisma.question.findUnique({ where: { id } });
    if (!question) throw new NotFoundException(`Question with ID ${id} not found`);
    return question;
  }

  async create(input: QuestionCreateInput): Promise<Question> {
    return this.prisma.question.create({ data: input });
  }

  async update(id: string, input: QuestionUpdateInput): Promise<Question> {
    await this.findOne(id);
    return this.prisma.question.update({ where: { id }, data: input });
  }

  async delete(id: string): Promise<Question> {
    await this.findOne(id);
    return this.prisma.question.delete({ where: { id } });
  }
}
