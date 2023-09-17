"use client";

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "../ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from "../ui/button";
import FormBudget from "./FormBudget";

type Position = "relative" | "absolute" | "fixed" | "static";

export default function Header({
  color,
  position,
}: {
  color: string;
  position: Position | undefined;
}) {
  useEffect(() => {
    const bg = document.querySelector("#bg") as HTMLElement;

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        bg.classList.add("bg");
      } else {
        bg.classList.remove("bg");
      }
    });
  }, []);

  const toggleMenu = () => {
    const nav = document.getElementById("nav") as HTMLElement;
    const bg = document.getElementById("bg") as HTMLElement;
    nav.classList.toggle("active");
    bg.classList.toggle("active");
  };

  return (
    <>
      <header
        id="bg"
        style={{ backgroundColor: color, position: position }}
        className="w-full py-4 m-auto z-50 animation-hidden"
      >
        <div className="w-3/4 lg:w-5/6 xl:w-3/4 m-auto flex justify-between">
          <Link href="/">
            <Image
              src="/LA-logo.webp"
              width="96"
              height="68"
              alt="Logo LA Consultoria e Treinamento"
            />
          </Link>
          <nav id="nav" className="flex items-center text-white gap-6">
            <ul id="menu" className="flex items-center gap-10">
              <Link href="/">
                <li className="text-lg hover:underline hover:scale-125 transition duration-400">
                  Home
                </li>
              </Link>
              <Link href="/cursos">
                <li className="text-lg hover:underline hover:scale-125 transition duration-400">
                  Cursos
                </li>
              </Link>
              <Link href="#">
                <li className="text-lg hover:underline hover:scale-125 transition duration-400">
                  Arquivos
                </li>
              </Link>
              <Link href="#">
                <li className="text-lg hover:underline hover:scale-125 transition duration-400">
                  Sobre
                </li>
              </Link>
              <li>
                <Button className="bg-[#DA315F]  text-lg font-semibold px-6 py-2 text-white rounded-full hover:scale-90 hover:bg-[#DA315F] transition duration-400">
                  Entrar
                </Button>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-white text-lg px-4 font-semibold py-2 text-[#DA315F] rounded-full hover:scale-90 hover:text-[#DA315F] transition duration-400"
                    >
                      Solicitar orçamento
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="px-2">
                    <DialogHeader className="w-full mt-6 items-center">
                      <DialogTitle className="text-xl text-[#0F172A]">
                        Se interessou por algum dos nossos serviços?
                      </DialogTitle>
                      <DialogDescription className="text-lg text-[#0F172A]">
                        Preencha o formulário abaixo e vamos conversar!
                        &#128521;
                      </DialogDescription>
                    </DialogHeader>
                    <FormBudget />
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
            <AiOutlineMenu
              onClick={toggleMenu}
              id="burger"
              className="text-4xl lg:hidden text-[#fff]"
            />
            <AiOutlineClose
              onClick={toggleMenu}
              id="close"
              className="hidden lg:hidden text-4xl text-[#fff]"
            />
          </nav>
        </div>
      </header>
    </>
  );
}
