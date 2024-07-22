// This file is generated automatically. Do not edit it manually.
import { Prisma } from "@prisma/client";

export type DefaultFields = {
  readonly LoginLog?: Prisma.LoginLogSelect;
  readonly PasswordResetToken?: Prisma.PasswordResetTokenSelect;
  readonly RefreshToken?: Prisma.RefreshTokenSelect;
  readonly Session?: Prisma.SessionSelect;
  readonly TokenBlacklist?: Prisma.TokenBlacklistSelect;
  readonly User?: Prisma.UserSelect;
};

type WithFuncSelect<T> = {
  [P in keyof T]?: T[P] | ((select: T[P]) => T[P]);
};

export type PalDefaultFields = WithFuncSelect<DefaultFields>;
