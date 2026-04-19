"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-50 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition duration-300"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
};

export default WhatsAppButton;