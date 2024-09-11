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
      className="relative flex flex-col w-11/12 items-center bg-bege py-6 md:h-208 md:w-full 2xl:h-176"
    >
      <div className="relative  w-full ">
        <h1 className="relative left-2 font-anton text-greenTitle text-4xl sm:left-20 md:left-14 md:text-6xl lg:left-28 2xl:text-7xl 2xl:left-44 2xl:ml-1">
          APAIXONADO
        </h1>

        <h1 className="relative  left-12 font-anton text-greenTitle text-4xl sm:left-44  md:text-6xl lg:left-72 2xl:text-7xl 2xl:left-96">
          PELO
        </h1>

        <h1 className="relative  left-20 font-anton text-greenTitle text-4xl  sm:left-44 md:text-6xl lg:left-80 2xl:text-7xl 2xl:left-96">
          {" "}
          DESENVOLVIMENTO{" "}
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
            Minha carreira na programação iniciou quando entrei no curso de
            ciência da computação no IFMA, no início de 2022.
          </p>
        </div>
        <div className="flex items-center">
          <img
            src={next}
            alt="js logo"
            className="w-24  ml-4  md:w-32 md:ml-12 lg:ml-32 2xl:ml-64"
          />
          <p className="text-black w-48 mx-auto font-silks text-[10px] md:text-[16px] md:w-60 2xl:text-[12px]">
            Entrei na empresa júnior do ifma, que nasceu da minha turma e tive a
            opourtunidade de ser lider do grupo de front-end, organizando o
            roteiro de estudos e ajudando os demais membros com dúvidas que
            surgiam.
          </p>
        </div>

        <div className="flex items-center">
          <img
            src={js}
            alt="js logo"
            className="w-20 ml-4  md:w-32 md:ml-12 lg:ml-32 2xl:ml-64"
          />
          <p className="text-black w-40 mx-auto font-silks text-[10px] md:text-[16px] md:w-60 2xl:text-[12px]">
            deixei a empresa júnior quando consegui minha primeira vaga de
            emprego.
          </p>
        </div>
      </div>
    </div>
  );
};
