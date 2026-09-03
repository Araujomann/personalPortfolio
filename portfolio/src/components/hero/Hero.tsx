import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { Header } from "../index";
import { motion } from "framer-motion";
import myPhoto from "../../assets/myPhotoSquare.png";
import myPhotoMid from "../../assets/myPhotoRect.png";
import myPhotoLarge from "../../assets/myphoto11almost.png";

interface Props {
  id: string;
}

export const Hero: React.FC<Props> = ({ id }) => {
  return (
    <section
      id={id}
      className="relative flex flex-col items-center justify-center w-full min-h-[80vh] md:min-h-screen pt-24 pb-12 overflow-hidden bg-background"
    >
      <Header />
      
      <div className="z-10 relative flex flex-col items-center justify-center w-full max-w-5xl px-4 mt-8 md:mt-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-gray-500 font-medium tracking-wide uppercase text-sm md:text-base">
            Olá, eu sou o Lucas
          </span>
          <h1 className="mt-4 font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-primary leading-none">
            FRONT
            <br />
            END
          </h1>
          <h1 className="flex items-center justify-center gap-4 mt-2 font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-primary leading-none">
            DEVELOPER <span className="text-4xl md:text-7xl lg:text-8xl">&lt;/&gt;</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-md mx-auto mt-8 text-center text-gray-600 text-sm md:text-base"
        >
          Um desenvolvedor front-end criativo, com foco em criar interfaces limpas e interações dinâmicas.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative flex justify-center w-full mt-12 md:mt-16"
      >
        <picture>
          <source media="(min-width: 1024px)" srcSet={myPhotoLarge} />
          <source media="(min-width: 768px)" srcSet={myPhotoMid} />
          <img
            src={myPhoto}
            alt="Lucas"
            className="w-56 h-auto md:w-72 lg:w-96 rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </picture>
      </motion.div>

      <div className="absolute bottom-6 right-6 flex gap-4 z-20">
        <a
          href="https://www.instagram.com/el.lucasl/"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-white hover:bg-gray-50 text-gray-800 transition-colors rounded-full shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Instagram"
        >
          <IoLogoInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-ara%C3%BAjo-4b3316226/"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-white hover:bg-gray-50 text-gray-800 transition-colors rounded-full shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="LinkedIn"
        >
          <IoLogoLinkedin size={24} />
        </a>
      </div>
    </section>
  );
};
