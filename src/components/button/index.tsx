"use client";

import { number } from "zod";
import { Button } from "../../components/ui/button";

const removeCourse = (codigo: number) => {
  console.log(codigo);
  //código para remoção do curso no banco de dados
};

export default function Btn({
  name,
  codigo,
}: {
  name: string;
  codigo?: number;
}) {
  return (
    <Button
      onClick={() => {
        if (codigo) {
          removeCourse(codigo);
        }
      }}
      variant="outline"
      className="w-1/2 m-auto mb-2 text-white bg-[#DA315F] rounded-full hover:bg-[#293548] hover:text-white"
    >
      {name}
    </Button>
  );
}
