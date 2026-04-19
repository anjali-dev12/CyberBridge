"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Boxes, Home } from "lucide-react";

export default function ThankYouSection() {
  return (
    <section className="w-full py-20 px-4 bg-[#232323] text-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* GIF IMAGE */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://cybersectrainings.com/wp-content/uploads/2024/04/thanks.gif"
            alt="Thank You"
            width={600}
            height={220}
            className="object-contain"
          />
        </div>

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          We appreciate your trust in us 
        </h1>

        {/* DESCRIPTION */}
        <p className="text-white text-2xl font-semibold mt-4 leading-relaxed">
          Please check your inbox (and spam folder too) for a confirmation mail.
          <br />
          Our technical consultant will reach out to you at the earliest.
          <br />
          <span className="text-2xl text-white">
            (Please expect a delay on non-business days)
          </span>
        </p>

        {/* EXTRA TEXT */}
        <p className="max-w-5xl mx-auto text-gray-50 text-lg mt-6">
          Meanwhile, you can check out our latest offerings, upcoming free events and other resources.
          <br />
          events and other popular courses from <span className="text-blue-400">Cybersectrainings.com</span>.
        </p>

        {/* ACTION LINKS */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">

          {/* EVENTS */}
          <Link
            href="/events"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white shadow hover:shadow-md transition"
          >
            <CalendarDays className="text-blue-600" size={20} />
            <span className="text-gray-700 font-medium">
              Upcoming Events
            </span>
          </Link>

          {/* TRAINING CALENDAR */}
          <Link
            href="/training-calendar"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white shadow hover:shadow-md transition"
          >
            <Boxes className="text-purple-600" size={20} />
            <span className="text-gray-700 font-medium">
              Training Calendar
            </span>
          </Link>

          {/* HOME */}
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white shadow hover:shadow-md transition"
          >
            <Home className="text-green-600" size={20} />
            <span className="text-gray-700 font-medium">
              Back to Home
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}