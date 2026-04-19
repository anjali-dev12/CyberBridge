"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 🔥 Load from localStorage
  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) setCartItems(JSON.parse(data));
  }, []);

  // 🔥 Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add to cart
  const addToCart = (course) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === course.id);

      if (existing) {
        return prev.map((item) =>
          item.id === course.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...course, quantity: 1 }];
    });
  };

  // ✅ Remove
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);