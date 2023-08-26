-- AddForeignKey
ALTER TABLE "Rating_Shop" ADD CONSTRAINT "Rating_Shop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
