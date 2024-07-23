import { AuthAuditLogService } from './auth-audit-log.service';
import { PrismaService, User } from '@nutri/server-db-client';
import { TestBed } from '@automock/jest';
import {
  userFactory,
  loginLogFactory,
  MockPrismaService,
} from '@nutri/server-testing'; // Adjust the import path as necessary

describe('AuthAuditLogService', () => {
  let authAuditLogService: AuthAuditLogService;
  let prismaMock: MockPrismaService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(AuthAuditLogService)
      .mock(PrismaService)
      .using({
        loginLog: {
          create: jest.fn(),
        },
        user: {
          findUnique: jest.fn(),
        },
      })
      .compile();

    authAuditLogService = unit;
    prismaMock = unitRef.get(PrismaService) as MockPrismaService;
  });

  describe('logSuccessfulLogin', () => {
    it('should create a successful login log', async () => {
      const mockLoginLog = loginLogFactory.build({
        success: true,
        userId: 'user123',
        ipAddress: '127.0.0.1',
        userAgent: 'Mozilla/5.0',
      });
      prismaMock.loginLog.create.mockResolvedValue(mockLoginLog);

      const result = await authAuditLogService.logSuccessfulLogin({
        userId: 'user123',
        ipAddress: '127.0.0.1',
        userAgent: 'Mozilla/5.0',
      });

      expect(prismaMock.loginLog.create).toHaveBeenCalledWith({
        data: {
          userId: 'user123',
          success: true,
          ipAddress: '127.0.0.1',
          userAgent: 'Mozilla/5.0',
        },
      });
      expect(result).toEqual(mockLoginLog);
    });
  });

  describe('logFailedLogin', () => {
    it('should create a failed login log when user exists', async () => {
      const mockUser = userFactory.build({
        id: 'user123',
        email: 'test@example.com',
      });
      const mockLoginLog = loginLogFactory.build({
        success: false,
        userId: 'user123',
        ipAddress: '127.0.0.1',
        userAgent: 'Mozilla/5.0',
      });

      prismaMock.user.findUnique.mockResolvedValue(mockUser as User);
      prismaMock.loginLog.create.mockResolvedValue(mockLoginLog);

      const result = await authAuditLogService.logFailedLogin({
        email: 'test@example.com',
        ipAddress: '127.0.0.1',
        userAgent: 'Mozilla/5.0',
      });

      expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'test@example.com' },
      });
      expect(prismaMock.loginLog.create).toHaveBeenCalledWith({
        data: {
          userId: 'user123',
          success: false,
          ipAddress: '127.0.0.1',
          userAgent: 'Mozilla/5.0',
        },
      });
      expect(result).toEqual(mockLoginLog);
    });

    it('should create a failed login log when user does not exist', async () => {
      const mockLoginLog = loginLogFactory.build({
        success: false,
        userId: null,
        ipAddress: '127.0.0.1',
        userAgent: 'Mozilla/5.0',
      });

      prismaMock.user.findUnique.mockResolvedValue(null);
      prismaMock.loginLog.create.mockResolvedValue(mockLoginLog);

      const result = await authAuditLogService.logFailedLogin({
        email: 'nonexistent@example.com',
        ipAddress: '127.0.0.1',
        userAgent: 'Mozilla/5.0',
      });

      expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'nonexistent@example.com' },
      });
      expect(prismaMock.loginLog.create).toHaveBeenCalledWith({
        data: {
          userId: undefined,
          success: false,
          ipAddress: '127.0.0.1',
          userAgent: 'Mozilla/5.0',
        },
      });
      expect(result).toEqual(mockLoginLog);
    });
  });
});
