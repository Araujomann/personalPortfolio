import guiPhoto from "../../assets/gui.png";
import carlPhoto from "../../assets/carl.png";
import gustaPhoto from "../../assets/gus.png";

interface Props {
  id: string;
}

export const Testemonials: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="flex flex-col gap-2 w-11/12 md:w-10/12">
      <h1 className="font-anton text-4xl text-greenTitle md:text-6xl 2xl:text-7xl">
        O que as pessoas dizem sobre mim
      </h1>
      <div className=" flex h-44 gap-6 overflow-auto overflow-y-hidden mt-4 md:h-96  ">
        <div className=" flex gap-4 min-w-full pr-2">
          <img src={guiPhoto} className="" />
          <section className="flex flex-col text-black gap-4 h-full justify-center">
            <p className="text-[#606060] font-sans text-xs md:text-xl overflow-auto">
              Tive o prazer de trabalhar ao lado do Lucas durante alguns meses e
              posso dizer com certeza que ele é um dev excepcional! Sempre sendo
              um colega muito proativo e habilidoso, ele desempenhou papéis
              muito importantes para o processo dos projetos em que trabalhamos
              juntos.
            </p>
            <div className="flex flex-col">
              <h3 className="font-sans text-black text-lg">Guilherme Rillei</h3>
              <p className="font-sans text-[#878787] text-sm">
                Dev Pleno e Freelancer
              </p>
            </div>
          </section>
        </div>

        <div className="flex gap-4 min-w-full ">
          <img src={carlPhoto} className="" />
          <section className="flex flex-col text-black gap-4 h-full justify-center">
            <p className="text-[#606060] font-sans text-xs  md:text-xl">
              Lucas se destacou como uma pessoa de fácil aprendizado, entendendo
              rapidamente como funciona a dinâmica das ferramentas da SuperViz e
              implementando soluções com elas.
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

        <div className="flex gap-4 min-w-full ">
          <img src={gustaPhoto} className="" />
          <section className="flex flex-col text-black gap-4 h-full justify-center">
            <p className="text-[#606060] font-sans text-xs  md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, molestias ratione repellendus quasi natus nam et modi
              quod id totam alias iste dolorem quas iure quam.
            </p>
            <div className="flex flex-col">
              <h3 className="font-sans text-black text-lg">Gusta </h3>
              <p className="font-sans text-[#878787] text-sm">CEO da Tomshor</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
