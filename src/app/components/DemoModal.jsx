"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      
      {/* MODAL BOX */}
      <div className="bg-gray-50 w-full max-w-2xl rounded shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 bg-gray-700">
          <h2 className="text-xl font-semibold text-white">
            Get A Free Demo
          </h2>

          <button onClick={onClose} className="p-1 rounded-full bg-red-500 cursor-pointer">
            <X className="text-white hover:text-white" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6">
          <form className="space-y-4">

            {/* NAME */}
            <input
              type="text"
              placeholder="Enter your full name*"
              className="w-full border border-gray-200 px-4 py-2 shadow focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Enter your email id*"
              className="w-full border border-gray-200 px-4 py-2 shadow focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* PHONE */}
            <div className="flex gap-2">
              <select className="w-1/3 border border-gray-200 px-2 py-2 shadow focus:ring-2 focus:ring-blue-500 outline-none">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>

              <input
                type="tel"
                placeholder="Phone number"
                className="w-2/3 border border-gray-200 px-4 py-2 shadow focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* MESSAGE */}
            <textarea
              placeholder="Comment / Training Required"
              className="w-full border border-gray-200 px-4 py-2 shadow focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* BUTTON */}
            <Link href="/thankyou">
            <button
              type="submit"
              className="bg-[#5a7ba8] text-white py-2 px-5 font-semibold hover:bg-blue-800 transition cursor-pointer transform -skew-x-8"
            >
              Submit Now
            </button>
            </Link>
          </form>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between bg-blue-900 px-6 py-4 text-center">
          <p className="text-[16px] font-bold text-white mb-2">Call OR WhatsApp</p>

          <div className="flex justify-center gap-6 text-blue-700 font-semibold">
            <a href="https://api.whatsapp.com/send?phone=918595200560"
            className="text-[16px] font-bold text-white mb-2">
              WhatsApp
            </a>
            <a href="tel:+919999634653" className="text-[16px] font-bold text-white mb-2">
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}