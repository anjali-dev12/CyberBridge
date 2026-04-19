"use client";
import Image from "next/image";
import { X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
   
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* 🔥 CONDITION */}
      {cartItems.length === 0 ? (

        <div className="flex flex-col items-center justify-center text-center py-20">

          {/* Icon */}
          <div className="bg-gray-100 p-6 rounded-full mb-6">
            <ShoppingCart className="w-12 h-12 text-gray-400" />
          </div>

          {/* Message */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mb-6">
            Looks like you haven’t added any courses yet.
          </p>

          {/* Button */}
          <Link href="/free-cybersecurity-training">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Return to Shop
            </button>
          </Link>

        </div>

      ) : (

         <div className="max-w-[1400px] mx-auto px-6 py-12">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* LEFT - Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative w-28 h-28 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-gray-800">{item.title}</h3>

                <p className="text-gray-500 text-lg font-[500] mt-1">₹{item.price}</p>

                <p className="text-[16px] font-[500] text-gray-400 mt-1">
                  Quantity: {item.quantity}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500 transition"
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT - Summary */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-6">Cart Totals</h2>

          <div className="flex justify-between font-bold text-lg pt-4 mb-3">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between font-bold text-lg pt-4">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          {/* Coupon */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Coupon code"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full mt-3 bg-gray-800 text-white py-2 rounded-lg hover:bg-black transition">
              Apply Coupon
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
              Continue Shopping
            </button>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
        
      )}

    </div>
    </>

  );
}
