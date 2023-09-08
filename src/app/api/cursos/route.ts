import client from "../../../lib/prisma/client";
import { Course } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const course: Course[] = await client.course.findMany();

  return NextResponse.json(course);
}

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
