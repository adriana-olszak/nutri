/*
  Warnings:

  - The values [CORRECTED] on the enum `MatchType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MatchType_new" AS ENUM ('AUTOMATIC', 'MANUAL');
ALTER TABLE "match_foods" ALTER COLUMN "match_type" DROP DEFAULT;
ALTER TABLE "match_foods" ALTER COLUMN "match_type" TYPE "MatchType_new" USING ("match_type"::text::"MatchType_new");
ALTER TYPE "MatchType" RENAME TO "MatchType_old";
ALTER TYPE "MatchType_new" RENAME TO "MatchType";
DROP TYPE "MatchType_old";
ALTER TABLE "match_foods" ALTER COLUMN "match_type" SET DEFAULT 'AUTOMATIC';
COMMIT;
