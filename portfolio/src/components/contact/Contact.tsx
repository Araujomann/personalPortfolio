import { GoArrowUpRight } from "react-icons/go";
import { Email } from "../index";

interface Props {
    id: string;
}

export const Contact: React.FC<Props> = ({ id }) => {
    const handleLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId!);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });

            // Adicionar animação aos ícones
            const instagramIcon = document.getElementById("instagram-icon");
            const linkedinIcon = document.getElementById("linkedin-icon");

            if (instagramIcon) {
                instagramIcon.classList.add("little-fancy");
                setTimeout(() => {
                    instagramIcon.classList.remove("little-fancy");
                }, 3000); // Duração da animação
            }

            if (linkedinIcon) {
                linkedinIcon.classList.add("little-fancy");
                setTimeout(() => {
                    linkedinIcon.classList.remove("little-fancy");
                }, 3000); // Duração da animação
            }
        }
    };

    return (
        <div className="flex flex-col  relative w-11/12  mt-4 gap-4 md:w-full 2xl:w-9/12 ">
            <div className="flex flex-col relative xl:w-11/12 xl:mx-auto 2xl:w-10/12 2xl:mx-auto">
                <div className="flex justify-between">
                    <h1 className="relative font-anton text-greenTitle text-4xl  md:text-6xl md:ml-30 lg:text-7xl 2xl:text-7xl ">
                        TEM UMA IDEIA?
                    </h1>
                    <p className=" flex place-items-center text-black font-silks text-[8px] text-right tracking-tighter w-28 top-2 right-0 md:text-[12px] md:w-40 md:top-1 xl:right-10 2xl:top-4 2xl:w-60">
                        Adoraria ouví-la, vamos conversar?
                    </p>
                </div>

                <div className="relative flex justify-between ">
                    <a
                        href="#hero"
                        onClick={handleLinkClick}
                        className="flex my-auto w-24 h-16 left-2 items-center justify-center rounded-full border-solid border border-gray-800 hover:cursor-pointer md:w-36  xl:w-48 xl:left-20 xl:h-16  2xl:left-20 2xl:h-16"
                    >
                        <div className="relative flex flex-col items-end left-3 md:ml-5  border-black w-12  2xl:ml-12 2xl:py-12">
                            <span>
                                <GoArrowUpRight color="black" />
                            </span>
                            <p className="text-black w-20 font-silks tracking-tighter text-[8px] text-end md:text-[12px] md:w-24 2xl:text-[14px] 2xl:w-32">
                                minhas redes sociais
                            </p>
                        </div>
                    </a>
                    <h1 className="relative text-right font-anton text-greenTitle text-4xl md:text-6xl lg:text-7xl 2xl:text-7xl">
                        CONTE-ME SOBRE ISSO
                    </h1>
                </div>
            </div>
            <Email id={id} />
        </div>
    );
};
