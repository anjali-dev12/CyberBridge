"use client";
import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope ,FaAngleDoubleRight} from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-400 border-t border-gray-800">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <img
            src="https://www.acmewebtechnology.com/api/wp-content/uploads/2025/05/logo.svg"
            alt="logo"
            className="w-[150px] mb-4"
          />

          <p className="leading-relaxed text-[16px] font-[500]">
            At Orbus International, we empower professionals with top-notch
            training, recruitment, and consulting solutions in cybersecurity.
          </p>

          <h3 className="text-xl text-white mt-6 mb-3 font-semibold">
            Follow Us
          </h3>

          <div className="flex gap-3">
            <FaLinkedinIn size={25} className="cursor-pointer hover:text-blue-400" />
            <FaXTwitter size={25} className="cursor-pointer hover:text-blue-400" />
            <FaFacebookF size={25} className="cursor-pointer hover:text-blue-400" />
            <FaInstagram size={25} className="cursor-pointer hover:text-blue-400" />
            <FaWhatsapp size={25} className="cursor-pointer hover:text-blue-400" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl text-white mb-4 font-semibold">
            Find Your Fit
          </h2>

 <ul className="space-y-2 text-[14] font-[600]">
    {[
      "Career-Defining Courses",
      "Most Loved Courses",
      "All Courses",
      "Case Studies",
      "Our Blogs",
    ].map((item, i) => (
      <li
        key={i}
        className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition"
      >
        <FaAngleDoubleRight size={15} className="text-blue-500 text-xs" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl text-white mb-4 font-semibold">
            Useful Links
          </h3>

          <ul className="space-y-2 text-[14] font-[600]">
            {[
              "About",
              "Get in Touch",
              "Careers",
              "Become an Instructor",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition"
      >
                <FaAngleDoubleRight className="text-blue-500 text-xs" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl text-white mb-4 font-semibold">
            Contact Info
          </h3>

          <ul className="space-y-3 text-[14] font-[600]">
            <li className="flex gap-2 items-center"><FaPhoneAlt size={15} className="text-blue-400"/> +91 8595200560</li>
            <li className="flex gap-2 items-center"><FaPhoneAlt size={15} className="text-blue-400"/> +91 9999634653</li>
            <li className="flex gap-2 items-center"><FaEnvelope size={16} className="text-blue-400"/> info@orbus.co.in</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
        <div className="bg-black border-b border-gray-800 text-gray-300 text-sm">
      
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">

        {/* Left Section */}
        <div className="flex flex-wrap items-center gap-6">
          
          <a href="tel:+918595200560" className="flex items-center gap-1 hover:text-blue-400 text-lg">
            <FaPhoneAlt size={15} className="text-blue-400"/>
            +91 8595200560 (IN)
          </a>

          <a href="tel:+919999634653" className="hover:text-blue-400 text-lg">
            +91 9999634653 (IN)
          </a>

          <a href="mailto:gary.jones@orbusit.com" className="flex items-center gap-1 hover:text-blue-400 text-lg">
            <FaEnvelope size={16} className="text-blue-400"/>
            Email Us
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          <button className="px-2 py-1 text-white rounded text-lg transition border-2 border-white">
            Drop us a Query
          </button>

          <a href="#" className="text-lg">
            Join Webinars
          </a>

          <a href="#" className="text-lg">
            Training Calendar
          </a>

        </div>

      </div>
    </div>
    </footer>
  );
};

export default Footer;