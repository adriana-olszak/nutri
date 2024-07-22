import {
  Injectable,
  UnauthorizedException,
  Logger,
  NotFoundException
} from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nutri/server-config';
import { ErrorHandler } from '@nutri/server-utils';

@Injectable()
export class RefreshTokenService {
  private readonly logger = new Logger(RefreshTokenService.name);
  private readonly errorHandler = new ErrorHandler(this.logger);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {
  }

  public async generate(userId: string, existingFamilyId?: string) {
    try {
      const token = this.jwtService.sign(
        { type: 'refresh', userId },
        {
          expiresIn: this.configService.authJWTRefreshExpiration,
          secret: this.configService.authJWTRefreshSecret
        }
      );

      const familyId = existingFamilyId || uuidv4();
      const expiresAt = new Date(Date.now() + this.configService.authJWTRefreshExpiration); // 7 days

      await this.prisma.refreshToken.create({
        data: { token, userId, familyId, expiresAt }
      });

      this.logger.log(`Generated refresh token for user ${userId}`);
      return { token, familyId };
    } catch (error: unknown) {
      return this.errorHandler.handleError(error, 'Failed to generate refresh token');
    }
  }

  public async rotate(oldToken: string) {
    try {
      const existingToken = await this.prisma.refreshToken.findUnique({
        where: { token: oldToken }
      });

      if (!existingToken) {
        throw new NotFoundException('Refresh token not found');
      }

      if (existingToken.used) {
        await this.revokeByFamily(existingToken.familyId);
        this.logger.warn(`Refresh token reuse detected for family ${existingToken.familyId}`);
        throw new UnauthorizedException('Refresh token reuse detected');
      }

      await this.prisma.refreshToken.update({
        where: { id: existingToken.id },
        data: { used: true }
      });

      const { token: newRefreshToken } = await this.generate(existingToken.userId, existingToken.familyId);

      this.logger.log(`Rotated refresh token for user ${existingToken.userId}`);
      return newRefreshToken;
    } catch (error: unknown) {
      return this.errorHandler.handleError(error, 'Failed to rotate refresh token');
    }
  }

  public async revokeByFamily(familyId: string) {
    try {
      const result = await this.prisma.refreshToken.updateMany({
        where: { familyId },
        data: { used: true }
      });
      this.logger.log(`Revoked ${result.count} tokens for family ${familyId}`);
    } catch (error: unknown) {
      return this.errorHandler.handleError(error, 'Failed to revoke token family');
    }
  }

  async validate(token: string) {
    try {
      const refreshToken = await this.prisma.refreshToken.findUnique({
        where: { token }
      });

      if (!refreshToken) {
        throw new NotFoundException('Refresh token not found');
      }

      if (refreshToken.used || refreshToken.expiresAt < new Date()) {
        this.logger.warn(`Invalid refresh token used: ${refreshToken.id}`);
        throw new UnauthorizedException('Invalid refresh token');
      }

      return { userId: refreshToken.userId };
    } catch (error: unknown) {
      return this.errorHandler.handleError(error, 'Failed to validate refresh token');
    }
  }

  async revoke(token: string) {
    try {
      const result = await this.prisma.refreshToken.update({
        where: { token },
        data: { used: true }
      });
      this.logger.log(`Revoked refresh token: ${result.id}`);
    } catch (error: unknown) {
      return this.errorHandler.handleError(error, 'Failed to revoke refresh token');
    }
  }

}
