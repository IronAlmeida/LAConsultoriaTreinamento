"use client";

import { Button } from "../../../components/ui/button";

export default function Form() {
  const enviarDadosApi = (e) => {
    e.preventDefault();
    fetch("/api/cursos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: e.target.elements.nome.value,
        investimento: e.target.elements.investimento.value,
        cargaHoraria: e.target.elements.cargaHoraria.value,
        datas: e.target.elements.datas.value,
        horario: e.target.elements.horario.value,
        imagem: e.target.elements.imagem.value,
      }),
    })
      .then(() => {
        alert("sucesso");
      })
      .catch(() => {
        alert("não foi possivel cadastrar curso");
      });
  };

  return (
    <form method="post" onSubmit={enviarDadosApi} className="flex flex-col">
      <input
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        name="nome"
        id="nome"
        placeholder="Nome do curso"
      />
      <input
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        name="investimento"
        id="investimento"
        placeholder="Valor do curso. Ex: (500,00)"
      />
      <input
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        name="cargaHoraria"
        id="cargaHoraria"
        placeholder="Carga horária. (Ex: 12 horas)"
      />
      <input
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        name="datas"
        id="datas"
        placeholder="Data(s) de treinamento. 00/00/0000 e 11/11/1111"
      />
      <input
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        name="horario"
        id="horario"
        placeholder="Horarios. Ex: 19:00 ás 22:00"
      />
      <input
        className="border mt-8 outline-none pl-4 py-2"
        type="text"
        name="imagem"
        id="imagem"
        placeholder="Url da capa"
      />
      <Button type="submit" className="mt-8">
        Enviar
      </Button>
    </form>
  );
}
