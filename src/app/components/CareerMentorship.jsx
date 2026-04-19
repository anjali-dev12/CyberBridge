"use client";

// components/CareerMentorship.jsx

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/1-11.png.webp",
    text: "Free Expert Guidance to Propel Your Career",
  },
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/2-10.png.webp",
    text: "Gain access to invaluable mentorship from seasoned IT industry experts who are committed to helping you reach your full potential.",
  },
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/3-4.png.webp",
    text: "Unlock a World of Learning Resources",
  },
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/4-1.png.webp",
    text: "Take advantage of our extensive library of free learning resources, curated to equip you with the knowledge and skills needed to excel in the IT world.",
  },
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/5-1.png.webp",
    text: "Discover Industry Secrets for Success",
  },
];

const LaunchCareer = [
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Free-Mentorship.png.webp",
    text: "Free Mentorship from IT Industry Experts",
  },
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Free-Learning-Resources.png.webp",
    text: "Access to Free Learning Resources",
  },
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Industry-Secrets.png.webp",
    text: "Industry Secrets to Help You Succeed",
  },
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Career-Guidance-Support.png.webp",
    text: "Career Guidance Support",
  },
];

const steps = [
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-1.png.webp",
    text: "Fill out the form with your complete details and requirements.",
  },
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-2.png.webp",
    text: "Receive personalized assistance and support from our team of experts.",
  },
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-3.png.webp",
    text: "Take the first step towards a successful career in IT with Cybersectrainings.",
  },
];

export default function CareerMentorship() {
  return (
    <>
    <section className="w-full py-10 md:py-10 px-4 md:px-8 lg:px-16 bg-gray-50">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-blue-900 rounded-2xl p-6 md:p-8 shadow-lg relative">
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500 opacity-20 blur-2xl rounded-2xl"></div>

            <Image
              src="https://cybersectrainings.com/wp-content/uploads/2024/10/1-10.png-1.webp"
              alt="career mentorship"
              width={420}
              height={500}
              className="object-contain relative z-10"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-sm flex flex-col gap-6"
        >
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Career Mentorship Program
          </h2>

          <p className="text-base md:text-lg font-medium text-gray-600 leading-relaxed max-w-lg">
            Unlock your potential with Cybersectrainings' IT Career Mentorship Program 
            and get personalized guidance to accelerate your growth.
          </p>

          {/* CTA Button */}
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white px-7 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Free Guidance Now →
            </motion.button>
          </div>

        </motion.div>

      </div>
    </section>
    
      <section className="w-full py-10 px-4 md:px-10 lg:px-20 bg-white">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Set on a Journey to Success in the IT World
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-xl md:text-xl font-semibold leading-relaxed">
            Ready to make your mark in the tech industry? <br/>
            Cybersectrainings’ IT
            Career Mentorship Program is your gateway to a thriving career in IT.
          </p>
        </motion.div>

        {/* FEATURES LIST */}
        <div className="mt-14 space-y-0">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              {/* LEFT IMAGE */}
              <div className="min-w-[90px]">
                <Image
                  src={item.img}
                  alt="feature"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <p className="max-w-4xl text-gray-700 text-lg md:text-xl leading-relaxed mt-8 font-semibold">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

     <section className="w-full py-10 px-4 md:px-10 lg:px-20 bg-white">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Launch-your-cyber-career.png.webp"
            alt="Launch Career"
            width={450}
            height={600}
            className="object-contain"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-semibold">
            Launch your cyber career with guidance! Our mentorship program connects you with industry experts to navigate your path to success.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            {LaunchCareer.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-start gap-3"
              >
                <Image
                  src={item.img}
                  alt="feature"
                  width={60}
                  height={60}
                  className="object-contain"
                />

                <p className="text-gray-700 text-sm md:text-base leading-snug font-semibold">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>

    <section className="w-full py-16 px-4 md:px-10 lg:px-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://cybersectrainings.com/wp-content/uploads/2024/06/free-call-back-.png')",
      }}
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        {/* TEXT */}
        <p className="text-white text-base md:text-lg leading-relaxed font-semibold">
          Ready to take the next step in your IT career? Sign up now for a free <br/>
          call back and kickstart your journey to success with <br/>
           Cybersectrainings.
        </p>

        {/* BUTTON */}
        <div>
          <button className="bg-blue-900 text-white px-8 py-3 text-lg rounded-lg font-semibold 
           transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
            Get a Free Call Back Now
          </button>
        </div>

      </motion.div>
    </section>

     <section className="w-full py-16 px-4 md:px-10 lg:px-20 bg-gray-50">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-blue-900 mb-10"
        >
          Register without Delay - The Process is Simple
        </motion.h2>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* ICON */}
              <div className="bg-white p-4 rounded-full shadow-md">
                <Image
                  src={step.img}
                  alt="step"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xs font-semibold">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

        <section className="w-full py-10 px-4 md:px-10 lg:px-20 bg-gray-100">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center space-y-4 bg-white p-8 md:p-12 rounded-3xl shadow-md"
      >
        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 leading-snug">
          For more clarity and assistance,
          <br className="hidden md:block" />
          Reach out to us
        </h2>

        {/* BUTTON */}
        <div>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold 
          hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
            Book a Free Demo
          </button>
        </div>

      </motion.div>
    </section>
    </>
  );
}