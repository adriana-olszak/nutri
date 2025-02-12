export const RECIPE_IMPORT_QUEUE = 'recipe-import';
export const SUPPORTED_LANGUAGES = ['en', 'pl'] as const;
export const SUPPORTED_FILE_TYPES = ['json', 'csv', 'text'] as const;

export const DEFAULT_LANGUAGE = 'en';

export const IMPORT_STEPS = {
  VALIDATION: 'VALIDATION',
  PARSING: 'PARSING',
  STORAGE: 'STORAGE',
  MATCHING: 'MATCHING',
  COMPLETION: 'COMPLETION',
} as const;
