/*
  Warnings:

  - You are about to drop the `NeedCotents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NeedCotents" DROP CONSTRAINT "NeedCotents_authorId_fkey";

-- DropTable
DROP TABLE "NeedCotents";

-- CreateTable
CREATE TABLE "NeedContent" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NeedContent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NeedContent" ADD CONSTRAINT "NeedContent_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
