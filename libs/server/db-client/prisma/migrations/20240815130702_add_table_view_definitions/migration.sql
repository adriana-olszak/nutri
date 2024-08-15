-- CreateTable
CREATE TABLE "TableViewDefinition" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "tableId" TEXT NOT NULL,
    "tableType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "icon" TEXT,
    "filters" TEXT,
    "sorting" TEXT,
    "isPreset" BOOLEAN NOT NULL DEFAULT false,
    "isShared" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TableViewDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColumnView" (
    "id" TEXT NOT NULL,
    "columnId" INTEGER NOT NULL,
    "columnType" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "visible" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "filter" TEXT,
    "tableViewDefinitionId" TEXT NOT NULL,

    CONSTRAINT "ColumnView_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TableViewDefinition_userId_idx" ON "TableViewDefinition"("userId");

-- CreateIndex
CREATE INDEX "TableViewDefinition_tableType_idx" ON "TableViewDefinition"("tableType");

-- CreateIndex
CREATE INDEX "ColumnView_tableViewDefinitionId_idx" ON "ColumnView"("tableViewDefinitionId");

-- AddForeignKey
ALTER TABLE "ColumnView" ADD CONSTRAINT "ColumnView_tableViewDefinitionId_fkey" FOREIGN KEY ("tableViewDefinitionId") REFERENCES "TableViewDefinition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
