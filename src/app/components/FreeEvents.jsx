"use client";
import Image from "next/image";
import Link from "next/link";

const eventsData = [
  {
    id: 1,
    title: "SailPoint IdentityNow – Navigate Identity",
    video: "https://www.youtube.com/embed/sh36iQVwtD8",
    date: "October 25, 2024",
    time: "7:51 am",
  },
  {
    id: 2,
    title: "Boost Security With PingFederate",
    video: "https://www.youtube.com/embed/rTsAskdSp6Q",
    date: "September 6, 2024",
    time: "11:00 am",
  },
];

const FreeWebinars = () => {
  return (
    <>
    <section className="w-full bg-[#f5f8fc] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            FREE On-demand
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
            Webinars & Bootcamps
          </h2>

          <p className="text-gray-500 mt-4 text-2xl font-semibold">
            Exclusive access to game-changing career wisdom
          </p>

          {/* STATS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-6">
            {/* Card 1 */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-md shadow-sm w-full sm:w-auto">
              <div className="w-14 h-14 flex items-center justify-center mb-4">
                <Image
                  src="https://cybersectrainings.com/wp-content/uploads/2024/06/Comprehensive-Resources.png"
                  alt="image"
                  width={60}
                  height={60}
                  className="object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">200K+</h3>
                <p className="text-lg font-semibold text-gray-500">Satisfied Learners</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 bg-white p-4 pr-10 rounded-md shadow-sm w-full sm:w-auto">
              <div className="w-14 h-14 flex items-center justify-center mb-4">
                <Image
                  src="https://cybersectrainings.com/wp-content/uploads/2024/06/Hands-on-Practice.png"
                  alt="image"
                  width={60}
                  height={60}
                  className="object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">1K+</h3>
                <p className="text-lg font-semibold text-gray-500">Events so far</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/home.png"
              alt="Webinars"
              fill
              className="object-cover"
            />
          </div>
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
              Events
            </Link>
          </li>

          <li>|</li>

          <li>
            <Link
              href="/our-webinar"
              className="hover:text-blue-600 transition duration-200"
            >
              Archived Events
            </Link>
          </li>

        </ul>

      </div>
    </div>

        <section className="px-4 md:px-10 py-10">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {eventsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Video */}
            <div className="w-full aspect-video">
              <iframe
                src={item.video}
                title={item.title}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-[18px] md:text-[20px] font-semibold text-gray-800 mb-3">
                {item.title}
              </h2>

              {/* Meta */}
              <div className="flex gap-4 text-sm text-gray-500">
                <span>{item.date}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    </>
  );
};

export default FreeWebinars;
