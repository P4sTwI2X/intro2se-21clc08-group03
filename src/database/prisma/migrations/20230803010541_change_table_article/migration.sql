/*
  Warnings:

  - You are about to drop the `Artical` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Artical" DROP CONSTRAINT "Artical_userId_fkey";

-- DropTable
DROP TABLE "Artical";

-- CreateTable
CREATE TABLE "Article" (
    "userId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("articleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_articleId_key" ON "Article"("articleId");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
