import { ValidLanguages } from '../src/lib/types';
import { parseIngredient, parseInstruction } from '../src/index';

describe('Parse ingredient en-US', () => {
  const table: [string, number, string | number, string | number, string | number, string | number][] = [
    ['', -1, -1, -1, -1, -1],
    ['142g bread flour', 142, '142', 'gram', 'bread flour', ''],
    ['1 cup carrots, cut up small', 1, '1', 'cup', 'carrots', 'cut up small'],
    ['1 cup flour', 1, '1', 'cup', 'flour', ''],
    ['1c carrots', 1, '1', 'cup', 'carrots', ''],
    ['2 cups carrots', 2, '2', 'cup', 'carrots', ''],
    [
      '1 1/2 tablespoons olive oil',
      1.5,
      '1 1/2',
      'tablespoon',
      'olive oil',
      ''
    ],
    ['1/2 pound ground beef', 0.5, '1/2', 'pound', 'ground beef', ''],
    ['1/2LB ground beef', 0.5, '1/2', 'pound', 'ground beef', ''],
    ['1½ LB ground beef', 1.5, '1½', 'pound', 'ground beef', ''],
    ['2 grams salt', 2, '2', 'gram', 'salt', ''],
    ['1 gram salt', 1, '1', 'gram', 'salt', ''],
    ['2oz of scallions', 2, '2', 'ounce', 'scallions', ''],
    ['2 ounces of scallions', 2, '2', 'ounce', 'scallions', ''],
    ['2 bunches of scallions', 2, '2', 'bunch', 'scallions', ''],
    ['5 cans of dried corn', 5, '5', 'can', 'dried corn', ''],
    ['½ cans of dried corn', 0.5, '½', 'can', 'dried corn', ''],
    ['10 ml milk', 10, '10', 'milliliter', 'milk', ''],
    ['Salt to taste', 0, '', '', 'Salt to taste', ''],
    ['Ingredient', 0, '', '', 'Ingredient', ''],
    ['10 gr wheat flour', 10, '10', 'grain', 'wheat flour', ''],
    ['1 drop of water', 1, '1', 'drop', 'water', ''],
    ['1 batch of another recipe', 1, '1', 'batch', 'another recipe', ''],
    ['2 batches meringue', 2, '2', 'batch', 'meringue', ''],
    ['1 cup (120g) flour, sifted', 1, '1', 'cup', 'flour', '(120g) sifted'],
    ['1 cup flour (whole), sifted', 1, '1', 'cup', 'flour', '(whole) sifted'],
    ['1 cup (120g) flour (whole), sifted', 1, '1', 'cup', 'flour', '(120g, whole) sifted'],
    ['one pound of carrots', 1, 'one', 'pound', 'carrots', ''],
    ['two pound of carrots', 2, 'two', 'pound', 'carrots', ''],
    ['three pound of carrots', 3, 'three', 'pound', 'carrots', ''],
    ['four pound of carrots', 4, 'four', 'pound', 'carrots', ''],
    ['five pound of carrots', 5, 'five', 'pound', 'carrots', ''],
    ['six pound of carrots', 6, 'six', 'pound', 'carrots', ''],
    ['seven pound of carrots', 7, 'seven', 'pound', 'carrots', ''],
    ['eight pound of carrots', 8, 'eight', 'pound', 'carrots', ''],
    ['nine pound of carrots', 9, 'nine', 'pound', 'carrots', ''],
    ['ten pound of carrots', 10, 'ten', 'pound', 'carrots', ''],
    ['1 tbsp. flour', 1, '1', 'tablespoon', 'flour', ''],
    ['1 tbsp . flour', 1, '1', 'tablespoon', 'flour', ''],
    ['1 and 1/2 cups flour', 1.5, '1 and 1/2', 'cup', 'flour', ''],
    ['carrot/parsnip', 0, '', '', 'carrot/parsnip', ''],
    ['1/parsnip', 1, '1', '', '/parsnip', ''],
    ['carrot/1', 1, '1', '', '', ''],
    ['1 1/carrot', 1, '1 1', '', '/carrot', ''],
    ['1', 1, '1', '', '', ''],
    ['60g unsalted butter', 60, '60', 'gram', 'unsalted butter', ''],
    ['3 tbsp olive oil', 3, '3', 'tablespoon', 'olive oil', ''],
    ['2 onions, peeled and finely chopped (360g)', 2, '2', '', 'onions', 'peeled and finely chopped ( 360 g )'],
    ['2 large garlic cloves, peeled and crushed', 2, '2', '', 'garlic cloves', 'peeled and crushed'],
    ['400g sweet red cherry tomatoes (ie, Datterini or similar)', 400, '400', 'gram', 'sweet red cherry tomatoes', '(ie, Datterini or similar)'],
    ['4 tbsp tomato paste', 4, '4', 'tablespoon', 'tomato paste', ''],
    ['2 tbsp basil leaves, roughly torn', 2, '2', 'tablespoon', 'basil leaves', '(10g) roughly torn'],
    ['1 dried habanero chilli (optional – see introduction)', 1, '1', '', 'dried habanero chilli', '(optional – see introduction)'],
    ['500ml vegetable or chicken stock', 500, '500', 'milliliter', 'vegetable or chicken stock', ''],
    ['200g orecchiette', 200, '200', 'gram', 'orecchiette', ''],
    ['2 tbsp double cream (or more, to taste)', 2, '2', 'tablespoon', 'double cream', '(or more, to taste)'],
    ['1 simit or bagel, cut in ½ cm thick slices (130g)', 1, '1', '', 'simit or bagel', 'cut in ½ cm thick slices ( 130 g )'],
    ['2 ½ tsp curry powder', 2.5, '2 ½', 'teaspoon', 'curry powder', ''],
    ['2 tbsp olive oil', 2, '2', 'tablespoon', 'olive oil', ''],
    ['fine sea salt and black pepper', 0, '', '', 'fine sea salt and black pepper', ''],
    ['250g linguine', 250, '250', 'gram', 'linguine', ''],
    ['150g cubed guanciale (or unsmoked lardons or pancetta)', 150, '150', 'gram', 'cubed guanciale', '(or unsmoked lardons or pancetta)'],
    ['2 tbsp olive oil', 2, '2', 'tablespoon', 'olive oil', ''],
    ['2 garlic cloves, crushed', 2, '2', '', 'garlic cloves', 'crushed'],
    ['60g parmesan, finely grated', 60, '60', 'gram', 'parmesan', 'finely grated'],
    ['5 egg yolks, save the whites for another use', 5, '5', '', 'egg yolks', 'save the whites for another use'],
    ['3 tbsp dukkah', 3, '3', 'tablespoon', 'dukkah', ''],
    ['½ tsp chilli flakes', 0.5, '½', 'teaspoon', 'chilli flakes', ''],
    ['2 tbsp za\'atar', 2, '2', 'tablespoon', 'za\'atar', ''],
  ];
  it.each(table)(
    'parse %s',
    (text, quantity, quantityText, unit, ingredient, extra) => {
      const result = parseIngredient(text, 'en-US' as ValidLanguages);
      expect(result?.quantity ?? -1).toBe(quantity);
      expect(result?.quantityText ?? -1).toBe(quantityText);
      expect(result?.unit ?? -1).toBe(unit);
      expect(result?.ingredient ?? -1).toBe(ingredient);
      expect(result?.extra ?? -1).toBe(extra);
    }
  );
});

