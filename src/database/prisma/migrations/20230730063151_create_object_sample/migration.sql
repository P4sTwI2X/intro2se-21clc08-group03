-- CreateTable
CREATE TABLE "Object" (
    "objectId" SERIAL NOT NULL,
    "objectName" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Object_pkey" PRIMARY KEY ("objectId")
);
