"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const instructors = [
  {
    name: "Ajay",
    exp: "9+ Years Experience",
    desc: "SailPoint IdentityNow | Cybersecurity | CISM | CISA",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled_design__50_-removebg-preview.png.webp",
  },
  {
    name: "Kamal",
    exp: "12+ Years Experience",
    desc: "ForgeRock | Cybersecurity | CISSP | LDAP",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled_design__49_-removebg-preview.png.webp",
  },
  {
    name: "Jaydeep",
    exp: "16+ Years Experience",
    desc: "Cybersecurity | Cloud Infra | OKTA",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Untitled_design__48_-removebg-preview.png.webp",
  },
  {
    name: "Devendra",
    exp: "14+ Years Experience",
    desc: "CCISO | CCSP | SailPoint | Security",
    img: "https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/04/Untitled_design__47_-removebg-preview-1.png.webp",
  },
];

const Instructors = () => {
const [form2Data, setForm2Data] = useState({
  name: "",
  email: "",
  phone: "",
  link: "",
  about: "",
});

const [form2Errors, setForm2Errors] = useState({});
const [form2SubmitError, setForm2SubmitError] = useState("");

const handleForm2Change = (e) => {
  setForm2Data({ ...form2Data, [e.target.name]: e.target.value });

  // remove error while typing
  setForm2Errors({ ...form2Errors, [e.target.name]: "" });
};

const handleForm2Submit = (e) => {
  e.preventDefault();

  let errors = {};

  if (!form2Data.name) errors.name = "Please fill out this field.";
  if (!form2Data.email) errors.email = "Please fill out this field.";
  if (!form2Data.phone) errors.phone = "Please fill out this field.";
  if (!form2Data.link) errors.link = "Please fill out this field.";
  if (!form2Data.about) errors.about = "Please fill out this field.";

  setForm2Errors(errors);

  if (Object.keys(errors).length > 0) {
    setForm2SubmitError(
      "One or more fields have an error. Please check and try again."
    );
    return;
  }

  // success
  setForm2SubmitError("");
  console.log(form2Data);
};

  return (
    <>
      <section
        className="relative w-full py-20 md:py-28 px-4 md:px-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cybersectrainings.com/wp-content/uploads/2024/06/2-3-scaled.jpg')",
        }}
      >
        {/* DARK OVERLAY (important for readability) */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Our <span className="text-blue-400">Instructors</span>
          </h1>
        </div>
      </section>

      <section className="w-full py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADING */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Meet Our <span className="text-blue-900">Experts</span>
            </h2>
            <p className="text-gray-500 mt-4">
              Industry professionals guiding you with real-world experience
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {instructors.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                {/* TOP LINE (premium effect) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-900 rounded-t-2xl" />

                {/* IMAGE */}
                <div className="flex justify-center mb-5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-100 blur-md opacity-40 group-hover:opacity-70 transition"></div>
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={90}
                      height={90}
                      className="rounded-full object-cover relative z-10 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-blue-700 text-sm font-medium mt-1">
                    {item.exp}
                  </p>

                  <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>

                  {/* BUTTON */}
                  <Link
                    href="#"
                    className="inline-block mt-5 text-sm font-medium text-blue-900 hover:text-blue-600 transition border px-5 py-1 rounded-full cursor-pointer "
                  >
                    View Profile
                  </Link>
                </div>

                {/* HOVER BORDER EFFECT */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-200 transition pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="mt-24 bg-white border border-gray-100 rounded-3xl shadow-sm p-10 text-center max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-blue-900 mb-3">
               Become an Instructor with cybersectrainings
            </h3>
            <p className="text-gray-500 text-lg font-semibold mb-8">
              Share your expertise, teach students worldwide, and grow with us.
            </p>
            {/* FORM */}{" "}
            <form
  onSubmit={handleForm2Submit}
  className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5"
>
  {/* Name */}
  <div>
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={form2Data.name}
      onChange={handleForm2Change}
      className={`border p-3 bg-gray-100 outline-none transition w-full ${
        form2Errors.name ? "border-red-50" : "border-gray-300"
      }`}
    />
    {form2Errors.name && (
      <p className="text-red-400 text-sm font-semibold text-left mt-1">{form2Errors.name}</p>
    )}
  </div>

  {/* Email */}
  <div>
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={form2Data.email}
      onChange={handleForm2Change}
      className={`border p-3 bg-gray-100 outline-none transition w-full ${
        form2Errors.email ? "border-red-50" : "border-gray-300"
      }`}
    />
    {form2Errors.email && (
      <p className="text-red-400 text-sm font-semibold text-left mt-1">{form2Errors.email}</p>
    )}
  </div>

  {/* Phone */}
  <div>
    <input
      type="text"
      name="phone"
      placeholder="Contact Number"
      value={form2Data.phone}
      onChange={handleForm2Change}
      className={`border p-3 bg-gray-100 outline-none transition w-full ${
        form2Errors.phone ? "border-red-50" : "border-gray-300"
      }`}
    />
    {form2Errors.phone && (
      <p className="text-red-400 text-sm font-semibold text-left mt-1">{form2Errors.phone}</p>
    )}
  </div>

  {/* Link */}
  <div>
    <input
      type="text"
      name="link"
      placeholder="LinkedIn / Profile Link"
      value={form2Data.link}
      onChange={handleForm2Change}
      className={`border p-3 bg-gray-100 outline-none transition w-full ${
        form2Errors.link ? "border-red-50" : "border-gray-300"
      }`}
    />
    {form2Errors.link && (
      <p className="text-red-400 text-sm font-semibold text-left mt-1">{form2Errors.link}</p>
    )}
  </div>

  {/* About */}
  <div className="md:col-span-2">
    <textarea
      name="about"
      placeholder="Tell us about yourself"
      rows={4}
      value={form2Data.about}
      onChange={handleForm2Change}
      className={`border p-3 bg-white outline-none transition w-full ${
        form2Errors.about ? "border-red-50" : "border-gray-300"
      }`}
    />
    {form2Errors.about && (
      <p className="text-red-400 text-sm font-semibold mt-1 text-left">{form2Errors.about}</p>
    )}
  </div>

  {/* Button */}
  <div className="flex items-center justify-center md:col-span-2">
    <button
      type="submit"
      className="bg-blue-900 text-white py-3 px-5 font-medium hover:bg-blue-800 transition shadow-md hover:shadow-lg"
    >
      Submit Application
    </button>
  </div>

  {/* Bottom Error */}
  {form2SubmitError && (
    <div className="md:col-span-2 text-red-400 text-sm font-semibold bg-red-100 p-2 rounded text-center">
      {form2SubmitError}
    </div>
  )}
</form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructors;
