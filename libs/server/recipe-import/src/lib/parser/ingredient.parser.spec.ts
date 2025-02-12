import {
  parseIngredient,
  parseIngredientTokens,
  parseQuantity,
  parseUnit,
  parseIngredientName,
  parseExtra,
  getIngredientConversions
} from './ingredient.parser';
import { Units, ValidLanguages } from './types';
import EnglishUnits from './units.en';

// Mock Units object for testing
const mockUnits: Units = EnglishUnits;

describe('parseIngredient', () => {
  it('should parse a simple ingredient', () => {
    const result = parseIngredient('2 cups flour', 'en' as ValidLanguages);
    expect(result).toEqual({
      quantity: 2,
      quantityText: '2',
      minQuantity: 2,
      maxQuantity: 2,
      unit: 'cup',
      unitText: 'cups',
      ingredient: 'flour',
      extra: '',
      alternativeQuantities: []
    });
  });

  it('should return null for empty input', () => {
    const result = parseIngredient('', 'en' as ValidLanguages);
    expect(result).toBeNull();
  });
});

describe('parseIngredientTokens', () => {
  it('should parse tokens correctly', () => {
    const tokens = ['2', 'cups', 'flour'];
    const result = parseIngredientTokens(tokens, mockUnits, { includeAlternativeUnits: false, includeExtra: true });
    expect(result).toEqual({
      quantity: 2,
      quantityText: '2',
      minQuantity: 2,
      maxQuantity: 2,
      unit: 'cup',
      unitText: 'cups',
      ingredient: 'flour',
      extra: '',
      alternativeQuantities: []
    });
  });
});

describe('parseQuantity', () => {
  it('should parse simple quantity', () => {
    const result = parseQuantity(['2'], mockUnits);
    expect(result).toEqual({
      quantity: 2,
      quantityText: '2',
      minQuantity: 2,
      maxQuantity: 2,
      endIndex: 1
    });
  });

  it('should parse fraction', () => {
    const result = parseQuantity(['1', '/', '2'], mockUnits);
    expect(result).toEqual({
      quantity: 0.5,
      quantityText: '1/2',
      minQuantity: 0.5,
      maxQuantity: 0.5,
      endIndex: 3
    });
  });

  it('should parse range', () => {
    const result = parseQuantity(['1', '-', '2'], mockUnits);
    expect(result).toEqual({
      quantity: 2,
      quantityText: '1-2',
      minQuantity: 1,
      maxQuantity: 2,
      endIndex: 3
    });
  });
  it('should parse range', () => {
    const result = parseQuantity(['1', '-', '2'], mockUnits);
    expect(result).toEqual({
      quantity: 2,
      quantityText: '1-2',
      minQuantity: 1,
      maxQuantity: 2,
      endIndex: 3
    });
  });

  it('should parse range with "to"', () => {
    const result = parseQuantity(['1', ' ', 'to', ' ', '2'], mockUnits);
    expect(result).toEqual({
      quantity: 2,
      quantityText: '1 to 2',
      minQuantity: 1,
      maxQuantity: 2,
      endIndex: 5
    });
  });

  it('should parse single number as both min and max', () => {
    const result = parseQuantity(['2'], mockUnits);
    expect(result).toEqual({
      quantity: 2,
      quantityText: '2',
      minQuantity: 2,
      maxQuantity: 2,
      endIndex: 1
    });
  });
});

describe('parseUnit', () => {
  it('should parse simple unit', () => {
    const result = parseUnit(['cups', 'flour'], 0, mockUnits);
    expect(result).toEqual({
      unit: 'cup',
      unitText: 'cups',
      endIndex: 1
    });
  });

  it('should return empty for unknown unit', () => {
    const result = parseUnit(['unknown', 'flour'], 0, mockUnits);
    expect(result).toEqual({
      unit: '',
      unitText: '',
      endIndex: 0
    });
  });
});


describe('parseIngredientName', () => {
  it('should parse simple ingredient name', () => {
    const result = parseIngredientName(['flour'], 0, mockUnits);
    expect(result).toEqual({
      ingredient: 'flour',
      extraInParentheses: '',
      endIndex: 1
    });
  });

  it('should skip initial tokens correctly', () => {
    const result = parseIngredientName(['of', 'all-purpose', 'flour'], 1, mockUnits);
    expect(result).toEqual({
      ingredient: 'all-purpose flour',
      extraInParentheses: '',
      endIndex: 3
    });
  });

  it('should handle multiple words', () => {
    const result = parseIngredientName(['red', 'bell', 'pepper'], 0, mockUnits);
    expect(result).toEqual({
      ingredient: 'red bell pepper',
      extraInParentheses: '',
      endIndex: 3
    });
  });
  it('should handle multiple words with extra spaces', () => {
    const result = parseIngredientName(['Worcestershire', ' ', ' ', 'sauce'], 0, mockUnits);
    expect(result).toEqual({
      ingredient: 'Worcestershire sauce',
      extraInParentheses: '',
      endIndex: 4
    });
  });

  it('should handle ingredients with multiple words and extra spaces', () => {
    const result = parseIngredientName(['unflavored', ' ', ' ', 'gelatin'], 0, mockUnits);
    expect(result).toEqual({
      ingredient: 'unflavored gelatin',
      extraInParentheses: '',
      endIndex: 4
    });
  });

  it('should handle ingredients with multiple words and many extra spaces', () => {
    const result = parseIngredientName(['hot', ' ', ' ', 'red', ' ', ' ', 'pepper', ' ', ' ', 'flakes'], 0, mockUnits);
    expect(result).toEqual({
      ingredient: 'hot red pepper flakes',
      extraInParentheses: '',
      endIndex: 10
    });
  });
});

describe('parseExtra', () => {
  it('should parse extra information', () => {
    const result = parseExtra(['(', 'sifted', ')'], 0, '');
    expect(result).toBe('( sifted )');
  });

  it('should return empty string for no extra info', () => {
    const result = parseExtra([], 0, '');
    expect(result).toBe('');
  });

  it('should handle multiple words', () => {
    const result = parseExtra(['finely', 'chopped'], 0, '');
    expect(result).toBe('finely chopped');
  });

  it('should handle extra information with multiple spaces', () => {
    const result = parseExtra(['finely', ' ', ' ', 'chopped'], 0, '');
    expect(result).toBe('finely chopped');
  });
});

describe('getIngredientConversions', () => {
  it('should return empty array for unknown unit', () => {
    const result = getIngredientConversions(
      { quantity: 1, minQuantity: 1, maxQuantity: 1, unit: 'unknown', unitText: 'unknown' },
      mockUnits
    );
    expect(result).toHaveLength(0);
  });
});
