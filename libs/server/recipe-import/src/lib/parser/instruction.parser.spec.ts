import {
  parseInstruction,
  parseInstructionTokens,
  parseTime,
  parseTemperature,
  getTemperatureConversions
} from './instruction.parser';
import { ValidLanguages, Units } from './types';
import EnglishUnits from './units.en';

// Mock the getUnitsOrThrow function
jest.mock('./units', () => ({
  getUnitsOrThrow: jest.fn(() => mockUnits),
  convert: jest.fn((value) => value), // Simple mock for convert function
  round: jest.fn((value) => value) // Simple mock for round function
}));

// Mock units for testing
const mockUnits: Units = EnglishUnits;


describe('parseInstruction', () => {
  it('should return null for empty input', () => {
    expect(parseInstruction('', 'en' as ValidLanguages)).toBeNull();
  });

  it('should parse instruction with time and temperature', () => {
    const result = parseInstruction('Bake for 30 minutes at 180 degrees Celsius', 'en');
    expect(result).toEqual({
      totalTimeInSeconds: 1800,
      timeItems: [{ timeInSeconds: 1800, timeUnitText: 'minutes', timeText: '30' }],
      temperature: 180,
      temperatureText: '180',
      temperatureUnit: 'celsius',
      temperatureUnitText: 'degrees',
      alternativeTemperatures: []
    });
  });
});

describe('parseInstructionTokens', () => {
  it('should parse tokens with time and temperature', () => {
    const tokens = ['Bake', 'for', '30', 'minutes', 'at', '180', 'degrees', 'Celsius'];
    const result = parseInstructionTokens(tokens, mockUnits, { includeAlternativeTemperatureUnit: true });
    expect(result.totalTimeInSeconds).toBe(1800);
    expect(result.temperature).toBe(180);
    expect(result.temperatureUnit).toBe('celsius');
  });
});

describe('parseTime', () => {
  it('should parse single time unit', () => {
    const tokens = ['30', 'minutes'];
    const result = parseTime(tokens, mockUnits);
    expect(result).toEqual({
      timeItems: [{ timeInSeconds: 1800, timeUnitText: 'minutes', timeText: '30' }],
      totalTimeInSeconds: 1800
    });
  });

  it('should parse multiple time units', () => {
    const tokens = ['1', 'hour', 'and', '30', 'minutes'];
    const result = parseTime(tokens, mockUnits);
    expect(result).toEqual({
      timeItems: [
        { timeInSeconds: 3600, timeUnitText: 'hour', timeText: '1' },
        { timeInSeconds: 1800, timeUnitText: 'minutes', timeText: '30' }
      ],
      totalTimeInSeconds: 5400
    });
  });

  it('should ignore invalid time units', () => {
    const tokens = ['30', 'weeks'];
    const result = parseTime(tokens, mockUnits);
    expect(result).toEqual({
      timeItems: [],
      totalTimeInSeconds: 0
    });
  });
});

describe('parseTemperature', () => {
  it('should parse temperature with unit', () => {
    const tokens = ['180', 'degrees', 'Celsius'];
    const result = parseTemperature(tokens, mockUnits);
    expect(result).toEqual({
      temperature: 180,
      temperatureText: '180',
      temperatureUnit: 'celsius',
      temperatureUnitText: 'degrees'
    });
  });

  it('should parse temperature with default unit', () => {
    const tokens = ['180', 'degrees'];
    const result = parseTemperature(tokens, mockUnits);
    expect(result).toEqual({
      temperature: 180,
      temperatureText: '180',
      temperatureUnit: 'celsius',
      temperatureUnitText: 'degrees'
    });
  });

  it('should ignore invalid temperature units', () => {
    const tokens = ['180', 'kelvin'];
    const result = parseTemperature(tokens, mockUnits);
    expect(result).toEqual({
      temperature: 0,
      temperatureText: '',
      temperatureUnit: '',
      temperatureUnitText: ''
    });
  });
});

describe('getTemperatureConversions', () => {
  it('should return alternative temperature', () => {
    const result = getTemperatureConversions(100, 'Fahrenheit', mockUnits);
    expect(result).toEqual([
      {
        quantity: 100,
        unit: 'c',
        unitText: 'celsius',
        minQuantity: 100,
        maxQuantity: 100
      }
    ]);
  });

  it('should return empty array for unknown unit', () => {
    const result = getTemperatureConversions(100, 'Kelvin', mockUnits);
    expect(result).toEqual([]);
  });
});
