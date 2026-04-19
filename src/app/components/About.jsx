"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/flix.png.webp",
    title: "Flexible Learning Options",
  },
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/record.png.webp",
    title: "Recorded Sessions",
  },
  {
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/certifiedexpert-o.png.webp",
    title: "Experienced Instructors",
  },
  
];

const values = [
  {
    title: "Flexible Learning Options",
    desc: "Empower yourself with the freedom to learn at your own pace with Cybersectrainings’ flexible learning solutions.",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/Respect.png.webp",
  },
  {
    title: "Recorded Sessions",
    desc: "Access a wealth of knowledge anytime, anywhere with our comprehensive library of Recorded Sessions.",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Accuracy.png.webp",
  },
  {
    title: "Experienced Instructors",
    desc: "Learn from industry-leading experts who are dedicated to helping you succeed in your learning journey.",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Service.png.webp",
  },
  
  
];

const achievements = [
  {
    count: "12,000+",
    label: "Students Trained",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/03/studenttrained.png",
  },
  {
    count: "100+",
    label: "Cybersecurity Courses",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/03/studenttrained.png",
  },
  {
    count: "50+",
    label: "Corporate Served",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/03/studenttrained.png",
  },
  {
    count: "100+",
    label: "Certified Trainers",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/03/studenttrained.png",
  },
];


export default function AboutSection() {
  return (
    <>
    <section
      className="w-full h-[250px] md:h-[300px] bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://cybersectrainings.com/wp-content/uploads/2024/05/1-7.png')",
      }}
    >
     </section>

     <section className="w-full py-16 px-4 md:px-10 lg:px-20 bg-white">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* HEADING */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            ABOUT{" "}
            <span className="text-blue-900 font-extrabold">
              US
            </span>
          </h1>

          {/* TEXT */}
          <p className="text-blue-800 text-base md:text-lg leading-relaxed font-semibold">
            In the evolving world of cybersecurity, knowledge and skills are our
            most powerful weapons. As cyber threats evolve daily, the world
            relies on experts like you to safeguard data, privacy, and
            infrastructure.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-semibold">
            Established in 2010 by a team of dedicated experts boasting over 13+
            years of combined industry experience, Cybersectrainings has emerged
            as a shining light in the cybersecurity education arena.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-semibold">
            At Cybersectrainings, formerly known as Orbus International, we do
            more than train cybersecurity professionals; we nurture guardians of
            the digital realm.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-[300px] md:w-[400px] lg:w-[450px]">
            <Image
              src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/08/WhatsApp-Image-2024-08-02-at-11.16.42-AM.jpeg.webp"
              alt="About Cybersec"
              width={450}
              height={500}
              className="rounded-2xl shadow-xl object-cover"
            />

            {/* Optional decorative blur */}
            <div className="absolute -z-10 top-5 left-5 w-full h-full bg-blue-200 rounded-2xl blur-2xl opacity-40"></div>
          </div>
        </motion.div>

      </div>
    </section>

    <section className="w-full py-16 px-4 md:px-10 lg:px-20 bg-gray-50">
      
        <div className="max-w-6xl mx-auto text-center mb-12">
        
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold "
        >
          WHY <span className="text-blue-900">Cybersectrainings?</span>
        </motion.h2>

        {/* OPTIONAL SUBTEXT */}
        <p className="mt-4 text-gray-600 text-lg md:text-lg font-semibold max-w-4xl mx-auto">
          Discover why thousands of learners trust us to build their cybersecurity careers with confidence.
        </p>

      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
 

        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* ICON */}
            <div className="mb-4">
              <Image
                src={item.img}
                alt={item.title}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            {/* TITLE */}
            <h3 className="max-w-[200px] text-xl md:text-xl font-semibold text-gray-800 leading-snug">
              {item.title}
            </h3>
          </motion.div>
        ))}

      </div>
    </section>

      <section className="w-full py-10 md:py-20 lg:py-24 px-4 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            OUR{" "}
            <span className="text-blue-900 font-extrabold">
              Core Values
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl border-2 border-blue-100 p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              
              {/* ICON */}
              <div className="absolute -top-6 left-6 bg-white p-2 rounded-xl shadow-md">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain bg-gray-400 rounded-full"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-8 space-y-3">
                <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
      
  <section className="w-full bg-blue-900 py-10 md:py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl px-8 md:p-12 relative overflow-hidden">
        
        {/* LEFT DECORATION */}
        <div className="absolute left-0 top-10 hidden md:block">
          <Image
            src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/Rectangle236.jpg.webp"
            alt="decoration"
            width={16}
            height={67}
            className="object-contain"
          />
        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left md:pl-10 space-y-4"
        >
          
          {/* HEADING */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            Elevate Your Team's Performance with{" "}
            <span className="text-blue-900">
              Results-Driven Skills
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm md:text-base font-semibold leading-relaxed max-w-2xl mx-auto md:mx-0">
            Transform your workforce with globally recognized IT training and
            certifications. Empower your teams with expertise in cybersecurity,
            cloud security, data privacy, and more through adaptable corporate
            learning solutions.
          </p>

          {/* BUTTON */}
          <div>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center bg-blue-900 text-lg text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Raise a Request Now 
            </Link>
          </div>

        </motion.div>
      </div>
    </section>

    <section className="w-full py-16 md:py-20 px-4 md:px-10 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            OUR{" "}
            <span className="text-blue-500 font-extrabold">
              ACHIEVEMENTS
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-full py-8 text-center shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border-dashed border-2 border-red-400"
            >

              {/* ICON (UPDATED 🔴 ROUND RED STYLE) */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-red-500 transition-all duration-300 shadow-md group-hover:shadow-lg">
                  
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="object-contain transition duration-300 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
                  />

                </div>
              </div>

              {/* COUNT */}
              <h3 className="text-2xl md:text-3xl font-bold text-red-400">
                {item.count}
              </h3>

              {/* LABEL */}
              <p className="text-gray-600 text-sm font-semibold mt-3 leading-snug">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
          
          <Link
            href="/leadership"
            className="bg-[#002c51] text-white px-8 py-3 rounded text-lg font-medium hover:bg-blue-900 transition shadow-md hover:shadow-lg"
          >
            Our Team 
          </Link>

          <Link
            href="/instructors"
            className="border border-[#002c51] text-[#002c51] px-8 py-3 rounded text-lg font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Our Instructors 
          </Link>

        </div>

      </div>
    </section>

          </>
  );
}