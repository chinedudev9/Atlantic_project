"use client";
"use client";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    setStatus("");
  };

  // Open modal after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 46000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle submit
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_im4krda", // replace with your actual service ID
        "template_ormw97q", // replace with your template ID
          formRef.current!,
        "VobidQUZzou5CbQb_" // replace with your public key
      )
      .then(
        () => {
          setStatus("Thank you for the message! Our team will get back to you soon.✅ ");
          formRef.current?.reset();
        },
        (error) => {
         // console.error(error);
          setStatus("Failed to send. ❌");
        }
      );
  };

  return (
    <>
      {isOpen && (
        <motion.div 
        initial={{opacity: 1, y: -50}}
         animate={{opacity: 1, y: 1}}
         transition={{duration: 3}}
        className="fixed font-serif inset-0 bg-black/50 z-50 shadow-2xl flex items-center justify-center"
        >
          <div ref={modalRef} className="rounded-2xl border shadow-lg w-95 max-w-md p-6 mx-3 relative"
          style={{ backgroundColor: "var(--background)" }}>
            <button onClick={closeModal} className="absolute cursor-pointer items-center justify-center tops-2 right-2 pr-2 hover:text-gray-800 text-4xl">×</button>
            <h2 className="text-xl rounded-md text-blue-900 font-semibold mb-6 items-center justify-center">Send us a message</h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input type="text" name="name" placeholder="Name" required className="w-full border border-blue-900 outline-0 px-3 py-2 rounded" />
              <input type="email" name="email" placeholder="Email" required className="w-full border border-blue-900 px-3 py-2 outline-0 rounded" />
              <textarea name="message" placeholder="Your message..." rows={4} required className="w-full outline-0 border border-blue-900 px-3 py-2 rounded" />
              <button type="submit" className="bg-blue-900 w-full text-white font-semibold py-2 rounded-2xl hover:bg-blue-700">Submit</button>
              {status && <p className="text-sm mt-2">{status}</p>}
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ContactPopup;
