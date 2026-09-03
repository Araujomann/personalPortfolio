import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { Header } from "../index";
import { motion } from "framer-motion";

interface Props {
  id: string;
}

export const Hero: React.FC<Props> = ({ id }) => {
  const handleAsk = (question: string) => {
    // For now, just alert; later can be connected to a real backend or LLM mock
    alert(`Pergunta: ${question}`);
  };

  return (
    <section
      id={id}
      className="relative flex flex-col items-center justify-center w-full min-h-[80vh] md:min-h-screen pt-24 pb-12 overflow-hidden bg-[rgb(var(--bg))]"
    >
      <Header />

      <div className="z-10 relative flex flex-col items-center justify-center w-full max-w-5xl px-4 mt-8 md:mt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2 text-xs font-medium tracking-wider uppercase text-[rgb(var(--accent))]"
        >
          DISPONÍVEL · aberto a trabalhos freelance
        </motion.div>

        {/* Terminal greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-4"
        >
          <span className="text-[rgb(var(--text-dim))] font-mono">
            $ hi, I'm{" "}
          </span>
          <span className="font-black text-[rgb(var(--text))] text-5xl md:text-6xl lg:text-7xl">
            Lucas
          </span>
          <br />
          <span className="text-[rgb(var(--text-dim))] font-mono text-sm">
            Araujo
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-md mx-auto mb-6 text-center text-[rgb(var(--text-dim))] text-sm md:text-base"
        >
          Desenvolvedor front-end criativo, focado em criar interfaces limpas e interações dinâmicas.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex gap-4 mb-6"
        >
          <a
            href="#contact"
            className="flex items-center justify-center px-6 py-3 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text))] hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--on-accent))] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] font-medium"
          >
            get in touch
          </a>
          <a
            href="#works"
            className="flex items-center justify-center px-6 py-3 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text-dim))] hover:bg-[rgb(var(--accent-dim))] hover:text-[rgb(var(--text))] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] font-medium"
          >
            ls projects/
          </a>
        </motion.div>

        {/* Ask-me.sh terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative w-full max-w-2xl mb-6"
        >
          <div className="p-4 bg-[rgb(var(--surface-2))] rounded-xl border border-[rgb(var(--border))] font-mono text-[rgb(var(--text))]">
            <div className="mb-2">
              <span className="text-[rgb(var(--text-dim))]">~/ask-me.sh </span>
              <span className="font-mono text-[rgb(var(--accent))] animate-blink">_</span>
            </div>
            <div className="space-y-2">
              <div
                onClick={() => handleAsk("What is your stack?")}
                className="p-2 rounded hover:bg-[rgb(var(--border))] cursor-pointer"
              >
                $ what is your stack?
              </div>
              <div
                onClick={() => handleAsk("Are you available for hire?")}
                className="p-2 rounded hover:bg-[rgb(var(--border))] cursor-pointer"
              >
                $ are you available for hire?
              </div>
              <div
                onClick={() => handleAsk("Tell me about a recent project")}
                className="p-2 rounded hover:bg-[rgb(var(--border))] cursor-pointer"
              >
                $ tell me about a recent project
              </div>
              <div
                onClick={() => handleAsk("How do you self-host?")}
                className="p-2 rounded hover:bg-[rgb(var(--border))] cursor-pointer"
              >
                $ how do you self-host?
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social links at bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute bottom-6 right-6 flex gap-4 z-20"
        >
          <a
            href="https://www.instagram.com/el.lucasl/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[rgb(var(--surface-2))] hover:bg-[rgb(var(--border))] text-[rgb(var(--text))] transition-colors rounded-full shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
            aria-label="Instagram"
          >
            <IoLogoInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-ara%C3%BAjo-4b3316226/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[rgb(var(--surface-2))] hover:bg-[rgb(var(--border))] text-[rgb(var(--text))] transition-colors rounded-full shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
