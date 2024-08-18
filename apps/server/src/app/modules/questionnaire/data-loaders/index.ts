import { SubmissionDataLoader } from './submission.data-loader';
import { QuestionDataLoader } from './question.data-loader';
import { QuestionnaireDataLoader } from './questionnaire.data-loader';
import { SectionDataLoader } from './section.data-loader';

export const QUESTIONNAIRE_DATA_LOADERS = [
  QuestionnaireDataLoader,
  QuestionDataLoader,
  SectionDataLoader,
  SubmissionDataLoader
];
