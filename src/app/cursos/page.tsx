import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";
import Form from "./components/form";

interface Turmas {
  id: number;
  nome: string;
  cargaHoraria: string;
  investimento: string;
  datas: string;
  horario: string;
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
    <>
      <h1>Página Cursos</h1>
      <div className="w-3/4 m-auto flex flex-col justify-between">
        {cursos.map((dados, index) => (
          <Card className="w-1/2 mx-auto mt-8" key={index}>
            <CardHeader>
              <CardTitle>{dados.nome}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Investimento: {dados.investimento}</p>
              <p>Carga Horária: {dados.cargaHoraria}</p>
              <p>Data(s): {dados.datas}</p>
              <p>Horário: {dados.horario}</p>
            </CardContent>
          </Card>
        ))}

        <div className="m-auto mt-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Adicionar curso</Button>
            </DialogTrigger>
            <DialogContent>
              <Form />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
