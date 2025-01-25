export enum QUEUE_NAMES {
  INGREDIENT_MATCH = 'ingredient-match',
}

export const enum JOB_NAMES {
  MATCH_INGREDIENT = 'match',
}

export const QUEUE_JOB_MAP = {
  [QUEUE_NAMES.INGREDIENT_MATCH]: {
    [JOB_NAMES.MATCH_INGREDIENT]: 'match' as const,
  },
};

export const NUMBER_OF_QUEUE_RETRIES = 9;
