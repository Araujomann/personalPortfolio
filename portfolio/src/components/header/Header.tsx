export const Header: React.FC = () => {
  return (
    <nav className="z-50 fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-[rgb(var(--surface))]/80 backdrop-blur-sm border border-[rgb(var(--border))] px-6 py-3 rounded-full shadow-sm">
      <ul className="flex items-center justify-center gap-4 text-sm font-medium text-[rgb(var(--text-dim))] md:text-base md:gap-8 min-w-max">
        <li>
          <a
            className="hover:text-[rgb(var(--accent))] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] rounded"
            href="#works"
          >
            ~/work
          </a>
        </li>
        <li>
          <a
            className="hover:text-[rgb(var(--accent))] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] rounded"
            href="#about"
          >
            ~/about
          </a>
        </li>
        <li>
          <a
            className="hover:text-[rgb(var(--accent))] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] rounded"
            href="#recommendations"
          >
            ~/peers
          </a>
        </li>
        <li>
          <a
            className="hover:text-[rgb(var(--accent))] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] rounded"
            href="#contact"
          >
            ~/contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
