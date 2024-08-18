import { QuestionnaireResolver } from './questionnaire.resolver';
import { QuestionResolver } from './question.resolver';
import { SectionResolver } from './section.resolver';
import { SubmissionResolver } from './submission.resolver';

export const QUESTIONNAIRE_RESOLVERS = [
  QuestionnaireResolver,
  QuestionResolver,
  SectionResolver,
  SubmissionResolver
];
