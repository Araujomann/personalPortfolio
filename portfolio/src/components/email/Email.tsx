import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { SentModal } from "../sentModal";
import { GoArrowUpRight } from "react-icons/go";

interface Props {
    id: string;
    handleLinkClick?: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
}

export const Email: React.FC<Props> = ({ id }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://portfolio-email-backend.vercel.app/send-email",
                formData
            );
            if (response.status === 200) {
                setIsModalVisible(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            }
        } catch (err) {
            alert("Failed to send Email. Please try again later.");
            console.log(err);
        }
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };

    return (
        <div
            id={id}
            className=" relative mx-auto flex flex-col  w-full bg-gradient-to-t border p-4 md:h-244"
        >
            <div className="flex flex-col relative xl:w-11/12 xl:mx-auto 2xl:w-10/12 2xl:mx-auto">
                <div className="flex justify-between">
                    <h1 className="relative font-anton text-greenTitle text-4xl  md:text-6xl md:ml-30 lg:text-7xl 2xl:text-7xl ">
                        TEM UMA IDEIA?
                    </h1>
                    <p className=" flex place-items-center text-black font-silks text-[8px] text-right tracking-tighter w-28 top-2 right-0 md:text-[12px] md:w-40 md:top-1 xl:right-10 2xl:top-4 2xl:w-60">
                        Adoraria ouví-la, vamos conversar?
                    </p>
                </div>

                <div className="relative flex justify-between">
                    <a
                        href="#hero"
                        className="flex my-auto w-24 h-12 p-4 left-2 items-center justify-center rounded-full border-solid border border-gray-800 hover:cursor-pointer md:w-36  xl:w-48 xl:left-20 xl:h-16  2xl:left-20 2xl:h-16"
                    >
                        <div className="relative flex flex-col items-end left-3 md:ml-5  border-black w-12  2xl:ml-12 2xl:py-12">
                            <span>
                                <GoArrowUpRight color="black" />
                            </span>
                            <p className="text-black w-20 font-silks tracking-tighter text-[8px] text-end md:text-[12px] md:w-24 2xl:text-[14px] 2xl:w-32">
                                minhas redes
                            </p>
                        </div>
                    </a>
                    <h1 className="relative text-right font-anton text-greenTitle text-4xl md:text-6xl lg:text-7xl 2xl:text-7xl">
                        CONTE-ME SOBRE ISSO
                    </h1>
                </div>
            </div>
            <div className="flex flex-col font-sans md:mb-6">
                <h1 className="text-black text-4xl  font-bold md:text-6xl 2xl:text-7xl">
                    Entre em contato
                </h1>
                <p className="text-[#6d6d6d]  text-xs font-bold md:text-2xl">
                    Você pode nos chamar a qualquer momento
                </p>
            </div>
            <div>
                <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                    <div className="flex gap-2">
                        <div className="bg-white border p-2 rounded-full md:w-1/3 md:h-16 2xl:h-12">
                            <input
                                required
                                placeholder="John"
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="bg-white w-10/12  placeholderAnimation1 outline-none text-sm font-silks tracking-tighter text-black ml-2 text-md md:h-full"
                            />
                        </div>
                        <div className="bg-white border p-2 rounded-full  font-silks tracking-tighter md:w-1/3 md:h-16 2xl:h-12">
                            <input
                                required
                                placeholder="Doe"
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="bg-white w-10/12 plaholder:placeholderAnimation1 outline-none text-sm text-black ml-2 text-md md:h-full "
                            />
                        </div>
                    </div>

                    <div className="flex flex-col p-2 border rounded-full  font-silks tracking-tighter  bg-white md:w-2/3 md:h-16 2xl:h-12">
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="johndoe@gmail.com"
                            className="bg-white outline-none placeholderAnimation2 w-10/12 text-sm text-black ml-2 text-md md:h-full"
                        />
                    </div>
                    <div className="flex flex-col w-full p-2 border font-silks text-sm tracking-tighter rounded-full bg-white md:w-1/3 md:h-16 2xl:h-12">
                        <input
                            required
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(99) 99999-9999"
                            className="bg-white w-10/12 placeholderAnimation2 text-black outline-none ml-2 text-sm md:h-full"
                        />
                    </div>
                    <div className="p-2 border rounded-2xl bg-white ">
                        <textarea
                            required
                            cols={20}
                            rows={10}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Como podemos lhe ajudar?"
                            className="w-full p-2 bg-white placeholderAnimation3 text-black font-silks tracking-tighter outline-none text-sm"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="fancy flex place-items-center rounded-full bg-greenTitle mt-4 text-white py-3 px-4 relative overflow-hidden border-none md:h-16 "
                    >
                        <span className="relative z-10 ml-10 md:text-xl">
                            ENVIAR
                        </span>
                    </button>
                </form>
            </div>
            {isModalVisible && <SentModal onClose={handleClose} />}
        </div>
    );
};
