/*
  Warnings:

  - You are about to drop the column `prioridadeId` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the column `tecnicoId` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the column `tiketStatusId` on the `tickets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_prioridadeId_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_tecnicoId_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_tiketStatusId_fkey";

-- AlterTable
ALTER TABLE "prioridades" ADD COLUMN     "tiketId" INTEGER;

-- AlterTable
ALTER TABLE "tecnicos" ADD COLUMN     "tiketId" INTEGER;

-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "prioridadeId",
DROP COLUMN "tecnicoId",
DROP COLUMN "tiketStatusId";

-- AlterTable
ALTER TABLE "tiket_status" ADD COLUMN     "tiketId" INTEGER;

-- AddForeignKey
ALTER TABLE "tecnicos" ADD CONSTRAINT "tecnicos_tiketId_fkey" FOREIGN KEY ("tiketId") REFERENCES "tickets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prioridades" ADD CONSTRAINT "prioridades_tiketId_fkey" FOREIGN KEY ("tiketId") REFERENCES "tickets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tiket_status" ADD CONSTRAINT "tiket_status_tiketId_fkey" FOREIGN KEY ("tiketId") REFERENCES "tickets"("id") ON DELETE SET NULL ON UPDATE CASCADE;
