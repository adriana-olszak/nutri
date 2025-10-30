import 'reflect-metadata';

const UI_SCHEMA_METADATA_KEY = 'uiSchema';

export interface UIOptions {
  widget?: string;
  label?: string;
  placeholder?: string;
  order?: number;
  hidden?: boolean;
  rows?: number;
  min?: number;
  max?: number;
  step?: number;
  options?: Array<{ label: string; value: string | number }>;
  dataSource?: string;
  queryParam?: string;
  minChars?: number;
  debounceMs?: number;
  conditional?: {
    field: string;
    value: any;
  };
  [key: string]: any;
}

export function UIHint(options: UIOptions) {
  return (target: any, key: string) => {
    const existingMetadata = Reflect.getMetadata(UI_SCHEMA_METADATA_KEY, target.constructor) || {};

    existingMetadata[key] = options;

    Reflect.defineMetadata(UI_SCHEMA_METADATA_KEY, existingMetadata, target.constructor);
  };
}

export function getUISchema(target: any): Record<string, UIOptions> {
  return Reflect.getMetadata(UI_SCHEMA_METADATA_KEY, target) || {};
}
