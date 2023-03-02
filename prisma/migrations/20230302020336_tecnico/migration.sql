/*
  Warnings:

  - You are about to drop the column `tecnicoId` on the `tecnico_tipo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tecnico_tipo" DROP CONSTRAINT "tecnico_tipo_tecnicoId_fkey";

-- AlterTable
ALTER TABLE "tecnico_tipo" DROP COLUMN "tecnicoId";

-- AlterTable
ALTER TABLE "tecnicos" ADD COLUMN     "tecnicoTipoId" INTEGER;

-- AddForeignKey
ALTER TABLE "tecnicos" ADD CONSTRAINT "tecnicos_tecnicoTipoId_fkey" FOREIGN KEY ("tecnicoTipoId") REFERENCES "tecnico_tipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
