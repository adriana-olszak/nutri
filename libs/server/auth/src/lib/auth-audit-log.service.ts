import { PrismaService } from '@nutri/server-db-client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthAuditLogService {
  constructor(private prisma: PrismaService) {
  }

  async logSuccessfulLogin(userId: string, ipAddress: string, userAgent: string) {
    return this.prisma.loginLog.create({
      data: { userId, success: true, ipAddress, userAgent }
    });
  }

  async logFailedLogin(email: string, ipAddress: string, userAgent: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    return this.prisma.loginLog.create({
      data: { userId: user?.id, success: false, ipAddress, userAgent }
    });
  }
}
