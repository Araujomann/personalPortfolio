import projectOne from "../../assets/project-1.png";
import projectTwo from "../../assets/project-2.png";
import projetctThree from "../../assets/project-3.png";
import { motion } from "framer-motion";

interface Props {
  id: string;
}

export const Works: React.FC<Props> = ({ id }) => {
  return (
    <section id={id} className="w-[90%] md:w-full flex-col mt-12 md:mt-24 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <h1 className="font-black text-5xl md:text-7xl lg:text-8xl text-primary md:w-1/2">
          PROJETOS
        </h1>
        <p className="text-gray-600 text-sm md:text-base md:w-1/3 leading-relaxed mt-4 md:mt-0 md:text-right">
          Durante minha vida acadêmica e profissional tive a oportunidade de
          trabalhar com uma variedade de projetos que aprimoraram minhas habilidades.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-8">
        
        {/* Cocktail Genius */}
        <motion.div 
          className="flex flex-col group items-center"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <a
            className="flex flex-col items-center gap-4 text-xl font-bold text-gray-800 transition-colors group-hover:text-primary outline-none focus:ring-2 focus:ring-primary rounded-2xl p-2"
            target="_blank"
            href="https://cocktail-app2.vercel.app/"
            rel="noreferrer"
          >
            <div className="bg-gray-900 rounded-2xl w-full max-w-[280px] h-64 flex justify-center items-center shadow-lg overflow-hidden relative">
              <img src={projectOne} alt="Cocktail Genius" className="w-[80%] h-auto object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            Cocktail Genius
          </a>
        </motion.div>

        {/* Trivia */}
        <motion.div 
          className="flex flex-col group items-center md:pt-16"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <a
            className="flex flex-col items-center gap-4 text-xl font-bold text-gray-800 transition-colors group-hover:text-primary outline-none focus:ring-2 focus:ring-primary rounded-2xl p-2"
            target="_blank"
            href="https://trivia3.vercel.app/"
            rel="noreferrer"
          >
            <div className="bg-blueImageProject rounded-2xl w-full max-w-[280px] h-64 flex justify-center items-center shadow-lg overflow-hidden relative">
              <img src={projectTwo} alt="Trivia" className="w-[80%] h-auto object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            Trivia
          </a>
        </motion.div>

        {/* Buddio */}
        <motion.div 
          className="flex flex-col group items-center lg:pt-32"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <a
            className="flex flex-col items-center gap-4 text-xl font-bold text-gray-800 transition-colors group-hover:text-primary outline-none focus:ring-2 focus:ring-primary rounded-2xl p-2"
            target="_blank"
            href="https://buddio.vercel.app/"
            rel="noreferrer"
          >
            <div className="bg-gray-100 rounded-full w-64 h-64 flex justify-center items-center shadow-lg overflow-hidden relative">
              <img src={projetctThree} alt="Buddio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            Buddio
          </a>
        </motion.div>

      </div>
    </section>
  );
};
