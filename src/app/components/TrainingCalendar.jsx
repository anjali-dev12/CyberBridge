"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

 const data = {
  January: [
    {
      name: "Data Science and AI/ML for InfoSec Professionals",
      start: "05/01/2026",
      end: "08/01/2026",
      time: "19:00 / 23:00 IST",
      type: "Weekend",
      mode: "Online/Offline",
      status: "open",
    },
    {
      name: "Okta SSO Administration and Implementation",
      start: "05/01/2026",
      end: "08/01/2026",
      time: "19:00 / 23:00 IST",
      type: "Weekend",
      mode: "Online/Offline",
      status: "open",
    },
    {
      name: "CompTIA Security+",
      start: "05/01/2026",
      end: "08/01/2026",
      time: "19:00 / 23:00 IST",
      type: "Weekend",
      mode: "Online/Offline",
      status: "open",
    },
  ],
  February: [],
  March: [],
};

const partners = [
  {
    name: "Deloitte",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled-design-63.png",
  },
  {
    name: "Infosys",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled-design-62.png",
  },
  {
    name: "Tech Mahindra",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled-design-61.png",
  },
  {
    name: "Aujas Cybersecurity",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled-design-60.png",
  },
  {
    name: "Capgemini",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled-design-59.png",
  },
  {
    name: "Oracle",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled-design-58.png",
  },
  {
    name: "TCS",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled-design-57.png",
  },
  {
    name: "Cognizant",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled-design-56.png",
  },
  {
    name: "Wipro",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled-design-55.png",
  },
];

const benefits = [
  {
    title: "Learn on Your Terms",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Learn-on-Your-Terms.png",
  },
  {
    title: "Comprehensive Resources",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Comprehensive-Resources.png",
  },
  {
    title: "Expert Guidance",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Expert-Guidance.png",
  },
  {
    title: "Continuous Support",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Continuous-Support.png",
  },
  {
    title: "Hands-on Practice",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Hands-on-Practice.png",
  },
];

const testimonials = [
  {
    name: "Gopi Batta",
    country: "India",
    pic: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled_design__12_-removebg-preview.png",
    review: "Good to learn new skill. Very happy to be a part of the course.",
  },
  {
    name: "Akanksha Verma",
    country: "India",
    pic: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled_design__25_-removebg-preview.png",
    review:
      "Duck Creek Training was better than I expected! Hands-on lessons boosted my confidence.",
  },
  {
    name: "Sreejith R",
    country: "India",
    pic: "https://cybersectrainings.com/wp-content/uploads/2024/10/1615600235165-removebg-preview.png",
    review:
      "Very informative and helpful course. I gained valuable insights!",
  },
  {
    name: "Vineet Tomar",
    country: "India",
    pic: "https://cybersectrainings.com/wp-content/uploads/2024/10/WhatsApp_Image_2024-10-01_at_2.15.18_PM-removebg-preview.png",
    review:
      "Trainer explained concepts clearly and helped in labs. Great experience!",
  },
];

const learningData = [
  {
    title: "Identify your goals",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Learn-on-Your-Terms-1.webp",
  },
  {
    title: "Explore your learning style",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Explore-your-learning-style.png",
  },
  {
    title: "Consider your time commitment",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Consider-your-time-commitment.png",
  },
  {
    title: "Research Your Options",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Research-Your-Options.png",
  },
];


