import { Transform, plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';

export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  STAGING = 'staging',
  TEST = 'test',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV!: Environment;

  @IsString()
  APP_NAME!: string;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  APP_PORT!: number;

  @IsString()
  DATABASE_URL!: string;
}

export type ENV_VARS = keyof EnvironmentVariables;
export type EnvironmentVariablesType = {
  [K in ENV_VARS]: EnvironmentVariables[K];
};

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
