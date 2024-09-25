/*
  Warnings:

  - You are about to drop the column `bi_encoder_score` on the `match_foods` table. All the data in the column will be lost.
  - You are about to drop the column `cross_encoder_score` on the `match_foods` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "match_foods" DROP COLUMN "bi_encoder_score",
DROP COLUMN "cross_encoder_score",
ADD COLUMN     "algorithm_data" JSONB;
