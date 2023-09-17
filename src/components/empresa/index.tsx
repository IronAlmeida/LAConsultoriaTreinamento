import Image from "next/image";

export default function () {
  return (
    <section className="w-full px-6 py-16 bg-[#9CA3AF0F]">
      <div className="w-full lg:w-3/4 mx-auto">
        <h2 className="text-4xl pb-16 font-bold text-[#DA315F] text-center underline">
          A empresa
        </h2>
        <div className="flex flex-col xl:grid xl:grid-cols-2 xl:grid-rows-3 justify-center items-center gap-y-20 gap-x-6">
          <div className="m-auto hidden lg:block">
            <Image
              src="/LA-logo-full.png"
              alt="Logo da LA Consultoira e Treinamento"
              width={400}
              height={312}
            />
          </div>
          <div>
            <p className="text-2xl text-center">
              A LA Consultoria e Treinamento foi fundada em 2018 com o objetivo
              de ajudar as empresas e profissionais do Departamento Pessoal a
              lidar com as demandas da área, além de capacitar novos
              profissionais e atualizar aqueles que já têm experiência com as
              mudanças que ocorrem ao longo do tempo.
            </p>
          </div>
          <div>
            <div className="w-full lg:w-2/3 text-center m-auto flex flex-col gap-4 items-center">
              <Image
                src="/icon_missao.png"
                alt="icone de missão"
                width={61}
                height={60}
              />
              <h3 className="text-[#DA315F] text-2xl font-bold">Missão</h3>
              <p className="text-xl">
                Oferecer capacitação profissional na área de Departamento
                Pessoal com treinamentos e orientação, com ênfase na resolução
                de problemas corporativos.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full lg:w-2/3 text-center m-auto flex flex-col gap-4 items-center">
              <Image
                src="/icon_visao.png"
                alt="icone de missão"
                width={60}
                height={60}
              />
              <h3 className="text-[#DA315F] text-2xl font-bold">Visão</h3>
              <p className="text-xl">
                Sermos autoridade na prestação de serviços para as área de
                Departamento Pessoal, oferecendo resultados para profissionais e
                resultado para empresas.
              </p>
            </div>
          </div>
          <div className="col-start-1 col-end-3">
            <div className="w-full lg:w-2/5 text-center m-auto flex flex-col gap-4 items-center">
              <Image
                src="/icon_valores.png"
                alt="icone de missão"
                width={60}
                height={60}
              />
              <h3 className="text-[#DA315F] text-2xl font-bold">Valores</h3>
              <p className="text-xl">
                Gratidão, integridade, inteligência, inspiração, flexibilidade,
                valorização do ser humano, responsabilidade social e interesse
                pelo conhecimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
