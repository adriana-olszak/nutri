// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pipeline } = require('@huggingface/transformers');

export class SentenceTransformerEmbedding {
  private pipeline: any;
  private initialized = false;

  constructor(
    private readonly modelName: string,
  ) {}

  async initialize(): Promise<void> {
    if (this.initialized) return;

    try {
      this.pipeline = await pipeline(
        'feature-extraction',
        this.modelName,
      );
      this.initialized = true;
    } catch (error) {
      throw new Error(`Failed to initialize model ${this.modelName}: ${error}`);
    }
  }

  async encode(text: string): Promise<number[]> {
    if (!this.initialized) {
      await this.initialize();
    }

    const output = await this.pipeline(text, {
      pooling: 'mean',
      normalize: true,
    });

    return Array.from(output.data);
  }
}
