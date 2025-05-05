"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, Droplet, Fuel } from "lucide-react";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: <Clock className="mx-auto text-black w-10 h-10" />,
    value: 1000000,
    suffix: "+",
    label: "MAN-HOURS",
  },
  {
    icon: <AlertTriangle className="mx-auto text-black w-10 h-10" />,
    value: 0,
    suffix: "",
    label: "CRITICAL INCIDENTS",
  },
  {
    icon: <Fuel className="mx-auto text-black w-10 h-10" />,
    value: 6971752,
    suffix: "MT",
    label: "TOTAL BARRELS TRANSFERRED",
  },
  {
    icon: <Droplet className="mx-auto text-black w-10 h-10" />,
    value: 0,
    suffix: "",
    label: "SPILLAGE INCIDENTS",
  },
];

export default function StatsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      style={{ fontFamily: "poppins" }}
      className="bg-gray-300 md:py-16 py-10 relative z-20 px-6 rounded-t-xl -mt-2 md:px-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 2, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 space-y-8 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-3">
            {stat.icon}
            <h3 className="md:text-3xl font-bold text-2xl text-blue-900">
              {inView && (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={7}
                  separator=","
                  suffix={stat.suffix || ""}
                />
              )}
            </h3>
            <p className="text-gray-800 font-serif font-semibold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
