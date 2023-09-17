import Image from "next/image";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <section className="w-full pt-32 pb-2 bg-[#0F172AFA] relative -mt-[7rem]">
        <div className="w-full sm:w-3/4 mx-auto my-4 flex flex-col gap-4 items-center">
          <Image src="/LA-logo.webp" alt="Logo LA" width={96} height={68} />
        </div>
      </section>
      <section className="w-full py-2 bg-[#0F172A]">
        <div className="w-full sm:w-3/4 mx-auto flex flex-col items-center">
          <p className="text-white text-lg">
            Copyright © LA - Consultoria e Treinamento {year}
          </p>
          <span className="text-white pb-2 text-lg underline">
            Política de Privacidade
          </span>
        </div>
      </section>
    </>
  );
}
