import { motion } from "framer-motion";

interface Props {
  id: string;
}

export const Works: React.FC<Props> = ({ id }) => {
  return (
    <section id={id} className="w-[90%] md:w-full mb-24">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-black text-[rgb(var(--accent))] text-5xl md:text-6xl lg:text-7xl">
          02 FEATURED WORK
        </h1>
        <p className="mt-2 text-[rgb(var(--text-dim))] text-sm">
          Selected projects ~/projects/featured
        </p>
      </div>

      {/* Projects list */}
      <div className="space-y-6">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-start gap-4">
            <span className="font-mono text-[rgb(var(--accent))] text-base">
              [01]
            </span>
            <div>
              <h2 className="font-bold text-[rgb(var(--text))] text-lg">
                Cocktail Genius
              </h2>
              <p className="mt-1 text-[rgb(var(--text-dim))] text-sm">
                Crypto social trading platform with sub 100ms WebSocket price updates, live DMs, and bonding curve token trading. Built full-stack with React and Node.js.
              </p>
              <div className="mt-2 flex items-center gap-2">
                <a
                  href="https://cocktail-app2.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[rgb(var(--accent))] font-mono text-sm hover:underline"
                >
                  ↗ live
                </a>
                <span className="text-[rgb(var(--text-dim))] text-xs">
                  2025 · Fullstack Engineer
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-start gap-4">
            <span className="font-mono text-[rgb(var(--accent))] text-base">
              [02]
            </span>
            <div>
              <h2 className="font-bold text-[rgb(var(--text))] text-lg">
                FudbalLive
              </h2>
              <p className="mt-1 text-[rgb(var(--text-dim))] text-sm">
                Real time social football prediction app for friend groups. Led 3 engineers from scratch to live on both the App Store and Google Play.
              </p>
              <div className="mt-2 flex items-center gap-2">
                <a
                  href="https://trivia3.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[rgb(var(--accent))] font-mono text-sm hover:underline"
                >
                  ↗ live
                </a>
                <span className="text-[rgb(var(--text-dim))] text-xs">
                  2023 · Frontend Lead
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-start gap-4">
            <span className="font-mono text-[rgb(var(--accent))] text-base">
              [03]
            </span>
            <div>
              <h2 className="font-bold text-[rgb(var(--text))] text-lg">
                Skylead LinkedIn Automation
              </h2>
              <p className="mt-1 text-[rgb(var(--text-dim))] text-sm">
                Reduced whitelabel build time from hours to minutes on Skylead, a LinkedIn automation SaaS with CSS variables, dark mode, and React Flow optimisations.
              </p>
              <div className="mt-2 flex items-center gap-2">
                <a
                  href="https://buddio.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[rgb(var(--accent))] font-mono text-sm hover:underline"
                >
                  ↗ live
                </a>
                <span className="text-[rgb(var(--text-dim))] text-xs">
                  2021 · Frontend Developer
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-[rgb(var(--border))]">
        <p className="text-[rgb(var(--text-dim))] text-sm font-mono">
          $ ls -al /projects // list all projects
        </p>
        <div className="mt-2">
          <a
            href="#works"
            className="flex items-center gap-2 text-[rgb(var(--accent))] font-mono text-sm hover:underline"
          >
            view all
          </a>
        </div>
      </div>
    </section>
  );
};