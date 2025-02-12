import { ValidationArguments, ValidationOptions, registerDecorator } from 'class-validator';

export function IsRecipeText(validationOptions?: ValidationOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: 'isRecipeText',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(text: string, args: ValidationArguments) {
          // Basic recipe text validation
          const recipeIndicators = [
            /ingredients?:/i,
            /instructions?:/i,
            /directions?:/i,
            /steps?:/i,
            /method:/i,
            /prep(aration)? time:/i,
            /cook(ing)? time:/i,
            /serves?:/i,
            /(^\d+(\.|,|\))|\d+\s*(g|kg|ml|l|cups?|tbsp|tsp|oz))/m,
          ];

          // Check if text contains at least 2 recipe indicators
          const matchCount = recipeIndicators.reduce(
            (count, pattern) => count + (pattern.test(text) ? 1 : 0),
            0
          );

          return matchCount >= 2;
        },
        defaultMessage(args: ValidationArguments) {
          return 'Text does not appear to be a recipe. Please provide text containing recipe ingredients and instructions.';
        },
      },
    });
  };
}
