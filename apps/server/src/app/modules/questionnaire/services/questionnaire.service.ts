import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@nutri/server-db-client';
import { PaginateOptions, PaginatedResult, createPaginator } from 'prisma-pagination';
import { Questionnaire } from '../../../graphql/models/questionnaire.model';
import { QuestionnaireCreateInput } from '../../../graphql/inputs/questionnaire-create.input';
import { QuestionnaireUpdateInput } from '../../../graphql/inputs/questionnaire-update.input';

@Injectable()
export class QuestionnaireService {
  constructor(private prisma: PrismaService) {
  }

  async findOne(id: string): Promise<Questionnaire> {
    const questionnaire = await this.prisma.questionnaire.findUnique({ where: { id } });
    if (!questionnaire) throw new NotFoundException(`Questionnaire with ID ${id} not found`);
    return questionnaire;
  }

  paginatedFindAll(
    options: PaginateOptions = {
      page: 1,
      perPage: 10
    },
    sortInput?: Prisma.QuestionnaireOrderByWithRelationInput,
    filterInput?: Prisma.QuestionnaireWhereInput
  ): Promise<PaginatedResult<Questionnaire>> {
    const paginate = createPaginator(options);
    return paginate<Questionnaire, Prisma.QuestionnaireFindManyArgs>(
      this.prisma.questionnaire,
      { orderBy: sortInput, where: filterInput }
    );
  }


  async create(input: QuestionnaireCreateInput): Promise<Questionnaire> {
    return this.prisma.questionnaire.create({
      data: {
        ...input,
        versions: {
          create: {
            versionNumber: 1,
            isActive: false
          }
        }
      }
    });
  }

  async update(id: string, input: QuestionnaireUpdateInput): Promise<Questionnaire> {
    const questionnaire = await this.findOne(id);
// TODO open transaction
    const latestVersion = await this.prisma.questionnaireVersion.findFirst({
      where: { questionnaireId: id },
      orderBy: { versionNumber: 'desc' },
      include: {
        sections: {
          include: {
            questions: true
          }
        }
      }
    });

    if (latestVersion?.isActive) {
      // TODO return new questionnaire
      await this.prisma.questionnaireVersion.create({
        data: {
          questionnaireId: id,
          versionNumber: latestVersion.versionNumber + 1,
          isActive: false,
          sections: {
            create: latestVersion.sections.map(section => ({
              ...section,
              questions: {
                create: section.questions
              }
            }))
          }
        }
      });
    }

    return this.prisma.questionnaire.update({
      where: { id },
      data: input
    });
  }

  async softDelete(id: string): Promise<Questionnaire> {
    const ongoingSubmissions = await this.prisma.submission.findFirst({
      where: {
        questionnaireId: id,
        isComplete: false
      }
    });

    if (ongoingSubmissions) {
      throw new BadRequestException('Cannot delete questionnaire with ongoing submissions');
    }

    return this.prisma.questionnaire.update({
      where: { id },
      data: { isPublic: false, deletedAt: new Date() }
    });
  }
}
