import { StatsDService } from '@nutri/server-metrics';

export interface IJobProcessor {
  metrics: StatsDService;
}
