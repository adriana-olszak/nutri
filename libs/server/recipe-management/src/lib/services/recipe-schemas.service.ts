import { Injectable, OnModuleInit } from '@nestjs/common';
import { SchemaResponseDto } from '../dtos/schema-response.dto';
import { SchemaRegistry } from '../schema-registry';
import { registerRecipeIngredientSchemas } from '../schemas/recipe-ingredient.schema';
import { registerRecipeInstructionSchemas } from '../schemas/recipe-instruction.schema';
import { registerRecipeSchemas } from '../schemas/recipe.schema';

@Injectable()
export class RecipeSchemasService implements OnModuleInit {
  onModuleInit() {
    // Register all schemas during initialization
    this.registerAllSchemas();
  }

  private registerAllSchemas() {
    registerRecipeSchemas();
    registerRecipeIngredientSchemas();
    registerRecipeInstructionSchemas();
  }

  getSchema(domain: string, operation: string): SchemaResponseDto | null {
    const schema = SchemaRegistry.getSchema(domain, operation);
    if (!schema) return null;

    return {
      schema: schema.schema,
      uiSchema: schema.uiSchema,
    };
  }
}
