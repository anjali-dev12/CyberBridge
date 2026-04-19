"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight ,  FaPlus, FaMinus  } from "react-icons/fa";
import {
  Rocket,
  ChevronLeft,
  ChevronRight,
  XCircle,
  CheckCircle,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import DemoModal from "../components/DemoModal";
import Link from "next/link";
import GalleryModal from "../components/GalleryModal";
import Domains from "./Domains";

const logos = [
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-55.png.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-45.png.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-40.png.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-41.png.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-42.png.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-43.png.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-44.png.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-37.png.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-38.png.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled-design-39.png.webp",
];

const stats = [
  { number: 13, suffix: "+", label: "Years in Business" },
  { number: 12, suffix: "K+", label: "Students Trained" },
  { number: 100, suffix: "+", label: "Cybersecurity Courses" },
  { number: 100, suffix: "+", label: "Certified Trainers" },
];

const features = [
  {
    title: "Identifying Training and Development Needs",
    icon: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Identifying-Training-and-Development-Needs.png.webp",
  },
  {
    title: "Bridging Skill Development Gaps",
    icon: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Bridging-Skill-Development-Gaps.png.webp",
  },
  {
    title: "Evaluating and Recommending Appropriate Training",
    icon: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Evaluating-and-Recommending-Appropriate-Training.png.webp",
  },
  {
    title: "Personalized Learning Paths with Dedicated Trainers",
    icon: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Personalized-Learning-Paths-with-Dedicated-Trainers.png.webp",
  },
];

const challenges = [
  "Lack of Training Needs Analysis (TNA)",
  "Difficulty in Understanding Study Material",
  "Time Constraints for Training",
  "Limited Technical Knowledge",
  "Need for Post-Training Support",
];

const solutions = [
  "Conducting thorough Training Needs Analysis with tailored recommendations.",
  "Structured training with customized content and expert guidance.",
  "Personalized study schedules based on corporate needs.",
  "Hands-on practical sessions to build confidence.",
  "Real-life case studies in virtual labs for better understanding.",
  "Weekly mentorship calls to resolve doubts effectively.",
];

const trainings = [
  {
    title: "Advance Penetration Testing",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Advance-Penetration-Testing.png.webp",
  },
  {
    title: "Application Security Training",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Application-Security-Training.png.webp",
  },
  {
    title: "Cloud Security Fundamentals",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Cloud-Security-Fundamentals.png.webp",
  },
  {
    title: "Cyber Security Auditing",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Cyber-Security-Auditing.png.webp",
  },
  {
    title: "Cyber Security Management Professional",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Cyber-Security-Management-Professional.png.webp",
  },
  {
    title: "Incident Response Management",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Incident-Response-Management.png.webp",
  },
  {
    title: "Internal Threat Awareness",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Internal-Threat-Awareness.png.webp",
  },
  {
    title: "Core Skill Set for GRC & Cyber Security",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Core-Skill-Set-for-GRC-Cyber-Security.png.webp",
  },
];

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

const feature = [
  {
    title: "Industry-Relevant Expertise",
    desc: "Our seasoned trainers are dedicated to providing you with the latest industry best practices, ensuring that your skills remain relevant and up-to-date.",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/07/Industry-Relevant-Expertise.png.webp",
  },
  {
    title: "Hands-On Experience",
    desc: "We firmly believe in the power of experiential learning. Learn through hands-on practical exercises and gain real-world experience.",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/07/Hands-On-Experience.png.webp",
  },
  {
    title: "Flexible Learning Solutions",
    desc: "We offer flexible learning options so you can learn anytime and anywhere in a format that suits you best.",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/07/Flexible-Learning-Solutions.png.webp",
  },
  {
    title: "Virtual Lab Environment",
    desc: "Experience real-world scenarios in our virtual lab environment and apply your knowledge practically.",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/07/Virtual-Lab-Environment.png.webp",
  },
  {
    title: "Challenges in Training Workforce",
    desc: "We focus on understanding client needs and delivering solutions that build trust and improve workforce readiness.",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/07/Challenges-in-training.png.webp",
  },
  {
    title: "Improve Workforce Efficiency",
    desc: "On-demand training helps learners absorb complex concepts at their own pace and improve efficiency.",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/07/Improve-workforce-efficiency.png.webp",
  },
];

const testimonials = [
  {
    name: "Sreejith R",
    country: "India",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled_design__12_-removebg-preview.png",
    text: "Very informative and helpful course. I gained a lot of valuable insights Very informative and helpful course. I gained a lot of valuable insights!",
  },
  {
    name: "Tejasri S",
    country: "India",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled_design__1_-removebg-preview-2.png",
    text: "Content explanation is too good and easy to understand. Great experience overall Very informative and helpful course. I gained a lot of valuable insights!Very informative and helpful course. I gained a lot of valuable insights!Very informative and helpful course. I gained a lot of valuable insights!",
  },
  {
    name: "Gopi Batta",
    country: "India",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled_design__19_-removebg-preview.png",
    text: "Good to learn new skill. Very happy to be a part of the course.Very informative and helpful course. I gained a lot of valuable insights!Very informative and helpful course. I gained a lot of valuable insights!Very informative and helpful course. I gained a lot of valuable insights!",
  },
  {
    name: "Akanksha Verma",
    country: "India",
    img: "https://cybersectrainings.com/wp-content/uploads/2024/06/Untitled_design__25_-removebg-preview.png",
    text: "Hands-on lessons and expert guidance gave me confidence to handle real projects.",
  },
];

const images = [
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-26-at-8.20.57-PM-1.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.18-PM.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.18-PM-6.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.18-PM-5.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.18-PM-7.jpeg.webp",
  "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.19.19-PM.jpeg.webp",
];

  const data = [
    {
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-3.png.webp",
      title: "Identify your goals",
    },
    {
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Free-Mentorship.png.webp",
      title: "Explore your learning style",
    },
    {
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Industry-Secrets.png.webp",
      title: "Consider your time commitment",
    },
    {
      img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Copy-of-Career-Guidance-Support.png.webp",
      title: "Research Your Options",
    },
  ];

  const faqs = [
    {
      question: "What are the different cybersecurity programs offered?",
      answer:
        "We offer a variety of programs, from beginner-friendly courses to advanced certifications. Explore our options to find the perfect fit for your goals!",
    },
    {
      question: "Do I need prior IT experience to enroll?",
      answer:
        "It depends on the program! Some require basic knowledge, while others are designed for complete beginners. Check the course descriptions for details.",
    },
    {
      question:
        "How will these programs help me get a job in cybersecurity?",
      answer:
        "Our programs equip you with in-demand skills and industry certifications, along with career guidance to help you land your dream job.",
    },
    {
      question: "What makes Cybersectraninig Institute unique?",
      answer:
        "We offer hands-on learning with real-world scenarios, taught by industry experts. Our career mentorship program connects you with professionals for personalized guidance.",
    },
  ];


export default function CorporateTraining() {

  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [open, setOpen] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          if (count < stats[i].number) {
            return count + Math.ceil(stats[i].number / 50);
          }
          return stats[i].number;
        }),
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full bg-gradient-to-br from-white via-blue-50 to-gray-100 py-20 px-4 md:px-10 overflow-hidden">
        {/* BACKGROUND BLUR SHAPES */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 opacity-30 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              <Rocket size={16} />
              Future Ready Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Your Workforce for{" "}
              <span className="text-blue-900">Tomorrow’s Challenges</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg max-w-lg">
              Equip your team with cutting-edge skills and tools to stay ahead
              in the ever-evolving digital world.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button 
               onClick={() => setOpen(true)}
               className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 font-medium transition shadow-md hover:shadow-lg hover:scale-105">
                Schedule a Free Demo
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="https://cybersectrainings.com/wp-content/uploads/2024/10/2-9.webp"
              alt="Workforce Illustration"
              width={750}
              height={750}
              className="w-full max-w-lg object-contain drop-shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="relative w-full -mt-16 md:-mt-22 max-w-6xl mx-auto py-8 px-4 md:px-10 bg-white overflow-hidden z-10 rounded-xl shadow-lg border border-gray-300">
        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2 leading-tight mb-5">
            Trusted by <span className="text-blue-900">Top Enterprises</span>{" "}
            Worldwide
          </h2>

          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={24}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 8 },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="group flex items-center justify-center bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-5 h-28 hover:-translate-y-1">
                    <Image
                      src={logo}
                      alt="company logo"
                      width={130}
                      height={60}
                      className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* CUSTOM ARROWS */}
            <button className="prev-btn absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-md hover:shadow-lg p-2 rounded-full z-10 transition">
              <ChevronLeft size={20} />
            </button>

            <button className="next-btn absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow-md hover:shadow-lg p-2 rounded-full z-10 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">
            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Explore Cutting-Edge{" "}
              <span className="text-blue-900">IT Security Training</span>{" "}
              Dimensions
            </h2>

            {/* SHORT DESC */}
            <p className="text-gray-500 text-base font-[500] md:text-lg">
              Discover essential techniques from seasoned industry professionals
              at Cybersectrainings.
            </p>

            {/* DIVIDER */}
            <div className="w-20 h-1 bg-blue-900 rounded-full"></div>

            {/* LONG DESC */}
            <p className="text-gray-600 leading-relaxed font-semibold">
              Elevate your professional profile with our tailored corporate
              training programs, designed for SMEs, start-ups, and enterprises
              seeking to bolster their IT security knowledge. Immerse yourself
              in bootcamps, webinars, and exclusive expert sessions, curated to
              equip you with the skills needed to excel in the field.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              {/* GLOW EFFECT */}
              <div className="absolute inset-0 bg-blue-100 blur-2xl opacity-40 rounded-full"></div>

              <Image
                src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/Shadow.png.webp"
                alt="Training Illustration"
                width={450}
                height={450}
                className="relative z-10 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full -mt-16 md:-mt-20 max-w-6xl mx-auto py-8 px-4 md:px-10 bg-white overflow-hidden z-10 rounded-xl shadow-lg border border-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* NUMBER */}
              <h3 className="text-3xl md:text-5xl font-bold text-blue-900">
                {counts[index]}
                {item.suffix}
              </h3>

              {/* LABEL */}
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Tailored Training Needs{" "}
            <span className="text-blue-900">Analysis (TNA)</span>
          </h2>

          <p className="text-gray-600 text-lg font-semibold mt-4 max-w-4xl mx-auto">
            Cybersectrainings’ TNA is the cornerstone of grooming employees for
            the challenges of tomorrow, ensuring skills and experiences are
            continuously upgraded.
          </p>

          {/* CARDS */}
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-lg border border-blue-900 rounded-2xl px-6 py-3 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center mb-2">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="object-contain group-hover:scale-110 transition"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-gray-800 font-semibold text-base leading-snug mb-2">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4 md:px-10 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* HEADER CENTER */}
          <div className="text-center max-w-6xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 leading-tight">
              Common Challenges for Corporate Employees
            </h2>

            <p className="text-gray-500 mt-4 text-lg font-semibold">
              Let’s understand the key challenges and how we solve them
              effectively.
            </p>
          </div>

          {/* 3 COLUMN GRID */}
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3">
            {/* LEFT - CHALLENGES */}
            <div className="transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-center bg-[#5a7ba8] rounded-xl px-2 py-2">
                COMMON CHALLENGES FOR CORPORATE EMPLOYEES
              </h4>

              <ul className="space-y-5">
                {challenges.map((item, index) => (
                  <li key={index} className="flex items-start  gap-2">
                    <XCircle
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={30}
                    />
                    <span className="text-lg  text-gray-700 ">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTER - IMAGE */}
            <div className="flex justify-center items-center">
              <div className="relative">
                {/* GLOW EFFECT */}
                <div className="absolute inset-0 bg-blue-100 blur-3xl opacity-40 rounded-full"></div>

                <Image
                  src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/3-3.png.webp"
                  alt="Corporate Challenges"
                  width={120}
                  height={120}
                  className="relative object-contain drop-shadow-xl hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* RIGHT - SOLUTIONS */}
            <div className="transition-all duration-300">
              <h4 className="text-lg font-semibold text-white bg-blue-900 mb-6 uppercase tracking-wider text-center px-2 py-2 rounded-xl">
                How Cybersectrainings Solves These Challenges
              </h4>

              <ul className="space-y-5">
                {solutions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={30}
                    />
                    <span className="text-gray-700 text-lg ">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-15 px-4 md:px-10 bg-[#faf6f6]">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">
              Our Featured Custom Training
            </h2>
          </div>

          {/* GRID */}
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trainings.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-blue-100 rounded p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition duration-300  hover:bg-[#5a7ba8]"
              >
                {/* ICON */}
                <div className="mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={55}
                    height={55}
                    className="object-contain group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center mt-14">
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

      <section className="w-full py-10 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          {/* HEADER */}
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">
            Domains We Specialize In
          </h2>

          <p className="text-lg font-semibold text-gray-600 mt-4 max-w-5xl mx-auto">
            From Cyber Security to Data Privacy, we offer top-notch corporate
            training across a range of emerging domains.
          </p>
          
         </div>
          <Domains />
      </section>

      <section className="py-16 bg-[#faf6f6]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">
              Why Cybersectrainings for Corporate Training?
            </h2>
            <p className="text-gray-600 mt-3 text-lg font-semibold">
              Equip yourself with the expertise needed to stand out in this
              thriving field.
            </p>
          </div>

          {/* Cards */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feature.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-80 group-hover:opacity-90 transition"></div>

                {/* Content */}
                <div className="relative z-10 p-6 text-white ">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="mb-4 p-1 rounded-full bg-white"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 text-center mb-10">
            Our Gladiators Speak
          </h2>

          {/* Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 4000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md p-6 text-center h-full hover:shadow-xl transition">
                  {/* Image */}
                  <div className="flex justify-center mb-4">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-full object-contain shadow-lg border-2 border-blue-100 p-1"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-semibold">{item.name}</h3>

                  {/* Country */}
                  <p className="text-gray-500 text-sm mb-3">{item.country}</p>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed max-h-28 overflow-y-auto pr-2 scrollbar-thin">
                    “{item.text}”
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-12 px-4 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-8">
            Training Gallery
          </h2>

          {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                setOpenModal(true);
              }}
              className="overflow-hidden rounded-xl cursor-pointer"
            >
              <Image
                src={img}
                alt="training gallery"
                width={500}
                height={300}
                className="w-full h-[300px] object-cover transition-opacity duration-300 hover:opacity-60"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/training-gallery"
            className="inline-flex items-center gap-2 bg-[#5a7ba8] hover:bg-gray-500 text-white px-8 py-3 text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            View All
            <FaArrowRight />
          </Link>
        </div>

        {/* Modal Call */}
        {openModal && (
          <GalleryModal
            images={images}
            selectedIndex={selectedIndex}
            onClose={() => setOpenModal(false)}
          />
        )}
      </div>
    </section>

    <section className="py-12 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Small Heading */}
        <span className="text-gray-500 text-lg font-semibold">
          Choose How You Learn
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mt-2 mb-10">
          Custom Learning Modes
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-2 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                
                <Image
                  src={item.img}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="mb-4"
                />

                <h3 className="text-lg font-medium text-gray-800">
                  {item.title}
                </h3>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

     <section className="py-16 px-4 md:px-10 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 mt-3 text-sm md:text-base">
        Everything you need to know about our programs
      </p>
    </div>

    {/* Layout */}
    <div className="grid md:grid-cols-2 gap-12 items-start">

      {/* Left Image */}
      <div className="relative group">
        <Image
          src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/03/faq_imag.jpg.webp"
          alt="faq"
          width={545}
          height={371}
          className="rounded-2xl shadow-lg transition duration-300 group-hover:scale-105"
        />
        {/* Overlay effect */}
        <div className="absolute inset-0 bg-blue-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
      </div>

      {/* FAQ Right */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-300 ${
              activeIndex === index
                ? "bg-blue-50 border-blue-300 shadow-md"
                : "bg-white border-gray-200 hover:shadow-sm"
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left px-5 py-4 font-semibold text-gray-800"
            >
              <span>{faq.question}</span>

              <span
                className={`ml-4 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180 text-blue-600" : "text-gray-500"
                }`}
              >
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`px-5 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
    </>
  );
}
