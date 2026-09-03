import { motion } from "framer-motion";

interface Props {
  id: string;
}

export const Recommendations: React.FC<Props> = ({ id }) => {
  return (
    <section id={id} className="w-[90%] md:w-full mb-24">
      <h1 className="font-mono text-[rgb(var(--accent))] text-base">
        ~/recommendations
      </h1>
      <div className="mt-4 space-y-6">
        {/* Recommendation 1 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 border-l-2 border-[rgb(var(--border))] pl-4"
        >
          <p className="text-[rgb(var(--text))] font-mono text-sm leading-relaxed">
            "Tive o prazer de trabalhar ao lado do Lucas durante alguns meses e posso dizer com certeza que ele é um dev excepcional! Sempre sendo um colega muito proativo e habilidoso, ele desempenhou papéis muito importantes para o processo dos projetos em que trabalhamos juntos."
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-[rgb(var(--text))] text-sm">Guilherme Rillei</span>
            <span className="text-[rgb(var(--text-dim))] text-xs">Dev Pleno e Freelancer</span>
          </div>
        </motion.div>

        {/* Recommendation 2 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-2 border-l-2 border-[rgb(var(--border))] pl-4"
        >
          <p className="text-[rgb(var(--text))] font-mono text-sm leading-relaxed">
            "Lucas se destacou como uma pessoa de fácil aprendizado, entendendo rapidamente como funciona a dinâmica das ferramentas da SuperViz e implementando soluções com elas."
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-[rgb(var(--text))] text-sm">Carlos Alessandro</span>
            <span className="text-[rgb(var(--text-dim))] text-xs">Dev Senior na SuperViz</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};