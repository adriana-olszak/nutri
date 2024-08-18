import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { Answer } from '@prisma/client';
import { PrismaService } from '@nutri/server-db-client';

@Injectable({ scope: Scope.REQUEST })
export class SubmissionDataLoader {
  constructor(private prisma: PrismaService) {}

  public readonly batchAnswers = new DataLoader<string, Answer[]>(
    async (submissionIds: readonly string[]): Promise<Answer[][]> => {
      const answers = await this.prisma.answer.findMany({
        where: { submissionId: { in: submissionIds as string[] } },
      });

      const answerMap = new Map<string, Answer[]>();
      answers.forEach(answer => {
        if (!answerMap.has(answer.submissionId)) {
          answerMap.set(answer.submissionId, []);
        }
        answerMap.get(answer.submissionId)!.push(answer);
      });

      return submissionIds.map(id => answerMap.get(id) || []);
    }
  );
}
