/*
  Warnings:

  - Added the required column `veiculo_id` to the `Manutencao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `veiculo_id` to the `Operacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `manutencao` ADD COLUMN `veiculo_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `motorista` ADD COLUMN `disponivel` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `operacao` ADD COLUMN `veiculo_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Manutencao` ADD CONSTRAINT `Manutencao_veiculo_id_fkey` FOREIGN KEY (`veiculo_id`) REFERENCES `Veiculo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Operacao` ADD CONSTRAINT `Operacao_veiculo_id_fkey` FOREIGN KEY (`veiculo_id`) REFERENCES `Veiculo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
