"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { LuCircleUser } from "react-icons/lu";
import Link from "next/link";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-gray-200 shadow-md relative z-40">
      
      {/* TOP STRIP */}
      <div className="px-4 py-3 bg-blue-900 text-center">
        <p className="text-white text-[13px] md:text-[15px] font-[600]">
          CybersecTrainings.com is the official learning portal of
          <span className="text-yellow-200 ml-2 border-b cursor-pointer">
            Orbus International
          </span>
        </p>
      </div>

      <div className="px-4 md:px-10">
        <nav className="flex justify-between items-center h-[70px]">
          
          {/* LEFT */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* LOGO */}
            <Link href="/">
              <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[60px] md:h-[80px]">
                <img
                  src="https://www.acmewebtechnology.com/api/wp-content/uploads/2025/05/logo.svg"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            <div className="relative group hidden lg:inline-block">
              <button className="flex gap-2 items-center ml-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-[14px] md:text-[16px] font-[600]">
                Explore Courses <MdKeyboardArrowDown size={20} />
              </button>
              <MegaMenu />
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-6">

            <Link href="/training-calendar">
              <span className="text-gray-700 hover:text-yellow-300 text-[16px] font-[600] cursor-pointer">
                Training Calendar
              </span>
            </Link>

            {/* FREE RESOURCES */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-yellow-300 text-[16px] font-[600]">
                Free Resources <MdKeyboardArrowDown size={22} />
              </div>

              <div className="absolute left-0 top-full w-[240px] bg-white shadow-lg rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/events">
                  <div className="px-4 py-2 hover:bg-gray-100">Free Events</div>
                </Link>
                <Link href="/free-cybersecurity-training">
                  <div className="px-4 py-2 hover:bg-gray-100">
                    Free Cybersecurity Training
                  </div>
                </Link>
                <Link href="/membership">
                  <div className="px-4 py-2 hover:bg-gray-100">Membership</div>
                </Link>
                <Link href="/blog">
                  <div className="px-4 py-2 hover:bg-gray-100">Blog</div>
                </Link>
              </div>
            </div>

            {/* SERVICES */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-yellow-300 text-[16px] font-[600]">
                Services <MdKeyboardArrowDown size={20} />
              </div>

              <div className="absolute left-0 top-full w-[240px] bg-white shadow-lg rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/corporate-training">
                  <div className="px-4 py-2 hover:bg-gray-100">
                    Corporate Training
                  </div>
                </Link>
                <Link href="/hire-a-trainer">
                  <div className="px-4 py-2 hover:bg-gray-100">
                    Hire a Trainer
                  </div>
                </Link>
                <Link href="/one-on-one-training">
                  <div className="px-4 py-2 hover:bg-gray-100">
                    1-on-1 Training
                  </div>
                </Link>
                <Link href="/career-mentorship-program">
                  <div className="px-4 py-2 hover:bg-gray-100">
                    Career Mentorship
                  </div>
                </Link>
              </div>
            </div>

            {/* ABOUT */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-yellow-300 text-[16px] font-[600]">
                About Us <MdKeyboardArrowDown size={20} />
              </div>

              <div className="absolute left-0 top-full w-[240px] bg-white shadow-lg rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/about-us">
                  <div className="px-4 py-2 hover:bg-gray-100">
                    About Cybersec Training
                  </div>
                </Link>
                <Link href="/instructors">
                  <div className="px-4 py-2 hover:bg-gray-100">
                    Our Instructors
                  </div>
                </Link>
                <Link href="/customers-review">
                  <div className="px-4 py-2 hover:bg-gray-100">
                    Testimonials
                  </div>
                </Link>
                <Link href="/contact-us">
                  <div className="px-4 py-2 hover:bg-gray-100">
                    Contact Us
                  </div>
                </Link>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <Link href="/login">
              <button className="hidden lg:flex gap-1 items-center px-3 py-1 text-[16px] text-gray-600 font-[600] hover:text-black cursor-pointer">
                <LuCircleUser size={20} /> Log In
              </button>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden text-3xl"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col p-5 lg:hidden transition-all duration-300">
          
          {/* TOP */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Menu</h2>
            <MdClose
              size={28}
              className="cursor-pointer"
              onClick={() => setMobileMenu(false)}
            />
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-4 text-[16px] font-[600]">

            <Link href="/training-calendar" onClick={() => setMobileMenu(false)}>
              Training Calendar
            </Link>

            <Link href="/events" onClick={() => setMobileMenu(false)}>
              Free Events
            </Link>

            <Link href="/free-cybersecurity-training" onClick={() => setMobileMenu(false)}>
              Free Training
            </Link>

            <Link href="/membership" onClick={() => setMobileMenu(false)}>
              Membership
            </Link>

            <Link href="/corporate-training" onClick={() => setMobileMenu(false)}>
              Corporate Training
            </Link>

            <Link href="/hire-a-trainer" onClick={() => setMobileMenu(false)}>
              Hire a Trainer
            </Link>

            <Link href="/one-on-one-training" onClick={() => setMobileMenu(false)}>
              1-on-1 Training
            </Link>

            <Link href="/career-mentorship-program" onClick={() => setMobileMenu(false)}>
              Career Mentorship
            </Link>

            <Link href="/about-us" onClick={() => setMobileMenu(false)}>
              About Us
            </Link>

            <Link href="/contact-us" onClick={() => setMobileMenu(false)}>
              Contact Us
            </Link>

            {/* LOGIN */}
            <Link href="/login" onClick={() => setMobileMenu(false)}>
              <button className="mt-4 bg-blue-500 text-white py-2 rounded">
                Login
              </button>
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;