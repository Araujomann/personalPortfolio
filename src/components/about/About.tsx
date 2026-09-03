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
    "Entrei na empresa júnior do IFMA, que nasceu da minha turma, e tive a oportunidade de ser líder do grupo de estudo de front-end.";
  const text3 =
    "Deixei a empresa júnior quando consegui minha primeira oportunidade de emprego.";

  return (
    <section
      id={id}
      className="relative flex flex-col w-[90%] md:w-full items-center bg-transparent py-12 md:py-24 max-w-5xl"
    >
      <div className="w-full mb-12 md:mb-20 text-center">
        <h1 className="font-black text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
          APAIXONADO
        </h1>
        <h1 className="font-black text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none md:ml-24">
          PELO
        </h1>
        <h1 className="font-black text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none md:ml-48">
          DESENVOLVIMENTO
        </h1>
      </div>

      <div className="flex flex-col w-full gap-8 md:gap-12 mt-8 md:pl-16">
        <article className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-3xl">
          <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <img src={react} alt="React logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="text-gray-700 font-medium text-sm md:text-base leading-relaxed text-center md:text-left flex-1 mt-4 md:mt-2">
            <TypewriterAboutMe text={[text1]} />
          </div>
        </article>

        <article className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-3xl md:ml-24">
          <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <img src={node} alt="Node.js logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="text-gray-700 font-medium text-sm md:text-base leading-relaxed text-center md:text-left flex-1 mt-4 md:mt-2">
            <TypewriterAboutMe text={[text2]} />
          </div>
        </article>

        <article className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-3xl xl:ml-48">
          <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <img src={js} alt="JavaScript logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="text-gray-700 font-medium text-sm md:text-base leading-relaxed text-center md:text-left flex-1 mt-4 md:mt-2">
            <TypewriterAboutMe text={[text3]} />
          </div>
        </article>
      </div>
    </section>
  );
};

interface TypewriterInstance {
  typeString: (text: string) => TypewriterInstance;
  changeDelay: (ms: number) => TypewriterInstance;
  start: () => TypewriterInstance;
  callFunction: (fn: () => void) => TypewriterInstance;
}

const TypewriterAboutMe: React.FC<{ text: string[] }> = ({ text }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const typewriterRef = useRef<TypewriterInstance | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInit = (typewriter: TypewriterInstance) => {
    typewriterRef.current = typewriter;
    typewriter
      .changeDelay(40)
      .typeString(text[0])
      .start()
      .callFunction(() => {
        const cursor = document.querySelector(".Typewriter__cursor");
        if (cursor) {
          cursor.remove();
        }
      });
  };

  return (
    <div ref={sectionRef} className="min-h-[4rem]">
      {isVisible && (
        <Typewriter
          onInit={handleInit}
          options={{
            cursor: "|",
            delay: 40,
            autoStart: false,
          }}
        />
      )}
    </div>
  );
};