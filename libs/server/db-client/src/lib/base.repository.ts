import { Injectable } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Injectable()
export abstract class BaseRepository {
  constructor(protected readonly txService: TransactionService) {}

  protected get client() {
    return this.txService.getClient();
  }
}
