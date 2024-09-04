import { GoArrowUpRight } from "react-icons/go";
import { Email } from "../index";

export const Contact = () => {
    return (
        <div className="flex flex-col relative w-11/12 h-16 mt-4 gap-12 md:w-10/12 md:h-256 md:gap-20">
            <div className="flex flex-col relative">
                <h1 className="relative font-anton text-greenTitle text-4xl md:text-6xl 2xl:text-7xl">
                    Tem uma ideia?
                </h1>
                <h1 className="relative right-0 text-right font-anton text-greenTitle text-4xl md:text-6xl 2xl:text-7xl">
                    conte-me sobre isso{" "}
                </h1>
                <p className="absolute text-black font-silks text-[8px] w-32 top-1 right-0 md:text-[12px] md:w-40 md:top-1 xl:right-10 2xl:right-24 2xl:text-[16px] 2xl:w-60">
                    Adoraria ouvir suas ideias, vamos conversar.
                </p>
                <div className="absolute flex w-24 h-10 left-2 items-center justify-center rounded-full border-solid border border-gray-800 hover:cursor-pointer top-10 md:h-16 md:w-32 md:top-12 md:mt-3 xl:w-40 2xl:top-16 2xl:left-20 2xl:h-20">
                    <div className="flex flex-col items-end absolute border-black w-12 md:ml-8">
                        <span>
                            <GoArrowUpRight color="black" />
                        </span>
                        <p className="text-black   w-20 font-silks text-[8px] text-end md:text-[12px] md:w-24 2xl:text-[16px] 2xl:w-32">
                         envie uma solicitação
                        </p>
                    </div>
                    <h2 className="absolute top-10 text-black font-sans inset-x-full md:top-20 md:text-[24px]">
                        or
                    </h2>
                </div>
            </div>
            <Email />
        </div>
    );
};