describe('Parse ingredient ranges en-US', () => {
  const table: [string, number, number, number, string, string, string, string][] = [
    [
      'one to two pounds of carrots',
      2,
      1,
      2,
      'one to two',
      'pound',
      'carrots',
      ''
    ],
    ['2-3 cups of carrots', 3, 2, 3, '2-3', 'cup', 'carrots', ''],
    ['3 - 4 cups of carrots', 4, 3, 4, '3 - 4', 'cup', 'carrots', ''],
    ['3- 4 cups of carrots', 4, 3, 4, '3- 4', 'cup', 'carrots', ''],
    ['3 -4 cups of carrots', 4, 3, 4, '3 - 4', 'cup', 'carrots', ''],
    ['3 to 4 cups of carrots', 4, 3, 4, '3 to 4', 'cup', 'carrots', ''],
    [
      '1/4 to 1/2 cups of carrots',
      0.5,
      0.25,
      0.5,
      '1/4 to 1/2',
      'cup',
      'carrots',
      ''
    ],
    [
      '1/4 - 1/2 cups of carrots',
      0.5,
      0.25,
      0.5,
      '1/4 - 1/2',
      'cup',
      'carrots',
      ''
    ],
    [
      '1/4-1/2 cups of carrots',
      0.5,
      0.25,
      0.5,
      '1/4-1/2',
      'cup',
      'carrots',
      ''
    ],
    [
      '1 1/4 - 1 1/2 cups of carrots',
      1.5,
      1.25,
      1.5,
      '1 1/4 - 1 1/2',
      'cup',
      'carrots',
      ''
    ],
    ['2 cups of carrots', 2, 2, 2, '2', 'cup', 'carrots', '']
  ];
  it.each(table)(
    'parse %s',
    (text, quantity, minQuantity, maxQuantity, quantityText, unit, ingredient, extra) => {
      const result = parseIngredient(text, 'en-US' as ValidLanguages);
      expect(result?.quantity ?? -1).toBe(quantity);
      expect(result?.minQuantity ?? -1).toBe(minQuantity);
      expect(result?.maxQuantity ?? -1).toBe(maxQuantity);
      expect(result?.quantityText ?? -1).toBe(quantityText);
      expect(result?.unit ?? -1).toBe(unit);
      expect(result?.ingredient ?? -1).toBe(ingredient);
      expect(result?.extra ?? -1).toBe(extra);
    }
  );
});

