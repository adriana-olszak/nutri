import { QuestionnaireService } from './questionnaire.service';
import { SectionService } from './section.service';
import { SubmissionService } from './submission.service';
import { QuestionService } from './question.service';

export const QUESTIONNAIRE_SERVICES = [
  QuestionnaireService,
  QuestionService,
  SectionService,
  SubmissionService
];
