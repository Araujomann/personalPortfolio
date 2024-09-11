export const Header = () => {
  return (
    <>
      <ul
        className=" z-20 absolute flex place-content-center gap-4 bg-white mx-auto w-10/12 py-3 px-4 rounded-full mt-8 text-black
    text-md font-sans md:w-6/12 md:h-16 md:text-xl md:gap-4 md:pt-5 md:px-6 lg:gap-10 2xl:gap-20"
      >
        <li className="hover:cursor-pointer">
          <a
            className="text-black visited:text-black no-underline hover:text-black"
            href="#works"
          >
            projetos
          </a>
        </li>
        <li className="hover:cursor-pointer">
          <a
            className="text-black visited:text-black no-underline hover:text-black"
            href="#about"
          >
            sobre
          </a>
        </li>
        <li className="hover:cursor-pointer">
          <a
            className=" text-black visited:text-black no-underline hover:text-black"
            href="#testemonial"
          >
            depoimentos
          </a>
        </li>
        <li className="hover:cursor-pointer">
          <a
            className="text-black visited:text-black no-underline hover:text-black"
            href="#contact"
          >
            contato
          </a>
        </li>
      </ul>
    </>
  );
};