describe('Parse ingredient with options en-US', () => {
  const table: [string, number, number, number, string, string, number, number, number, string][] = [
    ['500g of flour', 500, 500, 500, 'gram', 'flour', 0.5, 0.5, 0.5, 'kg'],
    ['1kg of flour', 1, 1, 1, 'kilogram', 'flour', 1000, 1000, 1000, 'g'],
    [
      '1kg of flour',
      1,
      1,
      1,
      'kilogram',
      'flour',
      1000000,
      1000000,
      1000000,
      'mg'
    ],
    [
      '1kg of flour',
      1,
      1,
      1,
      'kilogram',
      'flour',
      2.2046,
      2.2046,
      2.2046,
      'lb'
    ],
    [
      '1-2kg of flour',
      2,
      1,
      2,
      'kilogram',
      'flour',
      4.4092,
      2.2046,
      4.4092,
      'lb'
    ],
    ['1 cup milk', 1, 1, 1, 'cup', 'milk', 16, 16, 16, 'tbsp'],
    ['1 cup milk', 1, 1, 1, 'cup', 'milk', 0.25, 0.25, 0.25, 'qt'],
    ['1 cup milk', 1, 1, 1, 'cup', 'milk', 48, 48, 48, 'tsp'],
    ['1 dash of cream', 1, 1, 1, 'dash', 'cream', 0, 0, 0, ''],
    ['1/2in ginger', 0.5, 0.5, 0.5, 'inch', 'ginger', 1.27, 1.27, 1.27, 'cm'],
    [
      '2cm ginger',
      2,
      2,
      2,
      'centimeter',
      'ginger',
      0.7874,
      0.7874,
      0.7874,
      'in'
    ],
    ['1 package noodles', 1, 1, 1, 'package', 'noodles', 0, 0, 0, '']
  ];
  it.each(table)(
    'parse %s',
    (
      text,
      quantity,
      minQuantity,
      maxQuantity,
      unit,
      ingredient,
      alternateQuantity,
      alternateMin,
      alternateMax,
      alternateUOM
    ) => {
      const result = parseIngredient(text, 'en-US', {
        includeAlternativeUnits: true,
        includeExtra: true
      });
      expect(result?.quantity ?? -1).toBe(quantity);
      expect(result?.minQuantity ?? -1).toBe(minQuantity);
      expect(result?.maxQuantity ?? -1).toBe(maxQuantity);
      expect(result?.unit ?? -1).toBe(unit);
      expect(result?.ingredient ?? -1).toBe(ingredient);

      if (alternateQuantity === 0) {
        expect(result?.alternativeQuantities).toEqual([]);
      } else {
        expect(result?.alternativeQuantities).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              quantity: alternateQuantity,
              unit: alternateUOM,
              minQuantity: alternateMin,
              maxQuantity: alternateMax
            })
          ])
        );
      }
    }
  );
});

