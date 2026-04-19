// components/TrainingSection.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const features = [
  {
    title: "YOUR PROGRESS",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/YOUR-PROGRESS.png.webp",
  },
  {
    title: "YOUR GOALS",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/YOUR-GOALS.png.webp",
  },
  {
    title: "YOUR PACE",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/YOUR-PACE.png.webp",
  },
];

const data = [
  {
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/instructor-support.webp",
    text: "Get hands-on experience with a capstone on industry-relevant use cases",
  },
  {
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/calendar.webp",
    text: "Build skills to become job-ready and advance your career",
  },
  {
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/enviroment.webp",
    text: "Live sessions on the latest AI trends, such as generative AI, prompt engineering, and more",
  },
  {
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/mock_tests.webp",
    text: "Use real-time data to discover how training reduces risk and cost",
  },
  {
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/FREE-DEMO-session.webp",
    text: "Master hands-on skills and prepare for real-world attacks",
  },
  {
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/doubt-spot.webp",
    text: "Top the exam with certification prep and practice tests",
  },
];

const faqs = [
  {
    question: "What is the meaning of one-on-one training?",
    answer:
      "One-on-one training refers to a personalized learning experience where an individual receives direct instruction and guidance from an expert or instructor.",
  },
  {
    question: "How does one-on-one training work?",
    answer:
      "A knowledgeable expert provides hands-on instruction, demonstration, and personalized feedback to help you learn effectively.",
  },
  {
    question: "What is the purpose of one-on-one training?",
    answer:
      "The goal is to help learners gain skills efficiently with a customized approach tailored to their needs.",
  },
  {
    question: "How is one-on-one training beneficial?",
    answer:
      "It offers personalized attention, faster learning, and better understanding compared to group training.",
  },
  {
    question: "What should I expect during a session?",
    answer:
      "You will interact directly with the instructor, practice skills, and receive real-time feedback.",
  },
];


export default function TrainingSection() {

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
    <section className="w-full py-12 md:py-10 lg:py-10 px-4 md:px-8 lg:px-20">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-4">
          
          <p className="max-w-sm text-gray-800 text-lg md:text-xl font-bold">
            Get ready to set on a Personalized Learning Experience Tailored Just for You
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-blue-900">
            1-ON-1 TRAINING
          </h1>

          <div>
            <button className="inline-flex items-center gap-2 text-lg bg-blue-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg">
              Book a Demo
              <span className="text-lg mt-2"><FaArrowRight size={15}/></span>
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center items-center">
          
          {/* Main Image */}
          <div className="relative z-10">
            <Image
              src="https://cybersectrainings.com/wp-content/uploads/2024/10/one-on-one-training.png.webp"
              alt="1 on 1 training illustration"
              width={420}
              height={400}
              className="object-contain"
              priority
            />
          </div>

          {/* Decorative Arrow */}
          <div className="absolute hidden lg:block top-40 -left-50 opacity-80">
            <Image
              src="https://cybersectrainings.com/wp-content/uploads/2024/03/arrow-360.svg"
              alt="decorative arrow"
              width={300}
              height={140}
              className="object-contain"
            />
          </div>

          {/* Background Glow (extra professional touch ✨) */}
          <div className="absolute w-[300px] h-[300px] bg-gray-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        </div>

      </div>
    </section>

     <section className="w-full bg-gray-100 py-6 px-4 md:px-8 lg:px-16">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center sm:items-end justify-center gap-4 sm:gap-3 flex-col sm:flex-row text-center sm:text-left"
          >
            
            {/* Icon */}
            <div className="flex-shrink-0">
              <Image
                src={item.img}
                alt={item.title}
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-lg md:text-lg font-bold text-gray-800">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
 
    <section className="w-full py-10 md:py-10 px-4 md:px-8 lg:px-16 bg-white">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Choose 1-on-1 <br /> Training
          </h2>

          <button className="bg-blue-900 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition shadow-md">
            Schedule a Demo
          </button>
        </div>

        {/* CAROUSEL */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              
              <div className="bg-gray-50 p-6 rounded-2xl h-full flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                
                <Image
                  src={item.img}
                  alt="feature"
                  width={70}
                  height={70}
                  className="mb-4 object-contain"
                />

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>

      <section className="w-full py-10 md:py-10 px-4 md:px-8 lg:px-16 bg-[#faf6f6]">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">
          FAQs
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-100 transition"
              >
                {faq.question}

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-5 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>

          ))}
        </div>

      </div>
    </section>
    </>
  );
}