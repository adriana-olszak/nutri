import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { CreateRecipeInstructionDto } from '../dtos/recipe-instruction.dto';
import { SchemaRegistry } from '../schema-registry';
import { getUISchema } from './decorators';

export function registerRecipeInstructionSchemas() {
  // Generate JSON Schema from validation metadata
  const schemas = validationMetadatasToSchemas();

  // Get the CreateRecipeInstructionDto schema
  const instructionSchema = schemas[CreateRecipeInstructionDto.name];

  // Get UI schema from our custom decorator
  const uiSchema = getUISchema(CreateRecipeInstructionDto);

  // Register for create operation
  SchemaRegistry.registerSchema('recipe-instruction', 'create', {
    schema: instructionSchema,
    uiSchema,
  });

  // Register for update operation (same schema for now)
  SchemaRegistry.registerSchema('recipe-instruction', 'update', {
    schema: instructionSchema,
    uiSchema,
  });
}
