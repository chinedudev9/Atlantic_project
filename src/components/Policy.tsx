"use client";

import Slider from "react-slick";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const policies = [
  {
    title: "ENVIRONMENTAL POLICY",
    content:
      "Atlantic Fenders & Support Services (AFSS) is an environmentally sentient company and as such, we recognize the potential impacts that our operations may have on the environment. Our activities include a range of integrated solutions aimed at providing Vessel Ping, logistics, and marine services to our customers. It is the responsibility of each AFSS personnel to perform his work in an environmentally sound manner. To ensure that this policy is compatible with the context and strategic direction of our company and comply with the requirements of ISO14001:2015, AFSS ensures the effectiveness of the Environmental Management system.",
  },
  {
    title: "OCCUPATIONAL HEALTH & SAFETY POLICY",
    content:
      "Atlantic Fenders & Support Services (AFSS) understands that long-term business success depends on our ability to continually improve our occupational Health, Safety, and Environmental policies and procedures to protect our staff, Assets, surroundings, and Reputation in carrying out Maritime services. Prominence is placed on human health, operational safety, environmental protection, enhancement of service quality, and community friendliness. This policy is applicable to all our interested parties’ customers, employees, contractors, stakeholders, regulators, and communities in which we operate.",
  },
  {
    title: "QUALITY MANAGEMENT POLICY",
    content:
      "Atlantic Fenders & Support Services (AFSS) identifies that quality is critical to the success of our business and we have integrated it into all working practices in our organization. We are committed to supplying our customers with high-quality integrated Vessel Ping solutions logistics and marine services that conform to requirements. Our aim is to meet and exceed our customers’ expectations consistently in every operational area. To achieve this, we have adopted and implemented the requirements of the ISO 9001:2015 Quality Management System (QMS), such that all staff are informed of the importance of this policy and is committed to its effectiveness. This will ensure service reliability, efficiency and continual improvement of all our processes.",
  },
  {
    title: "EQUIPMENT MAINTENANCE POLICY",
    content:
      "It is imperative that all equipment of AFSS be regularly maintained to increase its functionality and life span. All unserviceable equipment shall be tagged as thus, and necessary actions shall be put in place to ensure that such is maintained. The objective of such scheduled preventive maintenance is to reduce equipment downtime and lost time incidents resulting from a lack of maintenance culture. Routine maintenance and minor repairs shall be undertaken at the worksite while serious maintenance of completely broken equipment shall be done at the base. Toolbox meetings on proposed equipment maintenance MUST precede the maintenance work planned for each day. All maintenance work shall be carried out in accordance with AFSS’s safety maintenance procedures. The maintenance crew and staff must be briefed before each maintenance occurrence.",
  },
  {
    title: "WEATHER POLICY",
    content:
      "We understand that the sailing and voyage operations of any vessel are heavily dependent upon reasonable weather conditions, the nature of the work, and the experience of the Vessel Operator in Charge. This policy is created to foster adherence to safe weather conditions as well as ensure commitment to the procedures thereafter. At Atlantic Fenders and Support Services, safety is of utmost importance when carrying out all offshore operations and mooring services. In ensuring that all operations are conducted and completed safely, all guidelines and adherence must be created. Monitoring the weather is important for the safe implementation of our offshore operations and mooring Vessel-to-Vessel services. Mobilization of our tugs, rigging of our fenders, cranes lifting of the hoses and fenders, mechanical handling operations, supply voyages, loading, and back loading are limited by equipment performance and oblivion to forecast that deteriorations in poor weather conditions",
  },
  {
    title: "RISK ASSESSMENT POLICY",
    content:
      "Atlantic Fenders & Support Services (AFSS) is committed to proactively identifying, evaluating, and mitigating risks that may affect its operations, personnel, assets, clients, and stakeholders. This policy provides a structured approach to risk assessment and establishes a clear framework for contingency planning to ensure operational continuity and resilience. Risk assessment in Atlantic Fenders & Support Services is a continuous process the risks in the workplace should be assessed before work begins on any task for which no valid risk assessment exists. An assessment must be reviewed and dated as necessary to ensure that it reflects any significant changes in equipment or procedure.",
},
{
  title: "SUSTAINABILITY POLICY",
  content: 
  "Our vision at Atlantic Fenders & Support Services (AFSS) is to be the preferred world leader for sustainability innovations and marine mobility solutions. We are committed to achieving this by developing a fully integrated management system. We operate on the principle that sustainability thinking is a pathway to shared prosperity. We are committed to our operation's sustainable development goals and entrenched principles. For our business, we are committed and pledged to demonstrate leadership in all our dealings and offer Eco-friendly practical solutions with excellence and commitment to our clients, society and the environment."
}
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
      className="bg-cover  bg-center relative text-white pt-10 px-4 sm:px-10 md:px-20"
    >
      <div className="flex items-center justify-center mb-10">
        <hr className="w-10 border-red-500" />
        <h2 className="mx-3 text-green-500 text-2xl font-bold text-nowrap">Company Policies</h2>
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
            <div key={idx} className="w-full md:px-10">
              <div className="bg-black/50 backdrop-blur-md p-4 md:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl text-center font-semibold text-gray-400 mb-3">
                  {policy.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-200">
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

