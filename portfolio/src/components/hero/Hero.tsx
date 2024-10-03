import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { Header } from "../index";
import myPhoto from "../../assets/myPhoto.png";
import myPhotoMid from "../../assets/myPhoto5.png";
import myPhotoLarge from "../../assets/myPhoto7.png";

interface Props {
    id: string;
}

export const Hero: React.FC<Props> = ({ id }) => {
    return (
        <div
            id={id}
            className="z-10 relative bg-bege w-11/12 mt-4 mb-8 h-128 flex justify-center md:h-192 md:w-full xl:h-208 2xl:h-176"
        >
            <Header />
            <h2 className="absolute text-black flex items-end  text-lg font-fjalla h-8 mt-24 mx-auto  font-bold md:text-3xl md:mt-32 lg:mt-48 2xl:hidden">
                OLÁ, EU SOU O LUCAS!
            </h2>
            <h1 className=" absolute font-anton text-7xl text-greenTitle mt-40  left-4 tracking-tighter md:text-9xl md:mt-72 lg:text-9xl lg:left-32 lg:mt-80 lg:top-6 xl:text-10xl xl:left-32 2xl:text-11xl 2xl:mt-64 2xl:top-14">
                FRONT
            </h1>
            <h1 className="z-20 absolute font-anton text-7xl  text-greenTitle mt-40 right-8 tracking-tighter md:text-9xl md:mt-72 md:mr-12 lg:text-9xl lg:right-40 lg:mt-80 lg:top-6 xl:text-10xl xl:right-36 2xl:text-11xl 2xl:mt-64 2xl:top-14 2xl:right-48">
                END
            </h1>
            <img
                className="z-10 absolute h-30 w-30 bottom-0 brightness-90 xl:mt-36 2xl:mt-3 block md:hidden lg:hidden"
                src={myPhoto}
                alt="Lucas"
            />
            <img
                className="z-10 absolute h-30 w-30 mt-44 brightness-90 md:bottom-0  hidden md:block lg:hidden"
                src={myPhotoMid}
                alt="Lucas"
            />
            <img
                className="z-10 absolute h-30 w-30 mt-72 brightness-90 lg:bottom-0 lg:mt-64 xl:mt-36 2xl:mt-3 hidden md:hidden lg:block"
                src={myPhotoLarge}
                alt="Lucas"
            />

            <p className="hidden text-[12px] font-silks bottom-64 right-14 text-black absolute lg:block lg:w-44 lg:text-center lg:bottom-48 xl:bottom-52">
                um desenvolvedor front-end criativo, com foco em criar
                interfaces cleans e interações dinâmicas.{" "}
            </p>
            <h1 className="z-20 absolute flex items-center font-anton text-7xl  text-greenTitle top-2/3 h-14 left-4 line tracking-tighter md:text-9xl lg:text-9xl lg:left-32 lg:top-3/4 xl:text-10xl 2xl:text-11xl 2xl:mt-8">
                DEVELOPER{" "}
                <span className="  text-5xl md:text-8xl lg:text-8xl md:ml-8 lg:ml-10 xl:ml-16 ">
                    &lt;/&gt;
                </span>
            </h1>

            <div className=" z-10 absolute flex bottom-2 right-2     ">
                <a href="https://www.instagram.com/el.lucasl/" target="_blank">
                    <span id="instagram-icon" className="icon">
                        <IoLogoInstagram color="black" size={48} />
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/lucas-ara%C3%BAjo-4b3316226/"
                    target="_blank"
                >
                    <span id="linkedin-icon" className="icon">
                        <IoLogoLinkedin color="black" size={48} />
                    </span>
                </a>
            </div>

            <div className="hidden md:block absolute z-60 top-11 left-8 font-sans text-4xl ">
                <h2 className="text-black font-satisfy">LUCAS</h2>
            </div>
        </div>
    );
};
