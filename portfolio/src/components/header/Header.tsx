export const Header = () => {
    return (
        <>
            <ul
                className=" z-20 absolute flex place-content-center gap-6 bg-white mx-auto w-10/12 py-3 px-4 rounded-full mt-8 text-black
    text-md font-sans md:w-6/12 md:h-16 md:text-xl md:gap-4 md:pt-5 md:px-6 2xl:gap-12"
            >
                <li className="hover:cursor-pointer">
                    <a
                        className="visited:text-black no-underlink hover:text-black"
                        href="#works"
                    >
                        WORKS
                    </a>
                </li>
                <li className="hover:cursor-pointer">
                    <a
                        className="visited:text-black no-underlink hover:text-black"
                        href="#about"
                    >
                        ABOUT
                    </a>
                </li>
                <li className="hover:cursor-pointer">
                    <a
                        className="visited:text-black no-underlink hover:text-black"
                        href="#testemonial"
                    >
                        TESTEMONIAL
                    </a>
                </li>
                <li className="hover:cursor-pointer">
                    <a
                        className="visited:text-black no-underlink hover:text-black"
                        href="#contact"
                    >
                        CONTACT
                    </a>
                </li>
            </ul>
        </>
    );
};
