/*
  Warnings:

  - You are about to drop the column `productQuantity` on the `Shop` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Shop` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Shop" DROP COLUMN "productQuantity",
DROP COLUMN "rating";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "type" SET DEFAULT 'Customer';

-- CreateTable
CREATE TABLE "Rating_Shop" (
    "shopId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,

    CONSTRAINT "Rating_Shop_pkey" PRIMARY KEY ("shopId","userId")
);

-- AddForeignKey
ALTER TABLE "Rating_Shop" ADD CONSTRAINT "Rating_Shop_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("shopId") ON DELETE RESTRICT ON UPDATE CASCADE;