describe('Parse ingredient with options EN', () => {
  const table: [string, number, number, number, string, string, number, number, number, string][] = [
    ['500g of flour', 500, 500, 500, 'gram', 'flour', 0.5, 0.5, 0.5, 'kg'],
    ['1 cup of flour', 1, 1, 1, 'cup', 'flour', 0, 0, 0, '']
  ];
  it.each(table)(
    'parse %s',
    (
      text,
      quantity,
      minQuantity,
      maxQuantity,
      unit,
      ingredient,
      alternateQuantity,
      alternateMin,
      alternateMax,
      alternateUOM
    ) => {
      const result = parseIngredient(text, 'en', {
        includeAlternativeUnits: true,
        includeExtra: true
      });
      expect(result?.quantity ?? -1).toBe(quantity);
      expect(result?.minQuantity ?? -1).toBe(minQuantity);
      expect(result?.maxQuantity ?? -1).toBe(maxQuantity);
      expect(result?.unit ?? -1).toBe(unit);
      expect(result?.ingredient ?? -1).toBe(ingredient);

      if (alternateQuantity === 0) {
        expect(result?.alternativeQuantities).toEqual([]);
      } else {
        expect(result?.alternativeQuantities).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              quantity: alternateQuantity,
              unit: alternateUOM,
              minQuantity: alternateMin,
              maxQuantity: alternateMax
            })
          ])
        );
      }
    }
  );
});

describe('Parse instruction en-US', () => {
  const table: [string, number, number, string | number][] = [
    ['', -1, -1, -1],
    ['Bake for 10min', 600, 0, ''],
    ['Wait 1 hour, knead some more and wait another 15 min', 4500, 0, ''],
    ['Preheat the oven at 450 fahrenheit', 0, 450, 'fahrenheit'],
    ['Preheat the oven at 450° fahrenheit', 0, 450, 'fahrenheit'],
    ['Preheat the oven at 450°F', 0, 450, 'fahrenheit'],
    [
      'Preheat the oven at 450 degrees',
      0,
      450,
      'fahrenheit' // assume en-US default temperature unit
    ],
    [
      'Preheat the oven at 450 degrees for a while',
      0,
      450,
      'fahrenheit' // assume en-US default temperature unit
    ],
    ['Shape and proof for about 2 hours', 7200, 0, ''],
    ['Mix all ingredients', 0, 0, '']
  ];
  it.each(table)(
    'parse %s',
    (text, timeInSeconds, temperature, temperatureUnit) => {
      const result = parseInstruction(text, 'en-US');
      expect(result?.totalTimeInSeconds ?? -1).toBe(timeInSeconds);
      expect(result?.temperature ?? -1).toBe(temperature);
      expect(result?.temperatureUnit ?? -1).toBe(temperatureUnit);
    }
  );
});

