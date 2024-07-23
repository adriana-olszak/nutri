import { SessionService } from './session.service';
import { PrismaService } from '@nutri/server-db-client';
import { TestBed } from '@automock/jest';
import { sessionFactory, MockPrismaService } from '@nutri/server-testing';

describe('SessionService', () => {
  let sessionService: SessionService;
  let prismaMock: MockPrismaService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(SessionService)
      .mock(PrismaService)
      .using({
        session: {
          create: jest.fn(),
          delete: jest.fn(),
          findMany: jest.fn(),
        },
      })
      .compile();

    sessionService = unit;
    prismaMock = unitRef.get(PrismaService) as MockPrismaService;
  });

  it('should create a session', async () => {
    const sessionData = sessionFactory.build();
    prismaMock.session.create.mockResolvedValue(sessionData);
    const result = await sessionService.createSession({
      userId: sessionData.userId,
      ipAddress: sessionData.ipAddress as string,
      deviceInfo: sessionData.deviceInfo as string,
    });
    expect(result).toEqual(sessionData);
  });

  it('should end a session', async () => {
    const sessionData = sessionFactory.build();
    prismaMock.session.delete.mockResolvedValue(sessionData);
    await sessionService.endSession({ sessionId: sessionData.id });
    expect(prismaMock.session.delete).toHaveBeenCalledWith({
      where: { id: sessionData.id },
    });
  });

  it('should get user sessions', async () => {
    const sessions = sessionFactory.buildList(3);
    prismaMock.session.findMany.mockResolvedValue(sessions);
    const result = await sessionService.getUserSessions({
      userId: sessions[0].userId,
    });
    expect(result).toEqual(sessions);
  });
});
