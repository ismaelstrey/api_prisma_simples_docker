/*
  Warnings:

  - You are about to drop the column `sub_categoriaId` on the `subcategorias` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "subcategorias" DROP CONSTRAINT "subcategorias_sub_categoriaId_fkey";

-- AlterTable
ALTER TABLE "categorias" ADD COLUMN     "subategoriaId" INTEGER;

-- AlterTable
ALTER TABLE "subcategorias" DROP COLUMN "sub_categoriaId";

-- AddForeignKey
ALTER TABLE "categorias" ADD CONSTRAINT "categorias_subategoriaId_fkey" FOREIGN KEY ("subategoriaId") REFERENCES "subcategorias"("id") ON DELETE SET NULL ON UPDATE CASCADE;
