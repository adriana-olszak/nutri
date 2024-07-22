// token-blacklist.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';

@Injectable()
export class TokenBlacklistService {
  constructor(private prisma: PrismaService) {
  }

  async blacklistToken(token: string, expiresAt: Date): Promise<void> {
    await this.prisma.tokenBlacklist.create({
      data: {
        token,
        expiresAt
      }
    });
  }

  async isTokenBlacklisted(token: string): Promise<boolean> {
    const blacklistedToken = await this.prisma.tokenBlacklist.findUnique({
      where: { token }
    });

    if (!blacklistedToken) {
      return false;
    }

    if (blacklistedToken.expiresAt < new Date()) {
      // Token has expired, remove it from the blacklist
      await this.prisma.tokenBlacklist.delete({
        where: { token }
      });
      return false;
    }

    return true;
  }

  async cleanupExpiredTokens(): Promise<void> {
    await this.prisma.tokenBlacklist.deleteMany({
      where: {
        expiresAt: {
          lt: new Date()
        }
      }
    });
  }
}
