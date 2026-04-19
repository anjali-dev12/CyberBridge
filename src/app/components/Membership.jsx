"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Membership() {
  const router = useRouter();

  const handleEnroll = () => {
    // future me cart ya checkout redirect kar sakte ho
    router.push("/checkout");
  };

   const benefits = [
    "Get a 5% discount on course fees for EC-Council, CompTIA, and PECB courses.",
    "Enjoy a 10% discount on fees for governance courses.",
    "Receive a free spot in our paid webinars and workshops.",
    "Earn CPE credits and a participation certificate after each workshop.",
    "Secure a premium seat in Sunday Sessions (twice a month).",
    "Receive discounted vouchers for CompTIA courses.",
    "Free one-on-one counseling session.",
    "Early access to internships & job opportunities.",
    "Extended post-training support (3 months).",
    "Recommendation/appreciation letter (subject to verification).",
    "Access free webinar recordings.",
  ];

  return (
    <>
    <div className="max-w-[1200px] mx-auto px-6 py-16 text-center">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        Join Our Exclusive Membership Program
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl text-lg font-semibold mx-auto mb-8">
        Become a member and unlock a world of premium benefits, special offers,
        and exclusive discounts! For just ₹500, you’ll gain access to a variety
        of perks designed to enhance your experience with our services and events.
      </p>

      {/* Button */}
      <button
        onClick={handleEnroll}
        className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
      >
        Enroll Now
      </button>

    </div>

     <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
          Ready to unlock exclusive benefits and special discounts?
        </h2>

        {/* Pricing Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-blue-900 text-xl text-white">
              <tr>
                <th className="p-4 text-left">Details</th>
                <th className="p-4 text-left">New User</th>
                <th className="p-4 text-left">Registered User</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-t border-gray-200 text-lg font-semibold">
                <td className="p-4 font-semibold">Membership fee</td>
                <td className="p-4">₹500</td>
                <td className="p-4 text-green-600 font-semibold">FREE</td>
              </tr>
              <tr className="border-t border-gray-200 text-lg font-semibold">
                <td className="p-4">Validity</td>
                <td className="p-4">1 Year</td>
                <td className="p-4">1 Year</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left - Benefits */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Benefits.png.webp"
                alt="Benefits"
                width={40}
                height={40}
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Benefits
              </h3>
            </div>

            <ul className="space-y-3">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600 text-sm font-semibold">
                  <span className="mt-1 w-2 h-2 bg-blue-900 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - CTA Box */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-600 text-white p-8 rounded-xl shadow-lg mt-20">

            <h3 className="text-2xl font-bold mb-4">
              Become An Exclusive Member
            </h3>

            <button
              onClick={handleEnroll}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer"
            >
              Enroll Now
            </button>

          </div>

        </div>

        {/* Refer & Earn */}
        <div className="mt-16">

          <div className="flex items-center gap-3 mb-4">
            <Image
              src="https://cybersectrainings.com/wp-content/webp-express/webp-images/uploads/2024/06/Refer-and-Earn.png.webp"
              alt="Refer"
              width={40}
              height={40}
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              Refer and Earn Program
            </h3>
          </div>

          <p className="text-lg text-gray-600 font-semibold mb-6">
            Enjoy additional benefits by inviting your friends or colleagues.
          </p>

          {/* Refer Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-blue-900 text-xl text-white">
                <tr>
                  <th className="p-4 text-left">Referrals</th>
                  <th className="p-4 text-left">Governance Courses</th>
                  <th className="p-4 text-left">Other Courses</th>
                </tr>
              </thead>

              <tbody className="bg-white text-lg font-semibold">
                <tr className="border-t border-gray-200">
                  <td className="p-4">Up to 5</td>
                  <td className="p-4">₹500 Voucher</td>
                  <td className="p-4">₹500 Voucher</td>
                </tr>

                <tr className="border-t border-gray-200 text-lg font-semibold">
                  <td className="p-4">Above 5</td>
                  <td className="p-4">
                    10 Credits / referral <br />
                    <span className="text-gray-500">(1 Credit = ₹100)</span>
                  </td>
                  <td className="p-4">
                    5 Credits / referral <br />
                    <span className="text-gray-500">(1 Credit = ₹100)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
    </>
  );
}