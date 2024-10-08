import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { SentModal } from "../sentModal";

interface Props {
  id: string;
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
        formData,
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
      className=" relative mx-auto flex flex-col  place-content-center w-full bg-gradient-to-t border gap-8 p-4 md:h-244 2xl:h-176 2xl:pb-11"
    >
      <div className="flex flex-col font-sans md:mb-6 2xl:mt-8">
        <h1 className="text-black text-4xl font-bold md:text-6xl 2xl:text-7xl">
          Entre em contato
        </h1>
        <p className="text-[#6d6d6d]  text-xs font-bold md:text-2xl">
          Você pode nos chamar a qualquer momento
        </p>
      </div>
      <div>
        <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <div className="bg-white border p-2 rounded-full md:w-1/3 md:h-16 2xl:h-12">
              <input
                required
                placeholder="John"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white w-10/12 outline-none text-black ml-2 text-md md:h-full"
              />
            </div>
            <div className="bg-white border p-2 rounded-full md:w-1/3 md:h-16 2xl:h-12">
              <input
                required
                placeholder="Doe"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white w-10/12 outline-none text-black ml-2 text-md md:h-full "
              />
            </div>
          </div>

          <div className="flex flex-col p-2 border rounded-full bg-white md:w-2/3 md:h-16 2xl:h-12">
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@gmail.com"
              className="bg-white outline-none w-10/12 text-black ml-2 text-md md:h-full"
            />
          </div>
          <div className="flex flex-col w-full p-2 border rounded-full bg-white md:w-1/3 md:h-16 2xl:h-12">
            <input
              required
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(99) 99999-9999"
              className="bg-white w-10/12 text-black outline-none ml-2 text-md md:h-full"
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
              className="w-full p-2 bg-white text-black outline-none text-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="fancy rounded-full bg-blueSubmit text-white py-3 px-4 relative overflow-hidden border-none h2 md:h-16 md:mt-6 2xl:mt-0 2xl:"
          >
            <span className="relative z-10 md:text-xl">Submit</span>
          </button>
        </form>
      </div>
      {isModalVisible && <SentModal onClose={handleClose} />}
    </div>
  );
};
