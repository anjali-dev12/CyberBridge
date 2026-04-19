"use client";
import Image from "next/image";
import { Users, ClipboardCheck, Award } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const videos = [
  {
    title:
      "SailPoint IIQ Engineer Demo Session - Overview for Learners | Enroll Today",
    url: "https://www.youtube.com/embed/h8-40jSDy8E",
    duration: "24:23",
    thumbnail: "https://img.youtube.com/vi/h8-40jSDy8E/maxresdefault.jpg",
  },
  {
    title:
      "SailPoint Professional Exam Demo Session - A Detailed Introduction to Identity Governance",
    url: "https://www.youtube.com/embed/rFJPCd0wLYU",
    duration: "45:08",
    thumbnail: "https://img.youtube.com/vi/rFJPCd0wLYU/maxresdefault.jpg",
  },
  {
    title:
      "Intro to Saviynt | Secure Identity & Access Management | Demo Session",
    url: "https://www.youtube.com/embed/BbsdLvkIzQ8",
    duration: "17:34",
    thumbnail: "https://img.youtube.com/vi/BbsdLvkIzQ8/maxresdefault.jpg",
  },
  {
    title: "CyberArk REST API Demo Session",
    url: "https://www.youtube.com/embed/AolD8Joaf3s",
    duration: "30:22",
    thumbnail: "https://img.youtube.com/vi/AolD8Joaf3s/maxresdefault.jpg",
  },
  {
    title: "BeyondTrust PAM Demo Session",
    url: "https://www.youtube.com/embed/CZlCm0r6EbQ",
    duration: "13:41",
    thumbnail: "https://img.youtube.com/vi/CZlCm0r6EbQ/maxresdefault.jpg",
  },
  {
    title: "NetIQ IDM Demo Session",
    url: "https://www.youtube.com/embed/9exc8qr9VdA",
    duration: "17:06",
    thumbnail: "https://img.youtube.com/vi/9exc8qr9VdA/maxresdefault.jpg",
  },
  {
    title: "CyberArk EPM Demo Session",
    url: "https://www.youtube.com/embed/-OaQRryZ1t8",
    duration: "33:00",
    thumbnail: "https://img.youtube.com/vi/-OaQRryZ1t8/maxresdefault.jpg",
  },
];

const courses = [
  {
    id: 1,
    title: "Ping Davinci E-Learning",
    image:
      "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/12/WhatsApp-Image-2025-12-04-at-3.23.37-PM-768x432.jpeg.webp",
    price: 25000,
    oldPrice: 40000,
    booked: "1%",
  },
  {
    id: 2,
    title: "Ping Directory E-Learning",
    image:
      "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/09/WhatsApp-Image-2025-12-05-at-11.23.33-AM-768x432.jpeg.webp",
    price: 10000,
    oldPrice: 12000,
    booked: "1%",
  },
  {
    id: 3,
    title: "One Identity Manager L3",
    image:
      "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/09/WhatsApp-Image-2025-12-05-at-11.23.33-AM-768x432.jpeg.webp",
    price: 12500,
    oldPrice: 20000,
    booked: "1%",
  },
  {
    id: 4,
    title: "Sailpoint ISC E-Learning",
    image:
      "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/09/WhatsApp-Image-2025-12-05-at-11.23.33-AM-768x432.jpeg.webp",
    price: null,
    oldPrice: null,
    booked: null,
    isFree: true,
  },
  {
    id: 5,
    title: "Venafi E-Learning",
    image:
      "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/09/WhatsApp-Image-2025-12-05-at-11.23.33-AM-768x432.jpeg.webp",
    price: 25000,
    oldPrice: 35000,
    booked: "1%",
  },
  {
    id: 6,
    title: "Tripwire E-Learning",
    image:
      "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2025/09/WhatsApp-Image-2025-12-05-at-11.23.33-AM-768x432.jpeg.webp",
    price: 18999,
    oldPrice: 25000,
    booked: "0%",
  },
];

const faqs = [
  {
    question: "What is Cyber Security Training?",
    answer:
      "Cyber Security Training helps individuals learn how to protect systems, networks, and data from cyber attacks.",
  },
  {
    question: "What is Free Cyber Security Training Online?",
    answer:
      "These are online courses available at no cost that teach cybersecurity basics and advanced concepts.",
  },
  {
    question: "Who can enroll in these free courses?",
    answer:
      "Anyone from beginners to professionals can enroll in these cybersecurity courses.",
  },
  {
    question: "Do I need prior knowledge?",
    answer:
      "No, prior knowledge is not required. Beginners can easily start learning.",
  },
  {
    question: "How can I learn cyber security for free?",
    answer:
      "You can access free courses, videos, blogs, and tutorials provided by experts.",
  },
];

