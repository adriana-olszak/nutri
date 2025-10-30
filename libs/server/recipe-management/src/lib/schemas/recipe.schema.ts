import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { CreateRecipeDto } from '../dtos/recipe.dto';
import { SchemaRegistry } from '../schema-registry';
import { getUISchema } from './decorators';

export function registerRecipeSchemas() {
  // Generate JSON Schema from validation metadata
  const schemas = validationMetadatasToSchemas();

  // Get the CreateRecipeDto schema
  const recipeSchema = schemas[CreateRecipeDto.name];

  // Get UI schema from our custom decorator
  const uiSchema = getUISchema(CreateRecipeDto);

  // Register for create operation
  SchemaRegistry.registerSchema('recipe', 'create', {
    schema: recipeSchema,
    uiSchema,
  });

  // Register for update operation (same schema for now)
  SchemaRegistry.registerSchema('recipe', 'update', {
    schema: recipeSchema,
    uiSchema,
  });
}
