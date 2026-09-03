import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const SentModal: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-xl rounded-2xl md:w-full"
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <CheckCircle2 className="w-16 h-16 text-primary" />
                  <Dialog.Title className="text-2xl font-bold text-gray-900 tracking-tight">
                    Sucesso!
                  </Dialog.Title>
                  <Dialog.Description className="text-gray-600 text-sm md:text-base">
                    Sua mensagem foi enviada. Entrarei em contato em breve!
                  </Dialog.Description>
                  <button
                    onClick={onClose}
                    className="mt-4 inline-flex justify-center rounded-xl px-8 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};