export default function CybersecurityTraining() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (course) => {
    addToCart(course);
    router.push("/cart"); // 🔥 redirect
  };

  return (
    <>
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Free Demo – Corporate Training on IAM & Cybersecurity
            </h1>

            <p className="text-xl font-semibold text-gray-500 mb-8 leading-relaxed">
              Explore our free demo videos specially curated for corporate IT
              and security teams looking to upskill in Identity and Access
              Management (IAM) and Cybersecurity fundamentals.
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-6">
              {/* ITEM */}
              <div className="flex items-center gap-3 bg-white px-2 py-3 rounded-md">
                <div>
                  <Users className="text-blue-800" size={50} />
                </div>
                <p className="text-gray-700 font-medium">Satisfied Learners</p>
              </div>

              <div className="flex items-center gap-3 bg-white px-2 py-3 rounded-md">
                <div>
                  <ClipboardCheck className="text-blue-900" size={50} />
                </div>
                <p className="text-gray-700 font-medium">
                  Self Pace Assessment
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white px-2 py-3 rounded-md">
                <div>
                  <Award className="text-blue-900" size={50} />
                </div>
                <p className="text-gray-700 font-medium ">
                  Certificate of Participation
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://cybersectrainings.com/wp-content/uploads/2024/08/The-Rise-of-E-Learning_-Trends-Benefits-and-Best-Practices-1024x576.webp"
              alt="E-Learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="w-full bg-blue-900 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center md:justify-start">
          <ul className="flex flex-wrap items-center gap-6 md:gap-10 text-lg text-white font-medium">
            <li>
              <Link
                href="/events"
                className="hover:text-blue-600 transition duration-200"
              >
                Webinar
              </Link>
            </li>

            <li>|</li>

            <li>
              <Link
                href="/our-webinar"
                className="hover:text-blue-600 transition duration-200"
              >
                Archived Webinar
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 my-10 px-8">
        {/* LEFT SIDE (Tabs) */}
        <div className="lg:w-1/3 w-full bg-white shadow rounded-xl p-4 max-h-[400px] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Demos</h2>
            <span className="text-sm text-gray-500">
              {videos.length} Videos
            </span>
          </div>

          <div className="space-y-3">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex gap-3 cursor-pointer p-2 rounded-lg transition ${
                  activeIndex === index ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-24 h-16 object-cover rounded"
                />

                <div className="flex-1">
                  <h4 className="text-sm font-medium line-clamp-2">
                    {video.title}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {video.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (Video Player) */}
        <div className="lg:w-2/3 w-full">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={videos[activeIndex].url}
              title={videos[activeIndex].title}
              allowFullScreen
            ></iframe>
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            {videos[activeIndex].title}
          </h3>
        </div>
      </div>

      <div className="max-w-[1100px] w-full mx-auto px-20 py-12">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900 text-center">
          Discover the Most In-Demand Courses
        </h1>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-50 bg-gray-50 flex items-center justify-center">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-contain p-2"
                />

                {/* Badge */}
                <span
                  className={`absolute top-5 left-2 text-xs px-2 py-1 rounded 
            ${course.isFree ? "bg-green-600 text-white" : "bg-blue-800 text-white"}`}
                >
                  {course.isFree ? "Free" : "Premium"}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-yellow-400 text-sm mb-2">
                    <Rating name="read-only" value={5} readOnly size="small" />
                    <span className="text-gray-500 text-xs">(5.0)</span>
                  </div>

                  {/* Price */}
                  {!course.isFree ? (
                    <div className="flex items-center gap-2">
                      <span className="line-through text-gray-400 text-xs">
                        ₹{course.oldPrice}
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        ₹{course.price}
                      </span>
                    </div>
                  ) : (
                    <p className="text-green-600 font-medium text-sm">
                      Free Course
                    </p>
                  )}

                  {/* Booking */}
                  {course.booked && (
                    <p className="text-xs text-gray-500 mt-1">
                      {course.booked} Booked
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  onClick={() => handleAddToCart(course)}
                  className="mt-4 w-full py-2 rounded-md bg-gradient-to-r from-indigo-800 to-purple-900 cursor-pointer text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  {course.isFree ? "Start Learning" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-8 pb-20 pt-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">FAQs</h2>
        </div>

        {/* FAQ Container */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group border border-gray-200 rounded-2xl transition-all duration-300 
        ${openIndex === index ? "shadow-lg border-blue-200" : "hover:shadow-md"}`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-blue-800 transition">
                  {faq.question}
                </span>

                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 
            ${openIndex === index ? "bg-blue-900 text-white border-blue-900 rotate-180" : "border-gray-300 text-gray-500"}`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
