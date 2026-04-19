"use client";

import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-white p-6 rounded-md shadow">

         
          {/* BILLING DETAILS */}
          <h2 className="text-2xl text-blue-900 font-semibold mb-4">Billing Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <input className="p-2 border border-gray-300 font-semibold text-blue-800 rounded focus:outline-none 
             focus:ring-1 
             focus:border-blue-900"
             
             placeholder="First Name" />

            <input className="p-2 border border-gray-300 rounded  focus:outline-none 
             focus:ring-1 
             focus:border-blue-900" 
             placeholder="Last Name" />
          </div>

          <input className="w-full mt-4 p-2 border border-gray-300 rounded  focus:outline-none 
             focus:ring-1 
             focus:ring-blue-900" placeholder="Company (optional)" />

          <input className="w-full mt-4 p-2 border border-gray-300 rounded  focus:outline-none 
             focus:ring-1 
             focus:ring-blue-900" placeholder="Address" />
          
          <input className="w-full mt-4 p-2 border border-gray-300 rounded  focus:outline-none 
             focus:ring-1 
             focus:ring-blue-900" placeholder="Apartment (optional)" />

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input className="p-2 border border-gray-300 rounded  focus:outline-none 
             focus:ring-1 
             focus:ring-blue-900" placeholder="City" />
            <input className="p-2 border border-gray-300 rounded  focus:outline-none 
             focus:ring-1 
             focus:ring-blue-900" placeholder="State" />
          </div>

          <input className="w-full mt-4 p-2 border border-gray-300 rounded  focus:outline-none 
             focus:ring-1 
             focus:ring-blue-900" placeholder="ZIP Code" />

          <input className="w-full mt-4 p-2 border border-gray-300 rounded  focus:outline-none 
             focus:ring-1 
             focus:ring-blue-900" placeholder="Phone" />
          <input className="w-full mt-4 p-2 border border-gray-300 rounded  focus:outline-none 
             focus:ring-1 
             focus:ring-blue-900" placeholder="Email" />

          {/* NOTES */}
          <textarea
            className="w-full mt-4 p-2 border border-gray-300 rounded  focus:outline-none 
             focus:ring-1 
             focus:ring-blue-900" 
            placeholder="Order Notes"
          />

        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-md shadow h-fit">

          <h2 className="text-2xl text-blue-900 font-semibold mb-4">Your Order</h2>

          <div className="flex justify-between border-b border-gray-200 font-semibold pb-2">
            <span>Membership × 1</span>
            <span>₹500</span>
          </div>

          <div className="flex justify-between text-lg font-bold mt-4">
            <span>Subtotal</span>
            <span>₹500</span>
          </div>

          <div className="flex justify-between mt-2 font-bold text-lg">
            <span>Total</span>
            <span>₹500</span>
          </div>

          {/* PAYMENT */}
          <h3 className="mt-6 text-lg font-semibold">Payment Method</h3>

          <div className="mt-3 space-y-2">
            <label className="flex items-center gap-2 font-semibold">
              <input type="radio" name="payment" defaultChecked />
              PayUBiz
            </label>

            <label className="flex items-center gap-2 font-semibold">
              <input type="radio" name="payment"/>
              Razorpay
            </label>
          </div>

          {/* BUTTON */}
          <button className="w-full mt-6 bg-blue-900 text-lg text-white font-semibold py-3 rounded-xl">
            Place Order
          </button>
        
         <Link href="/cart">
          <button className="w-full mt-3 border-2 border-blue-900 text-blue-900 text-lg font-semibold py-2 rounded-xl cursor-pointer">
            Continue Shopping
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
}