import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { Answer } from '@prisma/client';
import { PrismaService } from '@nutri/server-db-client';

@Injectable({ scope: Scope.REQUEST })
export class QuestionDataLoader {
  constructor(private prisma: PrismaService) {
  }

  public readonly batchAnswers = new DataLoader<string, Answer[]>(
    async (questionIds: readonly string[]): Promise<Answer[][]> => {
      const answers = await this.prisma.answer.findMany({
        where: { questionId: { in: questionIds as string[] } }
      });

      const answerMap = new Map<string, Answer[]>();
      answers.forEach(answer => {
        if (!answerMap.has(answer.questionId)) {
          answerMap.set(answer.questionId, []);
        }
        answerMap.get(answer.questionId)!.push(answer);
      });

      return questionIds.map(id => answerMap.get(id) || []);
    }
  );
}
