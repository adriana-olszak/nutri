import { Injectable } from '@nestjs/common';
import { CLS_KEYS, ContextStore } from '@nutri/server-context';
import { ClsService } from 'nestjs-cls';
import { PrismaService } from './prisma.service';

type TransactionFn<T> = (tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0]) => Promise<T>;

@Injectable()
export class TransactionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cls: ClsService<ContextStore>
  ) {}

  getClient() {
    return this.cls.get(CLS_KEYS.TX) ?? this.prisma;
  }

  async transaction<T>(fn: TransactionFn<T>): Promise<T> {
    // If we're already in a transaction, just run the function
    if (this.cls.get(CLS_KEYS.TX)) {
      return fn(this.cls.get(CLS_KEYS.TX));
    }

    // Otherwise, start a new transaction
    return this.prisma.$transaction(async (tx) => {
      return await this.cls.run(async () => {
        this.cls.set(CLS_KEYS.TX, tx);
        try {
          return await fn(tx);
        } finally {
          this.cls.set(CLS_KEYS.TX, undefined);
        }
      });
    });
  }
}
