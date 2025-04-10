import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

export const TypewriterAboutMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Para de observar após a primeira vez
        }
      },
      { threshold: 0.1 }, // Dispara quando 10% da seção estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-[200px]">
      {isVisible && (
        <Typewriter
          options={{
            strings: [
              "Olá, eu sou o Lucas! Um desenvolvedor front-end apaixonado por criar interfaces modernas e acessíveis. Com experiência em React, Next.js e TypeScript, meu foco é entregar soluções que combinem design e performance.",
            ],
            autoStart: true,
            delay: 20, // Velocidade da digitação
            cursor: "|", // Estilo do cursor
            loop: false, // Não repetir
          }}
        />
      )}
    </div>
  );
};
