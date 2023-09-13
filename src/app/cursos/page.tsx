import Image from "next/image";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";
import Form from "./components/form";
import Btn from "../../components/button";

interface Turmas {
  id: number;
  nome: string;
  cargaHoraria: string;
  investimento: string;
  datas: string;
  horario: string;
  imagem: string;
}

async function getData(): Promise<Turmas[]> {
  const response = await fetch(`${process.env.URL}/api/cursos`, {
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error("Falha ao carregar dados...");
  }

  return await response.json();
}

///PÁGINA
export default async function Cursos() {
  const cursos = await getData();

  return (
    <body className="w-3/4 m-auto">
      <h1>Página Cursos</h1>
      <div className="w-3/4 m-auto flex flex-wrap justify-between">
        {cursos.map((dados, index) => (
          <Card
            className="flex flex-col w-[360px] mx-auto mt-8 border border-[#0F172A80] rounded-3xl"
            key={index}
          >
            <Image
              src={dados.imagem}
              alt={dados.nome}
              width={360}
              height={205}
              className="border rounded-3xl"
            />
            <CardHeader className="text-center">
              <CardTitle>{dados.nome}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Código da turma: {dados.id}</p>
              <p>Investimento: {dados.investimento}</p>
              <p>Carga Horária: {dados.cargaHoraria}</p>
              <p>Data(s): {dados.datas}</p>
              <p>Horário: {dados.horario}</p>
            </CardContent>
            <CardFooter className="text-center">
              <p>
                Endereço:
                <br />
                <strong>
                  Rua Brasílio Martinho Vale, 86 - Farolândia - 49031-010 <br />
                  Sede LA Consultoria e Treinamento
                </strong>
              </p>
            </CardFooter>
            <Button
              variant="outline"
              className="w-1/2 m-auto mb-2 text-white bg-[#DA315F] rounded-full hover:bg-[#293548] hover:text-white"
            >
              Inscrever-se
            </Button>
            {/* Botão remover curso visivel apenas para usuário ADM */}
            <Btn name="Remover curso" codigo={dados.id} />
          </Card>
        ))}
      </div>
      {/* Dialog visivel apenas para usuário ADM */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Adicionar curso</Button>
        </DialogTrigger>
        <DialogContent>
          <Form />
        </DialogContent>
      </Dialog>
    </body>
  );
}
