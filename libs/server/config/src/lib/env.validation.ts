import { Transform, plainToInstance } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  validateSync
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

  @IsNumber()
  @Transform(({ value }) => Number(value))
  SERVER_APP_PORT!: number;

  @IsString()
  DATABASE_URL!: string;

  @IsString()
  OAUTH_GOOGLE_CLIENT_SECRET!: string;

  @IsString()
  OAUTH_GOOGLE_CLIENT_ID!: string;

  @IsNumber()
  AUTH_REMEMBER_ME_EXPIRES_IN!: number;

  @IsString()
  BCRYPT_COST!: string;

  @IsString()
  SERVER_BASE_URL!: string;

  @IsString()
  CLIENT_BASE_URL!: string;

  @IsBoolean()
  @Transform(({ value }) => Boolean(value))
  PUBLIC_REGISTRATION!: boolean;

  @IsString()
  AUTH_JWT_ACCESS_EXPIRATION!: string;

  @IsString()
  AUTH_JWT_REFRESH_EXPIRATION!: string;

  @IsString()
  AUTH_JWT_ACCESS_PUBLIC_KEY!: string;

  @IsString()
  AUTH_JWT_ACCESS_SECRET!: string;

  @IsString()
  AUTH_JWT_REFRESH_SECRET!: string;
}

export type ENV_VARS = keyof EnvironmentVariables;
export type EnvironmentVariablesType = {
  [K in ENV_VARS]: EnvironmentVariables[K];
};

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
