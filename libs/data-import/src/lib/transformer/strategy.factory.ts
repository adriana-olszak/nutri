import { FoodDataSource } from '../../config';
import { TransformerStrategy } from './interfaces';
import { USDATransformerStrategy } from './strategies/usda.strategy';
import { CIQUALTransformerStrategy } from './strategies/ciqual.strategy';

export function getTransformerStrategy(dataSource: FoodDataSource): TransformerStrategy {
  switch (dataSource) {
    case FoodDataSource.USDA:
      return new USDATransformerStrategy();
    case FoodDataSource.CIQUAL:
      return new CIQUALTransformerStrategy();
    // Add cases for other data sources
    default:
      throw new Error(`Unsupported data source: ${dataSource}`);
  }
}
