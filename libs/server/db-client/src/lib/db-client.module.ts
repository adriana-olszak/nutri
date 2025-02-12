import { Module } from '@nestjs/common';
import { ContextModule } from '@nutri/server-context';
import { PrismaService } from './prisma.service';
import { TransactionService } from './transaction.service';

@Module({
  imports: [ContextModule],
  providers: [PrismaService, TransactionService],
  exports: [PrismaService, TransactionService],
})
export class DbClientModule {
}
