import { Factory } from 'fishery';
import {
  PrismaClient,
  User,
  Roles,
  RefreshToken,
  Session,
  LoginLog,
  PasswordResetToken,
  TokenBlacklist,
  Prisma,
} from '@prisma/client';
import { faker } from '@faker-js/faker';

type UserType = Omit<User, 'googleProfile'> & {
  googleProfile:
    | Prisma.NullableJsonNullValueInput
    | Prisma.InputJsonValue
    | undefined;
};

const userFactory = Factory.define<UserType, { prisma: PrismaClient }>(
  ({ onCreate, transientParams }) => {
    onCreate(async (user) => {
      if (!transientParams?.prisma) {
        throw new Error('Prisma client is not provided');
      }
      const createdUser = await transientParams.prisma.user.create({
        data: user,
      });
      return createdUser as UserType; // Cast to UserType to ensure compatibility
    });

    return {
      id: faker.string.uuid(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      roles: [Roles.USER],
      googleId: faker.string.uuid(),
      googleProfile: {},
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };
  },
);

const refreshTokenFactory = Factory.define<
  RefreshToken,
  { prisma: PrismaClient }
>(({ onCreate, transientParams }) => {
  onCreate(async (refreshToken) => {
    if (!transientParams?.prisma) {
      throw new Error('Prisma client is not provided');
    }
    return transientParams.prisma.refreshToken.create({ data: refreshToken });
  });

  return {
    id: faker.string.uuid(),
    token: faker.string.uuid(),
    userId: faker.string.uuid(),
    familyId: faker.string.uuid(),
    expiresAt: faker.date.future(),
    used: false,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
});

const sessionFactory = Factory.define<Session, { prisma: PrismaClient }>(
  ({ onCreate, transientParams }) => {
    onCreate(async (session) => {
      if (!transientParams?.prisma) {
        throw new Error('Prisma client is not provided');
      }
      return transientParams.prisma.session.create({ data: session });
    });

    return {
      id: faker.string.uuid(),
      userId: faker.string.uuid(),
      deviceInfo: faker.internet.userAgent(),
      ipAddress: faker.internet.ip(),
      lastActiveAt: faker.date.recent(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };
  },
);

const loginLogFactory = Factory.define<LoginLog, { prisma: PrismaClient }>(
  ({ onCreate, transientParams }) => {
    onCreate(async (loginLog) => {
      if (!transientParams?.prisma) {
        throw new Error('Prisma client is not provided');
      }
      return transientParams.prisma.loginLog.create({ data: loginLog });
    });

    return {
      id: faker.string.uuid(),
      userId: faker.string.uuid(),
      success: faker.datatype.boolean(),
      ipAddress: faker.internet.ip(),
      userAgent: faker.internet.userAgent(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };
  },
);

const passwordResetTokenFactory = Factory.define<
  PasswordResetToken,
  { prisma: PrismaClient }
>(({ onCreate, transientParams }) => {
  onCreate(async (passwordResetToken) => {
    if (!transientParams?.prisma) {
      throw new Error('Prisma client is not provided');
    }
    return transientParams.prisma.passwordResetToken.create({
      data: passwordResetToken,
    });
  });

  return {
    id: faker.string.uuid(),
    token: faker.string.uuid(),
    userId: faker.string.uuid(),
    expiresAt: faker.date.future(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
});

const tokenBlacklistFactory = Factory.define<
  TokenBlacklist,
  { prisma: PrismaClient }
>(({ onCreate, transientParams }) => {
  onCreate(async (tokenBlacklist) => {
    if (!transientParams?.prisma) {
      throw new Error('Prisma client is not provided');
    }
    return transientParams.prisma.tokenBlacklist.create({
      data: tokenBlacklist,
    });
  });

  return {
    id: faker.string.uuid(),
    token: faker.string.uuid(),
    expiresAt: faker.date.future(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
});

export {
  userFactory,
  refreshTokenFactory,
  sessionFactory,
  loginLogFactory,
  passwordResetTokenFactory,
  tokenBlacklistFactory,
};
