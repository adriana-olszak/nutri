import { Injectable } from '@nestjs/common';
import {
  PrismaService,
  PrismaTransactionalClient,
} from '@nutri/server-db-client';

type BlacklistTokenParams = {
  token: string;
  expiresAt: Date;
};

@Injectable()
export class TokenBlacklistService {
  constructor(private prisma: PrismaService) {}

  async blacklistToken(
    { token, expiresAt }: BlacklistTokenParams,
    trx?: PrismaTransactionalClient,
  ): Promise<void> {
    console.log('blacklistedToken', token);
    const client = trx || this.prisma;
    await client.tokenBlacklist.create({
      data: {
        token,
        expiresAt,
      },
    });
  }

  async isTokenBlacklisted(
    { token }: { token: string },
    trx?: PrismaTransactionalClient,
  ): Promise<boolean> {
    const client = trx || this.prisma;
    const blacklistedToken = await client.tokenBlacklist.findUnique({
      where: { token },
    });

    return !!blacklistedToken;
  }

  async cleanupExpiredTokens(trx?: PrismaTransactionalClient): Promise<void> {
    const client = trx || this.prisma;
    await client.tokenBlacklist.deleteMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
      },
    });
  }
}
