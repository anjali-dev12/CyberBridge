"use client";
import React from 'react'
import Domains from './Domains';

export default function HireTrainer() {

   const steps = [
    {
      step: "Step 1",
      title: "Consultation",
      desc: "We'll discuss your goals, preferences, and areas you want to improve",
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Consultation-1.png.webp",
    },
    {
      step: "Step 2",
      title: "Trainer Match",
      desc: "Based on your needs, we'll match you with a qualified trainer.",
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Trainer-Match-1.png.webp",
    },
    {
      step: "Step 3",
      title: "Tailored Curriculum",
      desc: "Your trainer will create a customized plan to guide your journey.",
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Tailored-Curriculum-1.png.webp",
    },
    {
      step: "Step 4",
      title: "Training Sessions",
      desc: "Enjoy personalized training sessions, online or in person.",
      img: "https://cybersectrainings.com/wp-content/uploads/2024/05/Training.svg",
    },
    {
      step: "Step 5",
      title: "Feedback and Adjustments",
      desc: "Your trainer will provide feedback and adjust the curriculum as needed.",
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Feedback-And-Adjustments-2.png.webp",
    },
    {
      step: "Step 6",
      title: "Progress and Growth",
      desc: "Watch your skills improve as you work closely with your dedicated trainer",
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Progress-And-Growth-2.png.webp",
    },
  ];


  return (
    <>
     <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Badge */}
        <span className="inline-block text-sm text-blue-400 bg-blue-500/10 px-4 py-1 rounded-full mb-6">
          🚀 Personalized Training Platform
        </span>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Hire a Trainer Who{" "}
          <span className="text-blue-500">Actually Delivers Results</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Find your perfect trainer, get a personalized roadmap, and achieve your goals faster 
          with expert guidance tailored just for you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-blue-500/30"
            onClick={() => alert("Open Consultation Popup")}
          >
            Get Free Consultation
          </button>

          
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <span>✔ 100+ Expert Trainers</span>
          <span>✔ 1:1 Personalized Plans</span>
          <span>✔ Flexible Scheduling</span>
        </div>

      </div>
    </section>

     <section className="bg-[#002c51] py-16 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          How it Works
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto w-24 h-24 object-contain"
              />

              <span className="block text-yellow-400 text-sm font-semibold mt-4 uppercase">
                {item.step}
              </span>

              <h4 className="text-white text-xl font-medium mt-2">
                {item.title}
              </h4>

              <p className="max-w-[300px] mx-auto text-gray-300 text-lg font-medium mt-2">
                {item.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>

    <section className='bg-white pt-12'>
      <div className='max-w-6xl mx-auto text-center'>
      <h2 className='pb-4 text-3xl font-bold text-[#5a7ba8]'>Domains We Cover</h2>
      <p className='text-xl font-semibold'>Master the art of defense! Our cybersecurity training covers in-demand skills to combat hacking, protect networks, and ensure data security. Explore courses in ethical hacking, penetration testing, and incident response.</p>
      </div>

    <Domains />
    </section>
    </>
  );
}