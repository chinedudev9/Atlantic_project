"use client";
import React, { useState } from "react";
import { FaUserTie, FaUsers, FaHandshake } from "react-icons/fa";
import { GiJusticeStar } from "react-icons/gi";
import { MdSupportAgent, MdHealthAndSafety } from "react-icons/md";
import Link from "next/link";

function HeroThird() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <div
      className="md:py-10 pb-10 px-6 md:px-20 relative z-30"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="w-full md:flex gap-6 items-start">
        {/* Left Column - Core Values */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-center pt-10 md:pt-0 mb-">
            <hr className="w-10 md:w-20 border-red-600" />
            <h2 className="mx-2 md:mx-4 text-2xl md:text-3xl font-bold text-blue-900">
              Core <span className="text-red-600">Values</span>
            </h2>
            <hr className="w-10 md:w-20 border-gray-600" />
          </div>
          <div className="space-y-2 px-2 py-6 justify-center rounded-full shadow-2xl shadow-gray-400 items-center">
            {[
              {
                icon: <FaUserTie size={30} />,
                title: "Professionalism",
                desc: "We maintain high standards of work quality and conduct, emphasizing continuous learning and accountability across all levels of the organization.",
              },
              {
                icon: <FaHandshake size={30} />,
                title: "Respect",
                desc: "We foster a culture of mutual regard, where every individual, employee, client or partner is valued, heard and treated with dignity.",
              },
              {
                icon: <GiJusticeStar size={40} />,
                title: "Integrity",
                desc: "We uphold transparancy and ethical decision-making in everything we do, ensuring that our action reflect honesty and strong moral principles.",
              },
              {
                icon: <FaUsers size={40} />,
                title: "Team Work",
                desc: "We foster a collaborative and inclusive environment, where respect and diverse perspectives are valued, and collective achievements are recognised.",
              },
              {
                icon: <MdSupportAgent size={40} />,
                title: "Customer Focus",
                desc: "We are commited to understanding and exceeding our customers' expectations, driving every department to prioritize exceptional customer experiences.",
              },
              {
                icon: <MdHealthAndSafety size={40} />,
                title: "Health & Safety",
                desc: "We enforce rigorous health and safety protocols, promote employee wellbeing, and cultivate a culture where safety everyone's responsibility.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                {item.icon}
                <div>
                  <h3 className=" font-bold text-blue-900">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - About Us */}
        <div className="w-full md:w-1/2 space-y-6 rounded-xl">
          <div className="flex items-center justify-center pt-10 md:pt-0">
            <hr className="w-10 md:w-20 border-red-500" />
            <h2 className="mx-2 md:mx-4 text-2xl md:text-3xl font-bold text-blue-900">
              About <span className="text-red-600">Us</span>
            </h2>
            <hr className="w-10 md:w-20 border-gray-600" />
          </div>

          {/* Tabs */}
          <div className="flex font-semibold md:text-xl items-center md:ml-15 ml-2 space-x-10 border-b border-gray-300 pb-2">
            <button
              onClick={() => setActiveTab("company")}
              className={`font-semibold text-xl cursor-pointer transition ${
                activeTab === "company"
                  ? "text-blue-800 border-b-2 border-gray-600"
                  : "hover:text-blue-500"
              }`}
            >
              Company
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`text-lg transition cursor-pointer ${
                activeTab === "certificates"
                  ? "text-blue-800 border-b-2 border-gray-600"
                  : "hover:text-blue-400"
              }`}
            >
              Certificates
            </button>
          </div>

          {/* Tab Content */}
          <div className="text-base leading-relaxed">
            {activeTab === "company" && (
              <div className="items-center justify-center h-auto text-sm md:px-10 md:mx-10 px-4 p-3 rounded-4xl mt-1 shadow-2xl mb-5 shadow-gray-600">
               <p className=""> Atlantic Fenders & Support Services (AFSS) is a certified marine
                logistics and offshore support company proudly serving the Marine Oil
                & Gas industry across West Africa. With a Document of Compliance (DOC)
                and certifications in
                <span className="font-bold text-blue-800">
                  {" "}
                  ISO 9001, ISO 14001, and ISO 45001,
                </span>{" "}
                our operations meet international standards of safety, quality, and
                environmental responsibility...
                </p> 
                <Link href="/company" className="text-blue-800 pb-4 hover:underline hover:font-semibold mt-10 block">
                  Read More...
                </Link>
              </div>
            )}
            {activeTab === "certificates" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:px-10 px-4">
                <img
                  src="/certs/cert1.png"
                  alt="Certificate 1"
                  width='200'
                  height='100'
                  className="rounded-lg shadow"
                />
                <img
                  src="/certs/cert2.png"
                  alt="Certificate 2"
                  width='200'
                  height='100'
                  className="rounded-lg shadow"
                />
                <img
                  src="/certs/cert3.jpg"
                  alt="Certificate 3"
                  width='200'
                  height='100'
                  className="rounded-lg shadow"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroThird;
