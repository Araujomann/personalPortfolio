import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { Header } from "../index";
import myPhoto from "../../assets/myPhoto.png";

interface Props {
  id: string;
}

export const Hero: React.FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      className="z-10 relative bg-bege w-11/12 mt-4 mb-8 h-128 flex justify-center md:h-192 md:w-full xl:h-208 2xl:h-256"
    >
      <Header />
      <h2 className="absolute text-black flex items-end  text-lg font-fjalla h-8 mt-24 mx-auto  font-bold md:text-3xl md:mt-32 xl:mt-28 ">
        OLÁ, EU SOU O LUCAS!
      </h2>
      <h1 className=" absolute font-anton text-7xl text-greenTitle mt-40  left-4 tracking-tighter md:text-9xl md:mt-72 xl:left-8 2xl:text-11xl">
        FRONT
      </h1>
      <h1 className="z-20 absolute font-anton text-7xl  text-greenTitle mt-40 right-8 tracking-tighter md:text-9xl md:mt-72 xl:right-12 2xl:text-11xl 2xl:right-28">
        END
      </h1>
      <img
        className="z-10 absolute h-30 w-30 mt-44 brightness-90 xl:mt-36 2xl:mt-3 "
        src={myPhoto}
      />
      <h1 className="z-20 absolute flex items-center font-anton text-7xl  text-greenTitle top-2/3 h-14 left-4 line tracking-tighter md:text-9xl 2xl:text-11xl">
        DEVELOPER <span className=" xl:ml-16 text-5xl ">&lt;/&gt;</span>
      </h1>

      <div className="z-10 absolute bottom-2 right-2 md:top-8 md:right-6 flex md:flex-col md:items-center">
        <span id="instagram-icon" className="icon">
          <IoLogoInstagram color="black" size={40} />
        </span>
        <span id="linkedin-icon" className="icon">
          <IoLogoLinkedin color="black" size={40} />
        </span>
      </div>

      <div className="hidden md:block absolute z-60 top-11 left-8 font-sans text-4xl ">
        <h2 className="text-black font-satisfy">LUCAS</h2>
      </div>
    </div>
  );
};
