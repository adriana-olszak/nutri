export interface ValidationSchema {
  schema: Record<string, any>;
  uiSchema: Record<string, any>;
}

export class SchemaRegistry {
  private static schemas: Record<string, ValidationSchema> = {};

  static registerSchema(domain: string, operation: string, schema: ValidationSchema): void {
    const key = `${domain}:${operation}`;
    this.schemas[key] = schema;
  }

  static getSchema(domain: string, operation: string): ValidationSchema | null {
    const key = `${domain}:${operation}`;
    return this.schemas[key] || null;
  }
}
