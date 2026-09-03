import guiPhoto from "../../assets/gui.png";
import carlPhoto from "../../assets/carl.png";

interface Props {
  id: string;
}

export const Testimonials: React.FC<Props> = ({ id }) => {
  return (
    <section id={id} className="w-[90%] md:w-full flex flex-col mt-12 md:mt-24 max-w-5xl">
      <h1 className="font-black text-5xl md:text-7xl lg:text-8xl text-primary leading-tight md:w-3/4 mb-16">
        O QUE AS PESSOAS DIZEM SOBRE MIM
      </h1>
      
      <div className="flex flex-col gap-16 md:gap-24">
        
        <article className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
          <img src={guiPhoto} alt="Guilherme Rillei" className="w-24 h-24 rounded-full object-cover shadow-sm ring-4 ring-gray-50" />
          <div className="flex flex-col text-center md:text-left">
            <p className="text-gray-600 text-base md:text-lg italic leading-relaxed max-w-3xl">
              "Tive o prazer de trabalhar ao lado do Lucas durante alguns meses e
              posso dizer com certeza que ele é um dev excepcional! Sempre sendo
              um colega muito proativo e habilidoso, ele desempenhou papéis
              muito importantes para o processo dos projetos em que trabalhamos
              juntos."
            </p>
            <div className="mt-6">
              <h3 className="font-bold text-gray-900 text-lg">Guilherme Rillei</h3>
              <p className="text-gray-500 text-sm">Dev Pleno e Freelancer</p>
            </div>
          </div>
        </article>

        <div className="h-px bg-gray-200 w-full" />

        <article className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
          <img src={carlPhoto} alt="Carlos Alessandro" className="w-24 h-24 rounded-full object-cover shadow-sm ring-4 ring-gray-50" />
          <div className="flex flex-col text-center md:text-left">
            <p className="text-gray-600 text-base md:text-lg italic leading-relaxed max-w-3xl">
              "Lucas se destacou como uma pessoa de fácil aprendizado, entendendo
              rapidamente como funciona a dinâmica das ferramentas da SuperViz e
              implementando soluções com elas."
            </p>
            <div className="mt-6">
              <h3 className="font-bold text-gray-900 text-lg">Carlos Alessandro</h3>
              <p className="text-gray-500 text-sm">Dev Senior na SuperViz</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
