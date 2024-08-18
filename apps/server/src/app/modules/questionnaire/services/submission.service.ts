import { Injectable, NotFoundException } from '@nestjs/common';
import { Submission, Answer } from '@prisma/client';
import { PrismaService } from '@nutri/server-db-client';
import { SubmissionCreateInput } from '../../../@generated/submission/submission-create.input';
import { SubmissionUpdateInput } from '../../../@generated/submission/submission-update.input';
import { AnswerCreateManyInput } from '../../../@generated/answer/answer-create-many.input';

@Injectable()
export class SubmissionService {
  constructor(private prisma: PrismaService) {
  }

  async findOne(id: string): Promise<Submission> {
    const submission = await this.prisma.submission.findUnique({ where: { id } });
    if (!submission) throw new NotFoundException(`Submission with ID ${id} not found`);
    return submission;
  }

  async create(input: SubmissionCreateInput): Promise<Submission> {
    return this.prisma.submission.create({ data: input });
  }

  async update(id: string, input: SubmissionUpdateInput): Promise<Submission> {
    await this.findOne(id);
    return this.prisma.submission.update({ where: { id }, data: input });
  }

  async submitAnswer(input: AnswerCreateManyInput): Promise<Answer> {
    const submission = await this.findOne(input.submissionId);
    return this.prisma.answer.create({
      data: {
        submissionId: submission.id,
        questionId: input.questionId,
        value: input.value
      }
    });
  }

  async submitAllAnswers(submissionId: string, answers: AnswerCreateManyInput[]): Promise<Submission> {
    const submission = await this.findOne(submissionId);

    await this.prisma.$transaction(
      answers.map(answer =>
        this.prisma.answer.create({
          data: {
            submissionId: submission.id,
            questionId: answer.questionId,
            value: answer.value
          }
        })
      )
    );

    return this.prisma.submission.update({
      where: { id: submissionId },
      data: { isComplete: true, completedAt: new Date() }
    });
  }
}
