import projectOne from "../../assets/project-1.png";
import projectTwo from "../../assets/project-2.png";
import projetctThree from "../../assets/project-3.png";

interface Props {
    id: string;
}

export const Works: React.FC<Props> = ({ id }) => {
    return (
        <div
            id={id}
            className="relative flex h-fit flex-col  w-11/12  md:h-160  md:mt-16 lg:mt-12 xl:mt-0 2xl:w-9/12"
        >
            <h1 className="relative w-full z-10 left-0 top-0 mb-3 font-anton text-greenTitle md:text-8xl">
                PROJETOS
            </h1>

            <p className="absolute right-0 top-0 text-black text-[8px] text-right tracking-tight font-silks w-36 md:text-[12px] md:w-44 md:right-8 md:top-1 xl:w-64 xl:top-0 xl:right-28 2xl:text-[12px] 2xl:w-80 2xl:mt-4 ">
                durante minha vida acadêmica e profissional tive a oportunidade
                de trabalhar com uma variedade de projetos.
            </p>
            <div className="relative flex p-2 h-96 lg:h-128 mt-6 gap-2 md:mt-20 lg:mt-8  md:gap-8 xl:h-144 2xl:gap-16  2xl:h-192">
                <div className="absolute flex flex-col top-4 right-2 lg:right-12  xl:right-28">
                    <a
                        className="text-xl text-black font-bold text-center h-full w-full font-sans md:text-2xl "
                        target="_blank"
                        href="https://trivia3.vercel.app/"
                    >
                        <div className="bg-blueImageProject w-28 h-32 flex md:h-44 md:w-36 lg:h-52 lg:w-44 xl:w-48 xl:h-56">
                            <img src={projectTwo} className=" w-36 mx-auto" />
                        </div>
                        Trivia
                    </a>
                </div>

                <div className="absolute flex flex-col h-fit top-24 lg:left-12 xl:left-28">
                    <a
                        className="text-xl text-black font-bold text-center font-sans md:text-2xl"
                        target="_blank"
                        href="https://cocktail-app2.vercel.app/ "
                    >
                        <div className="bg-black w-40 flex md:w-52  md:h-36 lg:w-64 lg:h-40 xl:w-72 xl:h-44 2xl:w-80 2xl:h-48">
                            <img src={projectOne} className=" w-36 mx-auto" />
                        </div>
                        Cocktail Genius
                    </a>
                </div>

                <div className="absolute flex text-center h-fit  bottom-0 right-4 md:top-52 md:right-40 lg:top-64 lg:right-64 xl:right-80 3xl:right-96 ">
                    <a
                        className="text-xl text-black font-bold size-36 text-center font-sans md:text-2xl md:size-44 lg:size-52 xl:size-60"
                        target="_blank"
                        href="https://buddio.vercel.app/"
                    >
                        <div className="bg-black size-full flex rounded-full">
                            <img
                                src={projetctThree}
                                className="w-full h-full"
                            />
                        </div>
                        Buddio
                    </a>
                </div>
            </div>
        </div>
    );
};
