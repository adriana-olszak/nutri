import { RecipeAdapter } from "./adapters/adapter.interface";
import { RecipeImporter } from "./importer/importer.interface";
import { DataLoader } from "./loaders/loader.interface";
import { Logger } from "./utils";

export interface ImportStats {
  total: number;
  success: number;
  failed: number;
  errors: Array<{ recipe: string; error: string }>;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  validationErrors?: Array<{ item: unknown; errors: string[] }>;
}

export interface ImportConfig<TSource> {
  adapter: RecipeAdapter<TSource>;
  importer: RecipeImporter;
  loader: DataLoader<TSource>;
  batchSize?: number;
  maxRetries?: number;
  continueOnError?: boolean;
  validateOnly?: boolean;
}

export class ImportOrchestrator<TSource> {
  private readonly logger: Logger;
  private stats: ImportStats;

  constructor(
    private readonly config: ImportConfig<TSource>,
    loggerContext = 'ImportOrchestrator',
  ) {
    this.logger = new Logger(loggerContext);
    this.stats = this.initializeStats();
  }

  private initializeStats(): ImportStats {
    return {
      total: 0,
      success: 0,
      failed: 0,
      errors: [],
      startTime: new Date(),
    };
  }

  async execute(): Promise<ImportStats> {
    try {
      this.logger.info('Starting import process...');

      // Load data
      this.logger.info('Loading data...');
      const rawData = await this.config.loader.load();

      // Validate and transform data
      this.logger.info('Validating data...');
      const { validItems, errors } = await this.validateData(rawData);

      this.stats.validationErrors = errors;
      this.stats.total = validItems.length;

      if (this.config.validateOnly) {
        this.logger.info('Validation only mode - stopping after validation');
        this.logValidationSummary();
        return this.stats;
      }

      this.logger.info(`Processing ${this.stats.total} valid items...`);

      // Process in batches
      const batchSize = this.config.batchSize || validItems.length;
      const batches = this.splitIntoBatches(validItems, batchSize);

      for (const [batchIndex, batch] of batches.entries()) {
        this.logger.info(
          `Processing batch ${batchIndex + 1}/${batches.length}`,
        );
        await this.processBatch(batch);
      }

      // Finalize stats
      this.stats.endTime = new Date();
      this.stats.duration =
        this.stats.endTime.getTime() - this.stats.startTime.getTime();

      this.logSummary();
      return this.stats;
    } catch (error) {
      this.logger.error('Fatal error during import:', error);
      throw error;
    }
  }

  private async validateData(rawData: TSource[]) {
    const validItems: TSource[] = [];
    const errors: Array<{ item: TSource; errors: string[] }> = [];

    for (const item of rawData) {
      try {
        const validItem = await this.config.adapter.validateAndTransform(item);
        if (validItem) {
          validItems.push(validItem);
        }
      } catch (validationErrors) {
        errors.push({
          item,
          errors: Array.isArray(validationErrors)
            ? validationErrors.map((e) => e.toString())
            : [validationErrors.toString()],
        });
      }
    }

    return { validItems, errors };
  }

  private splitIntoBatches<T>(items: T[], batchSize: number): T[][] {
    return Array.from({ length: Math.ceil(items.length / batchSize) }).map(
      (_, i) => items.slice(i * batchSize, (i + 1) * batchSize),
    );
  }

  private async processBatch(batch: TSource[]) {
    await Promise.all(batch.map((item) => this.processItem(item)));
  }

  private async processItem(item: TSource) {
    const retries = this.config.maxRetries || 1;

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const adaptedItem = this.config.adapter.adapt(item);
        const result = await this.config.importer.import(adaptedItem);

        if (result.success) {
          this.stats.success++;
          this.logger.info(`Successfully imported item: ${result.recipeId}`);
          return;
        } else {
          throw new Error(result.error);
        }
      } catch (error) {
        const isLastAttempt = attempt === retries;

        if (isLastAttempt) {
          this.stats.failed++;
          this.stats.errors.push({
            recipe: this.getItemIdentifier(item),
            error: error instanceof Error ? error.message : String(error),
          });

          this.logger.error(
            `Failed to import item after ${retries} attempts:`,
            { item, error },
          );

          if (!this.config.continueOnError) {
            throw error;
          }
        } else {
          this.logger.warn(
            `Attempt ${attempt}/${retries} failed, retrying...`,
            { item, error },
          );
          await this.delay(attempt * 1000); // Exponential backoff
        }
      }
    }
  }

  private getItemIdentifier(item: TSource): string {
    return (item as any).title || (item as any).name || 'Unknown';
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private logValidationSummary() {
    this.logger.info('Validation Summary:', {
      totalItems: this.stats.total,
      validItems: this.stats.total - (this.stats.validationErrors?.length || 0),
      invalidItems: this.stats.validationErrors?.length || 0,
    });

    if (this.stats.validationErrors?.length) {
      this.logger.error('Validation Errors:', this.stats.validationErrors);
    }
  }

  private logSummary() {
    this.logger.info('Import Summary:', {
      total: this.stats.total,
      successful: this.stats.success,
      failed: this.stats.failed,
      duration: `${Math.round(this.stats.duration! / 1000)}s`,
      errorRate: `${((this.stats.failed / this.stats.total) * 100).toFixed(
        2,
      )}%`,
    });

    if (this.stats.errors.length > 0) {
      this.logger.error('Failed items:', this.stats.errors);
    }
  }
}
