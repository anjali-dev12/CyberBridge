"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function CustomerReview() {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // ✅ NEW STATES (Validation)
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // ✅ remove error on typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Please fill out this field.";
    }

    if (!formData.email) {
      newErrors.email = "Please fill out this field.";
    }

    if (!formData.phone) {
      newErrors.phone = "Please fill out this field.";
    }

    setErrors(newErrors);

    // ❌ if errors exist
    if (Object.keys(newErrors).length > 0) {
      setSubmitError(
        "One or more fields have an error. Please check and try again."
      );
      return;
    }

    // ✅ success
    setSubmitError("");
    console.log(formData);
  };

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description:
        "This course completely changed my understanding of web development.",
    },
    {
      id: 2,
      name: "Priya Verma",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description: "Great learning experience and easy explanation.",
    },
    {
      id: 3,
      name: "Amit Singh",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      description: "Highly recommended for beginners.",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      description: "Well structured and easy to understand.",
    },
    {
      id: 5,
      name: "Vikas Yadav",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      description: "Hands-on projects were amazing!",
    },
    {
      id: 6,
      name: "Neha Kapoor",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      description: "Very informative and beginner friendly.",
    },
  ];

  // Pagination
  const indexOfLast = currentPage * reviewsPerPage;
  const indexOfFirst = indexOfLast - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 400, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      {/* Banner */}
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

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm">
          <Link href="/" className="text-blue-700 font-medium hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-700">
            Customer Reviews
          </span>
        </div>
      </div>

      {/* Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">
              Customer Reviews
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
              {currentReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
                >
                  <div className="flex gap-3 mb-3">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">
                    {review.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex gap-2 mt-8 flex-wrap items-center">
              <button
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
                className={`px-3 py-1 border rounded ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-orange-400 hover:text-white"
                }`}
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? "bg-orange-400 text-white"
                      : "hover:bg-orange-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                className={`px-3 py-1 border rounded ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-orange-400 hover:text-white"
                }`}
              >
                Next
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-6 rounded-xl shadow h-fit sticky top-20">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded hover:bg-orange-500">
                Submit
              </button>

              {/* Bottom Error */}
              {submitError && (
                <div className="text-red-600 text-sm bg-red-100 p-2 rounded">
                  {submitError}
                </div>
              )}

            </form>
          </div>

        </div>
      </section>
    </>
  );
}