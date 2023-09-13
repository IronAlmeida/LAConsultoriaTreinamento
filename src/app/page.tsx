import Image from "next/image";
import Header from "../components/header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Home() {
  return (
    <body>
      <Header color="transparent" />
      <section className="bg-[url('../../public/bg_la.png')] bg-top bg-no-repeat bg-cover rounded-bl-[120px] rounded-br-[120px] relative w-full h-[850px]">
        <div className="w-4/5 lg:w-1/2 m-auto flex justify-center items-center py-[22rem] md:py-[26rem]">
          <h1 className="text-white font-bold text-4xl text-center">
            Descomplique o departamento pessoal com quem está há mais de 18 anos
            no mercado!
          </h1>
        </div>
      </section>
      <section className="w-full px-2 py-16">
        <div className="w-3/4 pb-16 mx-auto">
          <h2 className="text-4xl font-bold text-[#DA315F] text-center underline">
            Nossos serviços
          </h2>
        </div>
        <div className="w-3/4 mx-auto flex flex-wrap justify-between">
          <Card className="w-full mb-16 xl:mb-0 xl:w-[30%] p-4">
            <CardHeader className="items-center gap-6 text-center">
              <Image
                src={
                  "https://res.cloudinary.com/du7ykfyoi/image/upload/v1694235354/Capas_LA-consultoria/bpo_fuxv90.png"
                }
                alt="Terceirização"
                width={100}
                height={100}
              />
              <CardTitle>Terceirização do Departamento Pessoal</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg">
              Terceirização de folha de pagamento, os serviços serão executados
              por profissionais especificamente treinados.
            </CardContent>
          </Card>

          <Card className="w-full mb-16 xl:mb-0 xl:w-[30%] p-4">
            <CardHeader className="items-center gap-6 text-center">
              <Image
                src={
                  "https://res.cloudinary.com/du7ykfyoi/image/upload/v1694235354/Capas_LA-consultoria/online-course_ocgksv.png"
                }
                alt="Cursos"
                width={100}
                height={100}
              />
              <CardTitle>Capacitação Profissional</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg">
              Cursos para quem deseja ingressar no Departamento Pessoal e para
              aqueles que tem experiência mas que precisam se atualizar.
            </CardContent>
          </Card>

          <Card className="w-full xl:w-[30%] p-4">
            <CardHeader className="items-center gap-6 text-center">
              <Image
                src={
                  "https://res.cloudinary.com/du7ykfyoi/image/upload/v1694235354/Capas_LA-consultoria/chat_dkdkgv.png"
                }
                alt="Assesoria"
                width={100}
                height={100}
              />
              <CardTitle>Consultoria / Assessoria </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg">
              Consultoria orientativa trabalhista
            </CardContent>
          </Card>
        </div>
      </section>
      <h1 className="text-xl text-red-900 underline">
        Olá, mundo. O novo site de Lourdes Almeida vai ser top!
      </h1>
    </body>
  );
}
