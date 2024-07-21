// Base configuration type
import { Config as PalConfig } from '@paljs/types';

export type BaseConfig = {
  rootDir: string;
  prismaClientPath: string;
  apiOutPath: string;
  palConfig: PalGeneratorConfig;
};

// Individual generator configurations
export type PalGeneratorConfig = PalConfig & {
  type: 'pal';
};

export type GraphQLResolversConfig = {
  type: 'graphqlResolvers';
  auth: {
    scheme: 'RBAC';
    defaultRBACRole: string;
  };
};

export type SchemaExtensionsConfig = {
  type: 'schemaExtensions';
  defaultFieldsOutPath?: string;
};

export type FrontendGqlClientConfig = {
  type: 'frontendGqlClient';
  outPath: string;
  fieldsFolderName?: string;
  queriesFolderName?: string;
};

// Union of all generator configurations
export type GeneratorSpecificConfig =
  | PalGeneratorConfig
  | GraphQLResolversConfig
  | SchemaExtensionsConfig
  | FrontendGqlClientConfig;

// Complete generator configuration
export type GeneratorConfig = BaseConfig & {
  generators: GeneratorSpecificConfig[];
};
