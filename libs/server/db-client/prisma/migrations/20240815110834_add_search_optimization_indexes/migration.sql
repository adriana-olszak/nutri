-- CreateIndex
CREATE INDEX "BrandedFood_foodId_idx" ON "BrandedFood"("foodId");

-- CreateIndex
CREATE INDEX "Food_id_description_idx" ON "Food"("id", "description");

