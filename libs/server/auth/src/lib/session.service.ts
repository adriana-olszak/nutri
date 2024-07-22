import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async createSession(userId: string, ipAddress: string, deviceInfo: string) {
    return this.prisma.session.create({
      data: { userId, ipAddress, deviceInfo }
    });
  }

  async endSession(sessionId: string) {
    return this.prisma.session.delete({ where: { id: sessionId } });
  }

  async getUserSessions(userId: string) {
    return this.prisma.session.findMany({ where: { userId } });
  }
}
