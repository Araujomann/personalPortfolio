import React from "react";
interface Props {
  onClose: () => void;
}
export const SentModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="z-30 fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-6 rounded-sm shadow-lg text-center w-5/6">
        <h2 className="text-2xl text-black font-semibold mb-4">
          Formulário enviado com sucesso!
        </h2>

        <p className="text-gray-600 mb-6">
          Obrigado por enviar suas informações. Nós entraremos em contato em
          breve.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-greenTitle text-white rounded outline-none"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
