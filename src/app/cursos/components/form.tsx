"use client";

import { Button } from "../../../components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createCourseFormSchema = z.object({
  nome: z.string().nonempty("Nome do curso obrigatório"),
  investimento: z.string(),
  cargaHoraria: z.string(),
  datas: z.string(),
  horario: z.string(),
  imagem: z.string(),
});

type CreateCourseFormData = z.infer<typeof createCourseFormSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCourseFormData>({
    resolver: zodResolver(createCourseFormSchema),
  });

  function enviarDadosApi(data: any) {
    console.log(data);
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit(enviarDadosApi)}
      className="flex flex-col"
    >
      <input
        {...register("nome")}
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        id="nome"
        placeholder="Nome do curso"
      />
      {errors.nome && (
        <span className="text-red-500">{errors.nome.message}</span>
      )}
      <input
        {...register("investimento")}
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        id="investimento"
        placeholder="Valor do curso. Ex: (500,00)"
      />
      <input
        {...register("cargaHoraria")}
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        id="cargaHoraria"
        placeholder="Carga horária. (Ex: 12 horas)"
      />
      <input
        {...register("datas")}
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        id="datas"
        placeholder="Data(s) de treinamento. 00/00/0000 e 11/11/1111"
      />
      <input
        {...register("horario")}
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        id="horario"
        placeholder="Horarios. Ex: 19:00 ás 22:00"
      />
      <input
        {...register("imagem")}
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        id="imagem"
        placeholder="Url da capa"
      />
      <Button type="submit" className="mt-8">
        Enviar
      </Button>
    </form>
  );
}
