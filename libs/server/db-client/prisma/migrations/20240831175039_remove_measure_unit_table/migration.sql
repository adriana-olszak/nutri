/*
  Warnings:

  - You are about to drop the `MeasureUnit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FoodPortion" DROP CONSTRAINT "FoodPortion_measureUnitName_fkey";

-- DropForeignKey
ALTER TABLE "MeasureUnit" DROP CONSTRAINT "MeasureUnit_importInfoId_fkey";

-- DropTable
DROP TABLE "MeasureUnit";
