import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { SentModal } from "../sentModal";
import { ArrowUpRight } from "lucide-react";

interface Props {
    id: string;
    handleLinkClick?: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
}

export const Email: React.FC<Props> = ({ id }) => {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phone: "", message: "",
    });

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://portfolio-email-backend.vercel.app/send-email",
                formData
            );
            if (response.status === 200) {
                setIsModalVisible(true);
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
            }
        } catch {
            alert("Falha ao enviar e-mail. Tente novamente mais tarde.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => setIsModalVisible(false);

    return (
        <section id={id} className="w-[90%] md:w-full bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 max-w-5xl mx-auto">
            <div className="flex flex-col mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-4">
                    <h1 className="font-black text-primary text-5xl md:text-6xl lg:text-7xl w-full leading-none">TEM UMA IDEIA?</h1>
                    <p className="text-gray-500 font-medium text-sm md:text-base text-left md:text-right w-full md:w-1/3 leading-snug">Adoraria ouvi-la, vamos conversar?</p>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-between mt-8 gap-8">
                    <a href="#hero" className="group flex flex-col justify-between w-28 h-28 p-4 rounded-3xl border border-gray-200 hover:border-primary transition-colors items-end shadow-sm hover:shadow">
                        <ArrowUpRight className="text-gray-400 group-hover:text-primary transition-colors w-8 h-8" />
                        <span className="text-[10px] text-gray-400 font-medium text-right uppercase tracking-wider group-hover:text-primary transition-colors w-full">minhas<br/>redes</span>
                    </a>
                    <h1 className="font-black text-primary text-5xl md:text-6xl lg:text-7xl w-full text-left md:text-right leading-none">PROJETO</h1>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <input id="firstName" required placeholder="Nome" type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm w-full font-medium placeholder-gray-400" />
                    <input id="lastName" required placeholder="Sobrenome" type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm w-full font-medium placeholder-gray-400" />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <input id="email" required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johndoe@gmail.com" className="bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm w-full font-medium placeholder-gray-400 md:w-2/3" />
                    <input id="phone" required type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="(99) 99999-9999" className="bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm w-full font-medium placeholder-gray-400 md:w-1/3" />
                </div>
                <textarea id="message" required cols={20} rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Como posso te ajudar?" className="bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm w-full font-medium placeholder-gray-400 resize-none"></textarea>
                <button type="submit" disabled={isLoading} className="mt-2 w-full md:w-fit self-end flex justify-center py-4 px-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed tracking-wider">
                    {isLoading ? "ENVIANDO..." : "ENVIAR"}
                </button>
            </form>
            <SentModal open={isModalVisible} onClose={handleClose} />
        </section>
    );
};
