import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="w-full">
        <Image
          src="https://cybersectrainings.com/wp-content/uploads/2024/10/customers-review-2048x383.jpg.webp"
          alt="customers-review"
          width={2048}
          height={383}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm">
          <Link href="/" className="text-blue-700 font-medium hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-700">Contact US</span>
        </div>
      </div>
     <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE - LOCATIONS */}
          <div className="space-y-8">

            {/* INDIA */}
            <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-bold mb-3 text-blue-900">INDIA</h2>
              <p className="text-gray-600 mb-3 font-semibold">
                Orbus International 303, 3rd Floor, Ansal Classique Tower
                Rajouri Garden, New Delhi-110027, INDIA
              </p>
              <p className="font-semibold">
                <span className="text-base font-bold">Contact Us: </span>{" "}
                <a href="tel:+919999634653" className="text-blue-800">
                  +91 9999 634 653
                </a>
              </p>
              <p className="font-medium">
                <span className="text-base font-bold">Contact Us: </span>{" "}
                <a href="tel:+918595200560" className="text-blue-800">
                  +91 8595200560
                </a>
              </p>
              <p className="font-medium mt-2">
                <span className="text-base font-bold">Email Us: </span>{" "}
                <a href="mailto:info@orbus.co.in" className="text-blue-800">
                  info@orbus.co.in
                </a>
              </p>
            </div>

            {/* UAE */}
            <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-bold mb-3 text-blue-900">UAE</h2>
              <p className="text-gray-600 mb-3 font-semibold">
                API Trio Office Tower, Office Suite 2701 Sheikh Zayed Road
                Dubai, UAE
              </p>
              <p className="font-medium">
                <span className="text-base font-bold">Contact Us: </span>{" "}
                <a href="tel:+919999634653" className="text-blue-800">
                  +91 9999 634 653
                </a>
              </p>
              <p className="font-medium">
                <span className="text-base font-bold">Contact Us: </span>{" "}
                <a href="tel:+918595200560" className="text-blue-800">
                  +91 8595200560
                </a>
              </p>
              <p className="font-medium mt-2">
                <span className="text-base font-bold">Email Us: </span>{" "}
                <a href="mailto:info@orbus.co.in" className="text-blue-800">
                  info@orbus.co.in
                </a>
              </p>
            </div>

            {/* USA */}
            <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-bold mb-3 text-blue-900">USA</h2>
              <p className="text-gray-600 mb-3 font-semibold">Delaware</p>
              <p className="font-medium">
                <span className="text-base font-bold">Contact Us: </span>{" "}
                <a href="tel:+918595200560" className="text-blue-800">
                  +91 8595200560
                </a>
              </p>
              <p className="font-medium">
                <span className="text-base font-bold">Contact Us: </span>{" "}
                <a href="tel:+919999634653" className="text-blue-800">
                  +91 9999 634 653
                </a>
              </p>
              <p className="font-medium mt-2">
                <span className="text-base font-bold">Email Us: </span>{" "}
                <a href="mailto:info@orbus.co.in" className="text-blue-800">
                  info@orbus.co.in
                </a>
              </p>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white shadow-xl rounded p-8 sticky top-10">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              Enquire Now
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-900 text-white py-2 px-4 text-lg rounded hover:bg-blue-800 transition font-semibold cursor-pointer"
               >
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
