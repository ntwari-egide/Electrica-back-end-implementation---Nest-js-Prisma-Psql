/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Meter" (
    "id" SERIAL NOT NULL,
    "meterNumber" INTEGER NOT NULL,
    "daysRemaining" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "loadedDays" INTEGER NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL,
    "meterId" INTEGER,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);
