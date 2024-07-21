import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Test } from '@nestjs/testing';
import { RolesGuard, rbacLogic } from './roles.guard';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';

jest.mock('@nestjs/graphql', () => ({
  GqlExecutionContext: {
    create: jest.fn(),
  },
}));

describe('RolesGuard', () => {
  let reflector: jest.Mocked<Reflector>;
  let context: jest.Mocked<ExecutionContext>;
  let Guard: ReturnType<typeof RolesGuard>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: Reflector,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    reflector = module.get(Reflector);
    Guard = RolesGuard();

    context = {
      getHandler: jest.fn(),
      getClass: jest.fn(),
      getType: jest.fn(),
      switchToHttp: jest.fn(),
    } as unknown as jest.Mocked<ExecutionContext>;

    // mockCanActivate.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should throw an error when instantiated directly', () => {
    expect(() => new (RolesGuard as any)()).toThrow(
      'RolesGuard cannot be instantiated directly. Use RolesGuard() instead.'
    );
  });

  describe('canActivate', () => {
    it('should allow anonymous access when handler is decorated', async () => {
      reflector.get.mockReturnValueOnce(true);
      const guard = new Guard(reflector);
      expect(await guard.canActivate(context)).toBe(true);
    });

    it('should allow anonymous access when class is decorated', async () => {
      reflector.get.mockReturnValueOnce(undefined).mockReturnValueOnce(true);
      const guard = new Guard(reflector);
      expect(await guard.canActivate(context)).toBe(true);
    });

    it('should handle HTTP context', async () => {
      const mockRequest = { user: { roles: ['Admin'] } };
      context.getType.mockReturnValue('http');

      const mockHttpArgumentsHost: jest.Mocked<HttpArgumentsHost> = {
        getRequest: jest.fn().mockReturnValue(mockRequest),
        getResponse: jest.fn(),
        getNext: jest.fn()
      };

      context.switchToHttp.mockReturnValue(mockHttpArgumentsHost);

      reflector.get.mockReturnValue(undefined);
      const guard = new Guard(reflector);

      expect(await guard.canActivate(context)).toBe(true);
    });

    it('should handle GraphQL context', async () => {
      const mockRequest = { user: { roles: ['Admin'] } };
      context.getType.mockReturnValue('graphql');
      (GqlExecutionContext.create as jest.Mock).mockReturnValue({
        getContext: () => ({ req: mockRequest }),
      });
      reflector.get.mockReturnValue(undefined);
      const guard = new Guard(reflector);

      expect(await guard.canActivate(context)).toBe(true);
    });

    it('should throw UnauthorizedException for unsupported context', async () => {
      context.getType.mockReturnValue('rpc');
      reflector.get.mockReturnValue(undefined);
      const guard = new Guard(reflector);

      await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
    });

    it('should return true when no roles are specified', async () => {
      const NoRolesGuard = RolesGuard();
      const noRolesGuard = new NoRolesGuard(reflector);
      const mockRequest = { user: { roles: [] } };
      context.getType.mockReturnValue('http');
      const mockHttpArgumentsHost: jest.Mocked<HttpArgumentsHost> = {
        getRequest: jest.fn().mockReturnValue(mockRequest),
        getResponse: jest.fn(),
        getNext: jest.fn()
      };

      context.switchToHttp.mockReturnValue(mockHttpArgumentsHost);
      reflector.get.mockReturnValue(undefined);

      expect(await noRolesGuard.canActivate(context)).toBe(true);
    });
  });

  describe('getRequest', () => {
    let guard: InstanceType<ReturnType<typeof RolesGuard>>;

    beforeEach(() => {
      guard = new Guard(reflector);
    });

    it('should return request for HTTP context', () => {
      const mockRequest = { someProperty: 'value' };
      context.getType.mockReturnValue('http');
      context.switchToHttp.mockReturnValue({
        getRequest: jest.fn().mockReturnValue(mockRequest),
      } as any);

      const result = guard.getRequest(context);
      expect(result).toBe(mockRequest);
      expect(context.switchToHttp).toHaveBeenCalled();
    });

    it('should return request for GraphQL context', () => {
      const mockRequest = { someProperty: 'value' };
      context.getType.mockReturnValue('graphql');
      (GqlExecutionContext.create as jest.Mock).mockReturnValue({
        getContext: jest.fn().mockReturnValue({ req: mockRequest }),
      });

      const result = guard.getRequest(context);
      expect(result).toBe(mockRequest);
      expect(GqlExecutionContext.create).toHaveBeenCalledWith(context);
    });

    it('should throw UnauthorizedException for unsupported context', () => {
      context.getType.mockReturnValue('rpc');

      expect(() => guard.getRequest(context)).toThrow(UnauthorizedException);
      expect(() => guard.getRequest(context)).toThrow('Context rpc not supported');
    });
  });
});

describe('rbacLogic', () => {
  it('should return true if user has Super role', () => {
    expect(rbacLogic(['Super', 'User'], ['Admin'])).toBe(true);
  });

  it('should return true if user has one of the defined roles', () => {
    expect(rbacLogic(['User', 'Moderator'], ['Admin', 'Moderator'])).toBe(true);
  });

  it('should return false if user does not have any of the defined roles', () => {
    expect(rbacLogic(['User'], ['Admin', 'Moderator'])).toBe(false);
  });
});
