"use client";
import { ReactNode, createContext, useState } from "react";

interface ModalContextProps {
  showModal: boolean;
  setShowModal: (boolean: boolean) => void;
}

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextProps);

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  ``;
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};
