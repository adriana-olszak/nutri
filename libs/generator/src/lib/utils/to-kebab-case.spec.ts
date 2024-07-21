import { toKebabCase } from './to-kebab-case';  // Adjust the import path as necessary

describe('toKebabCase', () => {
  test('converts camelCase to kebab-case', () => {
    expect(toKebabCase('camelCase')).toBe('camel-case');
    expect(toKebabCase('thisIsCamelCase')).toBe('this-is-camel-case');
  });

  test('converts PascalCase to kebab-case', () => {
    expect(toKebabCase('PascalCase')).toBe('pascal-case');
    expect(toKebabCase('ThisIsPascalCase')).toBe('this-is-pascal-case');
  });

  test('converts snake_case to kebab-case', () => {
    expect(toKebabCase('snake_case')).toBe('snake-case');
    expect(toKebabCase('this_is_snake_case')).toBe('this-is-snake-case');
  });

  test('converts space-separated words to kebab-case', () => {
    expect(toKebabCase('Space Separated')).toBe('space-separated');
    expect(toKebabCase('This Is Spaced')).toBe('this-is-spaced');
  });

  test('handles mixed case and special characters', () => {
    expect(toKebabCase('Mixed_Case and-Symbols')).toBe('mixed-case-and-symbols');
    expect(toKebabCase('ABC123_@#$')).toBe('a-b-c123');
  });

  test('preserves existing kebab-case', () => {
    expect(toKebabCase('already-kebab-case')).toBe('already-kebab-case');
  });

  test('handles empty string', () => {
    expect(toKebabCase('')).toBe('');
  });

  test('handles string with only special characters', () => {
    expect(toKebabCase('@#$%^&*')).toBe('');
  });

  test('handles numbers', () => {
    expect(toKebabCase('123')).toBe('123');
    expect(toKebabCase('number123')).toBe('number123');
  });

  test('handles uppercase acronyms', () => {
    expect(toKebabCase('UNESCO')).toBe('u-n-e-s-c-o');
    expect(toKebabCase('HTMLElement')).toBe('h-t-m-l-element');
  });
});
