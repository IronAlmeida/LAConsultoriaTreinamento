import Image from "next/image";
import Link from "next/link";

export default function Header({ color }: { color: string }) {
  return (
    <header
      style={{ backgroundColor: color }}
      className="w-full py-6 m-auto fixed z-10"
    >
      <div className="w-3/4 m-auto flex justify-between">
        <div>
          <Image
            src="/LA-logo.webp"
            width="96"
            height="68"
            alt="Logo LA Consultoria e Treinamento"
          />
        </div>
        <nav className="flex items-center text-white gap-6">
          <ul className="flex gap-10">
            <Link href="#">
              <li className="text-lg">Home</li>
            </Link>
            <Link href="/cursos">
              <li className="text-lg">Cursos</li>
            </Link>
            <Link href="#">
              <li className="text-lg">Arquivos</li>
            </Link>
            <Link href="#">
              <li className="text-lg">Sobre</li>
            </Link>
          </ul>
          <div className="flex gap-6 items-center">
            <button className="bg-[#DA315F] px-8 py-2 text-white rounded-full">
              Entrar
            </button>
            <button className="bg-[#293548] px-4 py-3 text-white rounded-full">
              Solicitar orçamento
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
