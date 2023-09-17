"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui/button";

export default function FormOrcamento() {
  const { register, handleSubmit } = useForm();

  const enviarOrcamento = () => {
    console.log("proposta enviada!");
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(enviarOrcamento)}
      className="w-full px-2"
    >
      <div className="mb-8">
        <label htmlFor="name" className="font-bold text-[#0F172A]">
          Nome ou razão social <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          {...register("name")}
          id="name"
          className="w-full border mt-2 outline-none pl-4 py-2 rounded-xl"
          placeholder="Nome completo"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="name" className="font-bold text-[#0F172A]">
          E-mail <span className="text-red-500">*</span>{" "}
        </label>
        <input
          type="email"
          {...register("email")}
          id="email"
          className="w-full border mt-2 outline-none pl-4 py-2 rounded-xl"
          placeholder="Seu melhor e-mail"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="name" className="font-bold text-[#0F172A]">
          Telefone para contato <span className="text-red-500">*</span>{" "}
        </label>
        <input
          type="text"
          {...register("tefelone")}
          id="telefone"
          className="w-full border mt-2 outline-none pl-4 py-2 rounded-xl"
          placeholder="Número com DDD"
        />
      </div>

      <div className="mb-8">
        <p className="font-bold text-[#0F172A] mb-2">
          Selecione os serviços que te chamaram a atenção <br />{" "}
          &#10098;Permitido selecionar mais de uma opção&#10099;
          <span className="text-red-500">*</span>
        </p>
        <div className="flex flex-col">
          <label className="font-bold text-[#0F172A]">
            <input type="checkbox" className="mr-2" />
            Auditoria
          </label>
          <label className="font-bold text-[#0F172A]">
            <input type="checkbox" className="mr-2" />
            Padronização do DP
          </label>
          <label className="font-bold text-[#0F172A]">
            <input type="checkbox" className="mr-2" />
            BPO
          </label>
          <label className="font-bold text-[#0F172A]">
            <input type="checkbox" className="mr-2" />
            Consultoria
          </label>
          <label className="font-bold text-[#0F172A]">
            <input type="checkbox" className="mr-2" />
            Mentoria
          </label>
        </div>
      </div>
      <Button type="submit" className="w-full ">
        Enviar
      </Button>
    </form>
  );
}
