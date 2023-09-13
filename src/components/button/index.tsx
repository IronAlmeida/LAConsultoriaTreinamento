"use client";

import { Button } from "../../components/ui/button";

const idTurma = (codigo: number) => {
  console.log(codigo);
};

export default function Btn({
  name,
  codigo,
}: {
  name: string;
  codigo: number;
}) {
  return (
    <Button
      onClick={(e) => {
        idTurma(codigo);
        console.log(e);
      }}
      variant="outline"
      className="w-1/2 m-auto mb-2 text-white bg-[#DA315F] rounded-full hover:bg-[#293548] hover:text-white"
    >
      {name}
    </Button>
  );
}
