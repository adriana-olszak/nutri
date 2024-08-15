-- CreateIndex
CREATE INDEX "Food_description_idx" ON "Food" USING GIN ("description" gin_trgm_ops);
