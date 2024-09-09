import projectOne from "../../assets/project-1.png";
import projectTwo from "../../assets/project-2.png";

export const Works = () => {
    return (
        <div className=" relative flex flex-col w-11/12  md:h-160 md:w-10/12 lg:mt-12 xl:mt-0">
            <h1 className="relative z-10 left-0 top-0 mb-3 font-anton text-greenTitle md:text-8xl">
                WORKS
            </h1>

            <p className="relative -top-16 left-40 text-black text-[8px] font-silks w-36 md:text-[12px] md:w-48 md:left-64 md:-top-28 xl:w-64 xl:-top-24 xl:left-72 2xl:text-[16px] 2xl:w-80 2xl:-top-28 ">durante minha vida acadêmica e profissional, tive a oportunidade de trabalhar com uma variedade de projetos.</p>
            <div className="flex  p-2 gap-2 md:gap-8 place-content-center 2xl:gap-16 ">
                <div className="flex flex-col ">
                    <div className="bg-black w-40 flex md:w-52  md:h-28  2xl:w-60 2xl:h-36">
                        <img src={projectOne} className=" w-36 mx-auto" />
                    </div>
                    <a className="text-xl text-black font-bold text-center font-sans md:text-2xl" target="_blank" href="https://cocktail-app2.vercel.app/ ">
                        Cocktail Genius
                    </a>
                </div>
                <div className="relative -top-14 h-40 w-30 flex flex-col  md:h-52  md:w-28 2xl:w-36 2xl:h-60">
                    <div className="bg-blueImageProject h-full w-full flex">
                        <img src={projectTwo}  className="w-36 mx-auto" />
                    </div>
                    <a className="text-xl text-black font-bold text-center font-sans md:text-2xl" target="_blank" href="https://trivia3.vercel.app/">
                        Trivia
                    </a>
                </div>
            </div>
        </div>
    );
};
