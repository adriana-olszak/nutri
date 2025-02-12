import {
    Injectable,
    Logger,
    NotFoundException,
    UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nutri/server-config';
import {
    PrismaService,
    PrismaTransactionalClient
} from '@nutri/server-db-client';
import { ErrorHandler } from '@nutri/server-shared';
import { v4 as uuidv4 } from 'uuid';

type GenerateTokenParams = {
  userId: string;
  existingFamilyId?: string;
  sessionId: string;
};

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

  public async generate(
    { userId, existingFamilyId, sessionId }: GenerateTokenParams,
    trx?: PrismaTransactionalClient
  ) {
    try {
      const client = trx || this.prisma;
      const token = this.jwtService.sign(
        { type: 'refresh', userId, sessionId },  // Include sessionId in the token payload
        {
          expiresIn: this.configService.authJWTRefreshExpiration,
          secret: this.configService.authJWTRefreshSecret
        }
      );

      const familyId = existingFamilyId || uuidv4();
      const expiresAt = new Date(
        Date.now() + this.configService.authJWTRefreshExpiration
      );
      await client.refreshToken.create({
        data: { token, userId, familyId, expiresAt, sessionId }  // Store sessionId in the database
      });

      this.logger.log(`Generated refresh token for user ${userId} in session ${sessionId}`);
      return { token, familyId };
    } catch (error: unknown) {
      return this.errorHandler.handleError(
        error,
        'Failed to generate refresh token'
      );
    }
  }


  public async rotate(
    { oldToken}: { oldToken: string },
    trx?: PrismaTransactionalClient
  ) {
    try {
      const client = trx || this.prisma;
      const existingToken = await client.refreshToken.findUnique({
        where: { token: oldToken }
      });

      if (!existingToken) {
        throw new NotFoundException('Refresh token not found');
      }

      if (existingToken.used) {
        await this.revokeByFamily({ familyId: existingToken.familyId }, client);
        this.logger.warn(
          `Refresh token reuse detected for family ${existingToken.familyId}`
        );
        throw new UnauthorizedException('Refresh token reuse detected');
      }

      await client.refreshToken.update({
        where: { id: existingToken.id },
        data: { used: true }
      });

      const { token: newRefreshToken } = await this.generate(
        {
          userId: existingToken.userId,
          existingFamilyId: existingToken.familyId,
          sessionId: existingToken.sessionId
        },
        client
      );

      this.logger.log(`Rotated refresh token for user ${existingToken.userId}`);
      return newRefreshToken;
    } catch (error: unknown) {
      return this.errorHandler.handleError(
        error,
        'Failed to rotate refresh token'
      );
    }
  }

  public async revokeByFamily(
    { familyId }: { familyId: string },
    trx?: PrismaTransactionalClient
  ) {
    try {
      const client = trx || this.prisma;
      const result = await client.refreshToken.updateMany({
        where: { familyId },
        data: { used: true }
      });
      this.logger.log(`Revoked ${result.count} tokens for family ${familyId}`);
    } catch (error: unknown) {
      return this.errorHandler.handleError(
        error,
        'Failed to revoke token family'
      );
    }
  }

  public async validate(
    { token }: { token: string },
    trx?: PrismaTransactionalClient
  ) {
    try {
      const client = trx || this.prisma;
      const refreshToken = await client.refreshToken.findUnique({
        where: { token }
      });

      if (!refreshToken) {
        throw new NotFoundException('Refresh token not found');
      }

      if (refreshToken.used || refreshToken.expiresAt < new Date()) {
        this.logger.warn(`Invalid refresh token used: ${refreshToken.id}`);
        throw new UnauthorizedException('Invalid refresh token');
      }

      return { userId: refreshToken.userId, sessionId: refreshToken.sessionId };  // Return sessionId as well
    } catch (error: unknown) {
      return this.errorHandler.handleError(
        error,
        'Failed to validate refresh token'
      );
    }
  }

  async revoke({ token }: { token: string }, trx?: PrismaTransactionalClient) {
    try {
      const client = trx || this.prisma;
      const result = await client.refreshToken.update({
        where: { token },
        data: { used: true }
      });
      this.logger.log(`Revoked refresh token: ${result.id}`);
    } catch (error: unknown) {
      return this.errorHandler.handleError(
        error,
        'Failed to revoke refresh token'
      );
    }
  }
}
