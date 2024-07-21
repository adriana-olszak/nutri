-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "roles" SET DEFAULT ARRAY['USER']::TEXT[];
