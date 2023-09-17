import Image from "next/image";

export default function Clientes() {
  return (
    <section className="w-full px-4 py-16">
      <div className="w-full xl:w-3/4 mx-auto">
        <h2 className="text-4xl pb-16 font-bold text-[#DA315F] text-center underline">
          Alguns de nossos clientes
        </h2>
        <div className="flex flex-col gap-y-40 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-20">
          <div className="w-full">
            <Image
              className="mx-auto"
              src="/barros-filhos.png"
              alt="Logo barros filhos"
              width={250}
              height={89}
            />
          </div>

          <div className="w-full">
            <Image
              className="mx-auto"
              src="/impacto.png"
              alt="Logo impacto"
              width={250}
              height={54}
            />
          </div>
          <div className="w-full">
            <Image
              className="mx-auto"
              src="/hospital-olhos.png"
              alt="Logo hospitald dos olhos"
              width={180}
              height={90}
            />
          </div>
          <div className="w-full">
            <Image
              className="mx-auto"
              src="/sescap.png"
              alt="Logo sescap"
              width={250}
              height={82}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
