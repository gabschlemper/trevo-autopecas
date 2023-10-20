"use client";
import { useContext, useState } from "react";
import Form from "./Form";
import Button from "./Button";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ModalContext } from "../../../public/contexts/ModalContext";

export default function Modal() {
  const { showModal, setShowModal } = useContext(ModalContext);

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-non bg-black bg-opacity-80">
            <div className="relative w-full md:min-w-[600px] my-6 mx-4 md:mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none ">
                <div className="flex items-center justify-between px-8 py-6 shadow-2xl">
                  <p className="font-anton uppercase text-3xl text-terciary">
                    Entre em contato!
                  </p>
                  <Button
                    className="text-terciary"
                    onClick={() => setShowModal(false)}
                  >
                    <AiOutlineCloseCircle size={26} />
                  </Button>
                </div>
                <div className="w-full px-8 py-6 m-auto">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
