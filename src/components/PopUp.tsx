import React from "react";
import emailjs from "emailjs-com";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_jy7ed7a", // Replace with your EmailJS service ID
        "template_k05y04r", // Replace with your EmailJS template ID
        formData,
        "VobidQUZzou5CbQb_" // Replace with your EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        onClose(); // Close the modal after success
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Try again.");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-opacity-40 flex items-center justify-center px-3">
      <div
        className="relative bg-white md:mt-25 p-6 rounded-xl w-full max-w-md shadow-lg"
        style={{ backgroundColor: "var(--background)" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-2 cursor-pointer right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        <h1 className="text-xl font-bold mb-2 text-center text-blue-900">
          Message Operations Team
        </h1>
        <h3
          className="font-bold mb-4 text-center"
          style={{ color: "var(--secondary)" }}
        >
          Or Call +234(0) 9044299624
        </h3>

        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-2 outline-0 border border-gray-300 rounded"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-2 border outline-0 border-gray-300 rounded"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-2 outline-0 border border-gray-300 rounded"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="p-2 border outline-0 border-gray-300 rounded"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
