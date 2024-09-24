/*
  Warnings:

  - You are about to drop the column `sentenceTransformerVector` on the `Food` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Food" DROP COLUMN "sentenceTransformerVector";

-- CreateTable
CREATE TABLE "FoodEmbedding" (
    "id" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "languageCode" TEXT NOT NULL,
    "embeddingType" TEXT NOT NULL,
    "embedding" vector(384) NOT NULL,
    "modelVersion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FoodEmbedding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FoodEmbedding_foodId_languageCode_embeddingType_key" ON "FoodEmbedding"("foodId", "languageCode", "embeddingType");

-- AddForeignKey
ALTER TABLE "FoodEmbedding" ADD CONSTRAINT "FoodEmbedding_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodEmbedding" ADD CONSTRAINT "FoodEmbedding_languageCode_fkey" FOREIGN KEY ("languageCode") REFERENCES "Language"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
