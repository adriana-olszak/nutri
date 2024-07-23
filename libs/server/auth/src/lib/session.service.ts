import { Injectable } from '@nestjs/common';
import {
  PrismaService,
  PrismaTransactionalClient,
} from '@nutri/server-db-client';

type CreateSessionParams = {
  userId: string;
  ipAddress: string;
  deviceInfo: string;
};

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async createSession(
    { userId, ipAddress, deviceInfo }: CreateSessionParams,
    trx?: PrismaTransactionalClient,
  ) {
    const client = trx || this.prisma;
    return client.session.create({
      data: { userId, ipAddress, deviceInfo },
    });
  }

  async endSession(
    { sessionId }: { sessionId: string },
    trx?: PrismaTransactionalClient,
  ) {
    const client = trx || this.prisma;
    return client.session.delete({ where: { id: sessionId } });
  }

  async getUserSessions(
    { userId }: { userId: string },
    trx?: PrismaTransactionalClient,
  ) {
    const client = trx || this.prisma;
    return client.session.findMany({ where: { userId } });
  }
}
