"use client";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import React, { useState } from "react";
import PopUp from "@/components/PopUp";

function HeroSecond() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="contact"
    className='relative -mt-2 z-30 md:h-[45vh] scroll-mt-50 bg-blue-200 rounded-t-xl pt-15 pb-10 py:10 md:py-15 px-4 md:px-8 flex flex-col md:flex-row md:space-x-25 space-y-20 md:space-y-0 items-center justify-between flex-wrap'>

  <div className="flex-1 flex flex-col items-center justify-center text-center">
    <IoCallOutline size={30} />
    <h2 style={{ color: "var(--accent2)" }} className="font-bold text-xl mb-4 mt-3">Enquiries</h2>
    <h2 style={{ color: "var(--secondary)" }} className="text-xl md:text-2xl font-extrabold cursor-pointer">+234 (0)9044299624</h2>
  </div>


  <div className="flex-1 flex flex-col items-center justify-center text-center">
    <TfiEmail size={30} />
    <h2 style={{ color: "var(--accent2)" }} className="font-bold text-xl mb-4 mt-3">Enquiries</h2>
    <h2 style={{ color: "var(--secondary)" }} className="text-xl md:text-2xl font-extrabold cursor-pointer">info@atlanticfenders.com</h2>
  </div>

  <div className="flex-1 flex flex-col items-center justify-center text-center">
    <TfiHeadphoneAlt size={30} />
    <h2 style={{ color: "var(--accent2)" }} className="font-bold text-xl mb-4 mt-3">Enquiries</h2>
    <h2
      className="md:text-xl text-sm text-white font-bold cursor-pointer bg-red-700 hover:bg-red-900 rounded-lg px-3 py-1 
      transition duration-300 ease-in-out"
      onClick={() => setIsOpen(true)}
    >
      GET A QUOTE
    </h2>
    <PopUp isOpen={isOpen} onClose={() => setIsOpen(false)} />
  </div>
</div>

  )
}


export default HeroSecond