import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '../paginated/paginated.model';
import { Questionnaire } from '../../../@generated/questionnaire/questionnaire.model';

@ObjectType()
export class QuestionnairePaginatedModel extends Paginated(Questionnaire) {}
