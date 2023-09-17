"use client";

import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import "../../app/globals.css";

export default function Depoimentos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="w-full px-2 py-16">
      <div className="w-full xl:w-3/4 mx-auto">
        <h2 className="text-4xl pb-16 font-bold text-[#DA315F] text-center underline">
          Depoimentos
        </h2>
      </div>
      <div className="navigation-wrapper w-full xl:w-2/4 mx-auto">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <Card className="w-3/4 flex flex-col gap-10 items-center mx-auto px-0 py-6">
              <Image
                src="/giro.png"
                alt="depoimento Alice Souza"
                width={150}
                height={70}
              />
              <CardContent className="w-full text-base sm:text-xl font-bold italic">
                "Lourdes é uma profissional altamente capacitada, está sempre
                atualizada, e tem uma didática incrível. Nos responde com
                atenção, agilidade e competência. Ter a consultoria da Lourdes
                em nosso escritório faz toda a diferença."
              </CardContent>
              <CardFooter className="w-full flex flex-col items-start">
                <h4 className="text-lg">Alice Souza</h4>
                <p className="text-sm font-bold text-[#DA315F]">
                  Giro Contabilidade
                </p>
              </CardFooter>
            </Card>
          </div>

          <div className="keen-slider__slide">
            <Card className="w-3/4 flex flex-col gap-10 items-center mx-auto px-0 py-6">
              <Image
                src="/mb-moto.png"
                alt="depoimento barros"
                width={150}
                height={55}
              />
              <CardContent className="w-full text-base sm:text-xl font-bold italic">
                "Lourdes Almeida excelente profissional com uma bagagem
                riquíssima na área de DP e eSocial, sua forma de transmitir o
                conteúdo bastante clara e objetiva. Super atenciosa e dedicada e
                está sempre disponível para nos ajudar."
              </CardContent>
              <CardFooter className="w-full flex flex-col items-start">
                <h4 className="text-lg">Juceli</h4>
                <p className="text-sm font-bold text-[#DA315F]">MB Motos</p>
              </CardFooter>
            </Card>
          </div>

          <div className="keen-slider__slide">
            <Card className="w-3/4 flex flex-col gap-10 items-center mx-auto px-0 py-6">
              <CardContent className="w-full text-base sm:text-xl font-bold italic">
                "Nunca tinha trabalhado de home office e o grupo de DP da
                Lourdes foi fundamental para ter segurança no que estava
                fazendo. Ela sempre esclarecia a legislação e isso nos deixava
                mais tranquilos. Além dos cursos onde aprendemos de verdade e
                sempre na prática."
              </CardContent>
              <CardFooter className="w-full flex flex-col items-start">
                <h4 className="text-lg">Sheila Santos</h4>
                <p className="text-sm font-bold text-[#DA315F]">Aluna da LA</p>
              </CardFooter>
            </Card>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </section>
  );
}

function Arrow(props: any) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