export default function TrainingCalendar() {

const [activeMonth, setActiveMonth] = useState("January");

  return (
    <>
    <div className="w-full">
      <Image
        src="https://cybersectrainings.com/wp-content/uploads/2024/10/Training-Calendar-2048x373-1.webp"
        alt="Training Calendar"
        width={2048}        // original image width
        height={373}        // original image height
        className="w-full h-auto" // makes it responsive
        priority={false}    // lazy loading by default, set true if you want priority loading
      />
    </div>
   
   <div className="w-full bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center text-sm text-gray-600 space-x-2">
          
          {/* Home */}
          <div>
            <Link href="/" className="text-lg text-blue-800 font-medium">
              Home
            </Link>
          </div>

          {/* Separator */}
          <span className="text-lg">/</span>

          {/* Current Page */}
          <div className="text-lg text-gray-800 font-semibold">
            Training Calendar
          </div>

        </div>
      </div>
    </div>
   
   <section className="py-10 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">
          CHECK-OUT THE UPCOMING{" "}
          <span className="text-[#5a7ba8]">BATCHES</span>
        </h2>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {Object.keys(data).map((month) => (
            <button
              key={month}
              onClick={() => setActiveMonth(month)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeMonth === month
                  ? "bg-[#5a7ba8] text-white shadow-md scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-200"
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              
              {/* Table Head */}
              <thead>
                <tr className="bg-[#5a7ba8]/90 text-white text-left">
                  <th className="p-4">Course</th>
                  <th className="p-4">Start</th>
                  <th className="p-4">End</th>
                  <th className="p-4">Time</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Mode</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {data[activeMonth].length > 0 ? (
                  data[activeMonth].map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition duration-200"
                    >
                      {/* Course */}
                      <td className="p-4 font-semibold text-[#5a7ba8]">
                        {item.name}
                      </td>

                      <td className="p-4">{item.start}</td>
                      <td className="p-4">{item.end}</td>
                      <td className="p-4">{item.time}</td>

                      {/* Type */}
                      <td className="p-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                          {item.type}
                        </span>
                      </td>

                      {/* Mode */}
                      <td className="p-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-600">
                          {item.mode}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="p-4">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                          {item.status}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="p-4">
                        <button className="px-4 py-2 text-sm rounded-lg bg-[#5a7ba8] text-white hover:bg-[#46658c] transition-all duration-300 shadow hover:shadow-md">
                          Enroll Now 
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="p-6 text-center text-gray-500">
                      No Data Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

      <section className="relative py-20 bg-gradient-to-r from-[#5a7ba8] to-[#3f5d85] overflow-hidden">
      
      {/* Background Blur Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <span className="text-blue-300 text-xl font-semibold uppercase tracking-widest">
          Our Associations
        </span>

        <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-white">
          Authorized Training Partners
        </h2>

        <p className="text-gray-300 mt-4 text-lg max-w-3xl mx-auto">
          We collaborate with top industry leaders to provide world-class training and certification programs.
        </p>

        {/* Slider */}
        <div className="mt-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={5}
            spaceBetween={25}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:bg-white/20 shadow-lg hover:shadow-blue-500/30 flex flex-col items-center">
                  
                  {/* Logo */}
                  <div className="w-24 h-16 flex items-center justify-center">
                    <Image
                      src={partner.img}
                      alt={partner.name}
                      width={100}
                      height={60}
                      className="object-contain grayscale group-hover:grayscale-0 transition duration-500"
                    />
                  </div>

                  {/* Text */}
                  <p className="mt-4 font-semibold text-white text-sm">
                    {partner.name}
                  </p>

                  <span className="text-xs text-gray-300">
                    Authorized Partner
                  </span>

                  {/* Hover Line */}
                  <div className="w-0 group-hover:w-10 h-[2px] bg-blue-400 mt-3 transition-all duration-300"></div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

  <section className="relative py-20 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
     
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <span className="text-gray-600 uppercase tracking-widest text-xl font-semibold">
          Benefits You Will Access
        </span>

        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mt-2">
          Why Cybersec Trainings?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-14">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-105 hover:bg-white/20 shadow-lg hover:shadow-blue-500/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg">
                {item.title}
              </h3>

              {/* Hover line */}
              <div className="w-0 group-hover:w-10 h-[2px] bg-blue-400 mt-3 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
   
<section className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20 overflow-hidden">

  {/* Background Blur Effects */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

  <div className="relative max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="text-[#5a7ba8] font-semibold uppercase tracking-widest text-sm">
        Our Happy Clients
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-gray-800">
        Words of Praise
      </h2>

      <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
        Hear what our learners say about their journey with us.
      </p>
    </div>

    {/* Slider Wrapper */}
    <div className="relative">

      {/* LEFT ARROW */}
      <button className="custom-prev absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition">
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button className="custom-next absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition">
        ❯
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = ".custom-prev";
          swiper.params.navigation.nextEl = ".custom-next";
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            
            <div className="group relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full">

              {/* Quote Icon */}
              <span className="absolute top-4 right-4 text-4xl text-gray-200 select-none">
                ❝
              </span>

              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src={item.pic}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="text-center mt-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h3>

                <span className="text-xs text-gray-500 mt-1">
                  {item.country}
                </span>

                <p className="text-gray-600 text-sm mt-4 leading-relaxed flex-grow">
                  "{item.review}"
                </p>
              </div>

              {/* Stars */}
              <div className="flex justify-center mt-5 text-yellow-400 text-lg">
                ★★★★★
              </div>

              {/* Bottom Accent Line */}
              <div className="h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 mt-4 transition-all duration-500 rounded-full"></div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  </div>
</section>

<section className="w-full bg-gradient-to-r from-[#5a7ba8] to-[#3f5d85] py-8">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

    {/* Heading */}
    <h3 className="text-white text-lg md:text-2xl font-semibold text-center md:text-left leading-relaxed">
      Seeking a Flexible, Tailored, Cost-Effective Learning Solution?{" "}
      <span className="font-bold">
        Look No Further than Cybersectrainings
      </span>
    </h3>

    {/* Button */}
    <button className="bg-white text-[#5a7ba8] font-semibold px-6 py-1 rounded-lg shadow-md 
      hover:bg-gray-100 hover:scale-105 transition-all duration-300 
      transform -skew-x-8">
      
      <span className="inline-block skew-x-6">
        Schedule a Demo
      </span>
      
    </button>

  </div>
</section>

<section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#5a7ba8] font-semibold uppercase tracking-widest text-sm">
            Choose How You Learn
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-gray-800">
            Choose Your Learning Path
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {learningData.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={35}
                  height={35}
                  className="object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-700">
                {item.title}
              </h3>

              {/* Bottom Hover Line */}
              <div className="w-0 group-hover:w-10 h-[2px] bg-[#5a7ba8] mt-3 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
}