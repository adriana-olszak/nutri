import { Units } from '../types';

export const isNumber = (token: string): boolean => !isSpace(token) && !isNaN(Number(token));
export const isSpace = (token: string): boolean => token === ' ';
export const isFraction = (token: string, nextToken: string | undefined, previousWasNumber: boolean): boolean =>
  token === '/' && previousWasNumber && nextToken !== undefined && !isNaN(Number(nextToken));
export const isTextNumber = (token: string, units: Units): boolean => units.ingredientQuantities.has(token.toLowerCase());
