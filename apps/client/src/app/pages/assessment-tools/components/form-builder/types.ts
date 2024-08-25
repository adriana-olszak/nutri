import React from "react";

interface Question {
  id: string;
  type: string;
  question: string;
  description: string;
  options: string[];
}

interface Section {
  id: string;
  type: 'section';
  title: string;
  description: string;
  questions: Question[];
  hasDescription:boolean
}

interface SortableSectionProps {
  section: Section;
  updateContent: (id: string, key: string, value: string) => void;
  addQuestion: (sectionId: string) => void;
  addSection: (index:number) => void;
  children: React.ReactNode;
  index: number;
  toggleDescription: (sectionId: string) => void;
}
interface QuestionType {
  value: string;
  label: string;
}


export const questionTypes: QuestionType[] = [
  { value: 'input', label: 'Short Answer' },
  { value: 'textarea', label: 'Long Answer' },
  { value: 'multiSelect', label: 'Multi Selection' },
  { value: 'singleSelect', label: 'Single Selection' },
  { value: 'date', label: 'Date' },
  { value: 'range', label: 'Range' },
];

export type { QuestionType, Question, SortableSectionProps, Section };