describe('Parse instruction default temperature unit en', () => {
  const table: [string, number, number, string][] = [
    ['Preheat the oven at 450 degrees', 0, 450, 'celsius'],
    ['Preheat the oven at 450 degrees for a while', 0, 450, 'celsius'],
    ['Preheat the oven at 450°', 0, 450, 'celsius']
  ];
  it.each(table)(
    'parse %s',
    (text, timeInSeconds, temperature, temperatureUnit) => {
      const result = parseInstruction(text, 'en');
      expect(result?.totalTimeInSeconds ?? -1).toBe(timeInSeconds);
      expect(result?.temperature ?? -1).toBe(temperature);
      expect(result?.temperatureUnit ?? -1).toBe(temperatureUnit);
    }
  );
});

describe('Parse instruction with options en-US', () => {
  const table: [string, number, string, number, string, string][] = [
    [
      'Preheat the oven at 450 fahrenheit',
      450,
      'fahrenheit',
      232.2222,
      'c',
      'celsius'
    ],
    ['Preheat the oven at 450F', 450, 'fahrenheit', 232.2222, 'c', 'celsius'],
    ['Preheat the oven at 450 celsius', 450, 'celsius', 842, 'f', 'fahrenheit'],
    ['Preheat the oven at 450C', 450, 'celsius', 842, 'f', 'fahrenheit'],
    ['Bake', 0, '', 0, '', '']
  ];
  it.each(table)(
    'parse %s',
    (text, temperature, temperatureUnit, altTemp, altTempUOM, altTempName) => {
      const result = parseInstruction(text, 'en-US', {
        includeAlternativeTemperatureUnit: true
      });
      expect(result?.temperature ?? -1).toBe(temperature);
      expect(result?.temperatureUnit ?? -1).toBe(temperatureUnit);

      if (altTemp === 0) {
        expect(result?.alternativeTemperatures).toEqual([]);
      } else {
        expect(result?.alternativeTemperatures).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              quantity: altTemp,
              unit: altTempUOM,
              unitText: altTempName,
              minQuantity: altTemp,
              maxQuantity: altTemp
            })
          ])
        );
      }
    }
  );
});

describe('Parse instruction time range en-US', () => {
  const table: [string, number, { timeInSeconds: number, timeUnitText: string, timeText: string }[]][] = [
    [
      'Bake for 10min then 20 min then 30 minutes',
      3600,
      [
        { timeInSeconds: 600, timeUnitText: 'min', timeText: '10' },
        { timeInSeconds: 1200, timeUnitText: 'min', timeText: '20' },
        { timeInSeconds: 1800, timeUnitText: 'minutes', timeText: '30' }
      ]
    ],
    [
      'Bake for 10min then wait it to cool down over 15 minutes',
      1500,
      [
        { timeInSeconds: 600, timeUnitText: 'min', timeText: '10' },
        { timeInSeconds: 900, timeUnitText: 'minutes', timeText: '15' }
      ]
    ],
    [
      'Bake for 10min',
      600,
      [{ timeInSeconds: 600, timeUnitText: 'min', timeText: '10' }]
    ],
    ['Boil until done', 0, []]
  ];
  it.each(table)('parse %s', (text, totalTimeInSeconds, time) => {
    /**
     * @type {Types.InstructionTime[]}
     */
    const timeItems = time;
    const result = parseInstruction(text, 'en-US');
    expect(result?.totalTimeInSeconds ?? -1).toBe(totalTimeInSeconds);
    expect(result?.timeItems.length).toBe(timeItems.length);

    for (let index = 0; index < (result?.timeItems.length ?? 0); index++) {
      const element = result?.timeItems[index];

      expect(element?.timeInSeconds).toBe(timeItems[index].timeInSeconds);
      expect(element?.timeText).toBe(timeItems[index].timeText);
      expect(element?.timeUnitText).toBe(timeItems[index].timeUnitText);
    }
  });
});
