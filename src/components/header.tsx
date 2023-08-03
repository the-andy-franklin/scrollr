"use client";
import React, { useEffect } from "react";
import Modal from "react-modal";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [show, setShow] = React.useState<"login" | "signup">("login");

  useEffect(() => {
    Modal.setAppElement("#app");
  }, []);

  const openLogin = () => {
    console.log("login");
    setShow("login");
    setIsOpen(true);
  };

  const openSignup = () => {
    console.log("signup");
    setShow("signup");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <header className="p-4 flex justify-between items-center border-b border-black">
      <h1 className="text-2xl font-bold">Scrollr</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={openLogin}
          className="bg-white text-blue-500 px-4 py-2 rounded active:bg-gray-200"
        >
          Login
        </button>
        <button
          onClick={openSignup}
          className="bg-white text-blue-500 px-4 py-2 rounded active:bg-gray-200"
        >
          Sign Up
        </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              backgroundColor: "rgb(31, 41, 55)",
            },
          }}
        >
          {show === "login" && <div>Login</div>}
          {show === "signup" && <div>Signup</div>}
        </Modal>
      </div>
    </header>
  );
}
