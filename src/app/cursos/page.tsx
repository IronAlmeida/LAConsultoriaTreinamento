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
import Header from "../../components/header";
import Widget from "../../components/widget";
import Footer from "../../components/footer";

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
    <body>
      <Header color="#0F172A" position="fixed" />
      <div className="h-24"></div>

      <section className="w-full px-2 bg-[#0F172AFA]">
        <div className="w-3/4 mx-auto py-4">
          <h2 className="text-white text-3xl text-bold">Cursos</h2>
        </div>
      </section>

      <section className="w-full px-2">
        <div className="w-3/4 mx-auto py-10">
          <h2 className="text-[#0F172A] text-4xl text-center">
            Se capacite através do nosso método: <br />{" "}
            <span className="text-[#DA315F] font-bold">
              Aprendendo na prática!
            </span>
          </h2>
        </div>
      </section>

      <section className="w-full px-2 pb-8 bg-[#9CA3AF1A]">
        <h2 className="text-4xl font-bold py-8 text-center text-[#064E3B]">
          Cursos disponíveis
        </h2>
        <div className="w-3/4 py-4 m-auto flex flex-wrap justify-between">
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
                <p>Código da turma: {dados.id}</p>{" "}
                {/* visivel apenas para usuário ADM */}
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
                    Rua Brasílio Martinho Vale, 86 - Farolândia - 49031-010{" "}
                    <br />
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
      </section>
      {/* Dialog visivel apenas para usuário ADM */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Adicionar curso</Button>
        </DialogTrigger>
        <DialogContent>
          <Form />
        </DialogContent>
      </Dialog>
      <Widget />
      <Footer />
    </body>
  );
}
