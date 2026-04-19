"use client";
import React from 'react'
import DemoModal from "../components/DemoModal";
import { useState } from "react";

const domains = [
  {
    title: "Cyber Security",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2024/06/CYBER-SECURITY.jpg",
  },
  {
    title: "Cloud Security",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2024/06/CYBER-SECURITY.jpg",
  },
  {
    title: "Data Privacy",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2024/06/CYBER-SECURITY.jpg",
  },
  {
    title: "ISO Compliance",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2024/06/CYBER-SECURITY.jpg",
  },
  {
    title: "Compliance",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2024/06/CYBER-SECURITY.jpg",
  },
  {
    title: "Risk Management",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2024/06/CYBER-SECURITY.jpg",
  },
  {
    title: "Governance",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2024/06/CYBER-SECURITY.jpg",
  },
  {
    title: "Security Testing",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2024/06/CYBER-SECURITY.jpg",
  },
];
const Domains = () => {
     const [open, setOpen] = useState(false);
  return (
          <section className="w-full py-10 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          
          {/* GRID */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-6">
            {domains.map((item, index) => (
              <div
                key={index}
                className="relative h-36 rounded overflow-hidden group cursor-pointer shadow-md"
              >
                {/* BACKGROUND IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-500"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition"></div>

                {/* TEXT */}
                <div className="relative z-10 flex items-center justify-center h-full px-2">
                  <p className="text-white font-bold text-sm md:text-xl text-center tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-12">
            <button
              onClick={() => setOpen(true)}
              className="bg-[#5a7ba8] hover:bg-gray-500 text-white px-8 py-3 text-lg font-medium shadow-md hover:shadow-lg cursor-pointer"
            >
              Get A Free Demo
            </button>
             <DemoModal isOpen={open} onClose={() => setOpen(false)} />
          </div>
        </div>
      </section>

  )
}

export default Domains