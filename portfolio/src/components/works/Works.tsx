import projectOne from "../../assets/project-1.png";
import projectTwo from "../../assets/project-2.png";

interface Props {
    id: string;
}

export const Works: React.FC<Props> = ({ id }) => {
    return (
        <div
            id={id}
            className=" relative flex flex-col w-11/12  md:h-160 md:w-10/12 md:mt-16 lg:mt-12 xl:mt-0 2xl:w-9/12 2xl:h-128"
        >
            <h1 className="relative  w-full z-10 left-0 top-0 mb-3 font-anton text-greenTitle md:text-8xl">
                PROJETOS
            </h1>

            <p className="absolute right-0 top-0 text-black text-[8px] text-right tracking-tight font-silks w-36 md:text-[12px] md:w-48  md:right-8 md:top-1 xl:w-64 xl:top-0 xl:right-28 2xl:text-[12px] 2xl:w-80 2xl:mt-4 ">
                durante minha vida acadêmica e profissional, tive a oportunidade
                de trabalhar com uma variedade de projetos.
            </p>
            <div className="flex p-2 gap-2 md:gap-8 place-content-center 2xl:gap-16 ">
                <div className="real flex flex-col relative top-14">
                    <a
                        className="text-xl text-black font-bold text-center font-sans md:text-2xl"
                        target="_blank"
                        href="https://cocktail-app2.vercel.app/ "
                    >
                        <div className="bg-black w-40 flex md:w-52  md:h-36  2xl:w-60 2xl:h-36">
                            <img src={projectOne} className=" w-36 mx-auto" />
                        </div>
                        Cocktail Genius
                    </a>
                </div>
                <div className="relative top-0 h-40 w-30 flex flex-col  md:h-52  md:w-43 2xl:w-36 2xl:h-60">
                    <a
                        className="text-xl text-black font-bold text-center font-sans md:text-2xl"
                        target="_blank"
                        href="https://trivia3.vercel.app/"
                    >
                        <div className="bg-blueImageProject h-full w-full flex">
                            <img src={projectTwo} className="w-36 mx-auto" />
                        </div>
                        Trivia
                    </a>
                </div>
            </div>
        </div>
    );
};
