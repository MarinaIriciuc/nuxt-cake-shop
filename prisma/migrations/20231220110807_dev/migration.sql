/*
  Warnings:

  - You are about to drop the column `categoryID` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_categoryID_fkey`;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `categoryID`;

-- DropTable
DROP TABLE `Category`;
