"use client";

import React, { useState, useEffect } from "react";
import { FaShip, FaUserTie, FaCogs, FaRegCompass, FaTools } from "react-icons/fa";
import { GiCargoShip } from "react-icons/gi";

const services = [
  {
    title: "Ship-to-Ship Transfer",
    description: "Our STS services ensure seamless supply chain operations...",
    backgroundImage: "/images/stsimg.jpg",
    icon: <FaShip size={64} color="gray" className="text-white" />,
  },
  {
    title: "Manning",
    description: "Our certified POACs bring over a decade of mooring expertise...",
    backgroundImage: "/vessel/spmops.jpg",
    icon: <FaUserTie size={64} color="gray" className="text-white" />,
  },
  {
    title: "Marine Services",
    description: "We offer a range of marine services tailored to client needs...",
    backgroundImage: "/vessel/AFSS_catherine2.jpg" ,
    icon: <GiCargoShip size={64} color="gray" className="text-white" />,
  },
  {
    title: "Turnkey Equipment Solutions",
    description: "We provide various equipment solutions, including maintenance...",
    backgroundImage: "/equipment/fender.jpg",
    icon: <FaCogs size={64} color="gray" className="text-white" />,
  },
  {
    title: "Marine Consultancy",
    description: "We deliver Optimoor and Compatibility Services...",
    backgroundImage: "/vessel/vessel.jpg",
    icon: <FaRegCompass size={64} color="gray" className="text-white" />,
  },
  {
    title: "Technical Services",
    description: "Our team ensures safe operation of vessels and equipment...",
    backgroundImage: "/vessel/catherine3.jpg",
    icon: <FaTools size={64} color="gray" className="text-white" />,
  },
];

function ServiceComponent() {
  const [currentService, setCurrentService] = useState(0);

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up
  }, []);

  const selectedService = services[currentService];

  return (
    <div
    className="flex flex-col h-[70vh] items-center py-10 px-4 relative z-20 bg-center bg-contain transition-all duration-1000"
      style={{ backgroundImage: `url(${selectedService.backgroundImage})` }}
    >
      <div className="absolute pt-10 inset-0 bg-black/50 z-0">
      <div className="flex items-center  justify-center mb-10">
               <hr className="w-10 md:w-30 border-red-500" />
               <h2 className="mx-2 text-gray-200 text-2xl font-bold">Services</h2>
               <hr className="w-10 md:w-30 border-gray-600" />
        </div>
        {/* Service Titles */}
        <div className="text-center flex flex-wrap justify-center text-balance gap-2 md:gap-4 mb-10">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setCurrentService(index)}
              className={`px-4 py-2 rounded-full text-xs md:text-xl font-medium transition ${
                currentService === index
                  ? "bg-blue-900 text-gray-200"
                  : " text-gray-200 hover:underline"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Icon + Description */}
        <div className="flex flex-col items-center text-center gap-6">
          <div>{selectedService.icon}</div>
          <p className="text-white max-w-3xl px-2">{selectedService.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceComponent;

