import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { CreateRecipeIngredientDto } from '../dtos/recipe-ingredient.dto';
import { SchemaRegistry } from '../schema-registry';
import { getUISchema } from './decorators';

export function registerRecipeIngredientSchemas() {
  // Generate JSON Schema from validation metadata
  const schemas = validationMetadatasToSchemas();

  // Get the CreateRecipeIngredientDto schema
  const ingredientSchema = schemas[CreateRecipeIngredientDto.name];

  // Get UI schema from our custom decorator
  const uiSchema = getUISchema(CreateRecipeIngredientDto);

  // Register for create operation
  SchemaRegistry.registerSchema('recipe-ingredient', 'create', {
    schema: ingredientSchema,
    uiSchema,
  });

  // Register for update operation (same schema for now)
  SchemaRegistry.registerSchema('recipe-ingredient', 'update', {
    schema: ingredientSchema,
    uiSchema,
  });
}
