"use client";

import Slider from "react-slick";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const policies = [
  {
    title: "Environmental Policy",
    content:
      "Atlantic Fenders & Support Services (AFSS) is an environmentally sentient company and as such, we recognize the potential impacts that our operations may have on the environment...",
  },
  {
    title: "Occupational Health & Safety Policy",
    content:
      "Atlantic Fenders & Support Services (AFSS) understands that long-term business success depends on our ability to continually improve our occupational Health, Safety, and Environmental policies...",
  },
  {
    title: "Quality Management Policy",
    content:
      "Atlantic Fenders & Support Services (AFSS) identifies that quality is critical to the success of our business and we have integrated it into all working practices...",
  },
  {
    title: "Risk Assessment Policy",
    content:
      "Atlantic Fenders & Support Services (AFSS) is committed to proactively identifying, evaluating, and mitigating risks that may affect its operations, personnel, and stakeholders...",
  },
  {
    title: "Sustainability Policy",
    content:
      "Our vision at Atlantic Fenders & Support Services (AFSS) is to be the preferred world leader for sustainability innovations and marine mobility solutions...",
  },
  {
    title: "Drug & Alcohol Policy",
    content:
      "Atlantic Fenders & Support Services (AFSS) recognizes that the use of Alcohol & drugs impairs safety. This policy mitigates that risk by defining safe boundaries...",
  },
];

const PolicySlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  let sliderRef: Slider | null = null;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    fade: true,
  };

  return (
    <section
      style={{
        backgroundImage: "url(/vessel/sts.jpg)",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
      className="bg-cover bg-center relative text-white py-10 px-4 sm:px-10 md:px-20 rounded-t-3xl"
    >
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <hr className="w-10 border-red-500" />
        <h2 className="mx-3 text-green-400 text-lg sm:text-2xl font-bold">Company Policies</h2>
        <hr className="w-10 border-blue-500" />
      </div>

      {/* Slider Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Arrows for Desktop */}
        {!isMobile && (
          <button
            onClick={() => sliderRef?.slickPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white hover:bg-white/40 p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <Slider ref={(slider) => { sliderRef = slider; }} {...settings}>
          {policies.map((policy, idx) => (
            <div key={idx} className="px-15">
              <div className="bg-black/50 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-green-300 mb-3">
                  {policy.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                  {policy.content}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Right Arrow */}
        {!isMobile && (
          <button
            onClick={() => sliderRef?.slickNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white hover:bg-white/40 p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </section>
  );
};

export default PolicySlider;

