import guiPhoto from "../../assets/gui.png";
import carlPhoto from "../../assets/carl.png";

interface Props {
    id: string;
}

export const Testimonials: React.FC<Props> = ({ id }) => {
    return (
        <div
            id={id}
            className="flex flex-col gap-2 w-11/12 md:w-full  2xl:w-9/12"
        >
            <h1 className="font-anton text-4xl text-greenTitle md:text-6xl 2xl:text-7xl">
                O que as pessoas dizem sobre mim
            </h1>
            <div className=" flex flex-col h-full gap-16 overflow-auto overflow-x-hidden mt-12  ">
                <div className=" flex flex-col text-center gap-4 h-52 ">
                    <img
                        src={guiPhoto}
                        className="size-24 rounded-full mx-auto"
                    />
                    <section className="flex flex-col text-black gap-2 h-full justify-center">
                        <p className="text-[#606060] font-sans mx-auto text-sm md:text-lg  overflow-auto lg:w-5/6">
                            Tive o prazer de trabalhar ao lado do Lucas durante
                            alguns meses e posso dizer com certeza que ele é um
                            dev excepcional! Sempre sendo um colega muito
                            proativo e habilidoso, ele desempenhou papéis muito
                            importantes para o processo dos projetos em que
                            trabalhamos juntos.
                        </p>
                        <div className="flex flex-col">
                            <h3 className="font-sans text-black text-lg">
                                Guilherme Rillei
                            </h3>
                            <p className="font-sans text-[#878787] text-sm">
                                Dev Pleno e Freelancer
                            </p>
                        </div>
                    </section>
                </div>
                <div className="h-px bg-gray-300 w-full mt-8"/>
                <div className="flex flex-col text-center gap-4 min-w-full">
                    <img
                        src={carlPhoto}
                        className="size-24 rounded-full mx-auto"
                    />
                    <section className="flex flex-col text-black gap-2 h-full justify-center">
                        <p className="text-[#606060] font-sans mx-auto max-w-144 text-sm  md:text-xl lg:w-5/6">
                            Lucas se destacou como uma pessoa de fácil
                            aprendizado, entendendo rapidamente como funciona a
                            dinâmica das ferramentas da SuperViz e implementando
                            soluções com elas.
                        </p>
                        <div className="flex flex-col">
                            <h3 className="font-sans text-black text-lg">
                                Carlos Alessandro
                            </h3>
                            <p className="font-sans text-[#878787] text-sm">
                                Dev Senior na SuperViz
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
