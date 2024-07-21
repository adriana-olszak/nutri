import { BaseGenerator } from './generators/base.generator';
import { GeneratorConfig, GeneratorSpecificConfig } from './generator.types';
import { PalCodeGenerator } from './generators/paljs.generator';
import { GraphQLResolverGenerator } from './generators/graphql-resolvers.generator';
import { SchemaExtensionGenerator } from './generators/schema-extension.generator';
import { FrontendGqlClientGenerator } from './generators/frontend-gql-client.generator';
import { Logger } from './logger';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { resolvePaths } from './utils/resolve-paths';

const execAsync = promisify(exec);

export class GeneratorPipeline {
  private readonly generators: BaseGenerator<GeneratorSpecificConfig>[];

  constructor(private rawConfig: GeneratorConfig) {
    const { generators, ...baseConfig } = resolvePaths(rawConfig, rawConfig.rootDir);
    this.generators = [new PalCodeGenerator(baseConfig.palConfig, baseConfig)];

    this.generators.push(...generators.map(genConfig => {
      switch (genConfig.type) {
        case 'graphqlResolvers':
          return new GraphQLResolverGenerator(genConfig, baseConfig);
        case 'schemaExtensions':
          return new SchemaExtensionGenerator(genConfig, baseConfig);
        case 'frontendGqlClient':
          return new FrontendGqlClientGenerator(genConfig, baseConfig);
      }
    }));
  }

  async run(): Promise<void> {
    Logger.start('Starting Code Generation');
    const generationStats = [];
    for (const generator of this.generators) {
      const startTime = performance.now();
      await generator.generate();
      const endTime = performance.now();
      const duration = ((endTime - startTime) / 1000).toFixed(2);
      generationStats.push({
        Generator: generator.constructor.name,
        'Duration (s)': duration
      });
    }
    // await this.formatGeneratedCode();
    Logger.table(generationStats, 'Generation Statistics');
    Logger.end('Code Generation Complete');
  }

  private async formatGeneratedCode(): Promise<void> {
    Logger.start('Formatting Generated Code');
    await this.execLocal(`prettier --loglevel warn --write "${this.rawConfig.apiOutPath}/**/*.ts"`);
    Logger.end('Code Formatting Complete');
  }

  private execLocal(command: string): Promise<void> {
    Logger.info(`Executing: ${command}`);
    return execAsync('npx ' + command).then(({ stdout, stderr }) => {
      if (stdout) Logger.info(stdout);
      if (stderr) Logger.warn(stderr);
    });
  }
}
