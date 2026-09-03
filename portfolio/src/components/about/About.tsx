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
    <section id={id} className="relative flex flex-col w-[90%] md:w-full items-center bg-transparent py-12 md:py-24 max-w-5xl">
      <div className="w-full mb-12 md:mb-20 text-center">
        <h1 className="font-mono text-[rgb(var(--accent))] text-base">
          ~/about
        </h1>
      </div>

      <div className="text-[rgb(var(--text))] font-mono text-sm md:text-base leading-relaxed max-w-2xl text-center">
        <p className="mb-4">{text1}</p>
        <p className="mb-4">{text2}</p>
        <p>{text3}</p>
      </div>
    </section>
  );
};