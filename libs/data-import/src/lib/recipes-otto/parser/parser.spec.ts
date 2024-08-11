import { extractIngredientLines, parseSteps } from './parser';
import { IngredientRoot } from './validators/ingredients.validator';

describe('extractIngredientLines', () => {
  it('should extract ingredient lines from JSON structure', () => {
    const input: IngredientRoot = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            { type: 'text', value: '75g | couscous\n200g | sugar snap peas, roughly chopped\n' },
            { type: 'link', title: 'maple syrup', url: '/products/maple-syrup', children: [
                { type: 'text', value: '20g | maple syrup\n' }
              ] },
            { type: 'text', value: '\n50g | feta, finely crumbled' }
          ]
        }
      ]
    };

    const result = extractIngredientLines(input);

    expect(result).toEqual([
      '75g couscous',
      '200g sugar snap peas, roughly chopped',
      '20g maple syrup',
      '50g feta, finely crumbled'
    ]);
  });
});


describe('parseSteps', () => {
  it('should correctly parse a simple ordered list of steps', () => {
    const input = JSON.stringify({
      type: 'root',
      children: [{
        listType: 'ordered',
        type: 'list',
        children: [
          { type: 'list-item', children: [{ type: 'text', value: 'Step 1' }] },
          { type: 'list-item', children: [{ type: 'text', value: 'Step 2' }] },
        ]
      }]
    });

    const result = parseSteps(input);

    expect(result).toEqual([
      { type: 'step', content: 'Step 1', stepNumber: 1, listIndex: 0 },
      { type: 'step', content: 'Step 2', stepNumber: 2, listIndex: 0 },
    ]);
  });

  it('should correctly parse a complex recipe with multiple steps', () => {
    const input = "{\"type\":\"root\",\"children\":[{\"listType\":\"ordered\",\"type\":\"list\",\"children\":[{\"type\":\"list-item\",\"children\":[{\"type\":\"text\",\"value\":\"Preheat the oven to 160C. \"}]},{\"type\":\"list-item\",\"children\":[{\"type\":\"text\",\"value\":\"Put the butter, oil, the onions and a teaspoon of salt in a large saute pan on a medium heat and cook, stirring often, for 18-20 minutes, until soft and deeply golden brown (you don't want the onions to burn or become crisp, so lower the heat as necessary).\"}]},{\"type\":\"list-item\",\"children\":[{\"type\":\"text\",\"value\":\"Meanwhile, mix the croutons ingredients in a bowl and place on a large parchment lined tray. Bake for 7 minutes until golden and crispy and set aside to cool \"}]},{\"type\":\"list-item\",\"children\":[{\"type\":\"text\",\"value\":\"Add the garlic to the onions and fry, stirring, for two minutes. Add the tomatoes, tomato paste, basil, habanero and two teaspoons of salt, and fry, stirring often, for seven minutes. Increase the heat to medium-high, add the stock, 300ml water and a good grind of pepper, and bring up to a simmer. Turn down the heat to medium, cook for 12 minutes, then lift out the habanero and squeeze to remove any liquid. \"}]},{\"type\":\"list-item\",\"children\":[{\"type\":\"text\",\"value\":\"Leave the soup to cool for 5-10 minutes, so it's not super-hot, then transfer to a blender and blitz until completely smooth.\"}]},{\"type\":\"list-item\",\"children\":[{\"type\":\"text\",\"value\":\"Divide the soup across the four bowls, spoon the cream on top and serve with the croutons alongside. \"}]}]}]}";

    const result = parseSteps(input);

    expect(result).toHaveLength(6);
    expect(result[0]).toEqual({
      type: 'step',
      content: 'Preheat the oven to 160C.',
      stepNumber: 1,
      listIndex: 0
    });
    expect(result[5]).toEqual({
      type: 'step',
      content: 'Divide the soup across the four bowls, spoon the cream on top and serve with the croutons alongside.',
      stepNumber: 6,
      listIndex: 0
    });
  });

  it('should correctly parse steps with multiple sentences', () => {
    const input = "{\"type\":\"root\",\"children\":[{\"listType\":\"ordered\",\"type\":\"list\",\"children\":[{\"type\":\"list-item\",\"children\":[{\"type\":\"text\",\"value\":\"Place the potatoes in a saucepan with the garlic, cover with water, stir in the celery salt and 1 tablespoon of sea salt. Put the pan on high heat, bring to a boil and once boiling, reduce the heat to medium high. Cook for 12-14 minutes until a knife goes through easily, drain, discard the garlic and allow to cool until just warm.\"}]}]}]}";

    const result = parseSteps(input);

    expect(result).toHaveLength(1);
    expect(result[0].content).toBe("Place the potatoes in a saucepan with the garlic, cover with water, stir in the celery salt and 1 tablespoon of sea salt. Put the pan on high heat, bring to a boil and once boiling, reduce the heat to medium high. Cook for 12-14 minutes until a knife goes through easily, drain, discard the garlic and allow to cool until just warm.");
  });

  it('should handle empty input correctly', () => {
    const input = JSON.stringify({
      type: 'root',
      children: []
    });

    const result = parseSteps(input);

    expect(result).toEqual([]);
  });

  it('should handle multiple lists correctly', () => {
    const input = JSON.stringify({
      type: 'root',
      children: [
        {
          listType: 'ordered',
          type: 'list',
          children: [
            { type: 'list-item', children: [{ type: 'text', value: 'Step 1' }] },
            { type: 'list-item', children: [{ type: 'text', value: 'Step 2' }] },
          ]
        },
        {
          listType: 'unordered',
          type: 'list',
          children: [
            { type: 'list-item', children: [{ type: 'text', value: 'Note 1' }] },
            { type: 'list-item', children: [{ type: 'text', value: 'Note 2' }] },
          ]
        }
      ]
    });

    const result = parseSteps(input);

    expect(result).toEqual([
      { type: 'step', content: 'Step 1', stepNumber: 1, listIndex: 0 },
      { type: 'step', content: 'Step 2', stepNumber: 2, listIndex: 0 },
      { type: 'step', content: 'Note 1', stepNumber: undefined, listIndex: 1 },
      { type: 'step', content: 'Note 2', stepNumber: undefined, listIndex: 1 },
    ]);
  });
});
