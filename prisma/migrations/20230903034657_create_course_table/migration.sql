-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "investimento" TEXT NOT NULL,
    "cargaHoraria" TEXT NOT NULL,
    "datas" TEXT NOT NULL,
    "horario" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_nome_key" ON "Course"("nome");
