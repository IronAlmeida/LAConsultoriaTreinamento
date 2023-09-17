"use client";

import { Button } from "../../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createMessageFormSchema = z.object({
  nome: z.string().nonempty("Nome do curso obrigatório"),
  email: z.string(),
  messagem: z.string(),
});

type CreateCourseFormData = z.infer<typeof createMessageFormSchema>;

export default function FormWidget() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCourseFormData>({
    resolver: zodResolver(createMessageFormSchema),
  });

  function enviarDados(data: any) {
    console.log(data);
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit(enviarDados)}
      className="flex flex-col px-2 w-full sm:w-3/4 sm:mx-auto"
    >
      <input
        {...register("nome")}
        className="mt-16 outline-none pl-4 py-2 bg-transparent border-b placeholder-[#ffffff5e] text-white"
        type="text"
        id="nome"
        placeholder="Seu nome"
      />
      {errors.nome && (
        <span className="text-red-500">{errors.nome.message}</span>
      )}
      <input
        {...register("email")}
        className="mt-16 outline-none pl-4 py-2 bg-transparent border-b placeholder-[#ffffff5e] text-white"
        type="text"
        id="email"
        placeholder="Seu e-mail"
      />
      <textarea
        {...register("messagem")}
        className="mt-16 outline-none pl-4 py-2 bg-transparent border rounded-xl placeholder-[#ffffff5e] text-white resize-none"
        rows={4}
        cols={50}
        id="mensagem"
        placeholder="Sua mensagem"
      />
      <Button
        type="submit"
        className="mt-8 w-1/2 mx-auto rounded-full bg-white text-[#DA315F] hover:text-white text-lg"
      >
        Enviar
      </Button>
    </form>
  );
}
