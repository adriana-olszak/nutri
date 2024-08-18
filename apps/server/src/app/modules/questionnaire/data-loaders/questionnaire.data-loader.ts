import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { QuestionnaireVersion } from '@prisma/client';
import { Submission } from '@prisma/client';
import { PrismaService } from '@nutri/server-db-client';

@Injectable({ scope: Scope.REQUEST })
export class QuestionnaireDataLoader {
  constructor(private prisma: PrismaService) {}

  public readonly batchVersions = new DataLoader<string, QuestionnaireVersion[]>(
    async (questionnaireIds: readonly string[]): Promise<QuestionnaireVersion[][]> => {
      const versions = await this.prisma.questionnaireVersion.findMany({
        where: { questionnaireId: { in: questionnaireIds as string[] } },
        orderBy: { versionNumber: 'desc' },
      });

      const versionMap = new Map<string, QuestionnaireVersion[]>();
      versions.forEach(version => {
        if (!versionMap.has(version.questionnaireId)) {
          versionMap.set(version.questionnaireId, []);
        }
        versionMap.get(version.questionnaireId)!.push(version);
      });

      return questionnaireIds.map(id => versionMap.get(id) || []);
    }
  );

  public readonly batchLatestVersion = new DataLoader<string, QuestionnaireVersion>(
    async (questionnaireIds: readonly string[]): Promise<QuestionnaireVersion[]> => {
      const latestVersions = await this.prisma.questionnaireVersion.findMany({
        where: { questionnaireId: { in: questionnaireIds as string[] } },
        orderBy: { versionNumber: 'desc' },
        distinct: ['questionnaireId'],
      });

      const versionMap = new Map(latestVersions.map(v => [v.questionnaireId, v]));
      return questionnaireIds.map(id => versionMap.get(id)!);
    }
  );

  public readonly batchSubmissions = new DataLoader<string, Submission[]>(
    async (questionnaireIds: readonly string[]): Promise<Submission[][]> => {
      const submissions = await this.prisma.submission.findMany({
        where: { questionnaireId: { in: questionnaireIds as string[] } },
      });

      const submissionMap = new Map<string, Submission[]>();
      submissions.forEach(submission => {
        if (!submissionMap.has(submission.questionnaireId)) {
          submissionMap.set(submission.questionnaireId, []);
        }
        submissionMap.get(submission.questionnaireId)!.push(submission);
      });

      return questionnaireIds.map(id => submissionMap.get(id) || []);
    }
  );
}
