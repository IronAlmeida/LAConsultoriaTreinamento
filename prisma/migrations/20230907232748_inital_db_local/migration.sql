/*
  Warnings:

  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Course";

-- CreateTable
CREATE TABLE "course" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "investimento" TEXT NOT NULL,
    "cargaHoraria" TEXT NOT NULL,
    "datas" TEXT NOT NULL,
    "horario" TEXT NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "course_nome_key" ON "course"("nome");
