"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsChat } from "react-icons/bs";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { courses } from "../data/course";
import { FaPhoneVolume } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const logos = [
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/comp-tia.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/microsoft-lpi.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/iapp.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/ec-council_new.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/comp-tia.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/microsoft-lpi.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/iapp.png.webp",
  ];

  const sections = [
    {
      titleSmall: "Learn from Industry Experts",
      title: "Learning through Expert-Led Cybersecurity Training",
      desc: "Get trained by industry experts with years of real-world experience. Our cybersecurity course is designed to teach you important skills.",
      btn: "Get a Callback",
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/01/WhatsApp-Image-2025-01-22-at-12.11.12-PM.jpeg.webp",
      reverse: true,
    },
    {
      titleSmall: "Gain Hands-on Experience",
      title: "Practical Projects for Real-World Experience",
      desc: "Work on real-life challenges and projects that help build practical cybersecurity skills for a successful career.",
      btn: "Book a Call Now",
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/01/WhatsApp-Image-2025-01-22-at-12.12.38-PM.jpeg.webp",
      reverse: false,
    },
    {
      titleSmall: "Career Support & Upskilling",
      title: "Preparing for the Next Step in a Cybersecurity Career",
      desc: "Get resume help, mock interviews, and job readiness training to boost your cybersecurity career.",
      btn: "Get a Free Quote",
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/01/WhatsApp-Image-2025-01-22-at-12.12.54-PM-1.jpeg.webp",
      reverse: true,
    },
  ];

  const ValuedCustomers = [
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-39.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-38.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-37.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-44.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-43.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-42.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-41.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-40.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-39.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-38.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-37.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-44.png.webp",
    "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-43.png.webp",
  ];

  const experts = [
    {
      name: "Kamal",
      image:
        "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/01/WhatsApp_Image_2025-01-22_at_3.02.47_PM-removebg-preview.png.webp",
      exp: "12+ Years of Experience",
      short: "ForgeRock OpenAM | Cybersecurity | CISSP",
      details:
        "ForgeRock OpenAM, Cybersecurity, CISSP, OpenDJ, OpenIDM, OpenIG, LDAP, Active Directory",
    },
    {
      name: "Ajay",
      image:
        "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/01/WhatsApp_Image_2025-01-22_at_3.03.09_PM-removebg-preview-1.png.webp",
      exp: "9 Years of Experience",
      short: "SailPoint IdentityNow | Cybersecurity | CISM",
      details:
        "SailPoint IdentityNow, Cybersecurity, CISM, CISA, IIQ, Oracle Identity, Okta",
    },
    {
      name: "Jaydeep",
      image:
        "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/01/WhatsApp_Image_2025-01-22_at_2.58.27_PM-removebg-preview.png.webp",
      exp: "16+ Years of Experience",
      short: "Cybersecurity | CGEIT | CRISC",
      details:
        "Cybersecurity, CGEIT, CRISC, Cloud Infra, Ping Access, Ping Directory, OKTA",
    },
    {
      name: "Devendra",
      image:
        "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/01/WhatsApp_Image_2025-01-22_at_3.03.23_PM-removebg-preview.png.webp",
      exp: "14+ Years of Experience",
      short: "SailPoint Identity IQ | CCISO",
      details:
        "SailPoint Identity IQ, CCISO, CCSP, OKTA, Security IQ, Access Management",
    },
  ];

  const testimonials = [
    {
      name: "Anshul Mittal",
      image:
        "https://cybersectrainings.com/wp-content/uploads/2024/10/WhatsApp_Image_2024-10-01_at_2.15.18_PM-removebg-preview.png",
      text: "I had the privilege of receiving training on Alibaba Cloud. The trainers were highly knowledgeable and made complex concepts easy.",
    },
    {
      name: "Eshwar Egga",
      image:
        "https://cybersectrainings.com/wp-content/uploads/2024/10/1698095879464-removebg-preview.png",
      text: "The practical sessions were highly engaging with hands-on experience. Training was very valuable.",
    },
    {
      name: "Tejasri S",
      image:
        "https://cybersectrainings.com/wp-content/uploads/2025/01/Untitled_design__1_-removebg-preview-2.png.webp",
      text: "Content explanation is very good. Just need more lab practice for better understanding.",
    },
    {
      name: "Nripendra Sharma",
      image:
        "https://cybersectrainings.com/wp-content/uploads/2025/01/Untitled_design__18_-removebg-preview-1.png.webp",
      text: "Excellent CyberArk course! I’m now confident in detecting cyber threats.",
    },
  ];

  return (
    <section className="w-full">
      <section className="w-full bg-[#020617] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left pl-5">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-5">
            Training the Next-Generation of{" "}
            <span className="text-blue-500">Cybersecurity Experts</span>{" "}
            for Successful Careers
          </h2>

          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Join our comprehensive cybersecurity training programs designed to
            equip you with real-world skills. Learn everything from security
            fundamentals to advanced threat detection.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
              Browse Programs <FiArrowRight size={18} />
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-500 text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium">
              Chat with an Expert <BsChat size={18} />
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-5xl">
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>

            <Image
              src="/home.png"
              alt="Cyber Security"
              width={600}
              height={600}
              className="relative rounded-xl object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>

      <div className="bg-black text-gray-300 py-4 px-16 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center  gap-20 justify-center">
          {/* 1️⃣ LEFT: Ratings */}
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
            <span className="text-lg text-white hidden md:block">
              Rated the best
            </span>

            {/* Google */}
            <div className="flex items-center gap-5">
              <img
                src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/google.png.webp"
                alt="google"
                className="w-7 h-7"
              />
              <span className="text-lg text-white">4.8/5</span>
            </div>

            {/* Trustpilot */}
            <div className="flex items-center gap-3">
              <img
                src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/trustpilot.png.webp"
                alt="trustpilot"
                className="w-7 h-7"
              />
              <span className="text-lg text-white">4.8/5</span>
            </div>

            {/* Glassdoor */}
            <div className="flex items-center gap-3">
              <img
                src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/glassdor.png.webp"
                alt="glassdoor"
                className="w-7 h-7"
              />
              <span className="text-lg text-white pr-10 border-r border-gray-50">
                4.8/5
              </span>
            </div>
          </div>

          {/* 2️⃣ CENTER: Stats */}
          <div className="flex items-center gap-6 justify-center">
            <AvatarGroup className="grayscale">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            {/* Learners */}
            <div className="flex items-center bg-white gap-2 px-2 py-1 rounded-full relative right-8">
              <img
                src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/learner-point.png.webp"
                alt="learners"
                className="w-4 h-4"
              />
              <span className="text-gray-600 text-sm py-1 bg-white rounded font-bold">
                70,000+ Learners
              </span>
            </div>

            {/* Courses */}
            <div className="flex items-center gap-4">
              <img
                src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/elearning.png.webp"
                alt="courses"
                className="w-5 h-5"
              />
              <span className="text-white text-lg py-1 pr-10 border-r border-gray-50">
                250+ Courses
              </span>
            </div>
          </div>

          {/* 3️⃣ RIGHT: WhatsApp */}
          <div className="flex justify-center md:justify-end">
            <a href="https://api.whatsapp.com/send/?phone=919718925775">
              <img
                src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/whatsapp.png.webp"
                alt="whatsapp"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-blue-900 mb-12">
          Trusted Training Partners Worldwide
        </h2>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          speed={2000}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 7 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img src={logo} alt="partner" className="h-15 object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-blue-900 mb-12">
            Discover the Most In-Demand Courses
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Filter Section */}
            <div className="hidden lg:block w-1/4">
              <h3 className="text-xl font-semibold mb-6">
                Discover Courses by Category
              </h3>

              <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 w-full max-w-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Categories
                </h3>

                <div className="space-y-3">
                  {[
                    "All Courses",
                    "Certification",
                    "Focused Area",
                    "IDAM and PAM",
                  ].map((item, index) => (
                    <label
                      key={index}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 border
        ${
          selectedCategory === item
            ? "bg-blue-900 text-white border-blue-900 shadow"
            : "bg-gray-50 hover:bg-gray-100 border-gray-200"
        }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="category"
                          value={item}
                          checked={selectedCategory === item}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="accent-blue-600"
                        />

                        <span className="text-sm font-medium">{item}</span>
                      </div>

                      {selectedCategory === item && (
                        <span className="text-xs bg-white text-blue-900 px-2 py-1 rounded-md font-medium">
                          Selected
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* 🔹 Courses Grid */}
            <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <a href={course.link} className="block">
                    <div className="relative w-full h-48 bg-gray-100">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </a>

                  <div className="p-5 flex flex-col">
                    <h3 className="text-base font-semibold text-gray-900 leading-snug mb-2">
                      {course.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-4">
                      Explore this course in detail
                    </p>

                    <a
                      href={course.link}
                      className="mt-auto inline-flex items-center justify-center border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}

              {filteredCourses.length === 0 && (
                <p className="col-span-full text-center text-gray-500">
                  No courses found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-gray-50">
        {/* 🔹 Top Heading */}
        <div className="text-center max-w-6xl mx-auto px-4 mb-16">
          <h3 className="text-lg font-semibold text-gray-600 uppercase mb-2">
            Cybersecurity Training Made Easy
          </h3>

          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-3 leading-tight">
            Explore What Makes Our Program Stand Out
          </h2>

          <p className="text-gray-500 text-lg">
            Train with industry professionals, solve real-world challenges, and
            follow a course built to advance your cybersecurity career.
          </p>
        </div>

        {/* 🔹 Sections */}
        <div className="space-y-10">
          {sections.map((item, index) => (
            <div
              key={index}
              className={`max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center ${
                item.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`${item.reverse ? "md:order-2" : ""}`}>
                <h3 className="text-lg font-semibold text-gray-500 uppercase mb-2">
                  {item.titleSmall}
                </h3>

                <h2 className="text-2xl md:text-4xl text-blue-900 font-bold mb-4 leading-snug">
                  {item.title}
                </h2>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                {item.btn && (
                  <button className="flex gap-2 items-center bg-gradient-to-r from-indigo-800 to-purple-900 text-white px-6 py-2 rounded-md font-[600] hover:bg-blue-500 transition duration-300 shadow-md hover:shadow-lg cursor-pointer">
                    {item.btn}
                    <FaPhoneVolume />
                  </button>
                )}
              </div>

              {/* Image */}
              <div className="relative w-full h-[250px] md:h-[350px] group overflow-hidden rounded-sm">
                <Image
                  src={item.img}
                  alt="section"
                  fill
                  className="object-cover rounded-md transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Valued Customers
          </h2>
        </div>

        {/* Gradient Fade Left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Gradient Fade Right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Swiper */}
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={3}
            loop={true}
            speed={2500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 7 },
              1280: { slidesPerView: 8 },
            }}
          >
            {ValuedCustomers.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="group flex items-center justify-center h-24 px-4">
                  {/* Card Style */}
                  <div className="w-full h-full flex items-center justify-center rounded-xl bg-white/70 backdrop-blur-sm p-2 border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
                    <Image
                      src={logo}
                      alt="client-logo"
                      width={110}
                      height={50}
                      className="object-contain  opacity-70  group-hover:opacity-100 transition duration-300"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-600">
            Professionals
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Leading Industry <span className="text-blue-900">Experts</span>
          </h2>
          <p className="text-lg text-gray-500 mt-4">
            Get guidance from industry specialists with experience at top
            cybersecurity corporations and global projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {experts.map((item, index) => (
            <div key={index} className="group perspective">
              <div className="relative h-[300px] w-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 backface-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-[15px] font-[500] text-gray-500 mt-1">
                    {item.exp}
                  </p>
                  <p className="text-xs text-gray-400 mt-2 text-center">
                    {item.short}
                  </p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-blue-900 text-white rounded-xl shadow-md flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden">
                  <h3 className="text-2xl font-semibold mb-2">
                    Training Expertise
                  </h3>
                  <p className="text-lg text-center">{item.details}</p>

                  <button className="mt-10 px-8 py-2 text-white rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-900 transition cursor-pointer border-2">
                    Click Here
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-14 text-center md:text-left">
            <h4 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 uppercase mb-1">
              Words from Our Learners
            </h4>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
              What Our Learners Are Saying{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-900">
                About Their Journey
              </span>
            </h2>

            <p className="text-gray-600 text-lg max-w-4xl font-[500]">
              Real feedback from students who transformed their careers with our
              cybersecurity programs.
            </p>
          </div>

          {/* Marquee Wrapper */}
          <div className="relative">
            {/* Gradient Overlay Left */}
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />

            {/* Gradient Overlay Right */}
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Marquee */}
            <div className="flex gap-8 animate-marquee">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[320px] bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover ring-2 ring-indigo-100"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 text-base">
                        {item.name}
                      </h4>

                      <div className="text-yellow-400 text-sm mt-1">★★★★★</div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    “{item.text}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pb-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#5a7ba8] to-[#3f5d85] rounded-2xl overflow-hidden shadow-xl">
            {/* Glow (light) */}
            <div className="absolute -top-10 -left-10 w-52 h-52 bg-purple-600 opacity-20 blur-2xl rounded-full"></div>

            {/* Content */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-2 md:pl-20 md:pt-0">
              {/* LEFT */}
              <div className="text-white max-w-lg">
                <h2 className="text-xl md:text-3xl font-bold mb-3 leading-snug">
                  Level up with our expert-led{" "}
                  <span className="text-yellow-400">
                    cybersecurity training
                  </span>
                </h2>

                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Start your journey with industry-leading courses and build
                  real-world skills to launch your career.
                </p>

                <button className="group flex items-center gap-2 bg-white text-indigo-700 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer">
                  Chat with an Expert
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-full max-w-[260px] md:max-w-[320px] relative top-15">
                <Image
                  src="https://cybersectrainings.com/wp-content/uploads/2024/10/1-9-1024x917-1.webp"
                  alt="Cyber Security Training"
                  width={320}
                  height={320}
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
