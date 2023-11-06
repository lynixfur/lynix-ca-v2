/*
  Warnings:

  - A unique constraint covering the columns `[strId]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[strId]` on the table `Events` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[strId]` on the table `Note` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[strId]` on the table `Projects` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Article_strId_key" ON "Article"("strId");

-- CreateIndex
CREATE UNIQUE INDEX "Events_strId_key" ON "Events"("strId");

-- CreateIndex
CREATE UNIQUE INDEX "Note_strId_key" ON "Note"("strId");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_strId_key" ON "Projects"("strId");
