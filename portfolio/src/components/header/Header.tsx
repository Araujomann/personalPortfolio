export const Header: React.FC = () => {
  return (
    <nav className="z-50 fixed top-6 w-[90%] md:w-auto left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-full shadow-sm">
      <ul className="flex items-center justify-center gap-4 text-sm font-medium text-gray-700 md:text-base md:gap-8 min-w-max">
        <li>
          <a
            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            href="#works"
          >
            projetos
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            href="#about"
          >
            sobre
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            href="#testimonial"
          >
            depoimentos
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            href="#contact"
          >
            contato
          </a>
        </li>
      </ul>
    </nav>
  );
};
