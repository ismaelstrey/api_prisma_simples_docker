/*
  Warnings:

  - You are about to drop the column `tiketId` on the `tecnicos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tecnicos" DROP CONSTRAINT "tecnicos_tiketId_fkey";

-- AlterTable
ALTER TABLE "tecnicos" DROP COLUMN "tiketId";

-- AlterTable
ALTER TABLE "tickets" ADD COLUMN     "tecnicoId" INTEGER;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_tecnicoId_fkey" FOREIGN KEY ("tecnicoId") REFERENCES "tecnicos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
