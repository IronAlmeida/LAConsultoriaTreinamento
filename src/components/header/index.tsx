import Image from "next/image";
import Link from "next/link";

export default function Header({ color }: { color: string }) {
  return (
    <header style={{ backgroundColor: color }}>
      <div className="flex w-3/4 m-auto">
        <div>
          <Image
            src="/LA-logo.webp"
            width="96"
            height="68"
            alt="Logo LA Consultoria e Treinamento"
          />
        </div>
        <nav className="flex">
          <ul className="flex">
            <Link href="#">
              <li>Home</li>
            </Link>
            <Link href="#">
              <li>Cursos</li>
            </Link>
            <Link href="#">
              <li>Arquivos</li>
            </Link>
            <Link href="#">
              <li>Sobre</li>
            </Link>
          </ul>
          <button>Entrar</button>
          <button>Solicitar orçamento</button>
        </nav>
      </div>
    </header>
  );
}
