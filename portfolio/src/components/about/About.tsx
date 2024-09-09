import js from "../../assets/js.png";
import next from "../../assets/next.svg";
import react from "../../assets/react.svg";

interface Props {
  id: string;
}

export const About: React.FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      className="relative flex flex-col w-11/12 items-center bg-bege py-6 md:h-208 md:w-10/12"
    >
      <div className="relative  w-full ">
        <h1 className="relative left-2 font-anton text-greenTitle text-4xl md:text-6xl 2xl:text-7xl">
          APAIXONADO
        </h1>

        <h1 className="relative  left-12 font-anton text-greenTitle text-4xl md:text-6xl 2xl:text-7xl">
          PELO
        </h1>

        <h1 className="relative left-20 font-anton text-greenTitle text-4xl md:text-6xl 2xl:text-7xl">
          {" "}
          DESENVOLVIMENTO{" "}
        </h1>
      </div>

      <div className=" flex flex-col pt-6 w-full gap-5 text-center">
        <div className="flex items-center">
          <img src={react} alt="js logo" className="w-20  ml-4 md:w-32" />
          <p className="text-black w-40 mx-auto font-silks text-[10px] md:text-[16px] md:w-60">
            Minha carreira na programação iniciou quando entrei no curso de
            ciência da computação no IFMA, no início de 2022.
          </p>
        </div>
        <div className="flex items-center">
          <img src={next} alt="js logo" className="w-24  ml-4  md:w-32" />
          <p className="text-black w-48 mx-auto font-silks text-[10px] md:text-[16px] md:w-60">
            Entrei na empresa júnior do ifma, que nasceu da minha turma e tive a
            opourtunidade de ser lider do grupo de front-end, organizando o
            roteiro de estudos e ajudando os demais membros com dúvidas que
            surgiam.
          </p>
        </div>

        <div className="flex items-center">
          <img src={js} alt="js logo" className="w-20 ml-4  md:w-32 " />
          <p className="text-black w-40 mx-auto font-silks text-[10px] md:text-[16px] md:w-60">
            deixei a empresa júnior quando consegui minha primeira vaga de
            emprego.
          </p>
        </div>
      </div>
    </div>
  );
};
