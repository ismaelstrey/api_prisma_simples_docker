/*
  Warnings:

  - You are about to drop the column `subategoriaId` on the `categorias` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "categorias" DROP CONSTRAINT "categorias_subategoriaId_fkey";

-- AlterTable
ALTER TABLE "categorias" DROP COLUMN "subategoriaId";

-- AlterTable
ALTER TABLE "subcategorias" ADD COLUMN     "categoriaId" INTEGER;

-- AddForeignKey
ALTER TABLE "subcategorias" ADD CONSTRAINT "subcategorias_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE SET NULL ON UPDATE CASCADE;
