"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Ethical Hacking Career Roadmap in 2026",
    date: "February 17, 2026",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2026/02/Ethical-Hacking-Career-Roadmap-in-2026-Step-by-Step-Guide-to-Become-a-Certified-Ethical-Hacker.webp",
    link: "#",
  },
  {
    id: 2,
    title: "Okta IAM Engineer Salary in India",
    date: "February 16, 2026",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2026/02/Ethical-Hacking-Career-Roadmap-in-2026-Step-by-Step-Guide-to-Become-a-Certified-Ethical-Hacker.webp",
    link: "#",
  },
  {
    id: 3,
    title: "Best Okta Training in Gurgaon",
    date: "February 12, 2026",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2026/02/Ethical-Hacking-Career-Roadmap-in-2026-Step-by-Step-Guide-to-Become-a-Certified-Ethical-Hacker.webp",
    link: "#",
  },

  {
    id: 4,
    title: "Best Okta Training in Gurgaon",
    date: "February 12, 2026",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2026/02/Ethical-Hacking-Career-Roadmap-in-2026-Step-by-Step-Guide-to-Become-a-Certified-Ethical-Hacker.webp",
    link: "#",
  },

  {
    id: 5,
    title: "Best Okta Training in Gurgaon",
    date: "February 12, 2026",
    image:
      "https://cybersectrainings.com/wp-content/uploads/2026/02/Ethical-Hacking-Career-Roadmap-in-2026-Step-by-Step-Guide-to-Become-a-Certified-Ethical-Hacker.webp",
    link: "#",
  },
];

const POSTS_PER_PAGE = 3;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const scrollToTop = () => {
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <Image
          src="https://cybersectrainings.com/wp-content/uploads/2024/10/blog-2-2048x529.jpg.webp"
          alt="Blog"
          width={2048}
          height={529}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div className="w-full bg-gray-100 py-4">
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

            {/* Blog */}
            <div className="text-lg text-gray-800 font-semibold">Blog</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800">
                Cybersectrain Blog
              </h1>
              <p className="text-gray-500 mt-2">
                Latest insights & cybersecurity updates
              </p>
            </div>

            {/* POSTS */}
            <div className="space-y-8">
              {currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-sm shadow-md hover:shadow-lg transition overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={350}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>

                    <div className="p-6 flex flex-col justify-between md:w-2/3">
                      <div>
                        <h2 className="text-2xl font-semibold text-blue-900 hover:text-blue-600">
                          <Link href={post.link}>{post.title}</Link>
                        </h2>
                        <p className="text-gray-500 text-lg font-[500] mt-1">
                          {post.date}
                        </p>
                      </div>

                      <div className="mt-4 flex justify-between">
                        <span className="text-md text-gray-400">By Admin</span>
                        <Link
                          href={post.link}
                          className="text-blue-800 text-md font-bold hover:underline"
                        >
                          Read More 
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 border rounded ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
              >
                ← Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => goToPage(num)}
                    className={`px-4 py-2 border rounded ${
                      currentPage === num
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    {num}
                  </button>
                ),
              )}

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border rounded ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
              >
                Next →
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            {/* FORM */}
            <div className="bg-white p-6 rounded-md shadow-md text-center">
              <h3 className="text-xl font-bold">Still Confused?</h3>
              <p className="text-2xl font-semibold text-gray-500 mb-4">Get On a Quick Demo now!</p>

              <form className="space-y-3">
                <input
                  className="w-full font-semibold border border-gray-300 bg-gray-50 p-2"
                  placeholder="Name"
                />
                <input
                  className="w-full font-semibold border border-gray-300 bg-gray-50 p-2"
                  placeholder="Email"
                />
                <input
                  className="w-full font-semibold border border-gray-300 bg-gray-50 p-2"
                  placeholder="Phone"
                />
                <textarea
                  className="w-full font-semibold border border-gray-300 bg-gray-50 p-2"
                  placeholder="Message"
                />

                <button className="w-full  rounded font-semibold border-2 border-blue-900 text-blue-900 bg-gray-50 py-2 cursor-pointer hover:bg-blue-900 hover:text-white transition">
                  Submit
                </button>
              </form>
            </div>

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden border">
              <Image
                src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/10/orbus-sailpoint-final-invite.png.webp"
                alt="banner"
                width={400}
                height={500}
              />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              {" "}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {" "}
                Categories{" "}
              </h3>{" "}
              <ul className="space-y-3 text-[16px] font-semibold text-blue-800">
                {" "}
                <li>
                  {" "}
                  <Link
                    href="#"
                    className="flex justify-between hover:border-blue-600 cursor-pointer transition pb-2 border-b border-gray-200"
                  >
                    {" "}
                    Certified Ethical Hacking{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link
                    href="#"
                    className="flex justify-between hover:border-blue-600 cursor-pointer transition pb-2 border-b border-gray-200"
                  >
                    {" "}
                    CyberArk{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link
                    href="#"
                    className="flex justify-between hover:border-blue-600 cursor-pointer transition pb-2 border-b border-gray-200"
                  >
                    {" "}
                    Okta{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link
                    href="#"
                    className="flex justify-between hover:border-blue-600 cursor-pointer transition pb-2 border-b border-gray-200"
                  >
                    {" "}
                    Penetration Testing{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link
                    href="#"
                    className="flex justify-between hover:border-blue-600 cursor-pointer transition pb-2 border-b border-gray-200"
                  >
                    {" "}
                    SailPoint{" "}
                  </Link>{" "}
                </li>{" "}
              </ul>{" "}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
