import client from "../../../lib/prisma/client";
import { Course } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Metodo para buscar a lista de cursos e lista de espera do banco de dados
export async function GET() {
  const course: Course[] = await client.course.findMany();

  return NextResponse.json(course);
}

// Metodo para criar um novo curso no banco de dados
export async function POST(req: NextRequest) {
  const newCourse: Course = await req.json();
  await client.course.create({
    data: newCourse,
  });

  return NextResponse.json(newCourse, {
    status: 201,
    statusText: "created",
  });
}
