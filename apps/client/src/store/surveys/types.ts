export type QuestionType = 'input' | 'textarea' | 'multiSelect' | 'singleSelect';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  question: string;
  description: string;
}

export interface InputQuestion extends BaseQuestion {
  type: 'input';
  options: never[];
}

export interface TextareaQuestion extends BaseQuestion {
  type: 'textarea';
  options: never[];
}

export interface MultiSelectQuestion extends BaseQuestion {
  type: 'multiSelect';
  options: string[];
  hasOtherOption?: boolean;
}
export interface SingleSelectQuestion extends BaseQuestion {
  type: 'singleSelect';
  options: string[];
  hasOtherOption?: boolean;
}

export type Question = InputQuestion | TextareaQuestion | MultiSelectQuestion | SingleSelectQuestion;

export interface Section {
  id: string;
  type: 'section';
  title: string;
  description: string;
  hasDescription: boolean;
  questions: Question[];
}

export type SurveyStructure = Section[];

export type SurveyTags ={
  id:string
  name:string
};


export interface Survey {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'closed';
  author: string;
  responseCount: number;
  usedCount: number;
  structure: SurveyStructure;
  tags: SurveyTags[];
}

export type Surveys = Survey[];
