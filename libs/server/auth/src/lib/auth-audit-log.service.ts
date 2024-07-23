import {
  PrismaService,
  PrismaTransactionalClient,
} from '@nutri/server-db-client';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nutri/server-config';

type LogLoginParams = {
  userId?: string;
  email?: string;
  ipAddress: string;
  userAgent: string;
};

@Injectable()
export class AuthAuditLogService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  async logSuccessfulLogin(
    { userId, ipAddress, userAgent }: LogLoginParams,
    trx?: PrismaTransactionalClient,
  ) {
    const client = trx || this.prisma;
    return client.loginLog.create({
      data: { userId, success: true, ipAddress, userAgent },
    });
  }

  async logFailedLogin(
    { email, ipAddress, userAgent }: LogLoginParams,
    trx?: PrismaTransactionalClient,
  ) {
    const client = trx || this.prisma;
    const user = await client.user.findUnique({ where: { email } });

    return client.loginLog.create({
      data: { userId: user?.id, success: false, ipAddress, userAgent },
    });
  }
}
