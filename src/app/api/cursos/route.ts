import { NextRequest, NextResponse } from "next/server";

const cursos = [
  {
    nome: "Analista de DP",
    cargaHoraria: "12 horas",
    investimento: "500,00",
    datas: "09/09/2023, 16/09/2023 e 23/09/2023",
    horario: "08:00 ás 17:00",
  },
  {
    nome: "Calculos trabalhistas",
    cargaHoraria: "8 horas",
    investimento: "300,00",
    datas: "07/09/2023 e 15/09/2023",
    horario: "19:00 ás 22:00",
  },
];

export async function GET() {
  return NextResponse.json(cursos);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  console.log(data);
  cursos.push(data);

  return NextResponse.json(cursos);
}
