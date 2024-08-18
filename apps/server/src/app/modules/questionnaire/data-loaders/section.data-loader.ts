import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { Question } from '@prisma/client';
import { PrismaService } from '@nutri/server-db-client';

@Injectable({ scope: Scope.REQUEST })
export class SectionDataLoader {
  constructor(private prisma: PrismaService) {
  }

  public readonly batchQuestions = new DataLoader<string, Question[]>(
    async (sectionIds: readonly string[]): Promise<Question[][]> => {
      const questions = await this.prisma.question.findMany({
        where: { sectionId: { in: sectionIds as string[] } },
        orderBy: { order: 'asc' }
      });

      const questionMap = new Map<string, Question[]>();
      questions.forEach(question => {
        if (!questionMap.has(question.sectionId)) {
          questionMap.set(question.sectionId, []);
        }
        questionMap.get(question.sectionId)!.push(question);
      });

      return sectionIds.map(id => questionMap.get(id) || []);
    }
  );
}
