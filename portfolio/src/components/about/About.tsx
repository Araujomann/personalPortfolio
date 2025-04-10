import js from "../../assets/js.png";
import node from "../../assets/node.png";
import react from "../../assets/react.svg";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

interface Props {
  id: string;
}

export const About: React.FC<Props> = ({ id }) => {
  const text1 =
    "Minha carreira na programação iniciou quando entrei no curso de ciência da computação, no IFMA, no início de 2022.";
  const text2 =
    "Entrei na empresa júnior do ifma, que nasceu da minha turma, e tive aopourtunidade de ser lider do grupo de estudo de front-end, organizando oroteiro e ajudando os demais membros com dúvidas que surgiam";
  const text3 =
    "deixei a empresa júnior quando consegui minha primeira oportunidade de emprego.";
  return (
    <div
      id={id}
      className="relative flex flex-col w-11/12 items-center bg-bege py-6 md:h-208 md:w-full 2xl:h-176"
    >
      <div className="relative w-full">
        <h1 className="relative left-2 font-anton text-greenTitle text-4xl sm:left-20 md:left-14 md:text-6xl lg:left-28 lg:text-7xl 2xl:text-7xl 2xl:left-44 2xl:ml-1">
          APAIXONADO
        </h1>

        <h1 className="relative w-fit left-12 font-anton text-greenTitle text-4xl sm:left-44  md:text-6xl lg:left-72 2xl:text-7xl 2xl:left-96">
          PELO
        </h1>

        <h1 className=" w-fit ml-10 font-anton text-greenTitle text-4xl  sm:ml-32 md:text-6xl lg:ml-56 lg:text-7xl 2xl:text-7xl 2xl:left-96">
          DESENVOLVIMENTO
        </h1>
      </div>

      <div className=" flex flex-col pt-6 w-full gap-5 text-center">
        <div className="flex items-center">
          <img
            src={react}
            alt="js logo"
            className="w-20  ml-4 md:w-32 md:ml-12 lg:ml-32 2xl:ml-64"
          />
          <p className="text-black w-40 mx-auto font-silks text-[10px] md:text-[16px] md:w-60 2xl:text-[12px]">
            <TypewriterAboutMe text={[text1]} />
          </p>
        </div>
        <div className="flex items-center">
          <img
            src={node}
            alt="node logo"
            className="w-20  ml-4  md:w-32 md:ml-12 lg:ml-32 2xl:ml-64"
          />
          <p className="text-black w-48 mx-auto font-silks text-[10px] md:text-[16px] md:w-60 2xl:text-[12px]">
            <TypewriterAboutMe text={[text2]} />
          </p>
        </div>

        <div className="flex items-center">
          <img
            src={js}
            alt="js logo"
            className="w-20 ml-4  md:w-32 md:ml-12 lg:ml-32 2xl:ml-64"
          />
          <p className="text-black w-40 mx-auto font-silks text-[10px] md:text-[16px] md:w-60 2xl:text-[12px]">
            <TypewriterAboutMe text={[text3]} />
          </p>
        </div>
      </div>
    </div>
  );
};

const TypewriterAboutMe: React.FC<{ text: string[] }> = ({ text }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const typewriterRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInit = (typewriter: any) => {
    typewriterRef.current = typewriter;
    typewriter
      .changeDelay(65)
      .typeString(text[0])
      .start()
      .callFunction(() => {
        // Remove o cursor quando terminar
        const cursor = document.querySelector(".Typewriter__cursor");
        if (cursor) {
          cursor.remove();
        }
      });
  };

  return (
    <div ref={sectionRef}>
      {isVisible && (
        <Typewriter
          onInit={handleInit}
          options={{
            cursor: "|",
            delay: 65,
            autoStart: false, // Controlamos manualmente
          }}
        />
      )}
    </div>
  );
};
