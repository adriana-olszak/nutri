import { Provider } from '@nestjs/common';
import { StatsD } from 'hot-shots';

export const StatsDProvider: Provider<StatsD> = {
  provide: StatsD,
  useValue: new StatsD(),
};
