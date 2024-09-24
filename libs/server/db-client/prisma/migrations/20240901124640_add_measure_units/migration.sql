/*
  Warnings:

  - You are about to drop the column `amount` on the `food_portions` table. All the data in the column will be lost.
  - You are about to drop the column `measure_unit_name` on the `food_portions` table. All the data in the column will be lost.
  - You are about to drop the column `portion_description` on the `food_portions` table. All the data in the column will be lost.
  - You are about to drop the column `source_id` on the `food_portions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[food_id,measure_unit_id]` on the table `food_portions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `conversion_factor` to the `food_portions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `measure_unit_id` to the `food_portions` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "food_portions_food_id_measure_unit_name_key";

-- AlterTable
ALTER TABLE "food_portions" DROP COLUMN "amount",
DROP COLUMN "measure_unit_name",
DROP COLUMN "portion_description",
DROP COLUMN "source_id",
ADD COLUMN     "conversion_factor" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "measure_unit_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "food_measure_units" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "source_id" TEXT NOT NULL,
    "import_info_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_measure_units_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "food_measure_units_name_key" ON "food_measure_units"("name");

-- CreateIndex
CREATE INDEX "food_portions_measure_unit_id_idx" ON "food_portions"("measure_unit_id");

-- CreateIndex
CREATE UNIQUE INDEX "food_portions_food_id_measure_unit_id_key" ON "food_portions"("food_id", "measure_unit_id");

-- AddForeignKey
ALTER TABLE "food_measure_units" ADD CONSTRAINT "food_measure_units_import_info_id_fkey" FOREIGN KEY ("import_info_id") REFERENCES "import_infos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_portions" ADD CONSTRAINT "food_portions_measure_unit_id_fkey" FOREIGN KEY ("measure_unit_id") REFERENCES "food_measure_units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
