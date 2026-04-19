"use client";

import Image from "next/image";
import { useState } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function GalleryModal({ images, selectedIndex, onClose }) {
  const [current, setCurrent] = useState(selectedIndex);
  
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-2xl"
      >
        <FaTimes />
      </button>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 text-white text-2xl"
      >
        <FaArrowLeft />
      </button>

      {/* Image */}
      <div className="relative w-[90%] max-w-4xl h-[70vh]">
        <Image
          src={images[current]}
          alt="gallery"
          fill
          className="object-contain"
        />
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 text-white text-2xl"
      >
        <FaArrowRight />
      </button>

      {/* Image Count */}
      <div className="absolute bottom-5 text-white text-lg">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}