"use client";

import Slider from "react-slick";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SafetyBanner from "@/components/SafetyBanner";
import Contact from "@/components/Contact";
import PopUp from "@/components/PopUp";

const images = [
  {
    src: "/stsimage/3pfconfig.png",
    caption: "Deploying 3 Primary Fender System",
  },
  {
    src: "/stsimage/4pfconfig.png",
    caption: "Deploying 4 Primary Fender System",
  },
  {
    src: "/stsimage/5pfconfig.png",
    caption: "Deploying 5 Primary Fender System",
  },
  {
    src: "/stsimage/6pfconfig.png",
    caption: "Deploying 6 Primary Fender System",
  },
];

const STSCarousel = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  let sliderRef: Slider | null = null;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    swipe: true,
    customPaging: (i: any) => (
      <div className="w-10 h-1 bg-black mx-1"></div>
    ),
    dotsClass: "slick-dots slick-thumb flex justify-center items-center absolute bottom-4 left-0 right-0",
  };

  return (
    <div>
      <SafetyBanner />
    <div className="relative h-[100vh] rounded-xl overflow-hidden md:mx-50 mt-10">
    <p className="text-center text-gray-800  text-xl font-bold md:text-2xl sm:text-lg mb-8">
              Fendering Configuration
            </p>
      {!isMobile && (
        <button
          onClick={() => sliderRef?.slickPrev()}
          className="absolute text-black z-10 left-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 hover:border-1 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <Slider ref={(slider) => { sliderRef = slider; }} {...settings}>
        {images.map((item, idx) => (
          <div key={idx} className="relative w-full h-[80vh]">
            <Image
              src={item.src}
              alt={item.caption}
              fill
              className="px-2 pb-4"
              priority
              
            />
            <div className="absolute inset-0 bg-opacity-30 flex items-end justify-center text-center">
              <p className="text-gray-700 text-sm sm:text-lg font-semibold">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {!isMobile && (
        <button
          onClick={() => sliderRef?.slickNext()}
          className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-white/70 text-black p-2 hover:border-1 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
    <Contact />
    <div className="h-auto w-full bg-white flex flex-col text-sm md:px-30 px-4 items-center my-10">
      <p className="md:text-2xl text-xl font-semibold mb-4 text-blue-900">Ship-to-Ship Operation</p>
      <h2 className="">
       Atlantic Fenders & Support Services (AFSS) offer a safe, efficient, and internationally compliant Ship-to-Ship (STS) transfer operations across key West African anchorages. Our STS services are tailored to support the transfer of crude oil, refined petroleum products, LPG, and other cargo between vessels at sea or at anchorage. Leveraging a fleet of well-equipped support vessels, OCIMF-compliant fendering systems, and experienced mooring masters, AFSS ensures that every operation is executed to the highest safety and operational standards.
      </h2>
      <h2 className="">
       We maintain strict adherence to <span className="text-blue-900 text-bold">MARPOL, IMO, and OCIMF</span> guidelines, backed by our <span className="text-blue-900 text-bold">ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018</span> certifications. Our operations are supported by a fully documented QHSE management system, ensuring risk is minimized, and cargo integrity is preserved.
      </h2>
      <p className="mt-8 md:text-xl font-medium text-green-800 mb-2 ">Our STS Capabilities Includes: 
      </p>
      <ul className="distinct list-disc px-4 text-left space-y-2 font-medium">
        <li className="">Round-the-clock STS operations across Nigeria, Togo, Ghana, and other West African locations
        </li>
        <li className="">Deployment of certified STS equipment (pneumatic fenders, cargo hoses)
        </li>
        <li className="">Marine coordination and pilotage services
        </li>
        <li className="">Tugboat assistance and mooring support
        </li>
        <li className="">Pre- and post-transfer documentation and reporting</li>
      </ul>
      <div
        onClick={() => setIsOpen(true)}
        className="mt-8 bg-blue-900 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
          Message for More Info
      </div>

       {isOpen && (
         <PopUp isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}

    </div>
    </div>
  );
};

export default STSCarousel;
