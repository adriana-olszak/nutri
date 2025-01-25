import { LockContext } from '@app/infra/lock/types';
import { JOB_NAMES, QUEUE_NAMES } from '@app/infra/queue/consts';
import { ClsStore } from 'nestjs-cls';

export enum CLS_KEYS {
  LOCK_CONTEXT = 'LOCK_CONTEXT',
  MODE = 'MODE',
  USER_ID = 'USER_ID',
  JOB = 'JOB',
  EVENT = 'EVENT',
}

export interface ContextStore extends ClsStore {
  [CLS_KEYS.MODE]: 'background-job' | 'http-request' | 'event-handler';
  [CLS_KEYS.USER_ID]: string | number;
  [CLS_KEYS.LOCK_CONTEXT]?: LockContext;
  [CLS_KEYS.JOB]?: {
    id: string;
    name: JOB_NAMES;
    queueName: QUEUE_NAMES;
    attemptsMade: number;
    data: any;
  };
  [CLS_KEYS.EVENT]?: {
    id: string;
    name: string;
  };
}

// Helper type to get only the keys we've added to ContextStore
type OurContextStoreKeys = Exclude<keyof ContextStore, keyof ClsStore>;

// This type will be `never` if all keys are used, otherwise it will be the missing key(s)
type MissingKeys = Exclude<CLS_KEYS, OurContextStoreKeys>;

// This type will be `never` if there are no extra keys, otherwise it will be the extra key(s)
type ExtraKeys = Exclude<OurContextStoreKeys, CLS_KEYS>;

// Type assertion to ensure no missing or extra keys
type AssertKeys<T extends true> = [MissingKeys] extends [never]
  ? [ExtraKeys] extends [never]
    ? T
    : { error: 'Extra keys found in ContextStore'; extra: ExtraKeys }
  : { error: 'Missing keys in ContextStore'; missing: MissingKeys };

// This will cause a compile-time error if there are missing or extra keys
const _: AssertKeys<true> = true;
